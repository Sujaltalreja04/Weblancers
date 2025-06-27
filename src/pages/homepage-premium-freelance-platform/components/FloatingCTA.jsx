import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    // Mock consultation booking
    alert('Consultation booking form would open here. This is a demo implementation.');
  };

  const handleChatClick = () => {
    // Mock chat functionality
    alert('Live chat would open here. This is a demo implementation.');
  };

  const handleCallClick = () => {
    // Mock call functionality
    alert('Call functionality would be triggered here. This is a demo implementation.');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main CTA Button */}
      <div className="relative">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 space-y-3 animate-fade-in">
            {/* Chat Option */}
            <button
              onClick={handleChatClick}
              className="flex items-center space-x-3 bg-accent hover:bg-accent-light text-primary px-4 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
            >
              <Icon name="MessageCircle" size={20} />
              <span className="whitespace-nowrap">Live Chat</span>
            </button>

            {/* Call Option */}
            <button
              onClick={handleCallClick}
              className="flex items-center space-x-3 bg-success hover:bg-success-light text-white px-4 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
            >
              <Icon name="Phone" size={20} />
              <span className="whitespace-nowrap">Schedule Call</span>
            </button>

            {/* Email Option */}
            <button
              onClick={handleConsultationClick}
              className="flex items-center space-x-3 bg-gold hover:bg-gold-light text-primary px-4 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
            >
              <Icon name="Mail" size={20} />
              <span className="whitespace-nowrap">Send Email</span>
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-conversion hover:bg-conversion-light text-white rounded-full flex items-center justify-center font-semibold transition-premium transform hover:scale-110 shadow-glow animate-pulse-subtle"
          aria-label="Contact options"
        >
          <Icon name={isExpanded ? "X" : "MessageSquare"} size={24} />
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>

      {/* Quick Consultation Modal Trigger */}
      {!isExpanded && (
        <button
          onClick={handleConsultationClick}
          className="absolute -top-12 right-0 bg-primary-dark text-text-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-premium transform hover:scale-105 shadow-premium glassmorphism"
        >
          Free Consultation
        </button>
      )}

      {/* Floating Info Card */}
      {isExpanded && (
        <div className="absolute bottom-20 right-20 w-64 glassmorphism rounded-xl p-4 shadow-premium">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-lg font-jetbrains">W</span>
            </div>
            <div>
              <h4 className="text-text-primary-dark font-semibold text-sm mb-1">
                Ready to Transform Your Business?
              </h4>
              <p className="text-text-secondary-dark text-xs mb-3">
                Get a free consultation and discover how we can elevate your digital presence.
              </p>
              <div className="flex items-center space-x-2 text-xs text-success">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Available now</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingCTA;