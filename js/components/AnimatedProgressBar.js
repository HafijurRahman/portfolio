/**
 * Animated Progress Bar Component
 * Progress bar with intersection observer animation
 */

const AnimatedProgressBar = ({ name, level, color }) => {
    const barRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) {
                observer.unobserve(barRef.current);
            }
        };
    }, []);

    return (
        <div className="mb-4" ref={barRef}>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-300">{name}</span>
                <span className={`text-xs font-semibold text-${color}`}>{level}%</span>
            </div>
            <div className="w-full progress-bar-bg rounded-full h-2">
                <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out bg-${color}`}
                    style={{ width: isVisible ? `${level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};
