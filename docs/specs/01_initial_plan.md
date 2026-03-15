# Implementation Plan for Wedding Webpage

## Goal
Build a Single Page Application (SPA) using React and Vite, styled around an Argentinian Asado and Catalan Vermut theme (cream backgrounds, burnt orange line-drawn illustrations, and handwritten typography). The app will feature a Home section, a Details section, and an RSVP form.

## Proposed Changes

### Project Scaffolding
- **Initialize Vite + React (`npx create-vite@latest ./ --template react-ts`)**: Create the base application in the current directory (`/Users/fmartinez/Desktop/wedding-webpage`).
- **Clean up defaults**: Remove boilerplate React logos and default CSS from Vite.

### Global Setup
#### [MODIFY] `index.html`
- Update `<title>` to "Wedding Invitation".
- Add Google Fonts links for handwritten typography (e.g., 'Gochi Hand' or 'Amatic SC') and a clean sans-serif for readable text.
- Set the `<body>` background to the cream color (`#FDFBF7`) and default text color to burnt orange (`#D3543A`).

#### [MODIFY] `src/index.css`
- Define CSS variables for the color palette.
- Set up global typography and basic reset.
- Create utility classes for the "rustic/hand-drawn" aesthetic.

### Components Layer
#### [NEW] `src/components/HomeSection.tsx`
- Implement the welcoming landing view.
- Include names, the announcement, and prominent date/location teaser.
- Integrate line-drawn thematic SVGs or placeholder boxes for them.

#### [NEW] `src/components/DetailsSection.tsx`
- Layout the agenda/activities (vermut, asado, party).
- Display exact timings and location details (maps block).

#### [NEW] `src/components/RsvpSection.tsx`
- Build a structured form to capture:
  - Name(s)
  - Attendance (Yes/No)
  - Dietary restrictions & Open questions.

#### [MODIFY] `src/App.tsx`
- Combine the three sections into a continuous scrolling SPA layout.
- Add a simple sticky navigation header to jump between sections smoothly.

## Verification Plan

### Automated Tests
- *(No automated testing frameworks planned yet for this simple static SPA, but we will ensure TypeScript compiles cleanly via `npm run build`)*

### Manual Verification
- Run `npm run dev` to start the local server.
- Visually inspect the color palette, typography, and layout in the browser.
- Verify that scrolling/navigation between Home, Details, and RSVP works.
- Fill out the RSVP form to ensure state is captured correctly (logging to console for now).
- Check responsiveness on mobile viewport sizes using browser DevTools.
