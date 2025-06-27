import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    { id: 'web-trends', label: 'Web Development Trends', icon: 'TrendingUp' },
    { id: 'ai-integration', label: 'AI Integration', icon: 'Bot' },
    { id: 'mobile-design', label: 'Mobile Design', icon: 'Smartphone' },
    { id: 'digital-strategy', label: 'Digital Strategy', icon: 'Target' },
    { id: 'case-studies', label: 'Case Studies', icon: 'FileText' },
    { id: 'tutorials', label: 'Technical Tutorials', icon: 'PlayCircle' }
  ];

  const handleInterestToggle = (interestId) => {
    setInterests(prev =>
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-accent/10 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={32} color="var(--color-primary)" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-text-secondary-dark mb-6 text-lg">
            Thank you for subscribing! You'll receive our latest insights and exclusive content directly in your inbox.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-accent hover:text-accent-light font-semibold transition-premium"
          >
            Subscribe Another Email
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-accent/5 to-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Mail" size={32} color="var(--color-primary)" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-text-secondary-dark text-lg max-w-2xl mx-auto">
            Get exclusive insights, early access to new resources, and weekly updates on the latest web development trends delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Mail" size={20} color="var(--color-text-secondary-dark)" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-secondary-dark/50 border border-border-dark rounded-xl text-text-primary-dark placeholder-text-secondary-dark focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-premium"
              />
            </div>
          </div>

          {/* Interest Selection */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary-dark mb-4 text-center">
              What interests you most? (Optional)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {interestOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleInterestToggle(option.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-premium ${
                    interests.includes(option.id)
                      ? 'bg-accent/20 border-accent/30 text-accent' :'bg-secondary-dark/30 border-border-dark text-text-secondary-dark hover:text-text-primary-dark hover:border-accent/30'
                  }`}
                >
                  <Icon name={option.icon} size={16} />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Zap" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-text-primary-dark mb-2">Weekly Insights</h4>
              <p className="text-text-secondary-dark text-sm">Latest trends and best practices in web development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Star" size={24} color="var(--color-gold)" />
              </div>
              <h4 className="font-semibold text-text-primary-dark mb-2">Exclusive Content</h4>
              <p className="text-text-secondary-dark text-sm">Early access to tutorials and case studies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-conversion/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Gift" size={24} color="var(--color-conversion)" />
              </div>
              <h4 className="font-semibold text-text-primary-dark mb-2">Free Resources</h4>
              <p className="text-text-secondary-dark text-sm">Downloadable guides and templates</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading || !email}
              className="bg-conversion hover:bg-conversion-light disabled:bg-conversion/50 text-white px-8 py-4 rounded-xl font-semibold transition-premium transform hover:scale-105 shadow-glow disabled:transform-none disabled:shadow-none flex items-center space-x-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} />
                  <span>Subscribe Now</span>
                </>
              )}
            </button>
            
            <p className="text-text-secondary-dark text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary-dark mb-4">Join 2,500+ developers and business owners</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-full border-2 border-background-dark flex items-center justify-center"
                >
                  <Icon name="User" size={14} color="var(--color-primary)" />
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-1 text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="Star" size={16} />
              ))}
            </div>
            <span className="text-text-secondary-dark text-sm">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;