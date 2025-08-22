# Paradigm Shift - API Documentation

> **Comprehensive API reference for the Paradigm Shift HTML5 UP template**  
> A responsive, modern landing page template built with Express.js, jQuery, and custom CSS components.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Access the application
open http://localhost:3000
```

## Table of Contents

- [🚀 Getting Started](#-getting-started)
- [🔧 Server API](#-server-api)
- [📦 Dependencies](#-dependencies)
- [⚡ JavaScript Utilities](#-javascript-utilities)
- [🎯 Core Functions](#-core-functions)
- [🎨 HTML Components](#-html-components)
- [💅 CSS Classes & Styling](#-css-classes--styling)
- [📱 Responsive Design](#-responsive-design)
- [🔍 Usage Examples](#-usage-examples)
- [⚠️ Error Handling](#️-error-handling)
- [🚀 Performance](#-performance)
- [🌐 Browser Support](#-browser-support)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** >=16.0.0
- **npm:** Latest version

### Installation

```bash
git clone <repository-url>
cd paradigm-shift
npm install
npm start
```

### Project Structure

```
paradigm-shift/
├── server.js              # Express server
├── index.html             # Main HTML file
├── package.json           # Project configuration
├── assets/
│   ├── css/
│   │   ├── main.css       # Main stylesheet
│   │   └── fontawesome-all.min.css
│   └── js/
│       ├── main.js        # Core application logic
│       ├── util.js        # jQuery utilities
│       ├── jquery.min.js  # jQuery library
│       ├── breakpoints.min.js  # Responsive breakpoints
│       ├── browser.min.js      # Browser detection
│       └── jquery.scrolly.min.js # Smooth scrolling
└── images/                # Image assets
```

---

## 🔧 Server API

### Express.js Server (`server.js`)

Simple Express server for serving static files and handling SPA routing.

#### Configuration

```javascript
const port = process.env.PORT || 3000;
```

#### Routes

| Method | Route | Description | Response Type | Status Codes |
|--------|-------|-------------|---------------|--------------|
| `GET` | `/` | Serves main application | `text/html` | 200 |
| `GET` | `/assets/*` | Static asset serving | `*/*` | 200, 404 |
| `GET` | `/*` | SPA fallback route | `text/html` | 200 |

#### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port number |

#### Error Handling

The server implements basic error handling:
- **404 errors:** Automatically handled by Express static middleware
- **SPA routing:** All unmatched routes return `index.html`
- **Server errors:** Logged to console

#### Example Usage

```bash
# Development
npm start

# Production with custom port
PORT=8080 npm start

# Using PM2 for production
pm2 start server.js --name "paradigm-shift"
```

---

## 📦 Dependencies

### Required Dependencies

#### Runtime Dependencies
- **express** `^4.18.2` - Web server framework
- **Node.js** `>=16.0.0` - JavaScript runtime

#### Client-side Libraries
- **jQuery** `3.x` - DOM manipulation and utilities
- **breakpoints.js** - Responsive breakpoint management
- **browser.js** - Browser detection utilities  
- **jquery.scrolly.js** - Smooth scrolling functionality

### CDN Alternatives

```html
<!-- jQuery CDN -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Font Awesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

---

## ⚡ JavaScript Utilities

### jQuery Extensions (`assets/js/util.js`)

#### `$.fn.navList()`

Generates an indented list of links from a navigation element for use with panel components.

**Signature:**
```javascript
$(selector).navList() → {string}
```

**Returns:** `{string}` HTML string with indented navigation structure

**Features:**
- Automatically calculates nesting depth
- Preserves original link attributes (`href`, `target`)
- Generates CSS classes for styling (`depth-*`, `indent-*`)

**Usage:**
```javascript
// Basic usage
const navHTML = $('#navigation').navList();

// Insert into panel
$('#sidebar').html($('#navigation').navList());
```

**Generated HTML Structure:**
```html
<!-- Input -->
<nav id="navigation">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a>
            <ul>
                <li><a href="#team">Team</a></li>
                <li><a href="#history">History</a></li>
            </ul>
        </li>
    </ul>
</nav>

<!-- Output -->
<a class="link depth-0" href="#home">
    <span class="indent-0"></span>Home
</a>
<a class="link depth-0" href="#about">
    <span class="indent-0"></span>About
</a>
<a class="link depth-1" href="#team">
    <span class="indent-1"></span>Team
</a>
<a class="link depth-1" href="#history">
    <span class="indent-1"></span>History
</a>
```

#### `$.fn.panel(userConfig)`

Converts an element into a sliding panel component with comprehensive configuration options.

**Signature:**
```javascript
$(selector).panel(config) → {jQuery}
```

**Parameters:**
- `userConfig` `{object}` - Configuration object (optional)

**Configuration Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `delay` | `number` | `0` | Animation delay in milliseconds |
| `hideOnClick` | `boolean` | `false` | Hide panel when clicking internal links |
| `hideOnEscape` | `boolean` | `false` | Hide panel on ESC key press |
| `hideOnSwipe` | `boolean` | `false` | Hide panel on swipe gesture |
| `resetScroll` | `boolean` | `false` | Reset scroll position when hiding |
| `resetForms` | `boolean` | `false` | Reset all forms when hiding |
| `side` | `string` | `null` | Panel side: `'left'`, `'right'`, `'top'`, `'bottom'` |
| `target` | `jQuery\|string` | `$this` | Target element for class application |
| `visibleClass` | `string` | `'visible'` | CSS class for visible state |

**Returns:** `{jQuery}` jQuery object for chaining

**Methods:**
- `_hide(event)` - Internal method to hide the panel

**Events:**
- Touch events for swipe detection
- Keyboard events for ESC handling
- Click events for link navigation

**Usage Examples:**

```javascript
// Basic panel
$('#sidebar').panel();

// Advanced configuration
$('#menu').panel({
    delay: 300,
    hideOnClick: true,
    hideOnEscape: true,
    hideOnSwipe: true,
    side: 'left',
    resetScroll: true,
    resetForms: true
});

// Custom target element
$('#panel-content').panel({
    target: $('#wrapper'),
    visibleClass: 'panel-visible'
});
```

**HTML Structure:**
```html
<!-- Panel trigger -->
<a href="#sidebar" class="panel-toggle">Open Menu</a>

<!-- Panel element -->
<div id="sidebar">
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</div>

<!-- CSS for panel positioning -->
<style>
#sidebar {
    position: fixed;
    left: -300px;
    top: 0;
    width: 300px;
    height: 100vh;
    transition: left 0.3s ease;
}

#sidebar.visible {
    left: 0;
}
</style>
```

#### `$.fn.placeholder()`

Provides placeholder text polyfill for browsers that don't support the HTML5 placeholder attribute.

**Signature:**
```javascript
$(selector).placeholder() → {jQuery}
```

**Features:**
- Automatic browser capability detection
- Support for text inputs, textareas, and password fields
- Form reset handling
- Focus/blur event management

**Browser Support:**
- Automatically skips on modern browsers
- Provides fallback for IE9 and older

**Usage:**
```javascript
// Apply to all forms
$('form').placeholder();

// Apply to specific form
$('#contact-form').placeholder();

// Apply to individual inputs
$('input[placeholder], textarea[placeholder]').placeholder();
```

**CSS Classes Added:**
- `.polyfill-placeholder` - Applied to inputs showing placeholder text

#### `$.prioritize($elements, condition)`

Moves elements to/from the first positions of their respective parents based on a condition.

**Signature:**
```javascript
$.prioritize(elements, condition) → {void}
```

**Parameters:**
- `$elements` `{jQuery|string}` - Elements or selector to move
- `condition` `{boolean}` - If true, moves to top; if false, restores original positions

**Use Cases:**
- Mobile layout optimization
- Dynamic content prioritization
- Responsive design adjustments

**Usage:**
```javascript
// Move priority elements to top on mobile
if (browser.mobile) {
    $.prioritize('.mobile-priority', true);
}

// Restore original order on desktop
$.prioritize('.mobile-priority', false);

// Conditional prioritization
$.prioritize('.important', window.innerWidth < 768);
```

**Data Storage:**
- Uses jQuery data storage to track original positions
- Key: `__prioritize`

---

## 🎯 Core Functions

### Main Application (`assets/js/main.js`)

#### Breakpoint System

Responsive breakpoint configuration using the breakpoints.js library.

```javascript
breakpoints({
    default:   ['1681px',   null       ],  // Desktop large
    xlarge:    ['1281px',   '1680px'   ],  // Desktop
    large:     ['981px',    '1280px'   ],  // Laptop
    medium:    ['737px',    '980px'    ],  // Tablet
    small:     ['481px',    '736px'    ],  // Mobile landscape
    xsmall:    ['361px',    '480px'    ],  // Mobile portrait
    xxsmall:   [null,       '360px'    ]   // Small mobile
});
```

**Usage in CSS:**
```css
/* Default styles */
.element { font-size: 16px; }

