/**
 * Utility Helper Functions
 * General purpose utilities for the portfolio
 * Note: Most component-specific utilities are in componentHelpers.js
 */

const Helpers = {
    /**
     * Format date to readable string
     * @param {Date|string} date - Date to format
     * @returns {string} - Formatted date string
     */
    formatDate: (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    /**
     * Sanitize HTML to prevent XSS attacks
     * @param {string} html - HTML string to sanitize
     * @returns {string} - Sanitized HTML
     */
    sanitizeHtml: (html) => {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    },

    /**
     * Copy text to clipboard
     * @param {string} text - Text to copy
     * @returns {Promise<boolean>} - Success status
     */
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            return false;
        }
    }
};

// Make Helpers available globally in browser
window.Helpers = Helpers;
