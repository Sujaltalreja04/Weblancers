import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial, compact = false }) => {
  return (
    <div className={`${compact ? 'p-4' : 'p-6'} glassmorphism rounded-xl`}>
      <div className="flex items-start space-x-4">
        <Image 
          src={testimonial.avatar}
          alt={testimonial.author}
          className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} rounded-full object-cover flex-shrink-0`}
        />
        <div className="flex-1">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="Star" size={16} color="var(--color-gold)" />
            ))}
          </div>
          <blockquote className={`text-text-secondary-dark ${compact ? 'text-sm' : 'text-base'} leading-relaxed mb-4 italic`}>
            "{testimonial.quote}"
          </blockquote>
          <div>
            <div className={`font-semibold text-text-primary-dark ${compact ? 'text-sm' : 'text-base'}`}>
              {testimonial.author}
            </div>
            <div className={`text-text-secondary-dark ${compact ? 'text-xs' : 'text-sm'}`}>
              {testimonial.position}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;