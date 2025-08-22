# Paradigm Shift - Comprehensive API Documentation

## Overview

This documentation covers all public APIs, functions, and components for the **Paradigm Shift** HTML5 UP template. This is a responsive, modern landing page template built with Express.js server, jQuery, and custom CSS components.

## Table of Contents

1. [Server API](#server-api)
2. [JavaScript Utilities](#javascript-utilities)
3. [Main JavaScript Functions](#main-javascript-functions)
4. [HTML Components](#html-components)
5. [CSS Classes & Components](#css-classes--components)
6. [Usage Examples](#usage-examples)

---

## Server API

### Express.js Server (`server.js`)

The server provides static file serving and routing for the single-page application.

#### Configuration

```javascript
const port = process.env.PORT || 3000;
```

#### Endpoints

| Method | Route | Description | Response |
|--------|-------|-------------|----------|
| `GET` | `*` | Serves the main application | Returns `index.html` |
| `GET` | `/assets/*` | Static asset serving | Returns static files (CSS, JS, images) |

#### Usage Examples

```bash
# Start the server
npm start

# Server runs on
http://localhost:3000
```

#### Environment Variables

- `PORT` - Server port (default: 3000)

---

## JavaScript Utilities

### jQuery Extensions (`assets/js/util.js`)

#### `$.fn.navList()`

Generates an indented list of links from a navigation element for use with panel components.

**Returns:** `{jQuery}` jQuery object containing HTML string

**Usage:**
```javascript
$('#navigation').navList();
```

**Example:**
```html
<nav id="navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a>
            <ul>
                <li><a href="#team">Team</a></li>
            </ul>
        </li>
    </ul>
</nav>

<script>
// Generates indented link structure
var linkList = $('#navigation').navList();
</script>
```

#### `$.fn.panel(userConfig)`

Converts an element into a sliding panel component with various configuration options.

**Parameters:**
- `userConfig` `{object}` - Configuration object

**Configuration Options:**
```javascript
{
    delay: 0,                    // Animation delay (ms)
    hideOnClick: false,          // Hide panel when clicking links
    hideOnEscape: false,         // Hide panel on ESC key
    hideOnSwipe: false,          // Hide panel on swipe gesture
    resetScroll: false,          // Reset scroll position on hide
    resetForms: false,           // Reset forms on hide
    side: null,                  // Panel side ('left', 'right', 'top', 'bottom')
    target: $this,               // Target element for class application
    visibleClass: 'visible'      // CSS class for visible state
}
```

**Returns:** `{jQuery}` jQuery object

**Usage:**
```javascript
$('#sidebar').panel({
    delay: 500,
    hideOnClick: true,
    hideOnEscape: true,
    side: 'left'
});
```

**Example:**
```html
<div id="sidebar">
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
</div>

<script>
$('#sidebar').panel({
    hideOnClick: true,
    hideOnEscape: true,
    side: 'left'
});
</script>
```

#### `$.fn.placeholder()`

Provides placeholder text polyfill for older browsers that don't support the HTML5 placeholder attribute.

**Returns:** `{jQuery}` jQuery object

**Usage:**
```javascript
$('form').placeholder();
```

**Example:**
```html
<form id="contact-form">
    <input type="text" placeholder="Enter your name" />
    <input type="email" placeholder="Enter your email" />
    <textarea placeholder="Your message"></textarea>
</form>

<script>
$('#contact-form').placeholder();
</script>
```

#### `$.prioritize($elements, condition)`

Moves elements to/from the first positions of their respective parents based on a condition.

**Parameters:**
- `$elements` `{jQuery|string}` - Elements or selector to move
- `condition` `{boolean}` - If true, moves elements to top; if false, restores original positions

**Usage:**
```javascript
// Move elements to top
$.prioritize('.priority-item', true);

// Restore original positions
$.prioritize('.priority-item', false);
```

**Example:**
```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item priority-item">Priority Item</div>
    <div class="item">Item 2</div>
</div>

<script>
// Move priority items to top
$.prioritize('.priority-item', true);
</script>
```

---

## Main JavaScript Functions

### Core Application (`assets/js/main.js`)

#### Breakpoint Configuration

Responsive breakpoints for different screen sizes:

```javascript
breakpoints({
    default:   ['1681px',   null       ],
    xlarge:    ['1281px',   '1680px'   ],
    large:     ['981px',    '1280px'   ],
    medium:    ['737px',    '980px'    ],
    small:     ['481px',    '736px'    ],
    xsmall:    ['361px',    '480px'    ],
    xxsmall:   [null,       '360px'    ]
});
```

#### Scroll Navigation (Scrolly)

Smooth scrolling navigation with offset configuration:

```javascript
$('.scrolly').scrolly({
    offset: 100
});
```

**Usage:**
```html
<a href="#section1" class="scrolly">Go to Section 1</a>
<a href="#section2" class="scrolly">Go to Section 2</a>
```

#### Gallery Component

Interactive image gallery with modal display functionality.

**Features:**
- Click to open images in modal
- Keyboard navigation (ESC to close)
- Touch/mouse event handling
- Automatic modal generation

**HTML Structure:**
```html
<div class="gallery">
    <a href="images/full/01.jpg" class="landscape">
        <img src="images/thumb/01.jpg" alt="Image 1" />
    </a>
    <a href="images/full/02.jpg" class="portrait">
        <img src="images/thumb/02.jpg" alt="Image 2" />
    </a>
</div>
```

**Supported File Types:**
- `.jpg`
- `.gif` 
- `.png`
- `.mp4`

**CSS Classes:**
- `.landscape` - Landscape orientation
- `.portrait` - Portrait orientation

#### Object-fit Polyfill

Provides object-fit CSS property support for older browsers:

```javascript
// Automatically applied to elements with data-position attribute
<img src="image.jpg" data-position="center" />
```

**Supported Positions:**
- `center`
- `top`, `bottom`, `left`, `right`
- `top left`, `top right`, `bottom left`, `bottom right`
- Custom percentage values (e.g., `25% 75%`)

---

## HTML Components

### Page Structure

#### Main Wrapper
```html
<div id="wrapper">
    <!-- All page content goes here -->
</div>
```

#### Section Component
```html
<section>
    <header>
        <h2>Section Title</h2>
        <p>Section description</p>
    </header>
    <div class="content">
        <!-- Section content -->
    </div>
</section>
```

#### Intro Section
```html
<section class="intro">
    <header>
        <h1>Main Title</h1>
        <p>Subtitle or description</p>
        <ul class="actions">
            <li><a href="#first" class="arrow scrolly">
                <span class="label">Next</span>
            </a></li>
        </ul>
    </header>
    <div class="content">
        <span class="image fill" data-position="center">
            <img src="images/pic01.jpg" alt="" />
        </span>
    </div>
</section>
```

### Button Components

#### Basic Buttons
```html
<a href="#" class="button">Default Button</a>
<a href="#" class="button primary">Primary Button</a>
<a href="#" class="button secondary">Secondary Button</a>
```

#### Button Sizes
```html
<a href="#" class="button small">Small Button</a>
<a href="#" class="button">Default Button</a>
<a href="#" class="button large">Large Button</a>
```

#### Button Actions List
```html
<ul class="actions">
    <li><a href="#" class="button primary large">Get Started</a></li>
    <li><a href="#" class="button large">Learn More</a></li>
</ul>
```

### Image Components

#### Basic Image
```html
<span class="image main">
    <img src="images/pic02.jpg" alt="Description" />
</span>
```

#### Positioned Image
```html
<span class="image fill" data-position="center">
    <img src="images/pic01.jpg" alt="Description" />
</span>
```

#### Gallery Grid
```html
<div class="gallery">
    <a href="images/gallery/fulls/01.jpg" class="landscape">
        <img src="images/gallery/thumbs/01.jpg" alt="" />
    </a>
    <a href="images/gallery/fulls/02.jpg" class="portrait">
        <img src="images/gallery/thumbs/02.jpg" alt="" />
    </a>
    <a href="images/gallery/fulls/03.jpg" class="landscape">
        <img src="images/gallery/thumbs/03.jpg" alt="" />
    </a>
</div>
```

### Content Grid System

#### Two Column Layout
```html
<div class="content">
    <section>
        <header>
            <h3>Column 1 Title</h3>
            <p>Column 1 description</p>
        </header>
        <div class="content">
            <div class="gallery">
                <!-- Gallery items -->
            </div>
        </div>
    </section>
    
    <section>
        <header>
            <h3>Column 2 Title</h3>
            <p>Column 2 description</p>
        </header>
        <div class="content">
            <div class="gallery">
                <!-- Gallery items -->
            </div>
        </div>
    </section>
</div>
```

---

## CSS Classes & Components

### Layout Classes

#### Grid System
- `.row` - Creates a responsive row container
- `.col-*` - Column classes for responsive layouts

#### Image Classes
- `.image` - Base image container
- `.image.main` - Full-width main image
- `.image.fill` - Fill container image
- `[data-position]` - Image positioning (center, top, bottom, left, right, etc.)

#### Gallery Classes
- `.gallery` - Gallery container
- `.landscape` - Landscape-oriented gallery item
- `.portrait` - Portrait-oriented gallery item
- `.modal` - Auto-generated modal for gallery items

#### Button Classes
- `.button` - Base button style
- `.button.primary` - Primary button (accent color)
- `.button.secondary` - Secondary button
- `.button.small` - Small button size
- `.button.large` - Large button size

#### Action Classes
- `.actions` - Container for action buttons
- `.scrolly` - Enables smooth scrolling
- `.arrow` - Arrow-style navigation element

#### Utility Classes
- `.is-preload` - Applied during page load
- `.is-mobile` - Applied on mobile devices
- `.is-ie` - Applied for Internet Explorer
- `.visible` - Shows hidden elements
- `.polyfill-placeholder` - Placeholder polyfill styling

### Responsive Breakpoints

The template uses the following breakpoint system:

- **Default:** 1681px and above
- **XLarge:** 1281px - 1680px
- **Large:** 981px - 1280px  
- **Medium:** 737px - 980px
- **Small:** 481px - 736px
- **XSmall:** 361px - 480px
- **XXSmall:** 360px and below

---

## Usage Examples

### Creating a New Section

```html
<section id="my-section">
    <header>
        <h2>My Custom Section</h2>
        <p>This is a description of my custom section</p>
    </header>
    <div class="content">
        <p><strong>Important content</strong> goes here with proper styling.</p>
        
        <div class="gallery">
            <a href="images/my-image.jpg" class="landscape">
                <img src="images/my-thumb.jpg" alt="My Image" />
            </a>
        </div>
        
        <ul class="actions">
            <li><a href="#contact" class="button primary scrolly">Contact Us</a></li>
            <li><a href="#learn-more" class="button scrolly">Learn More</a></li>
        </ul>
    </div>
</section>
```

### Adding Custom JavaScript

```javascript
$(document).ready(function() {
    // Initialize custom panel
    $('#my-panel').panel({
        delay: 300,
        hideOnClick: true,
        side: 'right'
    });
    
    // Add placeholder support for forms
    $('form').placeholder();
    
    // Prioritize important elements on mobile
    if (browser.mobile) {
        $.prioritize('.mobile-priority', true);
    }
});
```

### Custom Gallery Implementation

```html
<div class="gallery custom-gallery">
    <a href="portfolio/project1.jpg" class="landscape">
        <img src="portfolio/thumbs/project1.jpg" alt="Project 1" />
    </a>
    <a href="portfolio/project2.jpg" class="portrait">
        <img src="portfolio/thumbs/project2.jpg" alt="Project 2" />
    </a>
    <a href="portfolio/video.mp4" class="landscape">
        <img src="portfolio/thumbs/video-thumb.jpg" alt="Demo Video" />
    </a>
</div>

<style>
.custom-gallery {
    /* Custom gallery styling */
    gap: 20px;
}
</style>
```

### Server Deployment

```javascript
// Custom server configuration
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Custom middleware
app.use(express.static(path.join(__dirname, "public")));

// API endpoints (if needed)
app.get('/api/contact', (req, res) => {
    // Handle contact form submissions
    res.json({ success: true });
});

// Fallback to main app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

---

## Browser Support

- **Modern Browsers:** Full support for all features
- **Internet Explorer:** Includes polyfills for object-fit and placeholders
- **Mobile Browsers:** Responsive design with touch event support
- **Legacy Support:** Graceful degradation for older browsers

## Dependencies

- **jQuery:** 3.x (included)
- **Express.js:** ^4.18.2
- **Node.js:** >=16

## License

Free for personal and commercial use under the CCA 3.0 license.

---

*This documentation covers all public APIs and components. For additional customization, refer to the source CSS and JavaScript files.*