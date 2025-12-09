/**
 * Technical Expertise Section Component
 * Displays manual and automation skills with progress bars
 */

const TechnicalExpertise = () => (
    <section id="expertise" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Skill Stack</span>
                <h2 className="text-4xl font-extrabold mt-3">Technical <span className="gradient-text">Expertise</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">A balanced profile of deep manual rigor and efficient automation engineering.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="glass-card p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                        <i className="ph ph-hand-tap text-3xl"></i> Manual & Hybrid Testing
                    </h3>
                    <div className="space-y-4">
                        {CONFIG.SKILLS.manual.map((skill, index) => (
                            <AnimatedProgressBar key={index} {...skill} />
                        ))}
                    </div>
                </div>

                <div className="glass-card p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                        <i className="ph ph-code-block text-3xl"></i> Automation & Frameworks
                    </h3>
                    <div className="space-y-4">
                        {CONFIG.SKILLS.automation.map((skill, index) => (
                            <AnimatedProgressBar key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
