import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ComparisonMatrix = ({ services, onClose }) => {
  const [selectedServices, setSelectedServices] = useState(['web-development', 'mobile-apps']);

  const comparisonFeatures = [
    {
      category: 'Development',
      features: [
        { name: 'Custom Design', key: 'customDesign' },
        { name: 'Responsive Layout', key: 'responsive' },
        { name: 'Performance Optimization', key: 'performance' },
        { name: 'SEO Optimization', key: 'seo' },
        { name: 'Analytics Integration', key: 'analytics' }
      ]
    },
    {
      category: 'Features',
      features: [
        { name: 'User Authentication', key: 'auth' },
        { name: 'Payment Integration', key: 'payment' },
        { name: 'Content Management', key: 'cms' },
        { name: 'API Integration', key: 'api' },
        { name: 'Real-time Updates', key: 'realtime' }
      ]
    },
    {
      category: 'Support',
      features: [
        { name: 'Ongoing Maintenance', key: 'maintenance' },
        { name: 'Technical Support', key: 'support' },
        { name: 'Training & Documentation', key: 'training' },
        { name: 'Performance Monitoring', key: 'monitoring' },
        { name: 'Security Updates', key: 'security' }
      ]
    }
  ];

  const serviceCapabilities = {
    'web-development': {
      customDesign: 'full',
      responsive: 'full',
      performance: 'full',
      seo: 'full',
      analytics: 'full',
      auth: 'full',
      payment: 'full',
      cms: 'full',
      api: 'full',
      realtime: 'partial',
      maintenance: 'full',
      support: 'full',
      training: 'full',
      monitoring: 'full',
      security: 'full'
    },
    'mobile-apps': {
      customDesign: 'full',
      responsive: 'native',
      performance: 'full',
      seo: 'none',
      analytics: 'full',
      auth: 'full',
      payment: 'full',
      cms: 'partial',
      api: 'full',
      realtime: 'full',
      maintenance: 'full',
      support: 'full',
      training: 'full',
      monitoring: 'full',
      security: 'full'
    },
    'social-media': {
      customDesign: 'partial',
      responsive: 'platform',
      performance: 'partial',
      seo: 'partial',
      analytics: 'full',
      auth: 'none',
      payment: 'none',
      cms: 'full',
      api: 'full',
      realtime: 'full',
      maintenance: 'full',
      support: 'full',
      training: 'full',
      monitoring: 'full',
      security: 'partial'
    },
    'ai-agents': {
      customDesign: 'partial',
      responsive: 'adaptive',
      performance: 'full',
      seo: 'none',
      analytics: 'full',
      auth: 'partial',
      payment: 'none',
      cms: 'none',
      api: 'full',
      realtime: 'full',
      maintenance: 'full',
      support: 'full',
      training: 'full',
      monitoring: 'full',
      security: 'full'
    }
  };

  const getCapabilityIcon = (capability) => {
    switch (capability) {
      case 'full':
        return { icon: 'CheckCircle', color: 'text-success', bg: 'bg-success/20' };
      case 'partial':
        return { icon: 'MinusCircle', color: 'text-warning', bg: 'bg-warning/20' };
      case 'native': case'platform': case'adaptive':
        return { icon: 'CheckCircle', color: 'text-accent', bg: 'bg-accent/20' };
      default:
        return { icon: 'XCircle', color: 'text-error', bg: 'bg-error/20' };
    }
  };

  const getCapabilityText = (capability) => {
    switch (capability) {
      case 'full':
        return 'Full Support';
      case 'partial':
        return 'Partial Support';
      case 'native':
        return 'Native Support';
      case 'platform':
        return 'Platform Specific';
      case 'adaptive':
        return 'Adaptive';
      case 'none':
        return 'Not Applicable';
      default:
        return capability;
    }
  };

  const handleServiceToggle = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(prev => prev.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices.length < 4) {
        setSelectedServices(prev => [...prev, serviceId]);
      }
    }
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
        className="bg-background-dark rounded-xl shadow-premium max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-dark">
          <div>
            <h2 className="text-2xl font-bold text-text-primary-dark">
              Service Comparison Matrix
            </h2>
            <p className="text-text-secondary-dark">
              Compare capabilities across our services
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
          {/* Service Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary-dark mb-4">
              Select Services to Compare (Max 4)
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceToggle(service.id)}
                  disabled={!selectedServices.includes(service.id) && selectedServices.length >= 4}
                  className={`p-4 rounded-lg border transition-premium ${
                    selectedServices.includes(service.id)
                      ? 'border-accent bg-accent/10' :'border-border-dark hover:border-accent/50'
                  } ${
                    !selectedServices.includes(service.id) && selectedServices.length >= 4
                      ? 'opacity-50 cursor-not-allowed' :''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={service.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-text-primary-dark text-sm">
                        {service.name}
                      </div>
                      <div className="text-xs text-text-secondary-dark">
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-dark">
                  <th className="text-left py-4 px-4 text-text-primary-dark font-semibold">
                    Features
                  </th>
                  {selectedServices.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return (
                      <th key={serviceId} className="text-center py-4 px-4 min-w-[150px]">
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                            <Icon name={service.icon} size={20} color="var(--color-primary)" />
                          </div>
                          <div className="text-sm font-semibold text-text-primary-dark">
                            {service.name}
                          </div>
                          <div className="text-xs text-accent">
                            {service.startingPrice}
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={category.category}>
                    <tr>
                      <td
                        colSpan={selectedServices.length + 1}
                        className="py-4 px-4 bg-secondary/20"
                      >
                        <h4 className="font-semibold text-text-primary-dark">
                          {category.category}
                        </h4>
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={feature.key}
                        className="border-b border-border-dark/50 hover:bg-secondary/10 transition-premium"
                      >
                        <td className="py-3 px-4 text-text-primary-dark">
                          {feature.name}
                        </td>
                        {selectedServices.map((serviceId) => {
                          const capability = serviceCapabilities[serviceId][feature.key];
                          const capabilityInfo = getCapabilityIcon(capability);
                          return (
                            <td key={serviceId} className="py-3 px-4 text-center">
                              <div className="flex flex-col items-center space-y-1">
                                <div className={`w-8 h-8 ${capabilityInfo.bg} rounded-full flex items-center justify-center`}>
                                  <Icon
                                    name={capabilityInfo.icon}
                                    size={16}
                                    className={capabilityInfo.color}
                                  />
                                </div>
                                <span className="text-xs text-text-secondary-dark">
                                  {getCapabilityText(capability)}
                                </span>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <h4 className="font-semibold text-text-primary-dark mb-3">Legend</h4>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={12} className="text-success" />
                </div>
                <span className="text-text-secondary-dark">Full Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-warning/20 rounded-full flex items-center justify-center">
                  <Icon name="MinusCircle" size={12} className="text-warning" />
                </div>
                <span className="text-text-secondary-dark">Partial Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={12} className="text-accent" />
                </div>
                <span className="text-text-secondary-dark">Specialized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-error/20 rounded-full flex items-center justify-center">
                  <Icon name="XCircle" size={12} className="text-error" />
                </div>
                <span className="text-text-secondary-dark">Not Applicable</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={onClose}
              className="bg-conversion hover:bg-conversion-light text-white px-8 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
            >
              Get Custom Quote
            </button>
            <button
              onClick={onClose}
              className="bg-secondary hover:bg-secondary-light text-text-primary-dark px-8 py-3 rounded-lg font-semibold transition-premium border border-border-dark"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ComparisonMatrix;