import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceDetails = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'technologies', name: 'Technologies', icon: 'Code' },
    { id: 'features', name: 'Features', icon: 'Star' },
    { id: 'demo', name: 'Live Demo', icon: 'Play' }
  ];

  const demoContent = {
    'web-development': {
      type: 'code',
      title: 'React Component Example',
      content: `// Modern React Component with Hooks
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = ({ title, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glassmorphism p-6 rounded-xl"
    >
      {isLoading ? (
        <div className="animate-pulse">Loading...</div>
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default InteractiveCard;`
    },
    'mobile-apps': {
      type: 'mockup',
      title: 'Mobile App Interface',
      content: 'Interactive mobile app prototype showcasing cross-platform development capabilities'
    },
    'social-media': {
      type: 'analytics',
      title: 'Campaign Analytics Dashboard',
      content: 'Real-time social media campaign performance metrics and engagement analytics'
    },
    'ai-agents': {
      type: 'chatbot',
      title: 'AI Chatbot Interaction',
      content: 'Live demonstration of intelligent chatbot responses and automation workflows'
    }
  };

  const currentDemo = demoContent[service.id];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Service Information */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                <Icon name={service.icon} size={32} color="var(--color-primary)" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-text-primary-dark">
                  {service.name}
                </h2>
                <p className="text-text-secondary-dark">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-secondary/30 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-premium ${
                    activeTab === tab.id
                      ? 'bg-accent text-primary shadow-md'
                      : 'text-text-secondary-dark hover:text-text-primary-dark'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span className="hidden sm:inline">{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism rounded-xl p-6"
              >
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-text-primary-dark mb-4">
                      Service Overview
                    </h3>
                    <p className="text-text-secondary-dark mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <Icon name="Clock" size={20} className="text-accent mb-2" />
                        <div className="text-sm text-text-secondary-dark">Timeline</div>
                        <div className="font-semibold text-text-primary-dark">{service.timeline}</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <Icon name="DollarSign" size={20} className="text-gold mb-2" />
                        <div className="text-sm text-text-secondary-dark">Starting Price</div>
                        <div className="font-semibold text-text-primary-dark">{service.startingPrice}</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'technologies' && (
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary-dark mb-4">
                      Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {service.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-secondary/30 rounded-lg p-3 text-center"
                        >
                          <div className="text-sm font-medium text-text-primary-dark">
                            {tech}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary-dark mb-4">
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                            <Icon name="Check" size={14} className="text-accent" />
                          </div>
                          <span className="text-text-primary-dark">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'demo' && (
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary-dark mb-4">
                      {currentDemo.title}
                    </h3>
                    {currentDemo.type === 'code' ? (
                      <div className="bg-primary-dark rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-text-secondary-dark font-jetbrains">
                          <code>{currentDemo.content}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="bg-secondary/30 rounded-lg p-8 text-center">
                        <Icon name="Play" size={48} className="text-accent mx-auto mb-4" />
                        <p className="text-text-secondary-dark">{currentDemo.content}</p>
                        <button className="mt-4 bg-accent hover:bg-accent-light text-primary px-4 py-2 rounded-lg font-medium transition-premium">
                          Launch Interactive Demo
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Case Study Preview */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glassmorphism rounded-xl overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={service.caseStudy.image}
                  alt={service.caseStudy.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-text-primary-dark mb-1">
                    {service.caseStudy.title}
                  </h3>
                  <p className="text-accent font-medium">
                    {service.caseStudy.metric}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary-dark mb-4">
                  Discover how our {service.name.toLowerCase()} expertise delivered exceptional results for this client project.
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-accent hover:text-accent-light transition-premium font-medium flex items-center space-x-2">
                    <span>View Full Case Study</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary-dark">
                    <Icon name="Calendar" size={14} />
                    <span>{service.timeline}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;