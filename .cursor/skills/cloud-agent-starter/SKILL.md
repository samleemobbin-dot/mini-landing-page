# Cloud Agent Starter Skill: Paradigm Shift Landing Page

Use this skill when you start work on this codebase and need to run, test, and verify changes quickly in Cursor Cloud.

## What this repo is

- Static landing page content (`index.html`, `assets/`, `images/`).
- Single Express server (`server.js`) that serves `public/`.
- No database, no background workers, no build step, no lint/test framework.

## First-run checklist (Cloud agent quick start)

1. Confirm you are in the repo root:
   - `pwd`
   - `git status -sb`
2. Install dependencies (if not already installed):
   - `npm install`
3. Verify static mount layout is valid:
   - `ls -la public`
   - `public/index.html` should exist.
   - `public/assets` and `public/images` should point to `../assets` and `../images` (symlinks are expected).
4. Start the app:
   - `npm start`
5. Basic smoke test from a second terminal:
   - `curl -i http://localhost:3000/`
   - `curl -i http://localhost:3000/assets/css/main.css`
   - `curl -i http://localhost:3000/some/random/path`

If you get 404s for files that exist at the repo root, `public/` is usually misconfigured.

## Cloud login and auth notes

- No app-specific login flow is required for this project.
- No external API credentials are needed for local runs.
- Git/GitHub auth for branch pushes and PR updates is handled by the Cloud environment.

## Feature flags and environment variables

This repo does not implement runtime feature flags.

- Supported env vars:
  - `PORT` (optional): defaults to `3000`.
  - `NODE_ENV` (optional): not required for local testing.
- Example:
  - `PORT=3001 npm start`
  - `curl -I http://localhost:3001/`

For flag-like testing, use temporary branch-based code toggles and remove them before final commit.

## Codebase area workflows

### 1) Server and routing (`server.js`)

Use when changing route handling, static serving, fallback behavior, or port logic.

Run/test workflow:

1. Start server:
   - `npm start`
2. Verify homepage route:
   - `curl -i http://localhost:3000/`
   - Expect `200` and HTML.
3. Verify static asset route:
   - `curl -i http://localhost:3000/assets/js/main.js`
   - Expect `200` and JS payload.
4. Verify SPA fallback:
   - `curl -i http://localhost:3000/does/not/exist`
   - Expect `200` serving `index.html`.
5. Negative check:
   - Temporarily rename a file and confirm expected error behavior only if your change touches missing-file handling.

Done criteria:

- Homepage still renders.
- Static asset links resolve.
- Deep-link fallback works.

### 2) Markup and layout (`index.html`)

Use when editing sections, content blocks, links, headings, forms, or gallery markup.

Run/test workflow:

1. Start server:
   - `npm start`
2. Open app in browser and verify:
   - Page loads without broken structure.
   - Anchor links and `scrolly` elements navigate correctly.
   - New/changed section content appears in expected order.
3. Terminal spot checks:
   - `curl -s http://localhost:3000/ | rg "<section|class=|id="`
4. If you changed links/images:
   - `curl -I http://localhost:3000/images/<path>`
   - `curl -I http://localhost:3000/assets/<path>`

Done criteria:

- No broken navigation or missing content blocks.
- All new references resolve from `public/`.

### 3) Frontend behavior and styling (`assets/js`, `assets/css`, `images`)

Use when changing interactions, responsiveness, gallery behavior, or CSS styling.

Run/test workflow:

1. Start server:
   - `npm start`
2. Browser checks:
   - Gallery opens/closes correctly.
   - Smooth scroll works.
   - Visual changes appear at desktop and narrow widths.
3. Asset checks:
   - `curl -I http://localhost:3000/assets/css/main.css`
   - `curl -I http://localhost:3000/assets/js/main.js`
4. If image paths changed:
   - `curl -I http://localhost:3000/images/<updated-file>`

Done criteria:

- Interaction behavior still works after edits.
- No obvious layout breakage across key viewport sizes.

### 4) API/docs/spec artifacts (`API_DOCUMENTATION.md`, `COMPONENT_GUIDE.md`, `openapi.yaml`, `postman_collection.json`, `sdk/`)

Use when updating docs/examples/SDK paths that represent runtime behavior.

Run/test workflow:

1. Ensure app is running:
   - `npm start`
2. Validate documented examples still respond:
   - `curl -i http://localhost:3000/`
   - `curl -i http://localhost:3000/assets/css/main.css`
3. Confirm docs and examples align with actual behavior:
   - Fallback route docs match current `server.js`.
   - SDK default base URL (`http://localhost:3000`) still valid.

Done criteria:

- Documentation and SDK examples reflect observed responses.

## Common Cloud-agent pitfalls

- `public/` symlink drift: app starts but returns 404 for expected assets.
- Editing `assets/` while testing stale browser cache: force hard refresh.
- Assuming tests exist: this repo relies on manual/browser + `curl` verification.
- Forgetting to keep server running while executing `curl` checks in another terminal.

## Minimal PR-ready verification checklist

Run this before finalizing a change:

1. `git status -sb` (only expected files modified)
2. `npm start` (server boots cleanly)
3. `curl -i http://localhost:3000/` (200)
4. `curl -i http://localhost:3000/assets/css/main.css` (200)
5. `curl -i http://localhost:3000/random/deep/link` (200 + index fallback)
6. Browser sanity check for the changed area

## How to update this skill (living runbook)

When you discover a new setup trick, flaky behavior, or faster verification method:

1. Add it to the relevant area section above (do not create duplicate guidance).
2. Prefer concrete commands over prose.
3. Include both trigger and fix for pitfalls (for example: "If X happens, run Y").
4. Keep the "Minimal PR-ready verification checklist" short and stable.
5. If behavior changes in code (routes, paths, env vars), update this skill in the same PR.

Update quality bar:

- A new agent should be able to clone, run, test, and ship using this file alone.
