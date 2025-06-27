import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceSelector = ({ services, selectedService, onServiceSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`relative cursor-pointer group ${
            selectedService === service.id ? 'scale-105' : ''
          }`}
          onClick={() => onServiceSelect(service.id)}
        >
          <div
            className={`glassmorphism rounded-xl p-6 transition-premium ${
              selectedService === service.id
                ? 'shadow-glow border-accent/50'
                : 'hover:shadow-premium'
            }`}
          >
            {/* Service Icon */}
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-premium`}>
              <Icon name={service.icon} size={32} color="var(--color-primary)" />
            </div>

            {/* Service Info */}
            <h3 className="text-xl font-bold text-text-primary-dark mb-2">
              {service.name}
            </h3>
            <p className="text-text-secondary-dark text-sm mb-4">
              {service.description}
            </p>

            {/* Quick Stats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary-dark">Timeline:</span>
                <span className="text-text-primary-dark font-medium">{service.timeline}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary-dark">Starting at:</span>
                <span className="text-accent font-semibold">{service.startingPrice}</span>
              </div>
            </div>

            {/* Selection Indicator */}
            {selectedService === service.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
              >
                <Icon name="Check" size={16} color="var(--color-primary)" />
              </motion.div>
            )}

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-premium pointer-events-none" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSelector;