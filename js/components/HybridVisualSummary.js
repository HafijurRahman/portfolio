/**
 * Hybrid Visual Summary Component
 * Displays code snippet showing hybrid workflow
 */

const HybridVisualSummary = () => {
    const lines = CONFIG.VISUAL_SNIPPET.code.trim().split('\n');

    return (
        <section className="pb-24 pt-12 bg-slate-900/40">
            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">My <span className="gradient-text">Hybrid Workflow</span> in Action</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        The core logic: Rigorous manual testing for new features, automated speed for regression.
                    </p>
                </div>

                <div className="code-window p-6 pt-4 lg:p-8 lg:pt-5 relative border border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                        <div className="window-controls">
                            <div className="control-dot bg-red-500"></div>
                            <div className="control-dot bg-yellow-500"></div>
                            <div className="control-dot bg-green-500"></div>
                        </div>
                        <span className="font-mono text-sm text-slate-500">{CONFIG.VISUAL_SNIPPET.title}</span>
                        <div></div>
                    </div>

                    <pre className="text-sm font-mono leading-relaxed">
                        <code className="text-slate-300">
                            {lines.map((line, index) => {
                                const lineNumber = String(index + 1).padStart(2, '0');
                                let lineClass = 'text-slate-300';
                                if (line.trim().startsWith('//')) {
                                    lineClass = 'text-green-400 italic';
                                } else if (line.includes('if (') || line.includes('else {')) {
                                    lineClass = 'text-cyan-400 font-semibold';
                                } else if (line.includes('executeExploratoryTest') || line.includes('runCypressSuite')) {
                                    lineClass = 'text-yellow-300';
                                }

                                return (
                                    <div key={index} className="flex hover:bg-slate-800/50 transition-colors duration-100">
                                        <span className="text-slate-600 w-8 text-right pr-3 flex-shrink-0 select-none">
                                            {lineNumber}
                                        </span>
                                        <span className={lineClass}>
                                            {line.replace(/\s/g, '\u00a0')}
                                        </span>
                                    </div>
                                );
                            })}
                        </code>
                    </pre>

                    <div className="absolute right-4 bottom-4 md:right-[-20px] md:bottom-[-20px] transition-all duration-500 hover:scale-105">
                        <div className="glass-card hybrid-box p-4 flex items-center gap-4 text-white min-w-40 md:min-w-56">
                            <i className="ph ph-target text-4xl text-white"></i>
                            <div>
                                <p className="text-2xl font-extrabold leading-none">Zero</p>
                                <p className="text-xs font-mono tracking-widest uppercase mt-1">Bug Leakage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