/* Large screens */
@media (max-width: 1280px) {
    .element { font-size: 14px; }
}

/* Mobile */
@media (max-width: 736px) {
    .element { font-size: 12px; }
}
```

#### Browser Detection & Initialization

**Features:**
- Automatic IE detection and class application
- Mobile device detection
- Preload state management

```javascript
// Browser-specific handling
if (browser.name == 'ie') {
    $body.addClass('is-ie');
}

if (browser.mobile) {
    $body.addClass('is-mobile');
}

// Remove preload state after page load
$window.on('load', function() {
    window.setTimeout(function() {
        $body.removeClass('is-preload');
    }, 100);
});
```

#### Smooth Scrolling (`scrolly`)

Implements smooth scrolling navigation with offset configuration.

**Configuration:**
```javascript
$('.scrolly').scrolly({
    offset: 100  // Offset from top in pixels
});
```

**HTML Usage:**
```html
<a href="#section1" class="scrolly">Go to Section 1</a>
<a href="#section2" class="scrolly">Go to Section 2</a>

<!-- Target sections -->
<section id="section1">...</section>
<section id="section2">...</section>
```

#### Object-fit Polyfill

Provides object-fit CSS property support for older browsers.

**Automatic Application:**
- Elements with `data-position` attribute
- Gallery images

**Supported Positions:**
- `center` (default)
- `top`, `bottom`, `left`, `right`
- `top left`, `top right`, `bottom left`, `bottom right`
- Custom percentage values (e.g., `25% 75%`)

**Usage:**
```html
<span class="image fill" data-position="center">
    <img src="images/hero.jpg" alt="Hero Image" />
