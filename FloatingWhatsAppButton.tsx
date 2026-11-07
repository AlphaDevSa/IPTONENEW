import React from 'react';
import { WhatsAppSolid } from './components/icons';

const FloatingWhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/27836000152"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
            <WhatsAppSolid className="w-8 h-8" />
        </a>
    );
};

export default FloatingWhatsAppButton;