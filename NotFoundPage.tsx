import React from 'react';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigation();

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-brand-blue sm:text-8xl">404</h1>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button onClick={() => navigate('/')} size="lg" className="mt-10 font-semibold">
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;