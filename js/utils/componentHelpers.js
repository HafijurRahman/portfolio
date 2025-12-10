/**
 * Component Helper Utilities
 * Reusable component patterns and utilities
 * All functions are CORS-safe and work inline
 */

const ComponentHelpers = {
    /**
     * Creates a section header component
     * @param {string} badge - Small badge text
     * @param {string} title - Main title
     * @param {string} gradientText - Text to highlight with gradient
     * @param {string} description - Description text
     * @returns {object} - Section header structure
     */
    createSectionHeader: (badge, title, gradientText, description) => ({
        badge,
        title,
        gradientText,
        description
    }),

    /**
     * Icon mapper for common categories
     */
    iconMap: {
        'Manual': 'ph-hand-tap',
        'Automation': 'ph-code-block',
        'AI': 'ph-brain',
        'Testing': 'ph-check-square',
        'Performance': 'ph-chart-line',
        'Security': 'ph-shield-check',
        'API': 'ph-swap',
        'Mobile': 'ph-device-mobile',
        'Database': 'ph-database'
    },

    /**
     * Color mapper for skill categories
     */
    colorMap: {
        manual: 'blue',
        automation: 'cyan',
        ai: 'purple',
        testing: 'green',
        performance: 'orange'
    },

    /**
     * Format GitHub link for projects
     */
    formatGitHubLink: (username, repo) => {
        return `https://github.com/${username}/${repo}`;
    },

    /**
     * Generate Unsplash image URL with specific parameters
     */
    generateImageUrl: (imageId, width = 600, height = 400) => {
        return `https://images.unsplash.com/photo-${imageId}?w=${width}&h=${height}&fit=crop&q=80`;
    },

    /**
     * Truncate text to specific length
     */
    truncateText: (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    },

    /**
     * Validate email format
     */
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Format skill level to percentage
     */
    formatSkillLevel: (level) => {
        return `${Math.min(100, Math.max(0, level))}%`;
    },

    /**
     * Get icon for tool category
     */
    getCategoryIcon: (category) => {
        const icons = {
            'E2E Testing': 'ph-browsers',
            'Mobile Testing': 'ph-device-mobile',
            'API Testing': 'ph-swap',
            'Performance': 'ph-speedometer',
            'BDD Framework': 'ph-tree-structure',
            'Testing Framework': 'ph-flask',
            'CI/CD': 'ph-git-branch',
            'DevOps': 'ph-cloud',
            'Test Management': 'ph-clipboard-text',
            'Documentation': 'ph-file-text',
            'Version Control': 'ph-git-commit',
            'Database': 'ph-database',
            'Programming': 'ph-code',
            'Cloud Platform': 'ph-cloud-arrow-up',
            'AI Tools': 'ph-brain'
        };
        return icons[category] || 'ph-code';
    },

    /**
     * Generate random color for badges
     */
    getRandomBadgeColor: () => {
        const colors = ['blue', 'cyan', 'purple', 'green', 'orange', 'pink', 'indigo'];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    /**
     * Sort array of objects by property
     */
    sortByProperty: (array, property, ascending = true) => {
        return [...array].sort((a, b) => {
            if (ascending) {
                return a[property] > b[property] ? 1 : -1;
            }
            return a[property] < b[property] ? 1 : -1;
        });
    },

    /**
     * Group array by property
     */
    groupBy: (array, property) => {
        return array.reduce((groups, item) => {
            const key = item[property];
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {});
    },

    /**
     * Debounce function for performance
     */
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Check if element is in viewport
     */
    isInViewport: (element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Make ComponentHelpers available globally
window.ComponentHelpers = ComponentHelpers;
