import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityEngagement = () => {
  const events = [
    {
      id: 1,
      title: "React Summit 2024",
      type: "Speaking Engagement",
      date: "2024-03-15",
      location: "Amsterdam, Netherlands",
      description: "Presenting 'Advanced React Patterns for Enterprise Applications' to 2000+ developers",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
      status: "upcoming",
      attendees: 2000
    },
    {
      id: 2,
      title: "Web Development Masterclass",
      type: "Workshop Host",
      date: "2024-02-20",
      location: "Online Event",
      description: "3-hour intensive workshop on modern web development practices and AI integration",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop",
      status: "completed",
      attendees: 450
    },
    {
      id: 3,
      title: "Tech Innovation Conference",
      type: "Panel Discussion",
      date: "2024-01-28",
      location: "San Francisco, CA",
      description: "Panel on 'The Future of Web Development: AI, Performance, and User Experience'",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop",
      status: "completed",
      attendees: 800
    }
  ];

  const recognition = [
    {
      id: 1,
      title: "Top Web Development Thought Leader 2024",
      organization: "Developer Weekly",
      date: "2024-01-10",
      description: "Recognized for contributions to modern web development practices and community education",
      icon: "Award",
      color: "text-gold"
    },
    {
      id: 2,
      title: "Best Technical Content Creator",
      organization: "Tech Community Awards",
      date: "2023-12-15",
      description: "Awarded for exceptional educational content and community engagement",
      icon: "Star",
      color: "text-accent"
    },
    {
      id: 3,
      title: "Innovation in Web Development",
      organization: "Digital Excellence Awards",
      date: "2023-11-20",
      description: "Recognition for pioneering AI integration techniques in web applications",
      icon: "Zap",
      color: "text-conversion"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      publication: "TechCrunch",
      date: "2024-01-25",
      type: "Interview",
      url: "#",
      excerpt: "Discussing the transformative impact of AI on modern web development practices"
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      publication: "CSS-Tricks",
      date: "2024-01-18",
      type: "Guest Article",
      url: "#",
      excerpt: "Deep dive into advanced React patterns and architectural best practices"
    },
    {
      id: 3,
      title: "Web Performance Optimization Strategies",
      publication: "Smashing Magazine",
      date: "2024-01-12",
      type: "Featured Article",
      url: "#",
      excerpt: "Comprehensive guide to Core Web Vitals and performance optimization techniques"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'text-accent bg-accent/20 border-accent/30';
      case 'completed':
        return 'text-success bg-success/20 border-success/30';
      default:
        return 'text-text-secondary-dark bg-secondary/20 border-border-dark';
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">Community Engagement</h2>
          <p className="text-text-secondary-dark max-w-2xl mx-auto">
            Active participation in industry events, speaking engagements, and thought leadership recognition that positions Weblancer at the forefront of web development innovation.
          </p>
        </div>

        {/* Industry Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary-dark mb-8 flex items-center space-x-2">
            <Icon name="Calendar" size={24} color="var(--color-accent)" />
            <span>Industry Events & Speaking Engagements</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-secondary-dark/50 rounded-xl border border-border-dark hover:border-accent/30 transition-premium overflow-hidden group">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-premium duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent text-sm font-medium">{event.type}</span>
                    <span className="text-text-secondary-dark text-sm">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{event.title}</h4>
                  
                  <div className="flex items-center space-x-2 text-text-secondary-dark text-sm mb-3">
                    <Icon name="MapPin" size={14} />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-text-secondary-dark text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-text-secondary-dark text-sm">
                      <Icon name="Users" size={14} />
                      <span>{event.attendees.toLocaleString()} attendees</span>
                    </div>
                    <button className="text-accent hover:text-accent-light font-semibold text-sm transition-premium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition & Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary-dark mb-8 flex items-center space-x-2">
            <Icon name="Trophy" size={24} color="var(--color-gold)" />
            <span>Recognition & Awards</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognition.map((award) => (
              <div key={award.id} className="glassmorphism p-6 rounded-xl hover:shadow-glow transition-premium group">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-premium ${award.color === 'text-gold' ? 'bg-gold/20' : award.color === 'text-accent' ? 'bg-accent/20' : 'bg-conversion/20'}`}>
                  <Icon name={award.icon} size={24} className={award.color} />
                </div>
                
                <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{award.title}</h4>
                
                <div className="flex items-center space-x-2 text-text-secondary-dark text-sm mb-3">
                  <Icon name="Building" size={14} />
                  <span>{award.organization}</span>
                  <span>•</span>
                  <span>{new Date(award.date).toLocaleDateString()}</span>
                </div>
                
                <p className="text-text-secondary-dark text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary-dark mb-8 flex items-center space-x-2">
            <Icon name="Newspaper" size={24} color="var(--color-conversion)" />
            <span>Media Features & Publications</span>
          </h3>
          
          <div className="space-y-4">
            {mediaFeatures.map((feature) => (
              <div key={feature.id} className="bg-secondary-dark/30 p-6 rounded-xl border border-border-dark hover:border-accent/30 transition-premium group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-text-primary-dark group-hover:text-accent transition-premium">
                        {feature.title}
                      </h4>
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium border border-accent/30">
                        {feature.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-text-secondary-dark text-sm mb-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="BookOpen" size={14} />
                        <span>{feature.publication}</span>
                      </div>
                      <span>•</span>
                      <span>{new Date(feature.date).toLocaleDateString()}</span>
                    </div>
                    
                    <p className="text-text-secondary-dark text-sm">{feature.excerpt}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium">
                      <span>Read Article</span>
                      <Icon name="ExternalLink" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-gold/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-text-primary-dark mb-2">Community Impact</h3>
            <p className="text-text-secondary-dark">Building connections and sharing knowledge across the developer community</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-text-secondary-dark text-sm">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">5K+</div>
              <div className="text-text-secondary-dark text-sm">Event Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">25+</div>
              <div className="text-text-secondary-dark text-sm">Media Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">8</div>
              <div className="text-text-secondary-dark text-sm">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;