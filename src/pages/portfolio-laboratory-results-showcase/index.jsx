import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import MetricsDashboard from './components/MetricsDashboard';
import TestimonialCard from './components/TestimonialCard';
import BeforeAfterSlider from './components/BeforeAfterSlider';

const PortfolioLaboratoryResultsShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      category: "E-commerce",
      industry: "Retail",
      technology: ["React", "Node.js", "MongoDB", "Stripe"],
      timeline: "12 weeks",
      client: "TechStyle Fashion",
      description: `Complete redesign and development of a modern e-commerce platform with advanced filtering, personalized recommendations, and seamless checkout experience. The project focused on improving conversion rates and user engagement through data-driven design decisions.`,
      challenge: `The client's existing platform had a 68% cart abandonment rate and poor mobile experience. Users struggled with navigation and the checkout process was overly complex, resulting in significant revenue loss.`,
      solution: `Implemented a mobile-first design approach with simplified navigation, one-click checkout, and AI-powered product recommendations. Added real-time inventory management and integrated multiple payment gateways for better user experience.`,
      results: {
        conversionRate: { before: 2.3, after: 4.8, improvement: 108 },
        loadingSpeed: { before: 4.2, after: 1.8, improvement: 57 },
        mobileTraffic: { before: 45, after: 72, improvement: 60 },
        revenue: { before: 125000, after: 285000, improvement: 128 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `Weblancer transformed our online presence completely. The new platform not only looks stunning but has doubled our conversion rates. Their attention to detail and understanding of e-commerce psychology is exceptional.`,
        author: "Sarah Mitchell",
        position: "CEO, TechStyle Fashion",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Healthcare Dashboard",
      category: "Healthcare",
      industry: "Medical",
      technology: ["React", "Python", "TensorFlow", "PostgreSQL"],
      timeline: "16 weeks",
      client: "MedTech Solutions",
      description: `Development of an intelligent healthcare dashboard that uses machine learning to predict patient outcomes and optimize resource allocation. The system integrates with existing hospital management systems and provides real-time analytics.`,
      challenge: `Healthcare providers needed a way to process vast amounts of patient data quickly and make informed decisions. The existing system was fragmented and didn't provide predictive insights.`,
      solution: `Built a comprehensive dashboard with AI-powered analytics, predictive modeling for patient outcomes, and automated reporting. Integrated with multiple data sources and implemented real-time monitoring capabilities.`,
      results: {
        efficiency: { before: 65, after: 89, improvement: 37 },
        accuracy: { before: 78, after: 94, improvement: 21 },
        timeReduction: { before: 45, after: 12, improvement: 73 },
        costSavings: { before: 0, after: 340000, improvement: 100 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `The AI dashboard has revolutionized how we manage patient care. We can now predict complications before they occur and allocate resources more effectively. It's been a game-changer for our hospital.`,
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, MedTech Solutions",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      featured: true
    },
    {
      id: 3,
      title: "FinTech Mobile Banking App",
      category: "Mobile App",
      industry: "Finance",
      technology: ["React Native", "Node.js", "AWS", "Blockchain"],
      timeline: "20 weeks",
      client: "NextGen Bank",
      description: `Complete mobile banking application with advanced security features, cryptocurrency integration, and AI-powered financial insights. The app provides seamless banking experience with biometric authentication and real-time fraud detection.`,
      challenge: `Traditional banking apps lacked modern features and had poor user experience. Customers demanded cryptocurrency support and better financial management tools while maintaining bank-level security.`,
      solution: `Developed a comprehensive mobile banking solution with biometric security, cryptocurrency wallet integration, AI-powered spending insights, and real-time notifications. Implemented advanced fraud detection and seamless money transfers.`,
      results: {
        userAdoption: { before: 23, after: 78, improvement: 239 },
        transactionSpeed: { before: 8.5, after: 2.1, improvement: 75 },
        customerSatisfaction: { before: 6.2, after: 9.1, improvement: 47 },
        fraudReduction: { before: 0, after: 89, improvement: 100 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/phone-1544376664-5d60144b5841?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `Our customers love the new app! The cryptocurrency integration and AI insights have set us apart from competitors. Weblancer delivered beyond our expectations with exceptional attention to security and user experience.`,
        author: "Jennifer Rodriguez",
        position: "Head of Digital Innovation, NextGen Bank",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      featured: false
    },
    {
      id: 4,
      title: "Real Estate Platform Optimization",
      category: "Web Development",
      industry: "Real Estate",
      technology: ["Next.js", "GraphQL", "Prisma", "Mapbox"],
      timeline: "14 weeks",
      client: "PropertyPro Realty",
      description: `Comprehensive redesign of a real estate platform with advanced search capabilities, virtual tour integration, and AI-powered property recommendations. The platform connects buyers, sellers, and agents through an intuitive interface.`,
      challenge: `The existing platform had slow search functionality and poor mobile experience. Users couldn't easily find properties that matched their criteria, and the virtual tour feature was outdated.`,
      solution: `Rebuilt the platform with advanced filtering, integrated virtual tours, AI-powered recommendations, and real-time chat functionality. Added interactive maps and comprehensive property analytics for better decision making.`,
      results: {
        searchSpeed: { before: 5.8, after: 1.2, improvement: 79 },
        userEngagement: { before: 3.2, after: 8.7, improvement: 172 },
        leadGeneration: { before: 145, after: 389, improvement: 168 },
        mobileUsage: { before: 32, after: 68, improvement: 113 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `The new platform has transformed our business. Property searches are lightning fast, and the virtual tours have increased our lead quality significantly. Our agents love the new tools and our clients are more engaged than ever.`,
        author: "Robert Thompson",
        position: "Managing Director, PropertyPro Realty",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      featured: false
    },
    {
      id: 5,
      title: "Educational Platform with AI Tutoring",
      category: "Education",
      industry: "EdTech",
      technology: ["React", "Python", "OpenAI", "Firebase"],
      timeline: "18 weeks",
      client: "LearnSmart Academy",
      description: `Interactive educational platform with AI-powered personalized tutoring, progress tracking, and adaptive learning paths. The system adjusts difficulty based on student performance and provides real-time feedback.`,
      challenge: `Students needed personalized learning experiences that adapt to their pace and learning style. Traditional online courses had high dropout rates and lacked engagement.`,
      solution: `Developed an AI-powered platform that creates personalized learning paths, provides instant feedback, and adapts content difficulty in real-time. Added gamification elements and social learning features to increase engagement.`,
      results: {
        completion: { before: 34, after: 78, improvement: 129 },
        engagement: { before: 2.1, after: 6.8, improvement: 224 },
        performance: { before: 67, after: 89, improvement: 33 },
        retention: { before: 45, after: 82, improvement: 82 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `Our students are more engaged than ever before. The AI tutoring system has helped improve completion rates dramatically, and the personalized learning paths ensure every student gets the support they need.`,
        author: "Dr. Amanda Foster",
        position: "Academic Director, LearnSmart Academy",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg"
      },
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Chain Management System",
      category: "Web Development",
      industry: "Food & Beverage",
      technology: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      timeline: "10 weeks",
      client: "Gourmet Bistro Chain",
      description: `Comprehensive restaurant management system with online ordering, inventory tracking, staff scheduling, and customer loyalty programs. The platform integrates with POS systems and provides real-time analytics.`,
      challenge: `Managing multiple restaurant locations with different menus, staff schedules, and inventory levels was complex and time-consuming. The existing system lacked integration and real-time reporting.`,
      solution: `Built a centralized management system with location-specific customization, automated inventory alerts, staff scheduling optimization, and integrated online ordering. Added customer loyalty program and detailed analytics dashboard.`,
      results: {
        efficiency: { before: 58, after: 87, improvement: 50 },
        orderAccuracy: { before: 82, after: 96, improvement: 17 },
        customerSatisfaction: { before: 7.2, after: 9.3, improvement: 29 },
        profitMargin: { before: 12, after: 18, improvement: 50 }
      },
      images: {
        before: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        desktop: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        mobile: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=800&fit=crop"
      },
      testimonial: {
        quote: `The management system has streamlined our operations across all locations. We can now track inventory in real-time, optimize staff schedules, and our online ordering has increased revenue by 40%.`,
        author: "Marco Antonelli",
        position: "Operations Manager, Gourmet Bistro Chain",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      },
      featured: false
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: 'Grid' },
    { value: 'E-commerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { value: 'Healthcare', label: 'Healthcare', icon: 'Heart' },
    { value: 'Mobile App', label: 'Mobile Apps', icon: 'Smartphone' },
    { value: 'Web Development', label: 'Web Development', icon: 'Globe' },
    { value: 'Education', label: 'Education', icon: 'BookOpen' }
  ];

  const overallMetrics = {
    totalProjects: 47,
    avgImprovement: 89,
    clientSatisfaction: 9.4,
    onTimeDelivery: 98
  };

  const filteredProjects = selectedFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedFilter);

  const featuredProjects = portfolioProjects.filter(project => project.featured);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
              <Icon name="Award" size={20} color="var(--color-accent)" />
              <span className="text-accent font-medium">Portfolio Laboratory</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary-dark mb-6">
              Results That
              <span className="text-gradient block">Speak Volumes</span>
            </h1>
            
            <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto mb-8">
              Dive deep into our project transformations with measurable results, technical breakdowns, and client success stories that demonstrate our commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => document.getElementById('featured-projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-conversion hover:bg-conversion-light text-white px-8 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow flex items-center space-x-2"
              >
                <Icon name="Play" size={20} />
                <span>Explore Case Studies</span>
              </button>
              
              <Link
                to="/services-universe-interactive-exploration"
                className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium"
              >
                <span>View Our Services</span>
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
          </div>
          
          {/* Metrics Dashboard */}
          <MetricsDashboard metrics={overallMetrics} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-16 lg:py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-4">
              Featured Transformations
            </h2>
            <p className="text-xl text-text-secondary-dark max-w-2xl mx-auto">
              Our most impactful projects showcasing dramatic improvements in performance, user experience, and business outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div className="glassmorphism rounded-2xl p-8 hover:shadow-glow transition-premium">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <span className="text-text-secondary-dark text-sm">
                          {project.timeline}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary-dark mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary-dark">
                        {project.client}
                      </p>
                    </div>
                    <button
                      onClick={() => openProjectModal(project)}
                      className="bg-secondary hover:bg-secondary-light p-3 rounded-lg transition-premium"
                    >
                      <Icon name="ExternalLink" size={20} color="var(--color-accent)" />
                    </button>
                  </div>

                  <BeforeAfterSlider 
                    beforeImage={project.images.before}
                    afterImage={project.images.after}
                    title={project.title}
                  />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">
                          +{value.improvement}%
                        </div>
                        <div className="text-sm text-text-secondary-dark capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border-dark">
                    <TestimonialCard testimonial={project.testimonial} compact />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Filter & Grid */}
      <section className="py-16 lg:py-24 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-4">
              Complete Project Portfolio
            </h2>
            <p className="text-xl text-text-secondary-dark max-w-2xl mx-auto">
              Explore our comprehensive collection of successful projects across various industries and technologies.
            </p>
          </div>

          <ProjectFilter 
            options={filterOptions}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onViewDetails={() => openProjectModal(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} color="var(--color-text-secondary-dark)" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary-dark mb-2">
                No projects found
              </h3>
              <p className="text-text-secondary-dark">
                Try adjusting your filter to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glassmorphism rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-4">
              Ready to Transform Your Project?
            </h2>
            <p className="text-xl text-text-secondary-dark mb-8">
              Let's discuss how we can deliver similar results for your business with our proven methodology and expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105 shadow-glow flex items-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Start Your Project</span>
              </button>
              
              <Link
                to="/about-methodology-trust-building"
                className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium"
              >
                <span>Learn Our Process</span>
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity bg-primary-dark bg-opacity-90 backdrop-blur-sm"
              onClick={closeProjectModal}
            ></div>

            <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-secondary-dark rounded-2xl shadow-premium">
              <div className="relative">
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-primary-dark hover:bg-primary rounded-lg transition-premium"
                >
                  <Icon name="X" size={24} color="var(--color-text-primary-dark)" />
                </button>

                <div className="p-6 lg:p-8">
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <span className="text-text-secondary-dark text-sm">
                        {selectedProject.timeline}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-text-secondary-dark mb-6">
                      {selectedProject.client}
                    </p>
                    <p className="text-text-secondary-dark leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary-dark mb-4">
                        The Challenge
                      </h3>
                      <p className="text-text-secondary-dark leading-relaxed mb-6">
                        {selectedProject.challenge}
                      </p>
                      
                      <h3 className="text-xl font-bold text-text-primary-dark mb-4">
                        Our Solution
                      </h3>
                      <p className="text-text-secondary-dark leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-text-primary-dark mb-4">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technology.map((tech) => (
                          <span 
                            key={tech}
                            className="bg-primary text-text-primary-dark px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-text-primary-dark mb-4">
                        Results Achieved
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedProject.results).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-primary rounded-lg">
                            <div className="text-2xl font-bold text-accent mb-1">
                              +{value.improvement}%
                            </div>
                            <div className="text-sm text-text-secondary-dark capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <BeforeAfterSlider 
                      beforeImage={selectedProject.images.before}
                      afterImage={selectedProject.images.after}
                      title={selectedProject.title}
                      showLabels
                    />
                  </div>

                  <div className="border-t border-border-dark pt-8">
                    <h3 className="text-xl font-bold text-text-primary-dark mb-6">
                      Client Testimonial
                    </h3>
                    <TestimonialCard testimonial={selectedProject.testimonial} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioLaboratoryResultsShowcase;