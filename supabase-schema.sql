create extension if not exists "pgcrypto";

create table if not exists public.pins (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('Jeepney Stop', 'Jeepney Route', 'Jeepney Terminal', 'Bus Stop', 'Bus Terminal', 'Train Station', 'Train Entrance', 'Tricycle Terminal', 'UV Express Terminal', 'Ferry Station', 'Van Terminal', 'Terminal', 'Transfer Point', 'Other')),
  name text not null check (char_length(name) between 2 and 80),
  route_name text check (route_name is null or char_length(route_name) <= 120),
  note text check (note is null or char_length(note) <= 240),
  lat double precision not null check (lat between -90 and 90),
  lng double precision not null check (lng between -180 and 180),
  created_by uuid references auth.users(id) on delete set null,
  status text not null default 'unverified' check (status in ('unverified', 'approved', 'hidden', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.pins
add column if not exists created_by uuid references auth.users(id) on delete set null;

alter table public.pins
drop constraint if exists pins_status_check;

alter table public.pins
add constraint pins_status_check
check (status in ('unverified', 'approved', 'hidden', 'rejected'));

alter table public.pins
drop constraint if exists pins_type_check;

alter table public.pins
add constraint pins_type_check
check (type in ('Jeepney Stop', 'Jeepney Route', 'Jeepney Terminal', 'Bus Stop', 'Bus Terminal', 'Train Station', 'Train Entrance', 'Tricycle Terminal', 'UV Express Terminal', 'Ferry Station', 'Van Terminal', 'Terminal', 'Transfer Point', 'Other'));

alter table public.pins enable row level security;

revoke insert, update, delete on public.pins from anon;
grant select on public.pins to anon;
grant select, insert, update, delete on public.pins to authenticated;

drop policy if exists "Anyone can read visible pins" on public.pins;
create policy "Anyone can read visible pins"
on public.pins
for select
to anon, authenticated
using (status in ('unverified', 'approved'));

drop policy if exists "Anyone can submit unverified pins" on public.pins;
drop policy if exists "Signed in users can submit unverified pins" on public.pins;
create policy "Signed in users can submit unverified pins"
on public.pins
for insert
to authenticated
with check (
  status = 'unverified'
  and created_by = auth.uid()
);

drop policy if exists "Users can update their own pins" on public.pins;
create policy "Users can update their own pins"
on public.pins
for update
to authenticated
using (
  created_by = auth.uid()
  and status = 'unverified'
)
with check (
  created_by = auth.uid()
  and status = 'unverified'
);

drop policy if exists "Admins can update any pin" on public.pins;
create policy "Admins can update any pin"
on public.pins
for update
to authenticated
using (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com')
with check (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com');

drop policy if exists "Users can delete their own pins" on public.pins;
create policy "Users can delete their own pins"
on public.pins
for delete
to authenticated
using (created_by = auth.uid());

drop policy if exists "Admins can delete any pin" on public.pins;
create policy "Admins can delete any pin"
on public.pins
for delete
to authenticated
using (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com');

create index if not exists pins_status_created_at_idx
on public.pins (status, created_at desc);

create index if not exists pins_lat_lng_idx
on public.pins (lat, lng);

create table if not exists public.pin_reports (
  id uuid primary key default gen_random_uuid(),
  pin_id uuid not null references public.pins(id) on delete cascade,
  reason text not null check (reason in ('Wrong location', 'Duplicate', 'Spam', 'Closed or moved')),
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (pin_id, created_by)
);

alter table public.pin_reports
drop constraint if exists pin_reports_reason_check;

alter table public.pin_reports
add constraint pin_reports_reason_check
check (reason in ('Wrong location', 'Wrong connection', 'Duplicate', 'Spam', 'Closed or moved'));

alter table public.pin_reports enable row level security;

grant select, insert on public.pin_reports to authenticated;
revoke select, insert, update, delete on public.pin_reports from anon;

drop policy if exists "Signed in users can read reports" on public.pin_reports;
create policy "Signed in users can read reports"
on public.pin_reports
for select
to authenticated
using (true);

drop policy if exists "Signed in users can report pins" on public.pin_reports;
create policy "Signed in users can report pins"
on public.pin_reports
for insert
to authenticated
with check (created_by = auth.uid());

create index if not exists pin_reports_pin_id_idx
on public.pin_reports (pin_id);

create or replace function public.hide_pin_after_reports()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.pins
  set status = 'hidden'
  where id = new.pin_id
    and status = 'unverified'
    and (
      select count(*)
      from public.pin_reports
      where pin_id = new.pin_id
    ) >= 3;

  return new;
end;
$$;

drop trigger if exists hide_pin_after_reports_trigger on public.pin_reports;
create trigger hide_pin_after_reports_trigger
after insert on public.pin_reports
for each row
execute function public.hide_pin_after_reports();

create table if not exists public.pin_confirmations (
  id uuid primary key default gen_random_uuid(),
  pin_id uuid not null references public.pins(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (pin_id, created_by)
);

alter table public.pin_confirmations enable row level security;

grant select on public.pin_confirmations to anon;
grant select, insert on public.pin_confirmations to authenticated;
revoke insert, update, delete on public.pin_confirmations from anon;

drop policy if exists "Anyone can read pin confirmations" on public.pin_confirmations;
create policy "Anyone can read pin confirmations"
on public.pin_confirmations
for select
to anon, authenticated
using (true);

drop policy if exists "Signed in users can confirm pins" on public.pin_confirmations;
create policy "Signed in users can confirm pins"
on public.pin_confirmations
for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1
    from public.pins
    where pins.id = pin_confirmations.pin_id
      and pins.created_by is distinct from auth.uid()
      and pins.status in ('unverified', 'approved')
  )
);

create index if not exists pin_confirmations_pin_id_idx
on public.pin_confirmations (pin_id);

create or replace function public.approve_pin_after_confirmations()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.pins
  set status = 'approved'
  where id = new.pin_id
    and status = 'unverified'
    and (
      select count(*)
      from public.pin_confirmations
      where pin_id = new.pin_id
    ) >= 3;

  return new;
end;
$$;

drop trigger if exists approve_pin_after_confirmations_trigger on public.pin_confirmations;
create trigger approve_pin_after_confirmations_trigger
after insert on public.pin_confirmations
for each row
execute function public.approve_pin_after_confirmations();

create table if not exists public.community_routes (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  type text not null check (type in ('Jeepney', 'Bus', 'Train', 'Walk Transfer', 'Tricycle', 'UV/Van', 'Ferry', 'Other')),
  from_pin_id uuid not null references public.pins(id) on delete cascade,
  to_pin_id uuid not null references public.pins(id) on delete cascade,
  path_points jsonb,
  color text not null default '#dc2626' check (char_length(color) between 4 and 16),
  created_by uuid references auth.users(id) on delete set null,
  status text not null default 'unverified' check (status in ('unverified', 'approved', 'hidden', 'rejected')),
  created_at timestamptz not null default now(),
  check (from_pin_id <> to_pin_id),
  unique (from_pin_id, to_pin_id)
);

alter table public.community_routes
add column if not exists path_points jsonb;

alter table public.community_routes
drop constraint if exists community_routes_type_check;

alter table public.community_routes
add constraint community_routes_type_check
check (type in ('Jeepney', 'Bus', 'Train', 'Walk Transfer', 'Tricycle', 'UV/Van', 'Ferry', 'Other'));

alter table public.community_routes enable row level security;

grant select on public.community_routes to anon;
grant select, insert, update, delete on public.community_routes to authenticated;
revoke insert, update, delete on public.community_routes from anon;

drop policy if exists "Anyone can read visible routes" on public.community_routes;
create policy "Anyone can read visible routes"
on public.community_routes
for select
to anon, authenticated
using (status in ('unverified', 'approved'));

drop policy if exists "Signed in users can submit unverified routes" on public.community_routes;
create policy "Signed in users can submit unverified routes"
on public.community_routes
for insert
to authenticated
with check (
  status = 'unverified'
  and created_by = auth.uid()
  and exists (
    select 1
    from public.pins
    where pins.id = community_routes.from_pin_id
      and pins.status in ('unverified', 'approved')
  )
  and exists (
    select 1
    from public.pins
    where pins.id = community_routes.to_pin_id
      and pins.status in ('unverified', 'approved')
  )
);

drop policy if exists "Users can update their own routes" on public.community_routes;
create policy "Users can update their own routes"
on public.community_routes
for update
to authenticated
using (
  created_by = auth.uid()
  and status = 'unverified'
)
with check (
  created_by = auth.uid()
  and status = 'unverified'
);

drop policy if exists "Admins can update any route" on public.community_routes;
create policy "Admins can update any route"
on public.community_routes
for update
to authenticated
using (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com')
with check (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com');

drop policy if exists "Users can delete their own routes" on public.community_routes;
create policy "Users can delete their own routes"
on public.community_routes
for delete
to authenticated
using (created_by = auth.uid());

drop policy if exists "Admins can delete any route" on public.community_routes;
create policy "Admins can delete any route"
on public.community_routes
for delete
to authenticated
using (lower(auth.jwt() ->> 'email') = 'montesclarosbrylle@gmail.com');

create index if not exists community_routes_status_created_at_idx
on public.community_routes (status, created_at desc);

create index if not exists community_routes_pin_idx
on public.community_routes (from_pin_id, to_pin_id);

create unique index if not exists community_routes_pin_pair_uidx
on public.community_routes (
  least(from_pin_id, to_pin_id),
  greatest(from_pin_id, to_pin_id)
);

create table if not exists public.route_reports (
  id uuid primary key default gen_random_uuid(),
  route_id uuid not null references public.community_routes(id) on delete cascade,
  reason text not null check (reason in ('Wrong location', 'Wrong connection', 'Duplicate', 'Spam', 'Closed or moved')),
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (route_id, created_by)
);

alter table public.route_reports enable row level security;

grant select, insert on public.route_reports to authenticated;
revoke select, insert, update, delete on public.route_reports from anon;

drop policy if exists "Signed in users can read route reports" on public.route_reports;
create policy "Signed in users can read route reports"
on public.route_reports
for select
to authenticated
using (true);

drop policy if exists "Signed in users can report routes" on public.route_reports;
create policy "Signed in users can report routes"
on public.route_reports
for insert
to authenticated
with check (created_by = auth.uid());

create index if not exists route_reports_route_id_idx
on public.route_reports (route_id);

create or replace function public.hide_route_after_reports()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.community_routes
  set status = 'hidden'
  where id = new.route_id
    and status = 'unverified'
    and (
      select count(*)
      from public.route_reports
      where route_id = new.route_id
    ) >= 3;

  return new;
end;
$$;

drop trigger if exists hide_route_after_reports_trigger on public.route_reports;
create trigger hide_route_after_reports_trigger
after insert on public.route_reports
for each row
execute function public.hide_route_after_reports();

create table if not exists public.route_confirmations (
  id uuid primary key default gen_random_uuid(),
  route_id uuid not null references public.community_routes(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (route_id, created_by)
);

alter table public.route_confirmations enable row level security;

grant select on public.route_confirmations to anon;
grant select, insert on public.route_confirmations to authenticated;
revoke insert, update, delete on public.route_confirmations from anon;

drop policy if exists "Anyone can read route confirmations" on public.route_confirmations;
create policy "Anyone can read route confirmations"
on public.route_confirmations
for select
to anon, authenticated
using (true);

drop policy if exists "Signed in users can confirm routes" on public.route_confirmations;
create policy "Signed in users can confirm routes"
on public.route_confirmations
for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1
    from public.community_routes
    where community_routes.id = route_confirmations.route_id
      and community_routes.created_by is distinct from auth.uid()
      and community_routes.status in ('unverified', 'approved')
  )
);

create index if not exists route_confirmations_route_id_idx
on public.route_confirmations (route_id);

create or replace function public.approve_route_after_confirmations()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.community_routes
  set status = 'approved'
  where id = new.route_id
    and status = 'unverified'
    and (
      select count(*)
      from public.route_confirmations
      where route_id = new.route_id
    ) >= 3;

  return new;
end;
$$;

drop trigger if exists approve_route_after_confirmations_trigger on public.route_confirmations;
create trigger approve_route_after_confirmations_trigger
after insert on public.route_confirmations
for each row
execute function public.approve_route_after_confirmations();
