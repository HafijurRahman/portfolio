/**
 * Core Principles Section Component
 * Displays the four core testing principles
 */

const CorePrinciples = () => (
    <section id="principles" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">My Foundation</span>
                <h2 className="text-4xl font-extrabold mt-3">Driving Quality with <span className="gradient-text">Intent</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">The four pillars that define every testing strategy and execution in my workflow.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {CONFIG.CORE_PRINCIPLES.map((principle, index) => (
                    <div key={index} className="glass-card p-6 rounded-xl text-center">
                        <i className={`ph ${principle.icon} text-4xl gradient-text mb-4 inline-block`}></i>
                        <h3 className="text-xl font-semibold mb-3 text-white">{principle.title}</h3>
                        <p className="text-slate-400 text-sm">{principle.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
