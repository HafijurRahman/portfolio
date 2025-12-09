/**
 * Projects Section Component
 * Displays portfolio projects with links
 */

const Projects = () => (
    <section id="projects" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Hands-On Experience</span>
                <h2 className="text-4xl font-extrabold mt-3">Key <span className="gradient-text">Projects & Frameworks</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">Showcasing depth in building efficient, scalable, and resilient test automation solutions.</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
                {CONFIG.PROJECTS.map((project, index) => (
                    <div key={index} className="glass-card rounded-xl overflow-hidden flex flex-col">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-48 object-cover object-center" 
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = "https://placehold.co/600x400/1e293b/a5f3fc?text=Placeholder+Image"; 
                            }} 
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <a 
                                    href={project.projectLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sm font-semibold flex items-center gap-1 px-3 py-1 rounded-full text-slate-900 cta-button hover:opacity-90 transition-opacity"
                                >
                                    <i className="ph ph-link-simple text-base"></i> View
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
