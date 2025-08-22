# Paradigm Shift - HTML5 UP Template

![Paradigm Shift](https://img.shields.io/badge/Template-HTML5%20UP-blue.svg)
![License](https://img.shields.io/badge/License-CCA%203.0-green.svg)
![Node](https://img.shields.io/badge/Node-%3E%3D16-brightgreen.svg)

A modern, responsive landing page template featuring CSS Grid layouts, interactive galleries, and smooth scrolling navigation. Built with Express.js server, jQuery, and custom CSS components.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd paradigm-shift
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
paradigm-shift/
├── assets/
│   ├── css/
│   │   ├── main.css              # Main stylesheet
│   │   └── fontawesome-all.min.css
│   ├── js/
│   │   ├── main.js               # Core application logic
│   │   ├── util.js               # jQuery utility functions
│   │   ├── jquery.min.js         # jQuery library
│   │   ├── browser.min.js        # Browser detection
│   │   ├── breakpoints.min.js    # Responsive breakpoints
│   │   └── jquery.scrolly.min.js # Smooth scrolling
│   ├── sass/                     # SASS source files
│   └── webfonts/                 # Font files
├── images/                       # Image assets
├── server.js                     # Express.js server
├── index.html                    # Main HTML file
├── package.json                  # Dependencies and scripts
├── API_DOCUMENTATION.md          # Complete API reference
├── COMPONENT_GUIDE.md            # Component usage guide
└── README.md                     # This file
```

## 📚 Documentation

### Complete Documentation Suite

- **[📖 API Documentation](API_DOCUMENTATION.md)** - Complete reference for all APIs, functions, and components
- **[🧩 Component Guide](COMPONENT_GUIDE.md)** - Detailed usage examples and best practices
- **[🎨 CSS Classes Reference](#css-classes-reference)** - All available CSS classes and utilities
- **[⚙️ Configuration Guide](#configuration)** - Server and build configuration

## 🎨 Features

### ✨ Core Features

- **Responsive Design** - Mobile-first approach with CSS Grid
- **Interactive Gallery** - Modal image viewer with keyboard navigation
- **Smooth Scrolling** - Animated navigation between sections
- **Modern CSS** - CSS Grid, Flexbox, and custom properties
- **Express.js Server** - Static file serving with SPA routing
- **jQuery Integration** - Enhanced interactivity and animations
- **Cross-browser Support** - Polyfills for older browsers

### 🎯 Components

- **Hero Section** - Full-screen intro with background image
- **Content Sections** - Flexible layout with headers and content areas
- **Image Gallery** - Grid-based gallery with modal popup
- **Button System** - Multiple button styles and sizes
- **Form Components** - Styled forms with placeholder support
- **Navigation** - Smooth scrolling and mobile-friendly panels

## 🛠️ Configuration

### Environment Variables

```bash
PORT=3000                    # Server port (default: 3000)
NODE_ENV=production          # Environment mode
```

### Server Configuration

The Express.js server is configured in `server.js`:

```javascript
const port = process.env.PORT || 3000;

// Static file serving
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
```

### Responsive Breakpoints

The template uses these breakpoints (defined in `main.js`):

- **XXSmall:** ≤ 360px
- **XSmall:** 361px - 480px  
- **Small:** 481px - 736px
- **Medium:** 737px - 980px
- **Large:** 981px - 1280px
- **XLarge:** 1281px - 1680px
- **Default:** ≥ 1681px

## 🎨 CSS Classes Reference

### Layout Classes

| Class | Description |
|-------|-------------|
| `#wrapper` | Main page container |
| `.intro` | Hero section styling |
| `.content` | Content area container |
| `.actions` | Button container |

### Button Classes

| Class | Description |
|-------|-------------|
| `.button` | Base button style |
| `.button.primary` | Primary button (accent color) |
| `.button.secondary` | Secondary button style |
| `.button.large` | Large button size |
| `.button.small` | Small button size |

### Image Classes

| Class | Description |
|-------|-------------|
| `.image` | Base image container |
| `.image.main` | Full-width main image |
| `.image.fill` | Container-filling image |
| `[data-position]` | Image positioning attribute |

### Gallery Classes

| Class | Description |
|-------|-------------|
| `.gallery` | Gallery container |
| `.landscape` | Landscape image orientation |
| `.portrait` | Portrait image orientation |
| `.modal` | Auto-generated modal overlay |

### Utility Classes

| Class | Description |
|-------|-------------|
| `.scrolly` | Enables smooth scrolling |
| `.arrow` | Arrow navigation styling |
| `.is-preload` | Page loading state |
| `.is-mobile` | Mobile device detection |
| `.visible` | Show hidden elements |

## 🔧 Customization

### Adding New Sections

```html
<section id="custom-section">
    <header>
        <h2>Custom Section</h2>
        <p>Section description</p>
    </header>
    <div class="content">
        <p>Your content here</p>
        <ul class="actions">
            <li><a href="#next" class="button primary scrolly">Continue</a></li>
        </ul>
    </div>
</section>
```

### Custom Gallery

```html
<div class="gallery">
    <a href="images/full/custom1.jpg" class="landscape">
        <img src="images/thumbs/custom1.jpg" alt="Custom Image 1" />
    </a>
    <a href="images/full/custom2.jpg" class="portrait">
        <img src="images/thumbs/custom2.jpg" alt="Custom Image 2" />
    </a>
</div>
```

### Custom JavaScript

```javascript
$(document).ready(function() {
    // Initialize custom components
    $('#custom-panel').panel({
        delay: 500,
        hideOnClick: true,
        side: 'left'
    });
    
    // Add form placeholder support
    $('form').placeholder();
    
    // Custom gallery behavior
    $('.custom-gallery').on('click', 'a', function(e) {
        // Custom gallery logic
    });
});
```

## 📱 Mobile Optimization

### Responsive Images

```html
<!-- Responsive image with positioning -->
<span class="image fill" data-position="center">
    <img src="images/mobile-optimized.jpg" 
         alt="Mobile optimized image"
         loading="lazy" />
</span>
```

### Mobile Navigation

```javascript
// Mobile panel setup
$('#mobile-menu').panel({
    delay: 500,
    hideOnClick: true,
    hideOnEscape: true,
    side: 'right'
});
```

### Touch Optimization

The template includes touch-optimized interactions:

- Swipe gestures for gallery navigation
- Touch-friendly button sizes
- Optimized tap targets
- Smooth scrolling on mobile devices

## 🚀 Deployment

### Static Hosting

For static hosting (Netlify, Vercel, GitHub Pages):

1. Build the project (if using build tools)
2. Upload the entire project directory
3. Configure the hosting service to serve `index.html`

### Node.js Hosting

For Node.js hosting (Heroku, Railway, DigitalOcean):

1. **Prepare for production**
   ```bash
   npm install --production
   ```

2. **Set environment variables**
   ```bash
   export PORT=3000
   export NODE_ENV=production
   ```

3. **Start the server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Responsive Design** - Test on mobile, tablet, desktop
- [ ] **Gallery Functionality** - Click images, modal behavior
- [ ] **Smooth Scrolling** - Navigation between sections
- [ ] **Form Validation** - Placeholder and validation behavior
- [ ] **Cross-browser** - Chrome, Firefox, Safari, Edge
- [ ] **Performance** - Page load speed and image optimization

### Browser Support

- **Modern Browsers:** Full support
- **Internet Explorer 11:** Supported with polyfills
- **Mobile Browsers:** Full responsive support
- **Legacy Browsers:** Graceful degradation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and structure
- Test on multiple browsers and devices
- Update documentation for new features
- Optimize images and assets
- Ensure accessibility compliance

## 📄 License

This project is licensed under the **Creative Commons Attribution 3.0 License**.

- **Free for personal and commercial use**
- **Attribution required**
- See [HTML5 UP License](https://html5up.net/license) for details

## 🙏 Credits

### Original Template
- **Paradigm Shift** by [HTML5 UP](https://html5up.net)
- **Author:** [@ajlkn](https://twitter.com/ajlkn)

### Dependencies
- **jQuery** - DOM manipulation and events
- **Font Awesome** - Icon fonts
- **Express.js** - Web server framework
- **Responsive Tools** - Mobile-first utilities

### Demo Images
- **Unsplash** - High-quality stock photos
- **Note:** Demo images not included in download

## 📞 Support

### Documentation
- [API Documentation](API_DOCUMENTATION.md) - Complete API reference
- [Component Guide](COMPONENT_GUIDE.md) - Usage examples and best practices

### Community
- [HTML5 UP](https://html5up.net) - Original template source
- [GitHub Issues](../../issues) - Bug reports and feature requests

### Professional Support
For custom development or consulting:
- Email: [your-email@domain.com](mailto:your-email@domain.com)
- Website: [your-website.com](https://your-website.com)

---

## 🚀 Get Started Now!

```bash
# Quick setup
npm install && npm start
```

Then open [http://localhost:3000](http://localhost:3000) to see your site!

**Need help?** Check out the [API Documentation](API_DOCUMENTATION.md) and [Component Guide](COMPONENT_GUIDE.md) for detailed instructions and examples.

---

*Made with ❤️ using HTML5 UP's Paradigm Shift template*