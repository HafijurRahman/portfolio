/**
 * Certifications Section Component
 * Displays professional certifications
 */

const Certifications = () => (
    <section id="certifications" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Formal Validation</span>
                <h2 className="text-4xl font-extrabold mt-3">Professional <span className="gradient-text">Certifications</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">Commitment to continuous learning and validated industry expertise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {CONFIG.CERTIFICATIONS.map((cert, index) => (
                    <a 
                        key={index} 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-xl flex items-start gap-4 hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                        <i className="ph ph-seal-check text-3xl text-blue-400 mt-1 flex-shrink-0"></i>
                        <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                            <p className="text-sm text-slate-400">{cert.issuer} ({cert.year})</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);
