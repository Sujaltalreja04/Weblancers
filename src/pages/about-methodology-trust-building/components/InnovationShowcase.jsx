import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InnovationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('experimental');

  const innovations = {
    experimental: {
      title: "Experimental Features",
      icon: "Flask",
      color: "accent",
      description: "Cutting-edge features we're developing and testing for future implementation.",
      items: [
        {
          title: "AI-Powered Code Generation",
          status: "Beta Testing",
          description: "Automated code generation using machine learning to accelerate development cycles.",
          technologies: ["OpenAI GPT-4", "Custom Training", "Code Analysis"],
          impact: "50% faster development for routine components",
          timeline: "Q2 2024 Release"
        },
        {
          title: "Voice-Controlled Interfaces",
          status: "Prototype",
          description: "Voice navigation and control systems for enhanced accessibility and user experience.",
          technologies: ["Web Speech API", "Natural Language Processing", "Voice Recognition"],
          impact: "Improved accessibility for users with disabilities",
          timeline: "Q3 2024 Testing"
        },
        {
          title: "Predictive Performance Optimization",
          status: "Research",
          description: "Machine learning algorithms that predict and prevent performance bottlenecks.",
          technologies: ["TensorFlow.js", "Performance APIs", "Predictive Analytics"],
          impact: "Proactive performance improvements",
          timeline: "Q4 2024 Development"
        }
      ]
    },
    emerging: {
      title: "Emerging Technologies",
      icon: "Zap",
      color: "gold",
      description: "Latest technologies we\'re integrating into our development stack.",
      items: [
        {
          title: "WebAssembly Integration",
          status: "Production Ready",
          description: "High-performance computing capabilities directly in the browser for complex applications.",
          technologies: ["WebAssembly", "Rust", "C++", "JavaScript Bridge"],
          impact: "10x performance improvement for computational tasks",
          timeline: "Available Now"
        },
        {
          title: "Progressive Web App 2.0",
          status: "Implementation",
          description: "Next-generation PWA features including advanced offline capabilities and native integration.",
          technologies: ["Service Workers", "Background Sync", "Push Notifications", "File System Access"],
          impact: "Native app experience in web browsers",
          timeline: "Q1 2024 Launch"
        },
        {
          title: "Edge Computing Integration",
          status: "Pilot Program",
          description: "Distributed computing at the edge for ultra-low latency applications.",
          technologies: ["Cloudflare Workers", "Vercel Edge Functions", "AWS Lambda@Edge"],
          impact: "Sub-100ms response times globally",
          timeline: "Q2 2024 Rollout"
        }
      ]
    },
    beta: {
      title: "Beta Services",
      icon: "Rocket",
      color: "conversion",
      description: "New services currently in beta testing with select clients.",
      items: [
        {
          title: "AI Content Optimization",
          status: "Closed Beta",
          description: "Automated content optimization using AI to improve SEO and user engagement.",
          technologies: ["Natural Language Processing", "SEO Analytics", "Content Analysis", "A/B Testing"],
          impact: "40% improvement in search rankings",
          timeline: "Limited Beta Access"
        },
        {
          title: "Real-time Collaboration Tools",
          status: "Open Beta",
          description: "Live collaboration features for client-developer interaction during development.",
          technologies: ["WebRTC", "Socket.io", "Real-time Sync", "Version Control"],
          impact: "Enhanced client collaboration experience",
          timeline: "Beta Testing Open"
        },
        {
          title: "Automated Security Scanning",
          status: "Internal Testing",
          description: "Continuous security monitoring and automated vulnerability detection.",
          technologies: ["Security APIs", "Vulnerability Databases", "Automated Testing", "Threat Intelligence"],
          impact: "Proactive security threat prevention",
          timeline: "Q1 2024 Beta Launch"
        }
      ]
    }
  };

  const getColorClass = (color, type = 'text') => {
    const colorMap = {
      accent: type === 'text' ? 'text-accent' : type === 'bg' ? 'bg-accent' : 'border-accent',
      gold: type === 'text' ? 'text-gold' : type === 'bg' ? 'bg-gold' : 'border-gold',
      conversion: type === 'text' ? 'text-conversion' : type === 'bg' ? 'bg-conversion' : 'border-conversion'
    };
    return colorMap[color] || 'text-accent';
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'Beta Testing': 'text-accent bg-accent/20',
      'Prototype': 'text-warning bg-warning/20',
      'Research': 'text-conversion bg-conversion/20',
      'Production Ready': 'text-success bg-success/20',
      'Implementation': 'text-gold bg-gold/20',
      'Pilot Program': 'text-accent bg-accent/20',
      'Closed Beta': 'text-conversion bg-conversion/20',
      'Open Beta': 'text-success bg-success/20',
      'Internal Testing': 'text-warning bg-warning/20'
    };
    return statusColors[status] || 'text-accent bg-accent/20';
  };

  const researchAreas = [
    {
      title: "Quantum Computing Applications",
      description: "Exploring quantum computing applications for complex optimization problems in web development.",
      icon: "Atom",
      timeline: "Long-term Research"
    },
    {
      title: "Blockchain Integration",
      description: "Investigating blockchain technology for secure, decentralized web applications.",
      icon: "Link",
      timeline: "Active Research"
    },
    {
      title: "Augmented Reality Web",
      description: "Developing AR capabilities for web browsers using WebXR and related technologies.",
      icon: "Eye",
      timeline: "Experimental Phase"
    },
    {
      title: "Neural Network Optimization",
      description: "Using neural networks to optimize web performance and user experience automatically.",
      icon: "Brain",
      timeline: "Proof of Concept"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark mb-4">
          Innovation <span className="text-gradient">Showcase</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Pioneering the future of web development through experimental features, emerging technologies, 
          and beta services that push the boundaries of what's possible.
        </p>
      </motion.div>

      {/* Innovation Categories */}
      <div className="space-y-8">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(innovations).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium ${
                activeCategory === key
                  ? `${getColorClass(category.color, 'bg')} text-primary`
                  : 'bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Category Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name={innovations[activeCategory].icon} size={32} className={getColorClass(innovations[activeCategory].color)} />
              <h3 className="text-2xl font-bold text-text-primary-dark">{innovations[activeCategory].title}</h3>
            </div>
            <p className="text-text-secondary-dark max-w-2xl mx-auto">
              {innovations[activeCategory].description}
            </p>
          </div>

          {/* Innovation Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {innovations[activeCategory].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium"
              >
                <div className="space-y-4">
                  {/* Item Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-text-primary-dark">{item.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-text-secondary-dark text-sm">{item.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Code" size={14} className={getColorClass(innovations[activeCategory].color)} />
                      <span className="text-sm font-medium text-text-primary-dark">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 ${getColorClass(innovations[activeCategory].color, 'bg')}/20 ${getColorClass(innovations[activeCategory].color)} text-xs rounded-full`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Timeline */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="TrendingUp" size={14} className="text-success mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-text-primary-dark">Impact: </span>
                        <span className="text-sm text-text-secondary-dark">{item.impact}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="Calendar" size={14} className="text-warning mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-text-primary-dark">Timeline: </span>
                        <span className="text-sm text-text-secondary-dark">{item.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Research Areas */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Future Research Areas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium text-center"
            >
              <Icon name={area.icon} size={32} className="text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{area.title}</h4>
              <p className="text-text-secondary-dark text-sm mb-3">{area.description}</p>
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                {area.timeline}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Innovation Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary-dark">Our Innovation Philosophy</h3>
            <p className="text-text-secondary-dark leading-relaxed">
              Innovation isn't just about using the latest technology – it's about solving real problems 
              in creative ways. We carefully evaluate emerging technologies for their practical value, 
              ensuring that every innovation we adopt serves a genuine purpose in improving user experience 
              and business outcomes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Problem-focused innovation approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="TestTube" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Rigorous testing before implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={20} className="text-accent" />
                <span className="text-text-primary-dark">User-centric technology adoption</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="TrendingUp" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Measurable impact on business results</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-text-secondary-dark">Technologies Evaluated Monthly</div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold mb-1">6</div>
                <div className="text-sm text-text-secondary-dark">Beta Services Active</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">3</div>
                <div className="text-sm text-text-secondary-dark">Research Partnerships</div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-conversion mb-1">24h</div>
                <div className="text-sm text-text-secondary-dark">Innovation Cycle Time</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovationShowcase;