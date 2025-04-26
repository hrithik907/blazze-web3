
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-blazze-dark flex flex-col items-center justify-center text-blazze-text px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-blazze-primary to-blazze-secondary opacity-30 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <h1 className="text-7xl font-bold text-gradient">404</h1>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-blazze-text-muted mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button 
            className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
          >
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
