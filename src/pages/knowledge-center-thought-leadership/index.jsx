import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

import FeaturedArticleCarousel from './components/FeaturedArticleCarousel';
import SearchAndFilter from './components/SearchAndFilter';
import ResourceCard from './components/ResourceCard';
import NewsletterSubscription from './components/NewsletterSubscription';
import WebinarLibrary from './components/WebinarLibrary';
import CommunityEngagement from './components/CommunityEngagement';

const KnowledgeCenterThoughtLeadership = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResources, setFilteredResources] = useState([]);

  const categories = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3', count: 48 },
    { id: 'web-trends', name: 'Web Trends', icon: 'TrendingUp', count: 12 },
    { id: 'ai-integration', name: 'AI Integration', icon: 'Bot', count: 8 },
    { id: 'mobile-design', name: 'Mobile Design', icon: 'Smartphone', count: 10 },
    { id: 'digital-strategy', name: 'Digital Strategy', icon: 'Target', count: 9 },
    { id: 'tutorials', name: 'Tutorials', icon: 'PlayCircle', count: 15 },
    { id: 'case-studies', name: 'Case Studies', icon: 'FileText', count: 6 }
  ];

  const resources = [
    {
      id: 1,
      title: "The Future of Web Development: AI-Powered Design Systems",
      category: "ai-integration",
      type: "article",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      author: "Sarah Chen",
      excerpt: `Exploring how artificial intelligence is revolutionizing the way we approach design systems and component libraries. From automated accessibility testing to intelligent layout suggestions, AI is becoming an indispensable tool for modern web developers.

This comprehensive guide covers the latest AI tools and techniques that are transforming the development workflow, including automated code generation, smart debugging assistance, and predictive user experience optimization.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Design Systems", "Automation", "Future Tech"],
      featured: true,
      downloadUrl: "/resources/ai-design-systems-guide.pdf"
    },
    {
      id: 2,
      title: "Mobile-First Design: Beyond Responsive Layouts",
      category: "mobile-design",
      type: "tutorial",
      readTime: "12 min read",
      publishDate: "2024-01-12",
      author: "Marcus Rodriguez",
      excerpt: `A deep dive into advanced mobile-first design principles that go beyond traditional responsive breakpoints. Learn how to create truly mobile-optimized experiences that leverage device capabilities and user behavior patterns.

This tutorial includes practical examples of touch-first interactions, progressive enhancement strategies, and performance optimization techniques specifically tailored for mobile devices.`,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      tags: ["Mobile Design", "UX", "Performance", "Touch Interfaces"],
      featured: true,
      downloadUrl: "/resources/mobile-first-checklist.pdf"
    },
    {
      id: 3,
      title: "Digital Transformation ROI: Measuring Success in Web Projects",
      category: "digital-strategy",
      type: "case-study",
      readTime: "15 min read",
      publishDate: "2024-01-10",
      author: "Jennifer Park",
      excerpt: `Real-world analysis of digital transformation projects and their measurable business impact. This case study examines five successful web development projects and the metrics that defined their success.

Learn how to establish meaningful KPIs, track user engagement improvements, and demonstrate clear ROI from web development investments through comprehensive analytics and business intelligence.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["ROI", "Analytics", "Business Strategy", "Metrics"],
      featured: false,
      downloadUrl: "/resources/roi-measurement-framework.pdf"
    },
    {
      id: 4,
      title: "Advanced React Patterns for Scalable Applications",
      category: "tutorials",
      type: "tutorial",
      readTime: "20 min read",
      publishDate: "2024-01-08",
      author: "David Kim",
      excerpt: `Master advanced React patterns including compound components, render props, and custom hooks for building maintainable, scalable applications. This comprehensive tutorial covers real-world implementation scenarios.

Includes code examples, performance considerations, and best practices for component architecture that scales with your application's growth and complexity requirements.`,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["React", "JavaScript", "Architecture", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/react-patterns-guide.pdf"
    },
    {
      id: 5,
      title: "Web Performance Optimization: Core Web Vitals Mastery",
      category: "web-trends",
      type: "article",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      author: "Lisa Thompson",
      excerpt: `Complete guide to understanding and optimizing Core Web Vitals for better user experience and search engine rankings. Learn practical techniques for improving LCP, FID, and CLS metrics.

This article provides actionable strategies for image optimization, code splitting, lazy loading, and other performance enhancement techniques that directly impact user satisfaction and business metrics.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Performance", "SEO", "Core Web Vitals", "Optimization"],
      featured: false,
      downloadUrl: "/resources/performance-optimization-checklist.pdf"
    },
    {
      id: 6,
      title: "Building Accessible Web Applications: WCAG 2.1 Implementation",
      category: "tutorials",
      type: "tutorial",
      readTime: "18 min read",
      publishDate: "2024-01-03",
      author: "Alex Johnson",
      excerpt: `Comprehensive guide to implementing WCAG 2.1 accessibility standards in modern web applications. Learn practical techniques for creating inclusive digital experiences that work for all users.

Covers keyboard navigation, screen reader compatibility, color contrast requirements, and automated accessibility testing tools that ensure your applications meet compliance standards.`,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      tags: ["Accessibility", "WCAG", "Inclusive Design", "Compliance"],
      featured: false,
      downloadUrl: "/resources/accessibility-implementation-guide.pdf"
    }
  ];

  const interactiveTools = [
    {
      id: 1,
      title: "Project Estimation Calculator",
      description: "Get accurate project timelines and cost estimates based on your requirements",
      icon: "Calculator",
      type: "calculator",
      url: "#project-calculator"
    },
    {
      id: 2,
      title: "Service Matching Quiz",
      description: "Discover which services best fit your business needs and goals",
      icon: "HelpCircle",
      type: "quiz",
      url: "#service-quiz"
    },
    {
      id: 3,
      title: "Capability Assessment Tool",
      description: "Evaluate your current digital capabilities and identify improvement areas",
      icon: "CheckSquare",
      type: "assessment",
      url: "#capability-assessment"
    }
  ];

  const downloadableResources = [
    {
      id: 1,
      title: "Web Development Project Checklist",
      description: "Complete checklist for planning and executing successful web development projects",
      format: "PDF",
      size: "2.4 MB",
      downloads: 1247,
      icon: "FileCheck",
      url: "/downloads/web-dev-checklist.pdf"
    },
    {
      id: 2,
      title: "Mobile App Planning Guide",
      description: "Step-by-step guide for planning mobile application development from concept to launch",
      format: "PDF",
      size: "3.1 MB",
      downloads: 892,
      icon: "Smartphone",
      url: "/downloads/mobile-app-guide.pdf"
    },
    {
      id: 3,
      title: "Social Media Strategy Template",
      description: "Comprehensive template for developing effective social media marketing strategies",
      format: "DOCX",
      size: "1.8 MB",
      downloads: 1563,
      icon: "Share2",
      url: "/downloads/social-media-template.docx"
    },
    {
      id: 4,
      title: "AI Integration Roadmap",
      description: "Strategic roadmap for integrating AI technologies into existing business processes",
      format: "PDF",
      size: "2.7 MB",
      downloads: 634,
      icon: "Bot",
      url: "/downloads/ai-integration-roadmap.pdf"
    }
  ];

  useEffect(() => {
    let filtered = resources;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredResources(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/30">
              <Icon name="BookOpen" size={16} />
              <span>Knowledge Center</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary-dark mb-6">
              Thought Leadership &
              <span className="text-gradient block">Industry Insights</span>
            </h1>
            
            <p className="text-xl text-text-secondary-dark mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our comprehensive resource hub featuring weekly insights on web trends, AI integration, mobile-first design, and digital strategy from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow">
                Explore Resources
              </button>
              <Link
                to="/client-portal-project-hub"
                className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium"
              >
                <span>Access Client Portal</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Carousel */}
      <section className="py-16 bg-secondary-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary-dark mb-2">Featured Articles</h2>
              <p className="text-text-secondary-dark">Trending topics and seasonal content curated by our experts</p>
            </div>
            <Link
              to="#all-articles"
              className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium"
            >
              <span>View All</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          
          <FeaturedArticleCarousel articles={resources.filter(r => r.featured)} />
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchAndFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} color="var(--color-text-secondary-dark)" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary-dark mb-2">No resources found</h3>
              <p className="text-text-secondary-dark">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 bg-secondary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary-dark mb-4">Interactive Tools</h2>
            <p className="text-text-secondary-dark max-w-2xl mx-auto">
              Use our interactive calculators, quizzes, and assessment tools to get personalized insights for your projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveTools.map((tool) => (
              <div key={tool.id} className="glassmorphism p-6 rounded-xl hover:shadow-glow transition-premium group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-premium">
                  <Icon name={tool.icon} size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary-dark mb-2">{tool.title}</h3>
                <p className="text-text-secondary-dark mb-4">{tool.description}</p>
                <button className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium">
                  <span>Try Now</span>
                  <Icon name="ExternalLink" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary-dark mb-4">Downloadable Resources</h2>
            <p className="text-text-secondary-dark max-w-2xl mx-auto">
              Free guides, checklists, and templates to help you succeed in your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource) => (
              <div key={resource.id} className="bg-secondary-dark/50 p-6 rounded-xl border border-border-dark hover:border-accent/30 transition-premium group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-premium">
                    <Icon name={resource.icon} size={24} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary-dark mb-2">{resource.title}</h3>
                    <p className="text-text-secondary-dark mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-text-secondary-dark">
                        <span>{resource.format}</span>
                        <span>{resource.size}</span>
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                      <button className="bg-accent hover:bg-accent-light text-primary px-4 py-2 rounded-lg font-semibold transition-premium transform hover:scale-105">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Library */}
      <WebinarLibrary />

      {/* Community Engagement */}
      <CommunityEngagement />

      {/* Newsletter Subscription */}
      <NewsletterSubscription />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-text-secondary-dark mb-8 text-lg">
            Let's discuss how our expertise can help you achieve your digital transformation goals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow">
              Start Your Project
            </button>
            <Link
              to="/services-universe-interactive-exploration"
              className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium"
            >
              <span>Explore Services</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCenterThoughtLeadership;