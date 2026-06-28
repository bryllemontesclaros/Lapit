# Lapit Client Documentation

Last updated: May 25, 2026

## 1. Project Overview

Lapit is a web-based transit discovery app for the Philippines. It helps users quickly find nearby transit spots such as train stations, bus terminals, jeepney terminals, tricycle terminals, UV/van terminals, ferry stations, and transfer points.

The app is designed around a map-first experience. When opened, Lapit can request the user's browser location, show nearby transit options sorted by distance, and display community-submitted transit spots that other users can view.

The current version is best described as an MVP with production-ready foundations. It already includes deployment structure, Supabase database integration, authentication, Row Level Security, public map browsing, community pins, community route connections, legal pages, SEO basics, and responsive UI work.

## 2. Product Goals

Lapit is built to solve a local transit problem: many real commute points in the Philippines are not easy to find in standard map apps, especially informal or community-known transit locations.

Primary goals:

- Help users find nearby transit spots quickly.
- Support local knowledge through community-submitted pins.
- Allow logged-in users to add, edit, confirm, report, and delete their own contributed spots.
- Show different transit categories clearly on the map.
- Support future route visualization between connected transit points.
- Keep the app lightweight and usable on mobile browsers.

## 3. Target Users

Primary users:

- Daily commuters
- Students
- Office workers
- Local residents
- Travelers unfamiliar with an area
- Community contributors who know local routes

Admin or operator users:

- App owner
- Moderators
- Local transport data maintainers

## 4. Current User Experience

### Landing / Entry Flow

When the user opens Lapit, they can:

- Continue as guest
- Sign in or create an account
- View privacy, terms, data source, community guidelines, and contact pages

Guest users can browse the app but cannot add or verify community data.

### Guest Mode

Guests can:

- View the map
- View built-in transit spots
- View community spots
- View nearby transit sorted by distance
- Open directions links
- Use filters
- View legal pages

Guests cannot:

- Add pins
- Create routes
- Confirm pins
- Report pins
- Edit or delete pins

### Account Mode

Signed-in users can:

- Add community spots
- Edit their own spots
- Delete their own spots
- Confirm other users' spots
- Report incorrect community spots
- Create community route connections
- Confirm or report community routes

Admin users can:

- Manage any pin or route from the app where supported
- Review and moderate records in Supabase

Current admin email:

```text
montesclarosbrylle@gmail.com
```

## 5. Core Features

### Map

The app uses MapLibre in the browser and displays raster map tiles with OpenStreetMap-attributed map data through Esri tiles.

Current map features:

- Fullscreen map surface
- User location marker
- Built-in transit markers
- Community pin markers
- Category-colored markers
- Labels for visible transit spots
- Legend for transit categories
- "My location" button
- Add pin button
- Create route button
- Responsive desktop and mobile layouts

### Nearby Transit List

The app calculates distance from the user's current location and sorts all available transit spots by nearest first.

Sources included in the list:

- Built-in Lapit starter data
- Community pins from Supabase
- Nearby OpenStreetMap transit data loaded in the current map view

The first three items are always the closest based on straight-line distance.

### Built-In Transit Data

The app includes a starter dataset of Philippine transit spots. This includes Metro Manila train stations, major bus terminals, ferry stations, and selected major transport terminals across Luzon, Visayas, and Mindanao.

Important note: the built-in data is a starter dataset, not a complete official national transport database.

### OpenStreetMap Nearby Discovery

At sufficient zoom levels, the app can query nearby OpenStreetMap transit objects through Overpass API.

Examples of supported OpenStreetMap-derived objects:

- Train stations
- Public transport stations
- Bus stops
- Bus stations
- Ferry terminals
- Jeepney-related named locations
- Tricycle/TODA-related named locations
- UV/van terminal-related named locations

This helps supplement the built-in and community data.

### Community Pins

Logged-in users can add public community spots to the map.

Supported pin types:

- Train Station
- Train Entrance
- Bus Stop
- Bus Terminal
- Jeepney Stop
- Jeepney Terminal
- Jeepney Route
- Tricycle Terminal
- UV Express Terminal
- Van Terminal
- Ferry Station
- Terminal
- Transfer Point
- Other

Community pins include:

- Type
- Name
- Optional route name
- Optional note
- Latitude and longitude
- Created by user ID
- Status
- Created date

### Community Pin Confirmation

Signed-in users can confirm pins added by other users. This helps identify useful or accurate locations.

Rules:

- Users cannot confirm their own pins.
- Each user can confirm a pin only once.
- A pin can automatically become approved after enough confirmations.

Current threshold:

```text
3 confirmations = approved
```

### Community Pin Reporting

Signed-in users can report incorrect or problematic pins.

Supported report reasons:

- Wrong location
- Wrong connection
- Duplicate
- Spam
- Closed or moved

Rules:

