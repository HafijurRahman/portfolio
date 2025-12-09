/**
 * Utility Helper Functions
 * Reusable functions for common operations
 */

const Helpers = {
    /**
     * Exponential backoff fetch utility
     * @param {string} url - The URL to fetch
     * @param {object} options - Fetch options
     * @param {number} maxRetries - Maximum number of retries
     * @returns {Promise} - Fetch promise
     */
    exponentialBackoffFetch: async (url, options, maxRetries = 5) => {
        let retries = 0;
        while (retries < maxRetries) {
            try {
                const response = await fetch(url, options);
                if (response.ok) return response;
                throw new Error(`HTTP error! status: ${response.status}`);
            } catch (error) {
                retries++;
                if (retries >= maxRetries) throw error;
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, retries) * 1000));
            }
        }
    },

    /**
     * Placeholder for Gemini API call
     * @param {string} userQuery - User query
     * @param {string} systemInstruction - System instruction
     * @param {boolean} grounding - Enable grounding
     * @returns {object} - API response
     */
    callGeminiApi: async (userQuery, systemInstruction, grounding = true) => {
        console.warn("API call placeholder: Not executing Gemini API call in this UI component.");
        return { text: "API response placeholder.", sources: [] };
    },

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
     * Sanitize HTML to prevent XSS
     * @param {string} html - HTML string to sanitize
     * @returns {string} - Sanitized HTML
     */
    sanitizeHtml: (html) => {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }
};

// Make Helpers available globally in browser
window.Helpers = Helpers;