</span>

<span class="image fill" data-position="top right">
    <img src="images/banner.jpg" alt="Banner" />
</span>
```

#### Gallery Component

Interactive image gallery with modal display functionality.

**Features:**
- Modal lightbox for images and videos
- Keyboard navigation (ESC to close)
- Touch/mouse event handling
- Automatic modal generation
- Loading states and animations

**Supported File Types:**
- Images: `.jpg`, `.gif`, `.png`
- Videos: `.mp4`

**HTML Structure:**
```html
<div class="gallery">
    <a href="images/full/01.jpg" class="landscape">
        <img src="images/thumb/01.jpg" alt="Image 1" />
    </a>
    <a href="images/full/02.jpg" class="portrait">
        <img src="images/thumb/02.jpg" alt="Image 2" />
    </a>
    <a href="videos/demo.mp4" class="landscape">
        <img src="images/thumb/video.jpg" alt="Demo Video" />
    </a>
</div>
```

**CSS Classes:**
- `.landscape` - Landscape orientation
- `.portrait` - Portrait orientation
- `.modal` - Auto-generated modal container
- `.visible` - Modal visible state
- `.loaded` - Modal content loaded state

**Events:**
- `click` - Opens modal
- `keypress` - ESC key closes modal
- `load` - Image load handling

---

## 🎨 HTML Components

### Page Structure

#### Main Wrapper
```html
<div id="wrapper">
    <!-- All page content goes here -->
</div>
```

#### Section Component

**Basic Section:**
```html
<section id="unique-id">
    <header>
        <h2>Section Title</h2>
        <p>Section description or subtitle</p>
    </header>
    <div class="content">
        <!-- Section content -->
    </div>
