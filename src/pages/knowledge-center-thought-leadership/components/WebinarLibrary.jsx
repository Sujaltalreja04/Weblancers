import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WebinarLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const webinars = [
    {
      id: 1,
      title: "Building Scalable React Applications: Advanced Patterns and Best Practices",
      description: `Deep dive into advanced React patterns including compound components, render props, and custom hooks. Learn how to build maintainable, scalable applications that grow with your business needs.

This comprehensive session covers component architecture, state management strategies, and performance optimization techniques used in production applications.`,
      presenter: "Sarah Chen",
      presenterTitle: "Senior Frontend Architect",
      duration: "45 minutes",
      category: "technical",
      date: "2024-01-20",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      views: 1247,
      rating: 4.8,
      isLive: false,
      tags: ["React", "JavaScript", "Architecture", "Best Practices"]
    },
    {
      id: 2,
      title: "AI Integration in Web Development: Practical Implementation Strategies",
      description: `Explore practical ways to integrate AI technologies into web applications. From chatbots to recommendation engines, learn how to leverage AI to enhance user experience and business value.

This session includes live demonstrations of AI API integrations, best practices for handling AI responses, and strategies for maintaining performance while adding intelligent features.`,
      presenter: "Marcus Rodriguez",
      presenterTitle: "AI Solutions Architect",
      duration: "60 minutes",
      category: "ai-tech",
      date: "2024-01-18",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      views: 892,
      rating: 4.9,
      isLive: false,
      tags: ["AI", "Integration", "APIs", "Machine Learning"]
    },
    {
      id: 3,
      title: "Digital Transformation ROI: Measuring Success in Web Projects",
      description: `Learn how to establish meaningful KPIs, track user engagement improvements, and demonstrate clear ROI from web development investments. This business-focused session provides frameworks for measuring digital transformation success.

Includes case studies from real projects, analytics setup strategies, and methods for communicating technical improvements to business stakeholders.`,
      presenter: "Jennifer Park",
      presenterTitle: "Digital Strategy Consultant",
      duration: "50 minutes",
      category: "business",
      date: "2024-01-15",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      views: 1563,
      rating: 4.7,
      isLive: false,
      tags: ["ROI", "Analytics", "Business Strategy", "KPIs"]
    },
    {
      id: 4,
      title: "Mobile-First Design Workshop: Creating Touch-Optimized Experiences",
      description: `Interactive workshop covering mobile-first design principles, touch interface optimization, and progressive enhancement strategies. Learn to create truly mobile-optimized experiences.

This hands-on session includes practical exercises in responsive design, touch gesture implementation, and mobile performance optimization techniques.`,
      presenter: "David Kim",
      presenterTitle: "UX/UI Design Lead",
      duration: "90 minutes",
      category: "design",
      date: "2024-01-12",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop",
      views: 734,
      rating: 4.6,
      isLive: true,
      tags: ["Mobile Design", "UX", "Touch Interfaces", "Responsive"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Webinars', count: webinars.length },
    { id: 'technical', name: 'Technical', count: webinars.filter(w => w.category === 'technical').length },
    { id: 'ai-tech', name: 'AI & Technology', count: webinars.filter(w => w.category === 'ai-tech').length },
    { id: 'business', name: 'Business Strategy', count: webinars.filter(w => w.category === 'business').length },
    { id: 'design', name: 'Design & UX', count: webinars.filter(w => w.category === 'design').length }
  ];

  const filteredWebinars = selectedCategory === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  return (
    <section className="py-16 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">Educational Webinar Library</h2>
          <p className="text-text-secondary-dark max-w-2xl mx-auto">
            On-demand access to expert sessions covering the latest trends, technologies, and strategies in web development and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-premium ${
                selectedCategory === category.id
                  ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50 border border-transparent'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-secondary-dark/50 rounded-xl border border-border-dark hover:border-accent/30 transition-premium overflow-hidden group hover:shadow-glow">
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-premium duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-accent/90 hover:bg-accent text-primary rounded-full flex items-center justify-center transition-premium transform hover:scale-110 shadow-glow">
                    <Icon name="Play" size={24} />
                  </button>
                </div>

                {/* Live Badge */}
                {webinar.isLive && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  </div>
                )}

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-dark/80 text-text-primary-dark px-2 py-1 rounded text-sm backdrop-blur-sm">
                    {webinar.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text-secondary-dark text-sm">
                    {new Date(webinar.date).toLocaleDateString()}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary-dark">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{webinar.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} color="var(--color-gold)" />
                      <span>{webinar.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text-primary-dark mb-3 group-hover:text-accent transition-premium line-clamp-2">
                  {webinar.title}
                </h3>

                <p className="text-text-secondary-dark mb-4 line-clamp-3 leading-relaxed">
                  {webinar.description.split('\n')[0]}
                </p>

                {/* Presenter */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary-dark">{webinar.presenter}</p>
                    <p className="text-text-secondary-dark text-sm">{webinar.presenterTitle}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary/30 text-text-secondary-dark px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border-dark">
                  <button className="bg-conversion hover:bg-conversion-light text-white px-6 py-2 rounded-lg font-semibold transition-premium transform hover:scale-105">
                    {webinar.isLive ? 'Join Live' : 'Watch Now'}
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 bg-secondary/50 hover:bg-accent/20 text-text-secondary-dark hover:text-accent rounded-lg flex items-center justify-center transition-premium">
                      <Icon name="Bookmark" size={16} />
                    </button>
                    <button className="w-8 h-8 bg-secondary/50 hover:bg-accent/20 text-text-secondary-dark hover:text-accent rounded-lg flex items-center justify-center transition-premium">
                      <Icon name="Share2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-secondary-dark/50 hover:bg-secondary-dark text-text-primary-dark px-8 py-3 rounded-lg font-semibold transition-premium border border-border-dark hover:border-accent/30">
            Load More Webinars
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebinarLibrary;