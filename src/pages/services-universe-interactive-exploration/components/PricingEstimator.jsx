import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PricingEstimator = ({ services, onClose }) => {
  const [selectedService, setSelectedService] = useState('web-development');
  const [projectScope, setProjectScope] = useState('medium');
  const [timeline, setTimeline] = useState('standard');
  const [additionalFeatures, setAdditionalFeatures] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const scopeOptions = {
    small: { name: 'Small Project', multiplier: 0.7, description: 'Basic functionality, simple design' },
    medium: { name: 'Medium Project', multiplier: 1.0, description: 'Standard features, custom design' },
    large: { name: 'Large Project', multiplier: 1.5, description: 'Complex functionality, advanced features' },
    enterprise: { name: 'Enterprise', multiplier: 2.2, description: 'Full-scale solution, multiple integrations' }
  };

  const timelineOptions = {
    rush: { name: 'Rush (50% faster)', multiplier: 1.5, description: 'Expedited delivery' },
    standard: { name: 'Standard Timeline', multiplier: 1.0, description: 'Normal development pace' },
    flexible: { name: 'Flexible Timeline', multiplier: 0.85, description: 'Extended timeline for cost savings' }
  };

  const featureOptions = {
    'web-development': [
      { id: 'ecommerce', name: 'E-commerce Integration', price: 1500 },
      { id: 'cms', name: 'Content Management System', price: 800 },
      { id: 'analytics', name: 'Advanced Analytics', price: 600 },
      { id: 'seo', name: 'SEO Optimization', price: 400 },
      { id: 'multilingual', name: 'Multi-language Support', price: 700 }
    ],
    'mobile-apps': [
      { id: 'push', name: 'Push Notifications', price: 500 },
      { id: 'offline', name: 'Offline Functionality', price: 800 },
      { id: 'payment', name: 'Payment Integration', price: 1200 },
      { id: 'social', name: 'Social Media Integration', price: 400 },
      { id: 'geolocation', name: 'GPS/Location Services', price: 600 }
    ],
    'social-media': [
      { id: 'automation', name: 'Posting Automation', price: 300 },
      { id: 'analytics', name: 'Advanced Analytics', price: 200 },
      { id: 'influencer', name: 'Influencer Outreach', price: 500 },
      { id: 'ads', name: 'Paid Advertising Management', price: 800 },
      { id: 'content', name: 'Premium Content Creation', price: 600 }
    ],
    'ai-agents': [
      { id: 'nlp', name: 'Advanced NLP Processing', price: 1000 },
      { id: 'integration', name: 'Multiple Platform Integration', price: 800 },
      { id: 'training', name: 'Custom Model Training', price: 1500 },
      { id: 'analytics', name: 'Conversation Analytics', price: 600 },
      { id: 'multilingual', name: 'Multi-language Support', price: 900 }
    ]
  };

  const basePrice = {
    'web-development': 2500,
    'mobile-apps': 5000,
    'social-media': 1200,
    'ai-agents': 3500
  };

  useEffect(() => {
    const service = services.find(s => s.id === selectedService);
    const base = basePrice[selectedService];
    const scopeMultiplier = scopeOptions[projectScope].multiplier;
    const timelineMultiplier = timelineOptions[timeline].multiplier;
    const featuresPrice = additionalFeatures.reduce((total, featureId) => {
      const feature = featureOptions[selectedService]?.find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);

    const total = (base * scopeMultiplier * timelineMultiplier) + featuresPrice;
    setEstimatedPrice(Math.round(total));
  }, [selectedService, projectScope, timeline, additionalFeatures]);

  const handleFeatureToggle = (featureId) => {
    setAdditionalFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = () => {
    // Mock form submission
    alert(`Quote request submitted! Estimated price: $${estimatedPrice.toLocaleString()}`);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background-dark rounded-xl shadow-premium max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-dark">
          <div>
            <h2 className="text-2xl font-bold text-text-primary-dark">
              Project Pricing Estimator
            </h2>
            <p className="text-text-secondary-dark">
              Get an instant quote for your project
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-premium"
          >
            <Icon name="X" size={24} className="text-text-secondary-dark" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
                  Select Service
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setAdditionalFeatures([]);
                      }}
                      className={`p-4 rounded-lg border transition-premium text-left ${
                        selectedService === service.id
                          ? 'border-accent bg-accent/10' :'border-border-dark hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={service.icon} size={20} className="text-accent" />
                        <div>
                          <div className="font-medium text-text-primary-dark">
                            {service.name}
                          </div>
                          <div className="text-sm text-text-secondary-dark">
                            From {service.startingPrice}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Scope */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
                  Project Scope
                </h3>
                <div className="space-y-3">
                  {Object.entries(scopeOptions).map(([key, option]) => (
                    <label
                      key={key}
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-premium ${
                        projectScope === key
                          ? 'border-accent bg-accent/10' :'border-border-dark hover:border-accent/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="scope"
                        value={key}
                        checked={projectScope === key}
                        onChange={(e) => setProjectScope(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-text-primary-dark">
                          {option.name}
                        </div>
                        <div className="text-sm text-text-secondary-dark">
                          {option.description}
                        </div>
                      </div>
                      <div className="text-accent font-semibold">
                        {option.multiplier}x
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
                  Timeline Preference
                </h3>
                <div className="space-y-3">
                  {Object.entries(timelineOptions).map(([key, option]) => (
                    <label
                      key={key}
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-premium ${
                        timeline === key
                          ? 'border-accent bg-accent/10' :'border-border-dark hover:border-accent/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={key}
                        checked={timeline === key}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-text-primary-dark">
                          {option.name}
                        </div>
                        <div className="text-sm text-text-secondary-dark">
                          {option.description}
                        </div>
                      </div>
                      <div className="text-accent font-semibold">
                        {option.multiplier}x
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
                  Additional Features
                </h3>
                <div className="space-y-3">
                  {featureOptions[selectedService]?.map((feature) => (
                    <label
                      key={feature.id}
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-premium ${
                        additionalFeatures.includes(feature.id)
                          ? 'border-accent bg-accent/10' :'border-border-dark hover:border-accent/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={additionalFeatures.includes(feature.id)}
                        onChange={() => handleFeatureToggle(feature.id)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-text-primary-dark">
                          {feature.name}
                        </div>
                      </div>
                      <div className="text-accent font-semibold">
                        +${feature.price.toLocaleString()}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:sticky lg:top-6 lg:h-fit">
              <div className="glassmorphism rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
                  Price Estimate
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary-dark">Base Price:</span>
                    <span className="text-text-primary-dark">
                      ${basePrice[selectedService].toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary-dark">Scope Multiplier:</span>
                    <span className="text-text-primary-dark">
                      {scopeOptions[projectScope].multiplier}x
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary-dark">Timeline Multiplier:</span>
                    <span className="text-text-primary-dark">
                      {timelineOptions[timeline].multiplier}x
                    </span>
                  </div>
                  {additionalFeatures.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary-dark">Additional Features:</span>
                      <span className="text-text-primary-dark">
                        +${additionalFeatures.reduce((total, featureId) => {
                          const feature = featureOptions[selectedService]?.find(f => f.id === featureId);
                          return total + (feature ? feature.price : 0);
                        }, 0).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border-dark pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-text-primary-dark">
                      Estimated Total:
                    </span>
                    <span className="text-2xl font-bold text-accent">
                      ${estimatedPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary-dark mt-2">
                    *Final price may vary based on specific requirements
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-conversion hover:bg-conversion-light text-white py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
                >
                  Request Detailed Quote
                </button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-text-secondary-dark">
                    Get a personalized quote within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingEstimator;