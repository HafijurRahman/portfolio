/**
 * Hero Section Component
 * Main landing section with parallax effect
 */

const Hero = () => {
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = 1 - Math.min(scrollY / 600, 0.8);
    const transform = `translateY(${scrollY * 0.3}px)`;

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 10%, #22d3ee20, transparent 70%)' }}></div>
            
            <div className="max-w-7xl mx-auto px-6 z-10 text-center" style={{ opacity, transform, transition: 'transform 0s, opacity 0s' }}>
                <h2 className="text-xl text-cyan-400 font-mono mb-6 tracking-wide uppercase">
                    {CONFIG.PROFILE.role}
                </h2>
                <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-white">
                    <span className="gradient-text">Bridging the gap between </span>
                    <br className="hidden sm:block" />
                    <span className="gradient-text">Manual Precision</span> & Automation Speed.
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                    {CONFIG.PROFILE.about}
                </p>
                
                <div className="flex justify-center gap-6">
                    <DownloadCVButton classes="text-base" />
                    <a href="#projects" className="flex items-center gap-2 font-semibold px-6 py-2 rounded-full text-cyan-400 border-2 border-cyan-400/50 hover:bg-cyan-500/10 transition-colors">
                        View Work <i className="ph ph-arrow-right text-lg"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};
