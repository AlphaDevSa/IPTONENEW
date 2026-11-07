
import React, { useEffect, useRef } from 'react';
import { X } from './icons';

interface ModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children, maxWidth = 'max-w-2xl' }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    
    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Close modal on backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div 
                ref={modalRef}
                className={`bg-white rounded-2xl shadow-2xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto animate-slide-in-up`}
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors" aria-label="Close modal">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 sm:p-8">
                    {children}
                </div>
            </div>
            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                
                @keyframes slide-in-up { 
                    from { opacity: 0; transform: translateY(20px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .animate-slide-in-up { animation: slide-in-up 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default Modal;
