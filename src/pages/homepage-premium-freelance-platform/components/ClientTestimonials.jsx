import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: `Working with Weblancer was a game-changer for our business. They didn't just build us a website; they created a digital experience that perfectly represents our brand. The attention to detail and technical expertise is unmatched. Our conversion rates increased by 150% within the first month of launch. The team's professionalism and ability to deliver on time exceeded all our expectations.`,
      project: 'E-Commerce Platform Redesign',
      results: ['150% increase in conversions', '40% improvement in user engagement', '95/100 performance score'],
      color: 'from-accent to-accent-light'
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Global Dynamics',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: `The mobile banking app Weblancer developed for us is nothing short of exceptional. Their understanding of security requirements and user experience design is remarkable.
      
      The app has been downloaded over 50,000 times with a 4.8-star rating. Our customers love the intuitive interface and robust security features.`,
      project: 'Mobile Banking Application',
      results: ['50K+ downloads', '4.8/5 star rating', '100% security compliance'],
      color: 'from-success to-success-light'
    },
    {
      id: 'emily-rodriguez',
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Innovation Labs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: `The AI chatbot system has revolutionized our customer support. Weblancer's expertise in AI and machine learning is evident in every aspect of the solution.We've achieved 85% automation in customer queries while maintaining 92% customer satisfaction. The system pays for itself through efficiency gains.`,
      project: 'AI Customer Support System',
      results: ['85% query automation', '92% customer satisfaction', '<2 second response time'],
      color: 'from-gold to-gold-light'
    },
    {
      id: 'david-thompson',
      name: 'David Thompson',
      position: 'Founder',
      company: 'Creative Studios',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: `Weblancer transformed our online presence completely. Their creative vision combined with technical excellence delivered results beyond our wildest expectations.
      
      The new website not only looks stunning but performs exceptionally well. Our organic traffic increased by 200% and lead generation improved by 180%.`,
      project: 'Creative Portfolio Website',
      results: ['200% increase in organic traffic', '180% improvement in leads', '98% client satisfaction'],
      color: 'from-conversion to-conversion-light'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary-dark mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the clients who've experienced transformation through our work.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center`}>
                <Icon name="Quote" size={32} color="white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="text-gold fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-text-primary-dark leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[activeTestimonial].testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-text-primary-dark font-bold text-lg">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-text-secondary-dark">
                    {testimonials[activeTestimonial].position} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="glassmorphism rounded-xl p-4 mb-8">
                <h5 className="text-accent font-semibold mb-3">Project: {testimonials[activeTestimonial].project}</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {testimonials[activeTestimonial].results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm text-text-secondary-dark">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 rounded-full transition-premium ${
                  activeTestimonial === index ? 'bg-accent' : 'bg-border-dark hover:bg-accent/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-text-primary-dark hover:text-accent transition-premium hover:scale-110"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <button
            onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-text-primary-dark hover:text-accent transition-premium hover:scale-110"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`text-center cursor-pointer transition-premium ${
                  activeTestimonial === index ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => handleTestimonialChange(index)}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-text-secondary-dark font-medium">
                  {testimonial.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary-dark mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-text-secondary-dark mb-6">
              Let's create your next digital transformation success story together.
            </p>
            <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-full animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-gold/10 to-accent/10 rounded-lg transform rotate-45 animate-pulse-subtle hidden lg:block"></div>
    </section>
  );
};

export default ClientTestimonials;