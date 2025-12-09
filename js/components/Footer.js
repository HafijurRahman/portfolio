/**
 * Footer Component
 * Site footer with copyright information
 */

const Footer = () => (
    <footer className="bg-black/20 border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Md. Hafijur Rahman. All rights reserved.</p>
            <p className="mt-2 font-mono text-xs">Built with React & Tailwind CSS.</p>
        </div>
    </footer>
);
