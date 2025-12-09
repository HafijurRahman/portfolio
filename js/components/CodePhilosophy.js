/**
 * Code Philosophy Section Component
 * Displays the smart test executor code snippet
 */

const CodePhilosophy = () => {
    const lines = CONFIG.CODE_SNIPPET.code.trim().split('\n');
    
    return (
        <section id="code-philosophy" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Engineering Mindset</span>
                    <h2 className="text-4xl font-extrabold mt-3">Automation <span className="gradient-text">Code Philosophy</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-4">Strategic test execution based on risk and feature type.</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="code-window p-6 pt-4 relative border border-slate-700/50">
                        <div className="flex items-center justify-between mb-4">
                            <div className="window-controls">
                                <div className="control-dot bg-red-500"></div>
                                <div className="control-dot bg-yellow-500"></div>
                                <div className="control-dot bg-green-500"></div>
                            </div>
                            <span className="font-mono text-sm text-slate-500">{CONFIG.CODE_SNIPPET.title}</span>
                            <div></div>
                        </div>
                        <pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                            <code className="text-slate-300">
                                {lines.map((line, index) => {
                                    const lineNumber = String(index + 1).padStart(2, '0');
                                    let lineClass = 'text-slate-300';
                                    if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('*')) {
                                        lineClass = 'text-green-400 italic';
                                    } else if (line.includes('const') || line.includes('if (') || line.includes('return')) {
                                        lineClass = 'text-cyan-400 font-semibold';
                                    } else if (line.includes('console.log') || line.includes('Example:')) {
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
                    </div>
                </div>
            </div>
        </section>
    );
};
