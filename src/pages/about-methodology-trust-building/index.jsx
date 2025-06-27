import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';

import FounderStory from './components/FounderStory';
import MethodologyTimeline from './components/MethodologyTimeline';
import TeamCulture from './components/TeamCulture';
import ValuesInAction from './components/ValuesInAction';
import ProcessTransparency from './components/ProcessTransparency';
import CertificationDisplay from './components/CertificationDisplay';
import InnovationShowcase from './components/InnovationShowcase';
import SecurityPractices from './components/SecurityPractices';
import GuaranteePolicies from './components/GuaranteePolicies';

const AboutMethodologyTrustBuilding = () => {
  const [activeSection, setActiveSection] = useState('founder');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationSections = [
    { id: 'founder', label: 'Founder Story', icon: 'User' },
    { id: 'methodology', label: 'Methodology', icon: 'GitBranch' },
    { id: 'team', label: 'Team Culture', icon: 'Users' },
    { id: 'values', label: 'Values', icon: 'Heart' },
    { id: 'process', label: 'Process', icon: 'Workflow' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'innovation', label: 'Innovation', icon: 'Lightbulb' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'guarantee', label: 'Guarantee', icon: 'CheckCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navigationSections.map(section => section.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary-dark mb-6">
              About Our
              <span className="text-gradient block">Methodology</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary-dark mb-8 leading-relaxed">
              Discover the story, process, and values that drive exceptional digital experiences. 
              Transparency, innovation, and partnership at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('founder')}
                className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
              >
                Explore Our Story
              </button>
              <Link
                to="/client-portal-project-hub"
                className="border border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-lg font-semibold transition-premium"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className={`sticky top-16 lg:top-20 z-40 transition-premium ${isScrolled ? 'bg-primary-dark/95 backdrop-blur-md shadow-premium' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 space-x-2">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-premium ${
                  activeSection === section.id
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        {/* Founder Story Section */}
        <section id="founder">
          <FounderStory />
        </section>

        {/* Methodology Timeline Section */}
        <section id="methodology">
          <MethodologyTimeline />
        </section>

        {/* Team Culture Section */}
        <section id="team">
          <TeamCulture />
        </section>

        {/* Values in Action Section */}
        <section id="values">
          <ValuesInAction />
        </section>

        {/* Process Transparency Section */}
        <section id="process">
          <ProcessTransparency />
        </section>

        {/* Certification Display Section */}
        <section id="certifications">
          <CertificationDisplay />
        </section>

        {/* Innovation Showcase Section */}
        <section id="innovation">
          <InnovationShowcase />
        </section>

        {/* Security Practices Section */}
        <section id="security">
          <SecurityPractices />
        </section>

        {/* Guarantee Policies Section */}
        <section id="guarantee">
          <GuaranteePolicies />
        </section>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-gold/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark mb-6">
              Ready to Experience Our Methodology?
            </h2>
            <p className="text-xl text-text-secondary-dark mb-8">
              Let's discuss how our proven process can transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/client-portal-project-hub"
                className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio-laboratory-results-showcase"
                className="border border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-lg font-semibold transition-premium"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              <p className="text-text-secondary-dark mb-4">
                Your web, your work, your way. Premium digital solutions crafted with precision and passion.
              </p>
            </div>
            
            <div>
              <h3 className="text-text-primary-dark font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services-universe-interactive-exploration" className="block text-text-secondary-dark hover:text-accent transition-premium">Services</Link>
                <Link to="/portfolio-laboratory-results-showcase" className="block text-text-secondary-dark hover:text-accent transition-premium">Portfolio</Link>
                <Link to="/knowledge-center-thought-leadership" className="block text-text-secondary-dark hover:text-accent transition-premium">Knowledge</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-text-primary-dark font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary-dark hover:text-accent transition-premium">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-text-secondary-dark hover:text-accent transition-premium">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-text-secondary-dark hover:text-accent transition-premium">
                  <Icon name="Github" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border-dark mt-8 pt-8 text-center">
            <p className="text-text-secondary-dark">
              © {new Date().getFullYear()} Weblancer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMethodologyTrustBuilding;