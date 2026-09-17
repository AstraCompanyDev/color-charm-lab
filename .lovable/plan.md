# Goood Mail Homepage Redesign

## Goal
Create a polished public homepage that explains Goood Mail to both business teams and developers, while keeping the current product dashboard accessible.

## What will change
- Turn `/` into a responsive marketing homepage using the selected Slate & Mint palette and Sora/Manrope typography.
- Build an asymmetric opening section with concise positioning, primary signup action, dashboard access, and a realistic product preview.
- Add focused sections for campaign creation, transactional email API, performance reporting, automation, and audience management.
- Include trust signals, operational metrics, final conversion section, and a compact footer.
- Keep light and dark themes with a persistent theme switch.
- Move the existing working dashboard to `/dashboard`, preserving its navigation, campaign composer, API view, audience view, and interactions.
- Add clear homepage navigation paths into the dashboard and relevant dashboard views.

## Technical details
- Add React Router navigation between the homepage and dashboard.
- Reuse existing design tokens and shared buttons, updating the theme tokens to the chosen charcoal, slate, mint, and near-white system.
- Keep cards compact with 6–8px corners, restrained shadows, semantic colors, and reduced-motion support.
- Verify desktop and mobile layouts, navigation, theme persistence, dashboard access, and current build health.
