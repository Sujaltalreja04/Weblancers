import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PortfolioHighlights = () => {
  const [activeProject, setActiveProject] = useState(0);

  const portfolioProjects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform Redesign',
      client: 'TechCorp Solutions',
      category: 'Web Development',
      description: 'Complete redesign and development of a modern e-commerce platform with advanced features, resulting in 150% increase in conversions and 40% improvement in user engagement.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: {
        conversion: '+150%',
        engagement: '+40%',
        performance: '95/100',
        timeline: '8 weeks'
      },
      color: 'from-accent to-accent-light'
    },
    {
      id: 'mobile-banking-app',
      title: 'Mobile Banking Application',
      client: 'Global Dynamics',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking app with biometric authentication, real-time transactions, and comprehensive financial management tools.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'Encryption'],
      results: {
        downloads: '50K+',
        rating: '4.8/5',
        security: '100%',
        timeline: '12 weeks'
      },
      color: 'from-success to-success-light'
    },
    {
      id: 'ai-chatbot-system',
      title: 'AI Customer Support System',
      client: 'Innovation Labs',
      category: 'AI Development',
      description: 'Intelligent chatbot system with natural language processing, automated ticket routing, and 24/7 customer support capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'NLP', 'API Integration'],
      results: {
        automation: '85%',
        satisfaction: '92%',
        response: '< 2 sec',
        timeline: '10 weeks'
      },
      color: 'from-gold to-gold-light'
    }
  ];

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary-dark mb-6">
            Portfolio <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
            Discover how we've transformed businesses through innovative digital solutions and measurable results.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Navigation */}
          <div className="space-y-6">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className={`cursor-pointer transform transition-premium ${
                  activeProject === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className={`glassmorphism rounded-2xl p-6 ${
                  activeProject === index ? 'border-2 border-accent shadow-glow' : 'border border-border-dark'
                }`}>
                  <div className="flex items-start space-x-4">
                    {/* Project Image Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-premium group-hover:scale-110"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-medium`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-text-secondary-dark">
                          {project.client}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg font-bold mb-2 transition-premium ${
                        activeProject === index ? 'text-accent' : 'text-text-primary-dark'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-text-secondary-dark text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="relative">
            <div className="glassmorphism rounded-3xl overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={portfolioProjects[activeProject].image}
                  alt={portfolioProjects[activeProject].title}
                  className="w-full h-full object-cover transform transition-premium hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${portfolioProjects[activeProject].color} text-white text-sm font-medium`}>
                    {portfolioProjects[activeProject].category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary-dark mb-2">
                  {portfolioProjects[activeProject].title}
                </h3>
                
                <p className="text-text-secondary-dark mb-6">
                  {portfolioProjects[activeProject].description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-text-primary-dark font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioProjects[activeProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(portfolioProjects[activeProject].results).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-3 bg-secondary/20 rounded-lg">
                      <div className="text-xl font-bold text-accent mb-1">{value}</div>
                      <div className="text-xs text-text-secondary-dark capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* View Project CTA */}
                <Link
                  to="/portfolio-laboratory-results-showcase"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-primary px-6 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow"
                >
                  <span>View Full Case Study</span>
                  <Icon name="ExternalLink" size={16} />
                </Link>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent/20 rounded-full animate-pulse-subtle"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-lg transform rotate-45 animate-pulse-subtle"></div>
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary-dark mb-4">
              Explore Our Complete Portfolio
            </h3>
            <p className="text-text-secondary-dark mb-6">
              Discover more success stories and see how we can transform your business.
            </p>
            <Link
              to="/portfolio-laboratory-results-showcase"
              className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle"
            >
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioHighlights;