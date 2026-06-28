# Lapit Transit Finder

Lapit is a lightweight transit map prototype that finds a user's location, shows nearby Philippine transit spots, and supports community-submitted pins and route connections.

For a client-facing handoff, see `CLIENT_DOCUMENTATION.md`.

## Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── supabase-config.js
├── supabase-schema.sql
├── CLIENT_DOCUMENTATION.md
├── UX_AUDIT.md
└── README.md
```

## Local Preview

Run a static server from this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/index.html
```

Geolocation works on `localhost` for local testing. In production, deploy over HTTPS.

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default static site settings.
4. Deploy.

The base app uses browser Geolocation, MapLibre, and public Esri/OpenStreetMap-attributed raster tiles. Community pins and community routes use Supabase.

## Supabase Setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor.
3. Paste and run the contents of `supabase-schema.sql`.
4. Go to Project Settings, then API.
5. Copy your Project URL and anon public key.
6. Paste them into `supabase-config.js`.

```js
window.LAPIT_SUPABASE = {
  url: "https://your-project.supabase.co",
  anonKey: "your-anon-public-key"
};
```

After that, reload the app. Community pins and routes will be saved to Supabase and visible to other visitors.

If you update `supabase-schema.sql`, run the full file again in the Supabase SQL Editor. It is written as an idempotent migration for the current prototype.

## Access Model

- Guests can view the map, nearest transit, community pins, routes, and directions.
- Signed-in users can add community pins.
- Signed-in users can create community routes between pins.
- Signed-in users can report bad community pins and routes.
- Signed-in users can confirm accurate pins and routes.
- Pins are saved with `created_by = auth.uid()` and start as `unverified`.
- Routes are saved with `created_by = auth.uid()` and start as `unverified`.
- Users can edit/delete pins and routes they created.
- Pins are automatically set to `hidden` after 3 reports while still remaining available for admin review in Supabase.
- Pins are automatically set to `approved` after 3 confirmations from other users.
- Routes follow the same report/confirmation moderation pattern.

Supabase Auth is used with email and password. In Supabase Auth URL settings, set the production Site URL and add your local/deployed URLs to the allowed redirect URLs.

## Moderation

Use the Supabase Table Editor to review `pins`, `community_routes`, and report tables.

Pin statuses:

```text
unverified - community-submitted and visible
approved   - admin-reviewed and visible
hidden     - hidden from the app, often after reports
rejected   - rejected by admin and hidden from the app
```

The app only loads pins with `unverified` or `approved` status.

Trust tables:

```text
pin_reports        - one report per signed-in user per pin
pin_confirmations  - one confirmation per signed-in user per pin
route_reports      - one report per signed-in user per route
route_confirmations - one confirmation per signed-in user per route
```

Users cannot confirm their own pins or routes.

## Regression Checklist

Before deploying, test these flows on desktop and mobile:

- Guest can open the app, dismiss onboarding, browse map pins, use filters, and open directions.
- Signed-in user can add a community pin, see it on the map, edit it, and delete it.
- Signed-in user can create a route from map dots, map labels, nearest transit cards, and community cards.
- Route creation shows Step 1, Step 2, a selected start pin, and a preview line before saving.
- Signed-in user can report and confirm another user's pin or route.
- Owner/admin controls appear only where allowed.
- Counts are clear: Community Spots are Supabase pins; map total includes community, built-in, and OpenStreetMap spots.
