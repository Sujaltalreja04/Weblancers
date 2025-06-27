import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-premium-freelance-platform', icon: 'Home' },
    { name: 'Services', path: '/services-universe-interactive-exploration', icon: 'Layers' },
    { name: 'Portfolio', path: '/portfolio-laboratory-results-showcase', icon: 'Briefcase' },
    { name: 'About', path: '/about-methodology-trust-building', icon: 'Users' },
    { name: 'Knowledge', path: '/knowledge-center-thought-leadership', icon: 'BookOpen' },
    { name: 'Client Portal', path: '/client-portal-project-hub', icon: 'Shield' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        isScrolled 
          ? 'bg-primary-dark/95 backdrop-blur-md shadow-premium' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-premium-freelance-platform" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <img 
                src="https://i.ibb.co/q3dnyX5z/Whats-App-Image-2025-06-26-at-17-33-59-03c6c590.jpg" 
                alt="Weblancer Logo" 
                className="w-14 h-14 object-contain rounded bg-white p-1 shadow-lg" 
                style={{ maxWidth: '56px', maxHeight: '56px' }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-text-primary-dark">Weblancer</span>
              <div className="text-xs text-text-secondary-dark font-jetbrains">YOUR WEB YOUR WORK YOUR WAY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-premium flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-conversion hover:bg-conversion-light text-white px-6 py-2.5 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle">
              Start Your Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary-dark hover:bg-secondary/50 transition-premium"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-premium ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-primary-dark/98 backdrop-blur-md border-t border-border-dark">
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-premium ${
                  isActivePath(item.path)
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border-dark mt-4">
              <button 
                onClick={closeMenu}
                className="w-full bg-conversion hover:bg-conversion-light text-white px-6 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
              >
                Start Your Project
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;