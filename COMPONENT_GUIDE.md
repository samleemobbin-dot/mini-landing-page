# Component Usage Guide - Paradigm Shift Template

## Overview

This guide provides detailed examples and best practices for using all components in the Paradigm Shift HTML5 UP template. Each component includes complete HTML examples, CSS classes, and JavaScript integration.

## Table of Contents

1. [Layout Components](#layout-components)
2. [Navigation Components](#navigation-components)
3. [Content Components](#content-components)
4. [Gallery Components](#gallery-components)
5. [Form Components](#form-components)
6. [Interactive Components](#interactive-components)
7. [Responsive Design](#responsive-design)
8. [Best Practices](#best-practices)

---

## Layout Components

### Main Page Wrapper

The foundation container for all page content.

```html
<!DOCTYPE HTML>
<html>
<head>
    <title>Your Page Title</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="is-preload">
    <div id="wrapper">
        <!-- All page content goes here -->
    </div>
    
    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Section Layout

Standard section structure with header and content areas.

```html
<!-- Basic Section -->
<section>
    <header>
        <h2>Section Title</h2>
        <p>Optional section description or subtitle</p>
    </header>
    <div class="content">
        <p>Your section content goes here.</p>
    </div>
</section>

<!-- Section with ID for Navigation -->
<section id="about">
    <header>
        <h2>About Us</h2>
        <p>Learn more about our company and mission</p>
    </header>
    <div class="content">
        <p><strong>We are</strong> a company dedicated to creating amazing experiences.</p>
        <span class="image main">
            <img src="images/about.jpg" alt="About Us" />
        </span>
    </div>
</section>
```

### Intro Section

Special hero section for page headers.

```html
<section class="intro">
    <header>
        <h1>Welcome to Our Site</h1>
        <p>A compelling subtitle that describes your offering</p>
        <ul class="actions">
            <li><a href="#first" class="arrow scrolly">
                <span class="label">Explore</span>
            </a></li>
        </ul>
    </header>
    <div class="content">
        <span class="image fill" data-position="center">
            <img src="images/hero-image.jpg" alt="Hero Image" />
        </span>
    </div>
</section>
```

### Multi-Column Content

Creating responsive column layouts within sections.

```html
<section>
    <header>
        <h2>Our Services</h2>
    </header>
    <div class="content">
        <!-- Two Column Layout -->
        <section>
            <header>
                <h3>Web Development</h3>
                <p>Custom websites and applications</p>
            </header>
            <div class="content">
                <p>We create responsive, modern websites using the latest technologies.</p>
                <ul class="actions">
                    <li><a href="#web-dev" class="button">Learn More</a></li>
                </ul>
            </div>
        </section>
        
        <section>
            <header>
                <h3>Design Services</h3>
                <p>Beautiful, user-friendly designs</p>
            </header>
            <div class="content">
                <p>Our design team creates stunning visual experiences that engage users.</p>
                <ul class="actions">
                    <li><a href="#design" class="button">View Portfolio</a></li>
                </ul>
            </div>
        </section>
    </div>
</section>
```

---

## Navigation Components

### Smooth Scrolling Navigation

Links that smoothly scroll to page sections.

```html
<!-- Navigation Menu -->
<nav id="main-nav">
    <ul>
        <li><a href="#home" class="scrolly">Home</a></li>
        <li><a href="#about" class="scrolly">About</a></li>
        <li><a href="#services" class="scrolly">Services</a></li>
        <li><a href="#portfolio" class="scrolly">Portfolio</a></li>
        <li><a href="#contact" class="scrolly">Contact</a></li>
    </ul>
</nav>

<!-- Arrow Navigation -->
<ul class="actions">
    <li><a href="#next-section" class="arrow scrolly">
        <span class="label">Continue</span>
    </a></li>
</ul>
```

### Mobile Panel Navigation

Sliding panel navigation for mobile devices.

```html
<!-- Mobile Menu Toggle -->
<a href="#menu" class="menu-toggle">
    <span class="label">Menu</span>
</a>

<!-- Mobile Panel -->
<nav id="menu">
    <div class="inner">
        <h2>Menu</h2>
        <ul class="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#" class="close">Close</a>
    </div>
</nav>

<script>
// Initialize mobile panel
$('#menu').panel({
    delay: 500,
    hideOnClick: true,
    hideOnEscape: true,
    side: 'right'
});
</script>
```

---

## Content Components

### Typography Elements

Properly styled text content with semantic HTML.

```html
<section>
    <header>
        <h2>Typography Examples</h2>
    </header>
    <div class="content">
        <!-- Headings -->
        <h1>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <h4>Heading Level 4</h4>
        
        <!-- Paragraphs -->
        <p>This is a <strong>paragraph</strong> with <em>emphasized text</em> and a <a href="#">link</a>.</p>
        
        <!-- Blockquote -->
        <blockquote>
            "This is an inspiring quote that adds credibility to your content."
            <cite>- Famous Person</cite>
        </blockquote>
        
        <!-- Lists -->
        <h4>Features List</h4>
        <ul>
            <li>Responsive design</li>
            <li>Modern CSS Grid layout</li>
            <li>Interactive gallery</li>
            <li>Smooth scrolling navigation</li>
        </ul>
        
        <!-- Ordered List -->
        <h4>Process Steps</h4>
        <ol>
            <li>Initial consultation</li>
            <li>Design and planning</li>
            <li>Development phase</li>
            <li>Testing and launch</li>
        </ol>
        
        <!-- Code Block -->
        <h4>Code Example</h4>
        <pre><code>// Initialize gallery
$('.gallery').each(function() {
    $(this).gallery({
        modal: true,
        keyboard: true
    });
});</code></pre>
    </div>
</section>
```

### Button Components

Various button styles and configurations.

```html
<section>
    <header>
        <h2>Call to Action</h2>
        <p>Ready to get started? Choose an option below.</p>
    </header>
    <div class="content">
        <!-- Primary Actions -->
        <ul class="actions">
            <li><a href="#contact" class="button primary large">Get Started</a></li>
            <li><a href="#portfolio" class="button large">View Work</a></li>
        </ul>
        
        <!-- Secondary Actions -->
        <ul class="actions">
            <li><a href="#download" class="button secondary">Download Brochure</a></li>
            <li><a href="#demo" class="button">Request Demo</a></li>
            <li><a href="#pricing" class="button small">View Pricing</a></li>
        </ul>
        
        <!-- Special Button Types -->
        <ul class="actions">
            <li><a href="mailto:contact@example.com" class="button primary">
                <i class="icon fa-envelope"></i> Email Us
            </a></li>
            <li><a href="tel:+1234567890" class="button">
                <i class="icon fa-phone"></i> Call Now
            </a></li>
        </ul>
    </div>
</section>
```

### Image Components

Different image layouts and positioning options.

```html
<section>
    <header>
        <h2>Image Showcase</h2>
    </header>
    <div class="content">
        <!-- Main Feature Image -->
        <span class="image main">
            <img src="images/feature.jpg" alt="Main Feature" />
        </span>
        
        <!-- Positioned Images -->
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <span class="image fill" data-position="top left" style="flex: 1; min-width: 300px;">
                <img src="images/image1.jpg" alt="Top Left Positioned" />
            </span>
            <span class="image fill" data-position="center" style="flex: 1; min-width: 300px;">
                <img src="images/image2.jpg" alt="Center Positioned" />
            </span>
        </div>
        
        <!-- Custom Positioned Image -->
        <span class="image fill" data-position="25% 75%">
            <img src="images/custom-position.jpg" alt="Custom Position" />
        </span>
    </div>
</section>
```

---

## Gallery Components

### Basic Image Gallery

Simple gallery with modal functionality.

```html
<section>
    <header>
        <h2>Photo Gallery</h2>
        <p>Click any image to view in full size</p>
    </header>
    <div class="content">
        <div class="gallery">
            <a href="images/gallery/fulls/01.jpg" class="landscape">
                <img src="images/gallery/thumbs/01.jpg" alt="Gallery Image 1" />
            </a>
            <a href="images/gallery/fulls/02.jpg" class="portrait">
                <img src="images/gallery/thumbs/02.jpg" alt="Gallery Image 2" />
            </a>
            <a href="images/gallery/fulls/03.jpg" class="landscape">
                <img src="images/gallery/thumbs/03.jpg" alt="Gallery Image 3" />
            </a>
        </div>
    </div>
</section>
```

### Portfolio Gallery

Professional portfolio with project descriptions.

```html
<section id="portfolio">
    <header>
        <h2>Our Work</h2>
        <p>Recent projects and client success stories</p>
    </header>
    <div class="content">
        <div class="gallery portfolio-gallery">
            <a href="images/portfolio/project1-full.jpg" class="landscape">
                <img src="images/portfolio/project1-thumb.jpg" alt="E-commerce Website" />
                <div class="caption">
                    <h4>E-commerce Platform</h4>
                    <p>Custom online store with payment integration</p>
                </div>
            </a>
            <a href="images/portfolio/project2-full.jpg" class="portrait">
                <img src="images/portfolio/project2-thumb.jpg" alt="Mobile App" />
                <div class="caption">
                    <h4>Mobile Application</h4>
                    <p>iOS and Android app for fitness tracking</p>
                </div>
            </a>
            <a href="images/portfolio/project3-full.jpg" class="landscape">
                <img src="images/portfolio/project3-thumb.jpg" alt="Corporate Website" />
                <div class="caption">
                    <h4>Corporate Website</h4>
                    <p>Professional site with CMS integration</p>
                </div>
            </a>
        </div>
    </div>
</section>

<style>
.portfolio-gallery a {
    position: relative;
    overflow: hidden;
}

.portfolio-gallery .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.portfolio-gallery a:hover .caption {
    transform: translateY(0);
}
</style>
```

### Mixed Media Gallery

Gallery supporting images and videos.

```html
<section>
    <header>
        <h2>Media Showcase</h2>
        <p>Images, videos, and interactive content</p>
    </header>
    <div class="content">
        <div class="gallery mixed-media">
            <!-- Images -->
            <a href="images/media/photo1.jpg" class="landscape">
                <img src="images/media/photo1-thumb.jpg" alt="Photo 1" />
            </a>
            
            <!-- Video -->
            <a href="videos/demo.mp4" class="landscape video-item">
                <img src="images/media/video-thumb.jpg" alt="Demo Video" />
                <div class="play-icon">▶</div>
            </a>
            
            <!-- More images -->
            <a href="images/media/photo2.jpg" class="portrait">
                <img src="images/media/photo2-thumb.jpg" alt="Photo 2" />
            </a>
        </div>
    </div>
</section>

<style>
.video-item {
    position: relative;
}

.play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.9);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #333;
}
</style>
```

---

## Form Components

### Contact Form

Complete contact form with validation and styling.

```html
<section id="contact">
    <header>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Send us a message!</p>
    </header>
    <div class="content">
        <form id="contact-form" method="post" action="#">
            <div class="fields">
                <div class="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required />
                </div>
                <div class="field half">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="your@email.com" required />
                </div>
                <div class="field">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Message Subject" />
                </div>
                <div class="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Your message here..." rows="6" required></textarea>
                </div>
            </div>
            <ul class="actions">
                <li><input type="submit" value="Send Message" class="button primary" /></li>
                <li><input type="reset" value="Clear" class="button" /></li>
            </ul>
        </form>
        
        <!-- Contact Information -->
        <div class="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <ul class="contact-list">
                <li>
                    <strong>Phone:</strong>
                    <a href="tel:+1234567890">(123) 456-7890</a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                </li>
                <li>
                    <strong>Address:</strong>
                    123 Business Street<br>
                    City, State 12345
                </li>
            </ul>
        </div>
    </div>
</section>

<script>
// Initialize form with placeholder support
$('#contact-form').placeholder();

// Form submission handling
$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    // Add your form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    this.reset();
});
</script>
```

### Newsletter Signup

Simple newsletter subscription form.

```html
<section class="newsletter">
    <header>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest news and updates</p>
    </header>
    <div class="content">
        <form class="newsletter-form" method="post" action="#">
            <div class="fields">
                <div class="field">
                    <input type="email" name="newsletter-email" placeholder="Enter your email address" required />
                </div>
            </div>
            <ul class="actions">
                <li><input type="submit" value="Subscribe" class="button primary" /></li>
            </ul>
        </form>
    </div>
</section>
```

---

## Interactive Components

### Accordion/Collapsible Content

Expandable content sections.

```html
<section>
    <header>
        <h2>Frequently Asked Questions</h2>
    </header>
    <div class="content">
        <div class="accordion">
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button type="button">What services do you offer?</button>
                </h3>
                <div class="accordion-content">
                    <p>We offer web development, design services, mobile app development, and digital marketing solutions.</p>
                </div>
            </div>
            
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button type="button">How long does a project take?</button>
                </h3>
                <div class="accordion-content">
                    <p>Project timelines vary depending on scope and complexity. Most websites take 4-8 weeks from start to finish.</p>
                </div>
            </div>
            
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button type="button">Do you provide ongoing support?</button>
                </h3>
                <div class="accordion-content">
                    <p>Yes, we offer maintenance packages and ongoing support for all our projects.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.accordion-item {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 5px;
}

.accordion-header button {
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
}

.accordion-content {
    padding: 0 1rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-item.active .accordion-content {
    padding: 1rem;
    max-height: 200px;
}
</style>

<script>
$('.accordion-header button').on('click', function() {
    var $item = $(this).closest('.accordion-item');
    var $content = $item.find('.accordion-content');
    
    if ($item.hasClass('active')) {
        $item.removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');
        $item.addClass('active');
    }
});
</script>
```

### Tabs Component

Tabbed content sections.

```html
<section>
    <header>
        <h2>Our Services</h2>
    </header>
    <div class="content">
        <div class="tabs">
            <ul class="tab-nav">
                <li><a href="#tab1" class="active">Web Development</a></li>
                <li><a href="#tab2">Design</a></li>
                <li><a href="#tab3">Marketing</a></li>
            </ul>
            
            <div class="tab-content">
                <div id="tab1" class="tab-panel active">
                    <h3>Web Development</h3>
                    <p>Custom websites and web applications built with modern technologies.</p>
                    <ul>
                        <li>Responsive design</li>
                        <li>E-commerce solutions</li>
                        <li>Content management systems</li>
                    </ul>
                </div>
                
                <div id="tab2" class="tab-panel">
                    <h3>Design Services</h3>
                    <p>Beautiful, user-centered design that converts visitors into customers.</p>
                    <ul>
                        <li>UI/UX design</li>
                        <li>Brand identity</li>
                        <li>Print design</li>
                    </ul>
                </div>
                
                <div id="tab3" class="tab-panel">
                    <h3>Digital Marketing</h3>
                    <p>Strategic marketing solutions to grow your online presence.</p>
                    <ul>
                        <li>SEO optimization</li>
                        <li>Social media marketing</li>
                        <li>Content strategy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.tab-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ddd;
}

.tab-nav li {
    margin-right: 20px;
}

.tab-nav a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
}

.tab-nav a.active,
.tab-nav a:hover {
    border-bottom-color: #007bff;
}

.tab-panel {
    display: none;
    padding: 20px 0;
}

.tab-panel.active {
    display: block;
}
</style>

<script>
$('.tab-nav a').on('click', function(e) {
    e.preventDefault();
    
    var target = $(this).attr('href');
    
    // Update active tab
    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');
    
    // Show target panel
    $('.tab-panel').removeClass('active');
    $(target).addClass('active');
});
</script>
```

---

## Responsive Design

### Mobile-First Approach

Examples of responsive components that work across all devices.

```html
<!-- Responsive Grid -->
<section>
    <header>
        <h2>Responsive Features</h2>
    </header>
    <div class="content">
        <div class="features-grid">
            <div class="feature-item">
                <div class="icon">🚀</div>
                <h3>Fast Performance</h3>
                <p>Optimized for speed and efficiency</p>
            </div>
            <div class="feature-item">
                <div class="icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Perfect on all devices and screen sizes</p>
            </div>
            <div class="feature-item">
                <div class="icon">🔒</div>
                <h3>Secure</h3>
                <p>Built with security best practices</p>
            </div>
            <div class="feature-item">
                <div class="icon">🎨</div>
                <h3>Customizable</h3>
                <p>Easy to customize and extend</p>
            </div>
        </div>
    </div>
</section>

<style>
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 2rem;
}

.feature-item {
    text-align: center;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 10px;
}

.feature-item .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .feature-item {
        padding: 1.5rem;
    }
}
</style>
```

### Breakpoint-Specific Content

Using JavaScript to show/hide content based on screen size.

```html
<section>
    <div class="content">
        <!-- Desktop Version -->
        <div class="desktop-only">
            <div class="gallery">
                <a href="images/desktop/01.jpg" class="landscape">
                    <img src="images/desktop/thumb01.jpg" alt="Desktop Image 1" />
                </a>
                <!-- More desktop images -->
            </div>
        </div>
        
        <!-- Mobile Version -->
        <div class="mobile-only">
            <div class="gallery">
                <a href="images/mobile/01.jpg" class="landscape">
                    <img src="images/mobile/thumb01.jpg" alt="Mobile Image 1" />
                </a>
                <!-- More mobile-optimized images -->
            </div>
        </div>
    </div>
</section>

<script>
// Show/hide content based on breakpoint
function updateContentVisibility() {
    if (window.innerWidth <= 768) {
        $('.desktop-only').hide();
        $('.mobile-only').show();
        $.prioritize('.mobile-priority', true);
    } else {
        $('.desktop-only').show();
        $('.mobile-only').hide();
        $.prioritize('.mobile-priority', false);
    }
}

// Run on load and resize
$(window).on('load resize', updateContentVisibility);
</script>
```

---

## Best Practices

### Performance Optimization

```html
<!-- Optimized Image Loading -->
<div class="gallery">
    <a href="images/full/image1.jpg" class="landscape">
        <img src="images/thumbs/image1.jpg" 
             alt="Description" 
             loading="lazy"
             width="300" 
             height="200" />
    </a>
</div>

<!-- Preload Critical Images -->
<link rel="preload" as="image" href="images/hero.jpg">
```

### Accessibility

```html
<!-- Proper ARIA Labels -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>

<!-- Skip Link for Screen Readers -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Accessible Gallery -->
<div class="gallery" role="img" aria-label="Photo gallery">
    <a href="images/full/01.jpg" 
       class="landscape"
       aria-label="View larger image of project showcase">
        <img src="images/thumb/01.jpg" 
             alt="Project showcase featuring modern web design" />
    </a>
</div>
```

### SEO Optimization

```html
<!-- Semantic HTML Structure -->
<main id="main-content">
    <article>
        <header>
            <h1>Main Page Title</h1>
            <p>Descriptive subtitle with keywords</p>
        </header>
        
        <section>
            <h2>About Our Services</h2>
            <p>Detailed description with relevant keywords...</p>
        </section>
    </article>
</main>

<!-- Structured Data -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company Name",
    "url": "https://yoursite.com",
    "description": "Your company description"
}
</script>
```

### Code Organization

```javascript
// Organized JavaScript Structure
(function($) {
    'use strict';
    
    var App = {
        init: function() {
            this.setupGallery();
            this.setupForms();
            this.setupNavigation();
        },
        
        setupGallery: function() {
            $('.gallery').each(function() {
                // Gallery initialization
            });
        },
        
        setupForms: function() {
            $('form').placeholder();
        },
        
        setupNavigation: function() {
            $('.scrolly').scrolly({
                offset: 100
            });
        }
    };
    
    // Initialize when DOM is ready
    $(document).ready(function() {
        App.init();
    });
    
})(jQuery);
```

---

## Component Checklist

When implementing components, ensure:

- [ ] **Semantic HTML** - Use proper HTML elements
- [ ] **Accessibility** - Include ARIA labels and keyboard navigation
- [ ] **Responsive Design** - Test on multiple screen sizes
- [ ] **Performance** - Optimize images and minimize JavaScript
- [ ] **Browser Support** - Test in multiple browsers
- [ ] **SEO** - Use proper heading hierarchy and meta tags
- [ ] **Validation** - Validate HTML and CSS
- [ ] **Documentation** - Comment complex functionality

---

*This component guide covers all major components and patterns. For specific customizations, refer to the CSS and JavaScript source files.*