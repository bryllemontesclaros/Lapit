# Lapit UX/UI Audit

## Biggest Issues Found

- Mobile had too many floating controls competing with the map, especially account, legend, add pin, create route, and the bottom sheet.
- The bottom sheet consumed too much mobile screen height, making the app feel like a list page instead of a map-first transit tool.
- The account control was easy to see, but not visually integrated with the main command system.
- Route visuals were technically present but felt pasted on top of the map instead of connected to the endpoints.
- The legend used a desktop-style layout on mobile and could overlap the map experience.
- Card styling was heavy and repetitive, making nearest transit and community pins feel noisy.
- The loading copy still mentioned Metro Manila even though the product now has a Philippines-wide starter dataset.

## Redesign Applied

- Added a compact Lapit brand chip on the map so the app has a clear product identity without needing a landing overlay.
- Reworked floating map actions into a single glass command dock.
- Reduced the mobile bottom sheet from a dominant half-screen panel to a calmer map-first sheet.
- Made the nearest transit header sticky inside the panel for better list orientation.
- Tightened card typography, spacing, and focus states.
- Improved popup sizing and shape so it feels more like part of the app UI.
- Fixed route-mode legend selectors so route viewing can simplify the legend properly.
- Rebuilt route visual styling with stronger casing, shadow, and blue core line so endpoints feel visually connected.
- Updated map freshness text to May 24, 2026.

## Remaining Production UX Work

- Add a true sheet expand/collapse control instead of relying only on scrolling.
- Add a route details drawer for connected routes instead of a floating route card.
- Add map marker clustering or density rules for far zoom levels.
- Add a dedicated admin/moderation screen instead of relying on Supabase Table Editor.
- Run real-device QA on iPhone Safari, Android Chrome, desktop Chrome, and desktop Safari before shipping.
