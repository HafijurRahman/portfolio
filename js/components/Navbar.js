/**
 * Navbar Component
 * Responsive navigation bar with scroll effect
 */

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-xl backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-extrabold font-mono tracking-tighter">
                    <span className="text-cyan-400">Hafijur</span><span className="text-white">.QA</span>
                </div>
                <div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-300">
                    <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                    <a href="#principles" className="hover:text-cyan-400 transition-colors">Principles</a>
                    <a href="#code-philosophy" className="hover:text-cyan-400 transition-colors">Code</a>
                    <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
                    <a href="#impact" className="hover:text-cyan-400 transition-colors">Impact</a>
                    <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
                    <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                </div>
                <DownloadCVButton classes="hidden sm:flex text-sm" />
            </div>
        </nav>
    );
};
