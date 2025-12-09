/**
 * Download CV Button Component
 * Reusable button for downloading CV
 */

const DownloadCVButton = ({ classes }) => (
    <a 
        href={CONFIG.PROFILE.resumeUrl} 
        target="_blank" 
        download 
        className={`flex items-center gap-2 font-semibold px-6 py-2 rounded-full text-slate-900 cta-button ${classes}`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.18-3.18a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.18 3.18V3a.75.75 0 0 1 .75-.75Zm-9 14.25a.75.75 0 0 1 .75.75v2.25c0 .414.336.75.75.75h14.5a.75.75 0 0 1 .75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25A2.25 2.25 0 0 1 20.25 22H3.75A2.25 2.25 0 0 1 1.5 19.5v-2.25a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        Download CV
    </a>
);