</section>
```

**Intro Section:**
```html
<section class="intro">
    <header>
        <h1>Main Title</h1>
        <p>Subtitle or tagline</p>
        <ul class="actions">
            <li><a href="#first" class="arrow scrolly">
                <span class="label">Next</span>
            </a></li>
        </ul>
    </header>
    <div class="content">
        <span class="image fill" data-position="center">
            <img src="images/hero.jpg" alt="Hero Image" />
        </span>
    </div>
</section>
```

### Interactive Components

#### Button System

**Basic Buttons:**
```html
<!-- Standard buttons -->
<a href="#" class="button">Default Button</a>
<a href="#" class="button primary">Primary Button</a>
<a href="#" class="button secondary">Secondary Button</a>

<!-- Button sizes -->
<a href="#" class="button small">Small</a>
<a href="#" class="button">Default</a>
<a href="#" class="button large">Large</a>

<!-- Button states -->
<a href="#" class="button disabled">Disabled</a>
<a href="#" class="button loading">Loading</a>
```

**Action Lists:**
```html
<ul class="actions">
    <li><a href="#" class="button primary large">Primary Action</a></li>
    <li><a href="#" class="button large">Secondary Action</a></li>
</ul>

<!-- Stacked actions (mobile) -->
<ul class="actions stacked">
    <li><a href="#" class="button primary">Action 1</a></li>
    <li><a href="#" class="button">Action 2</a></li>
</ul>
```

#### Image Components

**Basic Image:**
```html
<span class="image main">
    <img src="images/content.jpg" alt="Content Image" />
</span>
```

**Positioned Image:**
```html
<span class="image fill" data-position="center">
    <img src="images/hero.jpg" alt="Hero Image" />
</span>
```

**Gallery Grid:**
```html
<div class="gallery">
    <a href="images/gallery/full/01.jpg" class="landscape">
        <img src="images/gallery/thumb/01.jpg" alt="Gallery Image 1" />
    </a>
    <a href="images/gallery/full/02.jpg" class="portrait">
        <img src="images/gallery/thumb/02.jpg" alt="Gallery Image 2" />
    </a>
    <!-- Modal is automatically generated -->
</div>
```

### Layout Components

#### Content Grid System

**Two-Column Layout:**
```html
<div class="content">
    <section>
        <header>
            <h3>Left Column</h3>
            <p>Left column description</p>
        </header>
        <div class="content">
            <!-- Left column content -->
        </div>
    </section>
    
    <section>
        <header>
            <h3>Right Column</h3>
            <p>Right column description</p>
        </header>
        <div class="content">
            <!-- Right column content -->
        </div>
    </section>
</div>
```

**Form Components:**
```html
<form method="post" action="#">
    <div class="fields">
        <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" />
        </div>
        <div class="field half">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="your@email.com" />
        </div>
        <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" placeholder="Your message" rows="6"></textarea>
        </div>
    </div>
    <ul class="actions">
        <li><input type="submit" value="Send Message" class="primary" /></li>
        <li><input type="reset" value="Clear" /></li>
    </ul>
