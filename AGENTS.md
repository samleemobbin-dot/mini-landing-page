# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a static landing page ("Paradigm Shift") served by a single Express.js server. No database, no external services, no build step required.

### Important: `public/` directory

`server.js` serves static files from a `public/` directory, but the actual static assets (`index.html`, `assets/`, `images/`) live at the repo root. The update script creates a `public/` directory with symlinks to make the server work. If the server returns 404s, verify `public/` exists with the correct symlinks.

### Running the app

```bash
npm start          # Starts Express.js on http://localhost:3000
```

### No lint/test/build tooling

This project has no linter, test runner, or build step configured. The only npm script is `start`. CSS/JS assets are pre-compiled and checked into the repo.
