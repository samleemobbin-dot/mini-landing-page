# Project Documentation

This document provides an exhaustive reference for all publicly-exposed APIs, functions and reusable components present in this code-base.  It is intended for developers who want to understand **how to extend, integrate or simply use** the functionality shipped with the template.

---

## Table of Contents

1. [Runtime Overview](#runtime-overview)
2. [HTTP Server API](#http-server-api)
3. [Client-side JavaScript Utilities](#client-side-javascript-utilities)
   * [`$.fn.navList`](#fn-navlist)
   * [`$.fn.panel`](#fn-panel)
   * [`$.fn.placeholder`](#fn-placeholder)
4. [Global Behaviour Scripts (`assets/js/main.js`)](#global-behaviour-scripts)
5. [Assets & Build](#assets--build)
6. [Frequently Asked Questions](#frequently-asked-questions)

---

## Runtime Overview

The project is split in two major parts:

* **Express Static Server (`server.js`)** — Hosts the *public* folder on `http://localhost:<PORT>` (defaults to **3000**) and fall-backs every route (`*`) to `index.html` for single-page-app style routing.
* **Static Site (HTML/CSS/JS)** — Rich, responsive template powered by **HTML5 UP – Paradigm Shift**.

```
📂 /workspace
 ├── server.js        # Node/Express server
 ├── index.html       # Landing page
 ├── assets/          # All client-side resources (css/js/images)
 └── ...
```

To run locally:

```bash
npm install        # installs express
node server.js     # starts server on http://localhost:3000
```

Environment variable `PORT` can override the default port.

---

## HTTP Server API

The backend is intentionally minimal — it only serves static files. Nevertheless the public interface is documented here for completeness.

| Method | Route | Description |
| ------ | ----- | ----------- |
| `GET`  | `/`   | Returns `index.html` located in `public/` directory. |
| `GET`  | `/*`  | Any path not matching a physical file is routed back to `index.html` allowing client-side routing frameworks to take over. |
| `GET`  | `/assets/**` | Delivers CSS/JS/Images from the *assets* folder. |

> **Note**: No stateful or JSON APIs are exposed at the moment. To add your own endpoints, edit `server.js` as usual.

Example—curl the landing page:

```bash
curl http://localhost:3000 | head
```

---

## Client-side JavaScript Utilities

All jQuery plugins reside in `assets/js/util.js`. They are attached to `$.fn`, therefore can be invoked on any jQuery collection. Import order is already handled in `index.html`.

### <a name="fn-navlist"></a>`$.fn.navList()`

**Generates an indented, flat list of links** extracted from a nested `<nav>` element. Commonly used to feed side-panel navigation menus.

```javascript
// HTML <nav id="nav"> ... </nav>
var html = $('#nav').navList();
$('#panel').html(html);
```

Returns: `String` — concatenated HTML string containing `<a>` tags with depth classes (`depth-0`, `depth-1`, …).

#### Parameters
None.

---

### <a name="fn-panel"></a>`$.fn.panel(userConfig)`

**Turns the selected element into an off-canvas panel** with optional backdrop dismissal, swipe gestures, etc.

```javascript
$('#panel').panel({
  side: 'left',          // Which edge to reveal from
  hideOnClick: true,     // Auto-hide when a link is clicked
  hideOnEscape: true,    // Hide on ESC key press
  visibleClass: 'open'   // override default 'visible'
});
```

#### Parameters (object)

| Key | Type | Default | Description |
| --- | ---- | ------- | ----------- |
| `delay` | `Number` | `0` | Milliseconds to wait before applying hide/show. |
| `hideOnClick` | `Boolean` | `false` | Close when link inside the panel is clicked. |
| `hideOnEscape` | `Boolean` | `false` | Close when user presses `ESC`. |
| `hideOnSwipe` | `Boolean` | `false` | Close on touch swipe matching the chosen `side`. |
| `resetScroll` | `Boolean` | `false` | Scroll panel back to top when hidden. |
| `resetForms` | `Boolean` | `false` | Reset form fields when hidden. |
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `null` | Where the panel appears from. |
| `target` | `jQuery \| Selector` | `self` | Element that gets the `visibleClass` toggled. |
| `visibleClass` | `String` | `'visible'` | CSS class representing the *open* state. |

**Returns** `jQuery` — the original collection for chaining.

---

### <a name="fn-placeholder"></a>`$.fn.placeholder()`

A **graceful polyfill for the HTML5 `placeholder` attribute**. On browsers already supporting the feature it simply returns.

```javascript
$('form').placeholder();
```

#### Behaviour

* For text inputs and textareas it renders the placeholder value and toggles `.polyfill-placeholder` CSS class.
* For password fields it creates a twin **text** input that shows the placeholder until focus.

**Returns** `jQuery` — the original collection.

---

## Global Behaviour Scripts

`assets/js/main.js` orchestrates UI behaviours such as:

* Setting UX break-points via the `breakpoints()` helper.
* Initial *fade-in* animation by removing `is-preload` CSS class after page load.
* Adding `is-ie` / `is-mobile` flags to `<body>` for conditional CSS.
* Initialising smooth-scroll links (`.scrolly`).
* Implementing **object-fit** fallback for older browsers by turning images into background images.
* **Gallery** modal with image pre-loading and keyboard interactions.

All features are *auto-initialised*; you generally do **not** call any function manually—just tweak CSS or DOM as needed.

---

## Assets & Build

No build pipeline is required; simply host the directory. If you wish to integrate into a more complex app you might:

1. Copy `assets/` into your public directory.
2. Import `assets/js/util.js`, `assets/js/main.js`, and their dependencies (`jquery`, `browser.min.js`, `breakpoints.min.js`, etc.).
3. Ensure markup follows the structure used in `index.html` for full feature support.

---

## Frequently Asked Questions

### How do I add my own API routes?

Edit `server.js` as you would with any Express app:

```javascript
app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Example' }]);
});
```

### How can I change the panel width/position?

Adjust the relevant CSS rules in `assets/css/main.css`, e.g. `.panel.open { width: 300px; }`.

### Does this support IE11?

Partially. The polyfills (`placeholder`, `object-fit`) help, but you may need additional ES5 shims or CSS tweaks.

---

*Generated automatically – feel free to expand sections as your project evolves.*