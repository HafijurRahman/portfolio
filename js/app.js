/**
 * Main Application Component
 * Orchestrates all portfolio sections
 */

const App = () => {
    // Validate that configuration data is available
    if (!CONFIG || !CONFIG.PROFILE) {
        return (
            <div className="p-10 text-center text-red-500">
                Error: Configuration data is missing. Please check config.js
            </div>
        );
    }
    
    return (
        <div className="antialiased">
            <Navbar />
            <Hero />
            <HybridVisualSummary />
            <CorePrinciples />
            <CodePhilosophy />
            <TechnicalExpertise />
            <Trackers />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

// Initialize the application
try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
} catch (error) {
    console.error("React rendering failed:", error);
    document.getElementById('root').innerHTML = `
        <div class="p-10 text-center text-red-500 bg-slate-900 min-h-screen">
            <h1 class="text-2xl font-bold mb-4">Critical Rendering Error</h1>
            <p>The application failed to start. Please check the browser console for details: ${error.message}</p>
        </div>
    `;
}
