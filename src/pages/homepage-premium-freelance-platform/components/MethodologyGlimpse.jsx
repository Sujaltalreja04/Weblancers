import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const MethodologyGlimpse = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const methodologySteps = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, target audience, and competitive landscape to create a comprehensive project roadmap.',
      icon: 'Search',
      color: 'from-accent to-accent-light',
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Specifications', 'Timeline & Milestones']
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      description: 'Create stunning visual designs and interactive prototypes that bring your vision to life with pixel-perfect precision.',
      icon: 'Palette',
      color: 'from-gold to-gold-light',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Visual Designs', 'Interactive Prototypes']
    },
    {
      id: 'development',
      title: 'Development & Testing',
      description: 'Transform designs into fully functional, responsive, and optimized digital solutions using cutting-edge technologies.',
      icon: 'Code',
      color: 'from-success to-success-light',
      duration: '3-6 weeks',
      deliverables: ['Clean Code', 'Responsive Design', 'Quality Assurance']
    },
    {
      id: 'launch',
      title: 'Launch & Optimization',
      description: 'Deploy your project with comprehensive testing, performance optimization, and ongoing support for continued success.',
      icon: 'Rocket',
      color: 'from-conversion to-conversion-light',
      duration: '1 week',
      deliverables: ['Live Deployment', 'Performance Reports', 'Support Documentation']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('methodology-glimpse');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % methodologySteps.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible, methodologySteps.length]);

  return (
    <section id="methodology-glimpse" className="py-20 bg-secondary-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary-dark mb-6">
            Our <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
            A proven process that ensures exceptional results through strategic planning, creative excellence, and technical mastery.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {methodologySteps.map((step, index) => (
              <div
                key={step.id}
                className={`cursor-pointer transform transition-premium ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`glassmorphism rounded-2xl p-6 ${
                  activeStep === index ? 'border-2 border-accent shadow-glow' : 'border border-border-dark'
                }`}>
                  <div className="flex items-start space-x-4">
                    {/* Step Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeStep === index ? 'animate-pulse-subtle' : ''
                    }`}>
                      <Icon name={step.icon} size={24} color="white" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-bold ${
                          activeStep === index ? 'text-accent' : 'text-text-primary-dark'
                        } transition-premium`}>
                          {step.title}
                        </h3>
                        <span className="text-sm text-text-secondary-dark bg-primary/20 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-text-secondary-dark text-sm mb-3 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Visualization */}
          <div className="relative">
            <div className="glassmorphism rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                {/* Large Icon */}
                <div className={`w-32 h-32 bg-gradient-to-br ${methodologySteps[activeStep].color} rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse-subtle shadow-glow`}>
                  <Icon name={methodologySteps[activeStep].icon} size={64} color="white" />
                </div>

                {/* Step Details */}
                <h3 className="text-2xl font-bold text-text-primary-dark mb-4">
                  {methodologySteps[activeStep].title}
                </h3>
                
                <p className="text-text-secondary-dark mb-6 max-w-md">
                  {methodologySteps[activeStep].description}
                </p>

                {/* Progress Indicator */}
                <div className="flex justify-center space-x-2 mb-6">
                  {methodologySteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-premium ${
                        index === activeStep ? 'bg-accent' : 'bg-border-dark'
                      }`}
                    />
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/about-methodology-trust-building"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-premium font-medium"
                >
                  <span>Learn More About Our Process</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded-full animate-pulse-subtle"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-lg transform rotate-45 animate-pulse-subtle"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary-dark mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary-dark mb-6">
              Let's discuss how our proven methodology can transform your digital presence.
            </p>
            <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MethodologyGlimpse;