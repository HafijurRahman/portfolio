/**
 * Contact Section Component
 * Contact information and social links
 */

const Contact = () => (
    <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Let's <span className="gradient-text">Connect</span></h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12">I am currently open to new Senior Hybrid QA Engineer roles. Feel free to reach out for collaboration or opportunities.</p>

            <div className="flex justify-center items-center gap-6 text-xl">
                <a 
                    href={`mailto:${CONFIG.PROFILE.email}`} 
                    className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                    <i className="ph ph-envelope-simple text-3xl"></i>
                    <span className="hidden sm:inline">{CONFIG.PROFILE.email}</span>
                </a>
                <a 
                    href={CONFIG.PROFILE.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                    <i className="ph-fill ph-linkedin-logo text-3xl"></i>
                </a>
                <a 
                    href={CONFIG.PROFILE.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                    <i className="ph-fill ph-github-logo text-3xl"></i>
                </a>
            </div>
        </div>
    </section>
);