- Each user can report a pin only once.
- A pin can automatically become hidden after enough reports.

Current threshold:

```text
3 reports = hidden
```

### Community Routes

The app supports connecting two transit spots together as a community route.

Route types:

- Jeepney
- Bus
- Train
- Walk Transfer
- Tricycle
- UV/Van
- Ferry
- Other

Current route capabilities:

- Select start point
- Select destination point
- Preview connection
- Save route
- Add path points to better trace a real path
- Confirm route
- Report route
- Edit/delete routes when allowed

Important product note: route visualization is still an active UX area and should be improved before a larger public release.

### Directions

The app currently opens Google Maps directions links for navigation.

Reason:

- The in-app map displays transit points but does not currently calculate turn-by-turn routing.
- Full routing requires a routing service or backend integration.

Future options:

- OSRM
- OpenRouteService
- GraphHopper
- Valhalla
- A custom routing backend

## 6. Technology Stack

### Frontend

- HTML
- CSS
- Vanilla JavaScript
- MapLibre GL JS

### Map Data / Tiles

- MapLibre for map rendering
- Esri raster tiles
- OpenStreetMap-attributed map data
- Overpass API for nearby OpenStreetMap transit discovery

### Backend / Database

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Row Level Security

### Hosting

- GitHub repository
- Vercel static deployment

### Browser APIs

- Browser Geolocation API
- LocalStorage for guest mode preference

## 7. File Structure

```text
Lapit/
├── index.html
├── styles.css
├── app.js
├── maplibre-adapter.js
├── supabase-config.js
├── supabase-schema.sql
├── clear-community-routes.sql
├── README.md
├── CLIENT_DOCUMENTATION.md
├── UX_AUDIT.md
├── privacy.html
├── terms.html
├── community-guidelines.html
├── data-sources.html
├── contact.html
├── legal.css
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.svg
└── og-image.svg
```

## 8. Key Files Explained

### `index.html`

Main HTML file for the app. Contains:

- SEO metadata
- Social sharing metadata
- Map container
- Landing overlay
- Account menu
- Add pin dialog
- Route dialog
- Auth dialog
- Report dialog
- Legal dialog content
- Script and stylesheet references

### `styles.css`

Main app styling. Contains:

- Map layout
- Desktop layout
- Mobile bottom sheet layout
- Buttons
- Cards
- Dialogs
- Pins and labels
- Route visualization styling
- Responsive breakpoints

### `app.js`

Main app logic. Handles:

- Built-in transit data
- Geolocation
- Distance calculation
- Map markers
- Community pins
- Community routes
- Supabase reads/writes
- Auth state
- Guest mode
- Reports
- Confirmations
- Filters
- Route selection flow
- OpenStreetMap nearby transit loading

### `maplibre-adapter.js`

Compatibility layer that makes MapLibre work with Leaflet-like app logic.

It adapts:

- Map creation
- Markers
- Popups
- Polyline layers
- Bounds fitting
- Controls

### `supabase-config.js`

Stores the Supabase project URL and public publishable key.

Important:

- The publishable key can be used in the browser.
- Secret service role keys must never be placed here.

### `supabase-schema.sql`

Database schema and security rules for:

- Pins
- Pin reports
- Pin confirmations
- Community routes
- Route reports
- Route confirmations
- Row Level Security policies
- Auto-hide after reports
- Auto-approve after confirmations

### Legal Pages

The app includes:

- `privacy.html`
- `terms.html`
- `community-guidelines.html`
- `data-sources.html`
- `contact.html`

These are useful for client review, search engines, and production readiness.

## 9. Database Tables

### `pins`

Stores community-submitted transit spots.

Important columns:

- `id`
- `type`
- `name`
- `route_name`
- `note`
- `lat`
- `lng`
- `created_by`
- `status`
- `created_at`

### `pin_reports`

Stores reports for bad or inaccurate pins.

### `pin_confirmations`

Stores confirmations for accurate pins.

### `community_routes`

Stores route connections between two pins.

Important columns:

- `id`
- `name`
- `type`
- `from_pin_id`
- `to_pin_id`
- `path_points`
- `color`
- `created_by`
- `status`
- `created_at`

### `route_reports`

Stores reports for bad or inaccurate route connections.

### `route_confirmations`

Stores confirmations for accurate route connections.

## 10. Data Statuses

Pins and routes use these statuses:

```text
unverified - visible, community-submitted, not yet fully trusted
approved   - visible, confirmed or reviewed
hidden     - not visible in the app
rejected   - not visible in the app
```

The app currently loads:

```text
unverified
approved
```

The app does not load:

```text
hidden
rejected
```

## 11. Security Model

The app uses Supabase Row Level Security.

Current access rules:

