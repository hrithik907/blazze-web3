import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Wallet, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Successfully signed out');
      navigate('/');
    } catch (error: any) {
      toast.error('Error signing out');
    }
  };

  const navLinks = [
    { title: 'Discover', path: '/discover', submenu: true },
    { title: 'Business', path: '/business', submenu: true },
    { title: 'Builders', path: '/builders', submenu: true },
    { title: 'Community', path: '/community', submenu: true },
    { title: 'About', path: '/about', submenu: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blazze-dark/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="relative h-8 w-8 bg-gradient-to-br from-blazze-primary to-blazze-secondary rounded-md overflow-hidden">
            <div className="absolute inset-0 opacity-80 animate-pulse-glow"></div>
            <div className="absolute inset-0 grid-pattern"></div>
          </div>
          <span className="text-2xl font-bold text-white">BLAZZE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  to={link.path}
                  className="text-blazze-text hover:text-white transition-colors duration-300 flex items-center"
                >
                  {link.title}
                  {link.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 text-blazze-text-muted group-hover:text-white transition-colors duration-300" />
                  )}
                </Link>
                <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-blazze-card border border-blazze-border">
                  <div className="py-2">
                    <Link to={`${link.path}/item1`} className="block px-4 py-2 text-sm text-blazze-text hover:bg-blazze-border">
                      Menu Item 1
                    </Link>
                    <Link to={`${link.path}/item2`} className="block px-4 py-2 text-sm text-blazze-text hover:bg-blazze-border">
                      Menu Item 2
                    </Link>
                    <Link to={`${link.path}/item3`} className="block px-4 py-2 text-sm text-blazze-text hover:bg-blazze-border">
                      Menu Item 3
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {user ? (
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full px-6"
              >
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </Button>
              <Button
                variant="ghost"
                onClick={handleSignOut}
                className="text-blazze-text hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-2" /> Sign Out
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full px-6"
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 h-auto'
            : 'opacity-0 h-0 invisible'
        } bg-blazze-card border-t border-blazze-border`}
      >
        <div className="container mx-auto px-4 py-4">
          {navLinks.map((link, index) => (
            <div key={index} className="py-2">
              <Link
                to={link.path}
                className="text-blazze-text hover:text-white transition-colors duration-300 block"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className="mt-4">
            {user ? (
              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
                >
                  <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="w-full text-blazze-text hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-gradient-to-r from-blazze-primary to-blazze-secondary hover:opacity-90 transition-opacity text-white rounded-full"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
