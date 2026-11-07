
import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, XSocial, WhatsApp, Link, Youtube } from './components/icons';

const FloatingSocialShare: React.FC = () => {
    const [currentUrl, setCurrentUrl] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const updateShareInfo = () => {
            if (typeof window !== 'undefined') {
                // Use the full URL including hash for SPA deep linking
                setCurrentUrl(window.location.href);
                setPageTitle(document.title);
            }
        };

        // Update on mount
        updateShareInfo();

        // Listen for hash changes to update URL
        window.addEventListener('hashchange', updateShareInfo);

        // Periodically check title/url just in case (as React routing might not trigger hashchange event if using pushState, though this app uses hashchange in App.tsx)
        const interval = setInterval(updateShareInfo, 1000);

        return () => {
            window.removeEventListener('hashchange', updateShareInfo);
            clearInterval(interval);
        };
    }, []);

    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(pageTitle);

    const shareLinks = [
        {
            name: 'Facebook',
            icon: <Facebook className="w-5 h-5" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'text-[#1877F2] hover:bg-[#1877F2] hover:text-white bg-blue-50'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            color: 'text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white bg-blue-50'
        },
        {
            name: 'X (Twitter)',
            icon: <XSocial className="w-5 h-5" />,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: 'text-black hover:bg-black hover:text-white bg-gray-50'
        },
        {
            name: 'WhatsApp',
            icon: <WhatsApp className="w-5 h-5" />,
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: 'text-[#25D366] hover:bg-[#25D366] hover:text-white bg-green-50'
        },
        {
            name: 'YouTube',
            icon: <Youtube className="w-5 h-5" />,
            url: 'https://www.youtube.com/@IPTOneTelecoms',
            color: 'text-[#FF0000] hover:bg-[#FF0000] hover:text-white bg-red-50'
        }
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 p-2 bg-white/90 backdrop-blur-md shadow-lg rounded-l-xl border border-r-0 border-gray-200">
            <div className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest mb-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Share
            </div>
            {shareLinks.map((link) => (
                <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-sm ${link.color}`}
                    title={link.name === 'YouTube' ? 'Visit our YouTube Channel' : `Share on ${link.name}`}
                >
                    {link.icon}
                </a>
            ))}
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <button 
                onClick={handleCopy}
                className="p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-sm hover:bg-gray-800 hover:text-white text-gray-600 bg-gray-100 relative group"
                title="Copy Link"
            >
                <Link className="w-5 h-5" />
                {copied && (
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        Copied!
                    </span>
                )}
            </button>
        </div>
    );
};

export default FloatingSocialShare;
