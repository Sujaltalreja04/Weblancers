import React, { useEffect, useState } from 'react';


const ClientTrustBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const clients = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      industry: 'Technology'
    },
    {
      name: 'Global Dynamics',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center',
      industry: 'Consulting'
    },
    {
      name: 'Innovation Labs',
      logo: 'https://images.unsplash.com/photo-1560472354-a4b8b6b6b6b6?w=200&h=100&fit=crop&crop=center',
      industry: 'Research'
    },
    {
      name: 'Digital Ventures',
      logo: 'https://images.unsplash.com/photo-1560472355-a4b8b6b6b6b6?w=200&h=100&fit=crop&crop=center',
      industry: 'Startups'
    },
    {
      name: 'Enterprise Systems',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      industry: 'Enterprise'
    },
    {
      name: 'Creative Studios',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center',
      industry: 'Creative'
    },
    {
      name: 'Future Tech',
      logo: 'https://images.unsplash.com/photo-1560472354-a4b8b6b6b6b6?w=200&h=100&fit=crop&crop=center',
      industry: 'Technology'
    },
    {
      name: 'Smart Solutions',
      logo: 'https://images.unsplash.com/photo-1560472355-a4b8b6b6b6b6?w=200&h=100&fit=crop&crop=center',
      industry: 'Software'
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

    const element = document.getElementById('client-trust-bar');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="client-trust-bar" className="py-16 bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-text-secondary-dark max-w-2xl mx-auto">
            Join the growing list of companies that trust Weblancer for their digital transformation needs.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className={`flex space-x-8 transition-all duration-1000 ${isVisible ? 'animate-scroll' : ''}`}>
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-24 glassmorphism rounded-xl flex items-center justify-center p-4 transform transition-premium hover:scale-105 hover:shadow-glow group"
                >
                  <div className="text-center">
                    <div className="w-32 h-12 bg-gradient-to-r from-accent/20 to-gold/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-accent/30 group-hover:to-gold/30 transition-premium">
                      <span className="text-text-primary-dark font-bold text-sm">{client.name}</span>
                    </div>
                    <span className="text-xs text-text-secondary-dark">{client.industry}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-24 glassmorphism rounded-xl flex items-center justify-center p-4 transform transition-premium hover:scale-105 hover:shadow-glow group"
                >
                  <div className="text-center">
                    <div className="w-32 h-12 bg-gradient-to-r from-accent/20 to-gold/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-accent/30 group-hover:to-gold/30 transition-premium">
                      <span className="text-text-primary-dark font-bold text-sm">{client.name}</span>
                    </div>
                    <span className="text-xs text-text-secondary-dark">{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background-dark to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background-dark to-transparent pointer-events-none"></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-success to-success-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">98%</span>
            </div>
            <h3 className="text-text-primary-dark font-semibold mb-2">Client Satisfaction</h3>
            <p className="text-text-secondary-dark text-sm">Consistently exceeding expectations</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">5★</span>
            </div>
            <h3 className="text-text-primary-dark font-semibold mb-2">Average Rating</h3>
            <p className="text-text-secondary-dark text-sm">Based on client reviews</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">24h</span>
            </div>
            <h3 className="text-text-primary-dark font-semibold mb-2">Response Time</h3>
            <p className="text-text-secondary-dark text-sm">Quick communication guaranteed</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientTrustBar;