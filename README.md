# Md. Hafijur Rahman - Portfolio Website

A modern, responsive portfolio website showcasing expertise as a Senior Hybrid QA Engineer. Built with React 18, Tailwind CSS, and clean architecture principles for optimal maintainability and performance.

## 🚀 Live Demo

Visit the live portfolio: [https://hafijurrahman.github.io](https://hafijurrahman.github.io)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Glass-morphism effects, smooth animations, and parallax scrolling
- **Modular Architecture**: Well-organized component structure for easy maintenance
- **Performance Optimized**: Lazy loading, intersection observers, and minimal dependencies
- **Accessibility**: Semantic HTML and ARIA-compliant components
- **SEO Ready**: Proper meta tags and semantic structure
- **Dynamic Content**: All content managed through centralized configuration file

### Key Sections

1. **Hero Section**: Eye-catching introduction with parallax effects and gradient text
2. **Hybrid Workflow**: Visual code snippet demonstrating testing philosophy
3. **Core Principles**: Four pillars of quality assurance approach
4. **Code Philosophy**: Smart test execution strategy showcase with syntax highlighting
5. **Technical Expertise**: Animated skill progress bars with manual and automation proficiencies
6. **Test Methodologies**: 6 comprehensive testing approaches (Functional, Regression, API, Performance, Security, Mobile)
7. **Tools & Technologies**: 43+ tools across 11 categories with hover effects and category badges
8. **QA Metrics & Impact**: Quantifiable achievements and KPIs with real-time values
9. **Work Experience**: Complete career timeline with 4 positions and detailed highlights
10. **Professional Certifications**: 10 industry-recognized certifications
11. **Projects Portfolio**: 12 comprehensive automation frameworks and testing projects
12. **Contact**: Social links and professional contact information

## 🛠 Technology Stack

### Core Technologies
- **Frontend Framework**: React 18 (UMD build via CDN)
- **Styling**: Tailwind CSS 3 (CDN)
- **JSX Transformation**: Babel Standalone 7
- **Icons**: Phosphor Icons
- **Fonts**: Google Fonts (Inter & JetBrains Mono)

### External Resources
- **Images**: Unsplash (dynamic project images)
- **Tool Icons**: Icons8 API
- **Hosting**: GitHub Pages

### Key Features
- Client-side rendering (no build process required)
- Inline JSX to avoid CORS issues
- CSS custom properties for theming
- Intersection Observer API for animations

## 📁 Project Structure

```
hrahman.github.io/
│
├── index.html                    # Main HTML entry point (inline React components)
├── index-inline.html             # Backup/alternative version
├── README.md                     # Project documentation (this file)
├── .gitignore                    # Git ignore rules
│
├── .github/
│   └── workflows/
│       └── static.yml            # GitHub Pages deployment workflow
│
├── css/
│   └── styles.css               # Custom CSS (glass-morphism, gradients, animations)
│
└── js/
    ├── portfolio.js             # Consolidated components (backup/reference)
    ├── app.js                   # Main application component (backup/reference)
    ├── data/
    │   └── config.js            # ⭐ Centralized configuration and data
    ├── utils/
    │   └── helpers.js           # Utility functions and helpers
    └── components/              # Individual component files (reference only)
        ├── AnimatedProgressBar.js
        ├── Certifications.js
        ├── CodePhilosophy.js
        ├── Contact.js
        ├── CorePrinciples.js
        ├── DownloadCVButton.js
        ├── Footer.js
        ├── Hero.js
        ├── HybridVisualSummary.js
        ├── Navbar.js
        ├── Projects.js
        ├── TechnicalExpertise.js
        └── Trackers.js
```

**Note**: All React components are now embedded inline in `index.html` to resolve CORS issues when loading from file:// protocol. The separate component files in `js/components/` are kept as reference only.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- A text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript, and React

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HafijurRahman/hrahman.github.io.git
   cd hrahman.github.io
   ```

2. **Open locally**
   
   **Option A: Direct file opening** (may have CORS limitations)
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

   **Option B: Use a local development server** (recommended)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View in browser**
   
   Navigate to `http://localhost:8000`

### Troubleshooting

**Issue**: "Loading Portfolio..." stuck on screen
- **Solution**: Use a local HTTP server instead of opening the file directly

**Issue**: Images not loading
- **Solution**: Check internet connection (images load from Unsplash and Icons8 CDNs)

**Issue**: Styles not applying
- **Solution**: Ensure `css/styles.css` exists and path is correct in `index.html`

## 🎨 Customization

### Updating Personal Information

All content is centralized in `js/data/config.js`. Edit this single file to update:

#### Profile Information
```javascript
PROFILE: {
    name: "Your Name",
    role: "Your Role",
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    resumeUrl: "path/to/your/resume.pdf"  // Update with actual CV link
}
```

#### Adding Skills
```javascript
SKILLS: {
    manual: [
        { name: "Skill Name", level: 95, color: "blue-400" }
    ],
    automation: [
        { name: "Skill Name", level: 90, color: "cyan-400" }
    ]
}
```

#### Adding Certifications
```javascript
CERTIFICATIONS: [
    {
        title: "Certification Name",
        issuer: "Issuing Organization",
        year: 2024,
        link: "https://certification-link.com"
    }
]
```

#### Adding Work Experience
```javascript
WORK_EXPERIENCE: [
    {
        company: "Company Name",
        role: "Your Role",
        period: "2020 - Present",
        location: "City, Country",
        highlights: [
            "Achievement 1",
            "Achievement 2",
            "Achievement 3"
        ]
    }
]
```

#### Adding Projects
```javascript
PROJECTS: [
    {
        title: "Project Name",
        stack: ["Tech1", "Tech2", "Tech3"],
        description: "Brief project description...",
        imageUrl: "https://your-image-url.com/image.png",
        projectLink: "https://github.com/yourrepo"
    }
]
```

#### Adding Test Methodologies
```javascript
TEST_METHODOLOGIES: [
    {
        title: "Methodology Name",
        description: "Description of testing approach...",
        icon: "⚡"
    }
]
```

#### Adding Tools & Technologies
```javascript
TOOLS_TECH: {
    "Category Name": [
        {
            name: "Tool Name",
            icon: "https://img.icons8.com/color/48/tool-icon.png",
            description: "Brief tool description"
        }
    ]
}
```

### Modifying Component Content

**All components are inline in `index.html`**. To modify sections:

1. Open `index.html`
2. Locate the component function (e.g., `const Hero = () => { ... }`)
3. Edit the JSX directly within the inline `<script>` tag
4. Save and refresh the page

**Example: Modifying Hero Section**
```javascript
// Find in index.html around line 100-150
const Hero = () => (
    <section className="hero-section">
        {/* Edit content here */}
        <h1>Your Custom Title</h1>
    </section>
);
```

### Styling Changes

Modify `css/styles.css` to adjust:
- **Colors and gradients**: Update CSS variables
- **Animations**: Adjust keyframes and transitions
- **Glass-morphism effects**: Modify `.glass-card` class
- **Component-specific styles**: Edit class definitions

**Example: Changing primary gradient**
```css
.gradient-text {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### Adding New Sections

Since all code is inline in `index.html`:

1. **Add data to `config.js`** (if needed)
   ```javascript
   NEW_SECTION_DATA: [
       { title: "Item 1", value: "Data 1" }
   ]
   ```

2. **Add component function in `index.html`**
   ```javascript
   const NewSection = () => {
       const data = window.CONFIG.NEW_SECTION_DATA;
       return (
           <section id="new-section" className="py-24 px-6">
               {/* Your JSX content */}
           </section>
       );
   };
   ```

3. **Include in App component**
   ```javascript
   const App = () => (
       <div>
           <Navbar />
           <Hero />
           {/* ... other components ... */}
           <NewSection />
           <Footer />
       </div>
   );
   ```

4. **Add navigation link** (in Navbar component)
   ```javascript
   <a href="#new-section">New Section</a>
   ```

## 🌐 Deployment

### GitHub Pages (Current Setup)

This portfolio is configured to deploy automatically via GitHub Pages:

1. **Push to repository**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically deploy** to:
   - URL: `https://yourusername.github.io`
   - Branch: `main`
   - Directory: root `/`

3. **Configuration**: Check `.github/workflows/static.yml` for deployment settings

### Alternative Deployment Options

#### Netlify
1. Connect your GitHub repository
2. Build settings: None needed (static site)
3. Publish directory: `/`

#### Vercel
```bash
npx vercel --prod
```

#### Custom Server
Upload all files to your web server's public directory via FTP/SFTP.

## 🌍 Browser Support

- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer: Not supported

## 🧹 File Management

### Active Files
These files are actively used and should not be deleted:
- `index.html` - Main entry point with all inline components
- `css/styles.css` - Custom styling
- `js/data/config.js` - Portfolio data
- `js/utils/helpers.js` - Utility functions
- `.gitignore` - Git configuration
- `.github/workflows/static.yml` - GitHub Pages deployment

### Reference Files (Optional)
These files are kept for reference but are not actively used:
- `js/components/*.js` (13 files) - Original modular component files
- `js/portfolio.js` - Consolidated component backup
- `js/app.js` - Original main app component
- `index-inline.html` - Alternative/backup HTML file

**You can safely delete reference files** if you want a cleaner repository, but they may be useful for:
- Understanding the original modular architecture
- Reference when creating new sections
- Reverting to modular approach if needed

## 📊 Performance Optimization

### Current Optimizations
- ✅ CDN-based dependencies (React, Tailwind)
- ✅ Intersection Observer for lazy animations
- ✅ Minimal external HTTP requests
- ✅ Optimized images via Unsplash CDN
- ✅ No build process required

### Further Optimization Tips
- Consider self-hosting fonts for offline access
- Implement service worker for PWA capabilities
- Add lazy loading for project images
- Minify inline CSS/JS for production

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Md. Hafijur Rahman**
- Email: hafijur.r@gmail.com
- LinkedIn: [linkedin.com/in/hafijur-r](https://www.linkedin.com/in/hafijur-r)
- GitHub: [github.com/HafijurRahman](https://github.com/HafijurRahman)

---

**Note**: This portfolio was built with maintainability in mind. All React components are embedded inline in `index.html` to avoid CORS issues during local development. The separate component files in `js/components/` directory are kept as reference documentation of the original modular approach.

Made with ❤️ by Md. Hafijur Rahman

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select branch: `main` (or your preferred branch)
   - Select folder: `/ (root)`
   - Click Save

2. **Access your site**
   - Your site will be available at: `https://yourusername.github.io`

3. **Custom Domain** (Optional)
   - Add a `CNAME` file with your domain name
   - Configure DNS settings with your domain provider

### Other Hosting Platforms

The site is static and can be deployed to:
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Static website hosting
- **Cloudflare Pages**: Git-based deployment

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Quality & Best Practices

This project follows several coding best practices:

- **Separation of Concerns**: HTML, CSS, and JavaScript are properly separated
- **Component-Based Architecture**: Reusable React components
- **DRY Principle**: Configuration centralized in `config.js`
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Intersection Observer API for optimized animations
- **Maintainability**: Well-commented code and clear file structure

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Md. Hafijur Rahman**
- Email: contact@example.com *(Update with your email)*
- LinkedIn: [md-hafijur-rahman](https://www.linkedin.com/in/md-hafijur-rahman)
- GitHub: [@mhrahman-qa](https://github.com/mhrahman-qa)

---

### 🙏 Acknowledgments

- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library for building user interfaces
- **Phosphor Icons** - Flexible icon family for interfaces
- **Google Fonts** - Beautiful web fonts

---

**Built with ❤️ by Md. Hafijur Rahman** | Last Updated: December 2025
