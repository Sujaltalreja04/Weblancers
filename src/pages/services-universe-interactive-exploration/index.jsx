import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import ServiceSelector from './components/ServiceSelector';
import ServiceDetails from './components/ServiceDetails';
import PricingEstimator from './components/PricingEstimator';
import ProcessVisualization from './components/ProcessVisualization';
import ComparisonMatrix from './components/ComparisonMatrix';

const ServicesUniverseInteractiveExploration = () => {
  const [selectedService, setSelectedService] = useState('web-development');
  const [showEstimator, setShowEstimator] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      icon: 'Code',
      color: 'from-accent to-accent-light',
      description: 'Modern React/Next.js applications with exceptional performance',
      technologies: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      features: ['Server-Side Rendering', 'Progressive Web Apps', 'API Integration', 'Performance Optimization'],
      timeline: '4-12 weeks',
      startingPrice: '$2,500',
      caseStudy: {
        title: 'E-commerce Platform Transformation',
        metric: '300% increase in conversion rate',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
      }
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: 'Smartphone',
      color: 'from-conversion to-conversion-light',
      description: 'Cross-platform mobile applications with native performance',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      features: ['Cross-Platform Development', 'Native Performance', 'Push Notifications', 'Offline Functionality'],
      timeline: '6-16 weeks',
      startingPrice: '$5,000',
      caseStudy: {
        title: 'Fitness App Launch',
        metric: '50K+ downloads in first month',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop'
      }
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      icon: 'Share2',
      color: 'from-gold to-gold-light',
      description: 'Strategic social media campaigns with measurable results',
      technologies: ['Analytics Tools', 'Content Management', 'Automation', 'A/B Testing'],
      features: ['Content Strategy', 'Campaign Management', 'Analytics & Reporting', 'Community Engagement'],
      timeline: '2-4 weeks setup',
      startingPrice: '$1,200/month',
      caseStudy: {
        title: 'Brand Awareness Campaign',
        metric: '500% increase in engagement',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
      }
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      icon: 'Bot',
      color: 'from-success to-success-light',
      description: 'Intelligent automation and chatbot solutions',
      technologies: ['OpenAI GPT', 'LangChain', 'Python', 'TensorFlow', 'Natural Language Processing'],
      features: ['Custom Chatbots', 'Process Automation', 'Data Analysis', 'Integration APIs'],
      timeline: '3-8 weeks',
      startingPrice: '$3,500',
      caseStudy: {
        title: 'Customer Support Automation',
        metric: '80% reduction in response time',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
      }
    }
  ];

  const currentService = services.find(service => service.id === selectedService);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-subtle">
            <Icon name="Layers" size={32} color="var(--color-primary)" />
          </div>
          <p className="text-text-secondary-dark">Loading Services Universe...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary-dark mb-6">
              Services <span className="text-gradient">Universe</span>
            </h1>
            <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto mb-8">
              Explore our comprehensive digital solutions through interactive experiences. 
              Discover capabilities, compare services, and find the perfect match for your project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowEstimator(true)}
                className="bg-conversion hover:bg-conversion-light text-white px-6 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow flex items-center space-x-2"
              >
                <Icon name="Calculator" size={20} />
                <span>Get Instant Quote</span>
              </button>
              <button
                onClick={() => setShowComparison(true)}
                className="bg-secondary hover:bg-secondary-light text-text-primary-dark px-6 py-3 rounded-lg font-semibold transition-premium border border-border-dark flex items-center space-x-2"
              >
                <Icon name="BarChart3" size={20} />
                <span>Compare Services</span>
              </button>
            </div>
          </motion.div>

          {/* Service Selector */}
          <ServiceSelector
            services={services}
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
          />
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails service={currentService} />

      {/* Process Visualization */}
      <ProcessVisualization service={currentService} />

      {/* Case Studies Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
              Real results from real projects. See how our services transform businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6 hover:shadow-glow transition-premium group cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={service.caseStudy.image}
                    alt={service.caseStudy.title}
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                  <div className={`absolute top-3 right-3 w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                    <Icon name={service.icon} size={16} color="var(--color-primary)" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary-dark mb-2">
                  {service.caseStudy.title}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {service.caseStudy.metric}
                </p>
                <p className="text-text-secondary-dark text-sm">
                  {service.name} • {service.timeline}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio-laboratory-results-showcase"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-premium font-semibold"
            >
              <span>View All Case Studies</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-text-secondary-dark mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEstimator(true)}
                className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow flex items-center justify-center space-x-2"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start Your Project</span>
              </button>
              <Link
                to="/about-methodology-trust-building"
                className="bg-secondary hover:bg-secondary-light text-text-primary-dark px-8 py-4 rounded-lg font-semibold transition-premium border border-border-dark flex items-center justify-center space-x-2"
              >
                <Icon name="Users" size={20} />
                <span>Learn About Our Process</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {showEstimator && (
          <PricingEstimator
            services={services}
            onClose={() => setShowEstimator(false)}
          />
        )}
        {showComparison && (
          <ComparisonMatrix
            services={services}
            onClose={() => setShowComparison(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesUniverseInteractiveExploration;