import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeProjects: 0,
    satisfiedClients: 0,
    yearsExperience: 0,
    completedProjects: 0
  });

  const finalMetrics = {
    activeProjects: 24,
    satisfiedClients: 150,
    yearsExperience: 8,
    completedProjects: 200
  };

  useEffect(() => {
    const animateMetrics = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setMetrics({
          activeProjects: Math.floor(finalMetrics.activeProjects * progress),
          satisfiedClients: Math.floor(finalMetrics.satisfiedClients * progress),
          yearsExperience: Math.floor(finalMetrics.yearsExperience * progress),
          completedProjects: Math.floor(finalMetrics.completedProjects * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setMetrics(finalMetrics);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  const metricItems = [
    {
      key: 'activeProjects',
      label: 'Active Projects',
      icon: 'Zap',
      color: 'from-accent to-accent-light',
      suffix: '+'
    },
    {
      key: 'satisfiedClients',
      label: 'Satisfied Clients',
      icon: 'Users',
      color: 'from-success to-success-light',
      suffix: '+'
    },
    {
      key: 'yearsExperience',
      label: 'Years Experience',
      icon: 'Award',
      color: 'from-gold to-gold-light',
      suffix: '+'
    },
    {
      key: 'completedProjects',
      label: 'Completed Projects',
      icon: 'CheckCircle',
      color: 'from-conversion to-conversion-light',
      suffix: '+'
    }
  ];

  return (
    <section className="py-16 bg-primary-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark mb-4">
            Real-Time <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-text-secondary-dark max-w-2xl mx-auto">
            Live metrics showcasing our commitment to excellence and client success.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metricItems.map((item, index) => (
            <div
              key={item.key}
              className="glassmorphism rounded-2xl p-6 text-center transform transition-premium hover:scale-105 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-subtle`}>
                <Icon name={item.icon} size={32} color="white" />
              </div>

              {/* Metric Value */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-text-primary-dark">
                  {metrics[item.key]}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-accent">
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-text-secondary-dark font-medium text-sm md:text-base">
                {item.label}
              </p>

              {/* Live Indicator */}
              <div className="flex items-center justify-center space-x-2 mt-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success font-medium">LIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 glassmorphism rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-text-secondary-dark text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-text-secondary-dark text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
              <span className="text-text-secondary-dark text-sm">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
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

export default LiveMetrics;