- Anonymous users can read visible pins and visible routes.
- Anonymous users cannot create, update, or delete pins/routes.
- Authenticated users can create unverified pins/routes.
- Authenticated users can update/delete their own pins/routes.
- Admin can update/delete any pin/route.
- Authenticated users can report pins/routes.
- Authenticated users can confirm pins/routes that they did not create.

Admin is currently determined by email:

```text
montesclarosbrylle@gmail.com
```

## 12. Deployment

### GitHub

The project should be stored in a GitHub repository.

Recommended deployment flow:

1. Commit changes locally.
2. Push to GitHub.
3. Vercel detects the push.
4. Vercel deploys the static site.

### Vercel

The app is static and does not require a build step.

Recommended Vercel settings:

- Framework preset: Other
- Build command: none
- Output directory: project root

Production URL currently used:

```text
https://lapit-jade.vercel.app
```

## 13. Supabase Setup

Required setup:

1. Create a Supabase project.
2. Run `supabase-schema.sql` in the Supabase SQL Editor.
3. Enable email/password authentication.
4. Configure Auth URL settings.
5. Add production URL to allowed redirect URLs.
6. Copy Project URL and publishable key.
7. Place them in `supabase-config.js`.

Auth URL settings should include:

```text
https://lapit-jade.vercel.app
https://lapit-jade.vercel.app/**
http://localhost:4173
http://localhost:4173/**
```

## 14. Current Production Readiness

### Already Applied

- Static app deployment structure
- Supabase backend
- Row Level Security
- Email/password auth UI
- Guest mode
- Community pin CRUD
- Community route creation
- Confirm/report system
- Legal pages
- SEO basics
- Responsive desktop/mobile layout
- Map-first UI redesign pass
- Basic app documentation

### Not Fully Applied Yet

- Error tracking
- Product analytics
- Rate limiting and anti-spam controls
- Admin moderation dashboard
- Automated CI checks
- Real-device QA matrix
- Supabase backup/export process
- Full monitoring/logging
- Strong data quality review workflow
- Marker clustering for dense map areas

## 15. Known Limitations

- Built-in data is not complete for the entire Philippines.
- Community data can be wrong or duplicated.
- OpenStreetMap data depends on what exists in OSM.
- Directions currently open Google Maps instead of being calculated inside Lapit.
- Route visualization is supported but still needs UX improvement.
- No dedicated admin dashboard exists yet.
- No rate limiting exists beyond database constraints and auth requirements.
- The app currently relies on client-side JavaScript only; there is no custom backend API.

## 16. Recommended Next Phases

### Phase 1: Stabilize MVP

- Final QA on iPhone Safari, Android Chrome, desktop Chrome, and desktop Safari.
- Confirm all Supabase policies work in production.
- Remove duplicate community data.
- Verify add/edit/delete/report/confirm flows.
- Improve mobile bottom sheet behavior.

### Phase 2: Moderation Dashboard

- Add an admin-only moderation view.
- Show hidden, rejected, unverified, and approved pins.
- Allow admin approval/rejection from the app.
- Add route moderation controls.

### Phase 3: Data Quality

- Add duplicate detection improvements.
- Add required source notes for certain pin types.
- Add confidence indicators.
- Add better filters and search.
- Add manual data import workflow.

### Phase 4: Production Hardening

- Add error tracking.
- Add analytics.
- Add rate limiting strategy.
- Add CI checks.
- Add Supabase backup/export process.
- Add security headers.

### Phase 5: Route Intelligence

- Improve connected route UX.
- Add route details drawer.
- Add route clusters or route groups.
- Add real routing API or backend route calculation.
- Add "spider web" style network view for terminals.

## 17. QA Checklist

Before client demo:

- Open production URL on desktop.
- Open production URL on mobile.
- Continue as guest.
- Exit guest mode.
- Sign in.
- Sign out.
- Add a community pin.
- Edit your pin.
- Delete your pin.
- Report another user's pin.
- Confirm another user's pin.
- Create a route.
- Click a routed pin and verify route visual appears.
- Open directions.
- Check legal links.
- Check filters.
- Check map labels at zoomed-in and zoomed-out levels.
- Check if community pins load after refresh.

## 18. Client Notes

Lapit is not just a transit map. Its strongest differentiator is community knowledge. Standard map products usually focus on official roads and places. Lapit is designed to capture local commute knowledge such as informal terminals, jeepney endpoints, tricycle/TODA terminals, UV/van pickup areas, ferry access points, and transfer points.

The app should not be positioned as a complete official source yet. It should be positioned as a community-powered transit discovery MVP that can grow into a more reliable transport intelligence platform through moderation, verification, and better data coverage.

## 19. Handoff Summary

Current state:

```text
MVP with production foundations
```

Best next priority:

```text
Mobile QA + moderation + data quality
```

Main risk:

```text
Incorrect or duplicate transit data if moderation is not improved
```

Main opportunity:

```text
Community-sourced local transit knowledge that larger map apps often miss
```