</form>
```

---

## 💅 CSS Classes & Styling

### Layout Classes

#### Grid System
- `.row` - Responsive row container
- `.col-*` - Column classes for grid layouts
- `.container` - Main content container

#### Image Classes
- `.image` - Base image container
- `.image.main` - Full-width main image
- `.image.fill` - Fill container image with positioning
- `.image.left` - Left-aligned image
- `.image.right` - Right-aligned image

#### Gallery Classes
- `.gallery` - Gallery container with automatic grid
- `.landscape` - Landscape-oriented gallery item
- `.portrait` - Portrait-oriented gallery item
- `.modal` - Auto-generated modal overlay
- `.modal.visible` - Visible modal state
- `.modal.loaded` - Modal with loaded content

#### Button Classes

**Base Classes:**
- `.button` - Base button styling
- `.button.primary` - Primary button (accent color)
- `.button.secondary` - Secondary button styling

**Size Modifiers:**
- `.button.small` - Small button size
- `.button.large` - Large button size
- `.button.fit` - Full-width button

**State Classes:**
- `.button.disabled` - Disabled state
- `.button.loading` - Loading state with spinner

#### Action Classes
- `.actions` - Container for action buttons
- `.actions.stacked` - Stacked layout for mobile
- `.scrolly` - Enables smooth scrolling behavior
- `.arrow` - Arrow-style navigation element

#### Utility Classes

**State Classes:**
- `.is-preload` - Applied during page load (adds loading animations)
- `.is-mobile` - Applied on mobile devices
- `.is-ie` - Applied for Internet Explorer compatibility
- `.visible` - Shows hidden elements
- `.hidden` - Hides elements

**Text Utilities:**
- `.align-left` - Left-align text
- `.align-center` - Center-align text
- `.align-right` - Right-align text

**Spacing Utilities:**
- `.major` - Major spacing class
- `.minor` - Minor spacing class

### Component-Specific Classes

#### Form Classes
- `.field` - Form field container
- `.field.half` - Half-width field
- `.field.third` - Third-width field
- `.fields` - Container for multiple fields
- `.polyfill-placeholder` - Placeholder polyfill styling

#### Navigation Classes
- `.link` - Navigation link styling
- `.depth-*` - Nesting depth classes (0-5)
- `.indent-*` - Indentation classes (0-5)

---

## 📱 Responsive Design

### Breakpoint System

The template uses a comprehensive breakpoint system:

| Breakpoint | Range | Description | Typical Use |
|------------|-------|-------------|-------------|
| **default** | 1681px+ | Large desktop | Full layout |
| **xlarge** | 1281px - 1680px | Desktop | Standard layout |
| **large** | 981px - 1280px | Laptop | Condensed layout |
| **medium** | 737px - 980px | Tablet | Simplified layout |
| **small** | 481px - 736px | Mobile landscape | Mobile optimized |
| **xsmall** | 361px - 480px | Mobile portrait | Compact mobile |
| **xxsmall** | ≤360px | Small mobile | Minimal layout |

### Responsive Features

**Automatic Adaptations:**
- Gallery grid adjusts columns based on screen size
- Navigation collapses to mobile menu
- Button sizes adapt to touch targets
- Text scaling for readability

**Mobile Optimizations:**
- Touch-friendly interface elements
- Swipe gesture support for panels
- Optimized image loading
- Reduced animation complexity

---

## 🔍 Usage Examples

### Complete Component Implementation

```html
<!DOCTYPE html>
<html>
<head>
    <title>Custom Implementation</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="is-preload">
    <div id="wrapper">
        <!-- Hero Section -->
        <section class="intro">
            <header>
                <h1>Your Project Name</h1>
                <p>Compelling subtitle that describes your project</p>
                <ul class="actions">
                    <li><a href="#main" class="arrow scrolly">
                        <span class="label">Explore</span>
                    </a></li>
                </ul>
            </header>
            <div class="content">
                <span class="image fill" data-position="center">
                    <img src="images/hero.jpg" alt="Hero Image" />
                </span>
            </div>
        </section>

        <!-- Main Content -->
        <section id="main">
            <header>
                <h2>Featured Work</h2>
                <p>Showcase of our latest projects</p>
            </header>
            <div class="content">
                <div class="gallery">
                    <a href="images/project1-full.jpg" class="landscape">
                        <img src="images/project1-thumb.jpg" alt="Project 1" />
                    </a>
                    <a href="images/project2-full.jpg" class="portrait">
                        <img src="images/project2-thumb.jpg" alt="Project 2" />
                    </a>
                </div>
                
                <ul class="actions">
                    <li><a href="#contact" class="button primary scrolly">Get Started</a></li>
                    <li><a href="#about" class="button scrolly">Learn More</a></li>
                </ul>
            </div>
        </section>

        <!-- Contact Form -->
        <section id="contact">
            <header>
                <h2>Get In Touch</h2>
                <p>Ready to start your project?</p>
            </header>
            <div class="content">
                <form method="post" action="#" id="contact-form">
                    <div class="fields">
                        <div class="field half">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your name" required />
                        </div>
                        <div class="field half">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="your@email.com" required />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" placeholder="Tell us about your project" rows="6" required></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" class="primary" /></li>
                        <li><input type="reset" value="Clear Form" /></li>
                    </ul>
                </form>
            </div>
        </section>
    </div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

    <!-- Custom initialization -->
    <script>
    $(document).ready(function() {
        // Initialize form placeholder support
        $('#contact-form').placeholder();
        
        // Mobile-specific optimizations
        if (browser.mobile) {
            $.prioritize('.mobile-priority', true);
        }
    });
    </script>
