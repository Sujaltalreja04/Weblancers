import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import LiveMetrics from './components/LiveMetrics';
import ClientTrustBar from './components/ClientTrustBar';
import MethodologyGlimpse from './components/MethodologyGlimpse';
import PortfolioHighlights from './components/PortfolioHighlights';
import ClientTestimonials from './components/ClientTestimonials';
import FloatingCTA from './components/FloatingCTA';

const HomepagePremiumFreelancePlatform = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background-dark overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Live Metrics */}
      <LiveMetrics />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Client Trust Bar */}
      <ClientTrustBar />

      {/* Methodology Glimpse */}
      <MethodologyGlimpse />

      {/* Portfolio Highlights */}
      <PortfolioHighlights />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Footer */}
      <footer className="bg-primary-dark border-t border-border-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl font-jetbrains">W</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-text-primary-dark">Weblancer</span>
                  <div className="text-xs text-text-secondary-dark font-jetbrains">PRECISION CRAFTSMANSHIP</div>
                </div>
              </div>
              <p className="text-text-secondary-dark mb-4 max-w-md">
                Where creativity meets technology. Transform your digital presence with our premium web solutions.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-text-secondary-dark hover:text-accent cursor-pointer transition-premium" />
                <Icon name="Linkedin" size={20} className="text-text-secondary-dark hover:text-accent cursor-pointer transition-premium" />
                <Icon name="Github" size={20} className="text-text-secondary-dark hover:text-accent cursor-pointer transition-premium" />
                <Icon name="Instagram" size={20} className="text-text-secondary-dark hover:text-accent cursor-pointer transition-premium" />
              </div>
            </div>
            
            <div>
              <h4 className="text-text-primary-dark font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services-universe-interactive-exploration" className="text-text-secondary-dark hover:text-accent transition-premium">Web Development</Link></li>
                <li><Link to="/services-universe-interactive-exploration" className="text-text-secondary-dark hover:text-accent transition-premium">Mobile Apps</Link></li>
                <li><Link to="/services-universe-interactive-exploration" className="text-text-secondary-dark hover:text-accent transition-premium">Social Media</Link></li>
                <li><Link to="/services-universe-interactive-exploration" className="text-text-secondary-dark hover:text-accent transition-premium">AI Agents</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-text-primary-dark font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about-methodology-trust-building" className="text-text-secondary-dark hover:text-accent transition-premium">About</Link></li>
                <li><Link to="/portfolio-laboratory-results-showcase" className="text-text-secondary-dark hover:text-accent transition-premium">Portfolio</Link></li>
                <li><Link to="/knowledge-center-thought-leadership" className="text-text-secondary-dark hover:text-accent transition-premium">Knowledge</Link></li>
                <li><Link to="/client-portal-project-hub" className="text-text-secondary-dark hover:text-accent transition-premium">Client Portal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary-dark text-sm">
              © {new Date().getFullYear()} Weblancer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary-dark hover:text-accent text-sm transition-premium">Privacy Policy</a>
              <a href="#" className="text-text-secondary-dark hover:text-accent text-sm transition-premium">Terms of Service</a>
              <a href="#" className="text-text-secondary-dark hover:text-accent text-sm transition-premium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepagePremiumFreelancePlatform;