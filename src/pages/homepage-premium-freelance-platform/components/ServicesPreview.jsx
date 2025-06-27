import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      icon: 'Code',
      color: 'from-accent to-accent-light',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Ready'],
      demo: 'Interactive code editor preview'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      icon: 'Smartphone',
      color: 'from-gold to-gold-light',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
      demo: 'Mobile interface mockup'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'Strategic social media campaigns and content creation that builds brand awareness and drives engagement.',
      icon: 'Share2',
      color: 'from-conversion to-conversion-light',
      features: ['Content Strategy', 'Brand Management', 'Analytics & Insights', 'Community Building'],
      demo: 'Social media dashboard'
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      description: 'Intelligent automation solutions and AI-powered tools that streamline business processes and enhance productivity.',
      icon: 'Bot',
      color: 'from-success to-success-light',
      features: ['Custom AI Solutions', 'Process Automation', 'Machine Learning', 'Integration Ready'],
      demo: 'AI chatbot interface'
    }
  ];

  return (
    <section className="py-20 bg-secondary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary-dark mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and elevate your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <div className="glassmorphism rounded-2xl p-6 h-full transform transition-premium group-hover:scale-105 group-hover:shadow-glow">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 transform transition-premium group-hover:rotate-6`}>
                  <Icon name={service.icon} size={32} color="white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary-dark mb-3 group-hover:text-accent transition-premium">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary-dark mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary-dark">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Demo Preview */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-primary-dark/95 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 transform transition-all duration-300">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-subtle`}>
                        <Icon name={service.icon} size={40} color="white" />
                      </div>
                      <p className="text-text-primary-dark font-medium mb-4">{service.demo}</p>
                      <Link
                        to="/services-universe-interactive-exploration"
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-premium"
                      >
                        <span>Explore Service</span>
                        <Icon name="ArrowRight" size={16} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Learn More Link */}
                <Link
                  to="/services-universe-interactive-exploration"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-premium text-sm font-medium"
                >
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services-universe-interactive-exploration"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow"
          >
            <span>Explore All Services</span>
            <Icon name="ExternalLink" size={20} />
          </Link>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-gold/10 to-accent/10 rounded-lg transform rotate-45 animate-pulse-subtle hidden lg:block"></div>
    </section>
  );
};

export default ServicesPreview;