</body>
</html>
```

### Advanced JavaScript Customization

```javascript
$(document).ready(function() {
    // Custom panel implementation
    $('#mobile-menu').panel({
        delay: 300,
        hideOnClick: true,
        hideOnEscape: true,
        hideOnSwipe: true,
        side: 'left',
        resetScroll: true
    });
    
    // Custom gallery with additional features
    $('.custom-gallery').on('click', 'a', function(e) {
        e.preventDefault();
        
        const href = $(this).attr('href');
        const isVideo = href.match(/\.mp4$/);
        
        if (isVideo) {
            // Custom video handling
            openVideoModal(href);
        } else {
            // Use default image modal
            $(this).parents('.gallery').trigger('click');
        }
    });
    
    // Form validation
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Custom form validation
        const formData = new FormData(this);
        
        // Submit via AJAX
        fetch('/api/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccessMessage();
                this.reset();
            } else {
                showErrorMessage(data.error);
            }
        })
        .catch(error => {
            showErrorMessage('Network error occurred');
        });
    });
});
```

### Server Customization

```javascript
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// API endpoints
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            error: 'All fields are required' 
        });
    }
    
    // Process form submission
    // (integrate with email service, database, etc.)
    
    res.json({ success: true, message: 'Thank you for your message!' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SPA fallback
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

---

## ⚠️ Error Handling

### Common Issues & Solutions

#### JavaScript Errors

**Panel Not Working:**
```javascript
// Check if element exists
if ($('#panel').length === 0) {
    console.error('Panel element not found');
    return;
}

// Verify configuration
$('#panel').panel({
    side: 'left',  // Must specify side for swipe gestures
    target: $('#wrapper')  // Ensure target exists
});
```

**Gallery Modal Issues:**
```javascript
// Ensure images exist and are accessible
$('.gallery a').each(function() {
    const href = $(this).attr('href');
    const img = new Image();
    img.onerror = function() {
        console.warn('Image not found:', href);
    };
    img.src = href;
});
```

**Scrolly Not Working:**
```javascript
// Verify target elements exist
$('.scrolly').each(function() {
    const target = $(this).attr('href');
    if ($(target).length === 0) {
        console.warn('Scroll target not found:', target);
    }
});
```

#### Server Errors

**Port Already in Use:**
```bash
# Find process using port
lsof -ti:3000

# Kill process
kill -9 $(lsof -ti:3000)

# Or use different port
PORT=3001 npm start
```

**Static Files Not Loading:**
```javascript
// Verify static middleware configuration
app.use(express.static(path.join(__dirname)));

// Check file paths
console.log('Static files served from:', path.join(__dirname));
```

### Debugging Tools

```javascript
// Enable debug mode
window.DEBUG = true;

// Debug breakpoints
$(window).on('resize', function() {
    if (window.DEBUG) {
        console.log('Current breakpoint:', breakpoints.current());
    }
});

// Debug panel events
$('#panel').panel({
    // ... config
}).on('show hide', function(event) {
    if (window.DEBUG) {
        console.log('Panel event:', event.type);
    }
});
```

---

## 🚀 Performance

### Optimization Best Practices

#### Image Optimization
```html
<!-- Use appropriate image formats -->
<img src="images/hero.webp" alt="Hero" />
<img src="images/hero.jpg" alt="Hero" />  <!-- Fallback -->

<!-- Lazy loading for galleries -->
<img src="images/thumb.jpg" loading="lazy" alt="Thumbnail" />

<!-- Responsive images -->
<img src="images/hero-mobile.jpg" 
     srcset="images/hero-mobile.jpg 480w, 
             images/hero-tablet.jpg 768w,
             images/hero-desktop.jpg 1200w"
     sizes="(max-width: 480px) 480px, 
            (max-width: 768px) 768px, 
            1200px" 
     alt="Hero Image" />
```

#### JavaScript Performance
```javascript
// Debounce resize events
let resizeTimer;
$(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Resize handling code
    }, 250);
});

// Efficient gallery initialization
$('.gallery').each(function() {
    const $gallery = $(this);
    
    // Pre-generate modal only once
    if (!$gallery.find('.modal').length) {
        $gallery.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>');
    }
});
```

#### CSS Performance
```css
/* Use efficient selectors */
.gallery .modal { /* Good */ }
.gallery > .modal { /* Better - direct child */ }

/* Minimize repaints */
.button {
    will-change: transform;
    transform: translateZ(0); /* Force GPU acceleration */
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Performance Monitoring

```javascript
// Performance timing
window.addEventListener('load', function() {
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});

// Memory usage monitoring
if (performance.memory) {
    setInterval(function() {
        const memory = performance.memory;
        console.log('Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + 'MB'
        });
    }, 30000);
}
```

---

## 🌐 Browser Support

### Compatibility Matrix

| Feature | Chrome | Firefox | Safari | Edge | IE11 | Mobile |
|---------|--------|---------|--------|------|------|--------|
| **Core Functionality** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Gallery Modal** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Smooth Scrolling** | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ |
| **Object-fit** | ✅ | ✅ | ✅ | ✅ | ❌* | ✅ |
| **Placeholder** | ✅ | ✅ | ✅ | ✅ | ❌* | ✅ |
| **Touch Events** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |

*\* Polyfill provided*

### Polyfill Features

**Object-fit Polyfill:**
- Automatically detects browser support
- Falls back to background-image positioning
- Maintains aspect ratios

**Placeholder Polyfill:**
- IE9+ support
- Password field handling
- Form reset compatibility

**Browser Detection:**
```javascript
// Available browser properties
browser.name        // 'chrome', 'firefox', 'safari', 'ie', etc.
browser.version     // Version number
browser.mobile      // Boolean for mobile devices
browser.canUse(feature)  // Feature detection
```

### Graceful Degradation

```css
/* Modern browsers */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Fallback for older browsers */
.no-cssgrid .gallery {
    display: flex;
    flex-wrap: wrap;
}

.no-cssgrid .gallery > a {
    flex: 1 1 250px;
    margin: 10px;
}
```

---

## API Reference Summary

### Quick Reference

**jQuery Utilities:**
- `$(nav).navList()` - Generate navigation list
- `$(element).panel(config)` - Create sliding panel
- `$(form).placeholder()` - Add placeholder polyfill
- `$.prioritize(elements, condition)` - Reorder elements

**CSS Classes:**
- Layout: `.image`, `.gallery`, `.content`, `.actions`
- Buttons: `.button`, `.primary`, `.secondary`, `.large`, `.small`
- States: `.visible`, `.is-mobile`, `.is-preload`
- Grid: `.field`, `.half`, `.third`, `.fields`

**Breakpoints:**
- default (1681px+), xlarge (1281-1680px), large (981-1280px)
- medium (737-980px), small (481-736px), xsmall (361-480px), xxsmall (≤360px)

### Dependencies Checklist

**Required Files:**
- ✅ `jquery.min.js` - Core jQuery library
- ✅ `browser.min.js` - Browser detection
- ✅ `breakpoints.min.js` - Responsive breakpoints
- ✅ `jquery.scrolly.min.js` - Smooth scrolling
- ✅ `util.js` - jQuery extensions
- ✅ `main.js` - Core application logic
- ✅ `main.css` - Main stylesheet

**Optional Enhancements:**
- Font Awesome icons
- Custom fonts
- Additional polyfills

---

## License

Free for personal and commercial use under the [CCA 3.0 license](https://html5up.net/license).

---

*Last updated: $(date)*  
*For issues or contributions, please refer to the project repository.*