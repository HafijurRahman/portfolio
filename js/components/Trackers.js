/**
 * Impact Trackers Section Component
 * Displays QA metrics and impact measurements
 */

const Trackers = () => (
    <section id="impact" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Measurable Results</span>
                <h2 className="text-4xl font-extrabold mt-3">QA Metrics & <span className="gradient-text">Impact</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">Quantifying success is crucial. These are the core metrics I focus on to ensure business value.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {CONFIG.TRACKERS.map((tracker, index) => (
                    <div key={index} className="glass-card p-6 rounded-xl text-center border-b-4 border-cyan-400/50">
                        <p className="text-3xl sm:text-5xl font-extrabold gradient-text mb-2">{tracker.value}</p>
                        <h3 className="text-sm font-mono text-slate-300 uppercase tracking-wider mb-2">{tracker.metric}</h3>
                        <p className="text-xs text-slate-500">{tracker.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
