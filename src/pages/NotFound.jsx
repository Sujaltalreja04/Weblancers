import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertTriangle" size={48} color="var(--color-primary)" />
          </div>
          <h1 className="text-6xl font-bold text-text-primary-dark mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary-dark mb-4">Page Not Found</h2>
          <p className="text-text-secondary-dark mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage-premium-freelance-platform"
            className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-light text-white px-6 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
          >
            <Icon name="Home" size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              to="/services-universe-interactive-exploration"
              className="text-accent hover:text-accent-light transition-premium"
            >
              Services
            </Link>
            <Link
              to="/portfolio-laboratory-results-showcase"
              className="text-accent hover:text-accent-light transition-premium"
            >
              Portfolio
            </Link>
            <Link
              to="/about-methodology-trust-building"
              className="text-accent hover:text-accent-light transition-premium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;