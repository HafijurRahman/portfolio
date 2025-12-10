# Portfolio Quick Reference Card

## Quick Start
```bash
# Start local server
cd "e:\Resources (Hafij)\Resources (Office)\Projects\SelfLearning\Git Local Repo(s)\hrahman.github.io"
python -m http.server 8000

# Open browser
http://localhost:8000
```

## Common Operations

### Add New Project
**File:** `js/data/config.js` → `PROJECTS` array

```javascript
{
    title: "Project Name",
    desc: "Short description",
    tech: ["Tool1", "Tool2"],
    github: "https://github.com/user/repo",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-ID?w=400&h=300"
}
```

### Add New Tool
**File:** `js/data/config.js` → `TOOLS_TECH` array

```javascript
{
    name: "Tool Name",
    category: "Category Name", // e.g., "Test Automation"
    icon: "https://cdn.simpleicons.org/toolname"
}
```

**Available Categories:**
- Test Management
- Test Automation
- Performance Testing
- API Testing
- CI/CD & DevOps
- Programming Languages
- Database & Data
- AI-Powered Tools
- Code Collaboration
- Security Testing
- Cloud Platforms
- Agile & Documentation
- IDE & Editors
- Mobile Testing
- Browser Testing

### Add New Skill
**File:** `js/data/config.js` → `SKILLS` object

```javascript
SKILLS: {
    manual: [{ name: "Skill Name", level: 90 }],      // Manual testing
    automation: [{ name: "Skill Name", level: 85 }],  // Automation
    ai: [{ name: "Skill Name", level: 80 }]           // AI tools
}
```

### Add New Certification
**File:** `js/data/config.js` → `CERTIFICATIONS` array

```javascript
{
    title: "Cert Name",
    issuer: "Organization",
    date: "Month Year",
    icon: "ph-certificate" // Phosphor icon
}
```

### Add New Job
**File:** `js/data/config.js` → `WORK_EXPERIENCE` array

```javascript
{
    title: "Job Title",
    company: "Company Name",
    duration: "Start - End",
    current: true, // or false
    responsibilities: ["Task 1", "Task 2", "Task 3"]
}
```

## Utility Functions

### CONFIG_UTILS (Data Access)
```javascript
CONFIG_UTILS.getProjectsByTech('Selenium')    // Filter projects
CONFIG_UTILS.getToolsByCategory('AI Tools')   // Get tools in category
CONFIG_UTILS.getToolCategories()              // All categories
CONFIG_UTILS.getSkillsByType('automation')    // Get skills by type
CONFIG_UTILS.getSkillTypes()                  // ['manual', 'automation', 'ai']
CONFIG_UTILS.getTotalToolsCount()             // Total number of tools
CONFIG_UTILS.getCurrentWorkExperience()       // Current job
```

### ComponentHelpers (UI Utilities)
```javascript
// Component builders
ComponentHelpers.createSectionHeader(title, subtitle, description)

// Formatters
ComponentHelpers.formatSkillLevel(90)                    // "90%"
ComponentHelpers.formatGitHubLink('user', 'repo')        // Full URL
ComponentHelpers.generateImageUrl(400, 300, 'testing')   // Unsplash URL
ComponentHelpers.truncateText(text, 100)                 // Truncate with "..."

// Validators
ComponentHelpers.isValidEmail('test@example.com')        // true/false

// Category helpers
ComponentHelpers.getCategoryIcon('Test Automation')      // Icon class
ComponentHelpers.getRandomBadgeColor()                   // Color class

// Data manipulation
ComponentHelpers.sortByProperty(array, 'name')           // Sorted array
ComponentHelpers.groupBy(array, 'category')              // Grouped object

// Performance
ComponentHelpers.debounce(func, 200)                     // Debounced function
ComponentHelpers.isInViewport(element)                   // true/false
```

## File Locations

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | All React components | 576 |
| `js/data/config.js` | Portfolio data + CONFIG_UTILS | 478 |
| `js/utils/componentHelpers.js` | UI utilities | 166 |
| `js/utils/helpers.js` | General utilities | 68 |
| `css/styles.css` | Custom styles | - |

## Section IDs (for navigation)

```javascript
#home              // Hero section
#visual            // Visual Summary
#principles        // Core Principles
#philosophy        // Code Philosophy
#expertise         // Technical Expertise
#methodologies     // Test Methodologies
#tools             // Tools & Technologies
#impact            // QA Metrics
#experience        // Work Experience
#certifications    // Certifications
#projects          // Projects
#contact           // Contact
```

## Styling Guide

### Colors
```css
Primary:   cyan-400     (#22d3ee)
Secondary: slate-800    (#1e293b)
Accent:    purple-500   (#a855f7)
Text:      slate-300    (#cbd5e1)
```

### Common Classes
```css
glass-card          // Glassmorphism effect
gradient-text       // Gradient text effect
hover-lift          // Lift on hover
animate-pulse       // Pulse animation
```

### Responsive Breakpoints
```css
sm: 640px           // Small devices
md: 768px           // Medium devices
lg: 1024px          // Large devices
xl: 1280px          // Extra large
2xl: 1536px         // 2X Extra large
```

## Testing Checklist

- [ ] No console errors
- [ ] All images load
- [ ] Links work correctly
- [ ] Responsive on mobile (< 640px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px+)
- [ ] Smooth scrolling works
- [ ] Navbar shows/hides on scroll
- [ ] All sections display correctly

## Deployment

```bash
# 1. Test locally
python -m http.server 8000

# 2. Commit changes
git add .
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main

# 4. Changes live in ~1 minute
# https://your-username.github.io
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Component not rendering | Check browser console for syntax errors |
| Tool not in right category | Verify category name spelling in config.js |
| Image not loading | Check Unsplash URL format and ID |
| CORS warning in console | Normal with file:// protocol, no impact |
| Changes not showing | Clear browser cache (Ctrl+Shift+R) |
| Navbar not hiding | Check scroll threshold (100px default) |

## Performance Tips

1. **Image URLs** - Always add `?w=400&h=300` to Unsplash URLs
2. **Debounce scroll** - Use `ComponentHelpers.debounce()` for scroll handlers
3. **Minimize data** - Keep descriptions concise (< 100 chars)
4. **Test mobile first** - Most users browse on mobile devices

## Support

**Documentation:**
- Full guide: `OPTIMIZATION_GUIDE.md`
- This reference: `QUICK_REFERENCE.md`

**Resources:**
- Tailwind CSS: https://tailwindcss.com/docs
- Phosphor Icons: https://phosphoricons.com
- React Docs: https://react.dev
- Unsplash API: https://unsplash.com/developers

---

**Last Updated:** January 2025
**Quick Reference Version:** 1.0
