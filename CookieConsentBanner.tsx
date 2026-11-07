import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };
  
  const handlePrivacyPolicyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate('/privacy-policy');
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 shadow-lg animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
          <a href="/privacy-policy" onClick={handlePrivacyPolicyClick} className="font-semibold underline hover:text-brand-green">
            Privacy Policy
          </a>.
        </p>
        <div className="flex-shrink-0 flex gap-3">
          <Button onClick={handleDecline} variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
            Decline
          </Button>
          <Button onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieConsentBanner;