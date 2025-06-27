import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTransparency = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('communication');

  const workflows = {
    communication: {
      title: "Communication Protocols",
      icon: "MessageCircle",
      color: "accent",
      description: "How we keep you informed and engaged throughout your project.",
      steps: [
        {
          title: "Project Kickoff",
          description: "Comprehensive onboarding call to align expectations and establish communication preferences.",
          tools: ["Zoom", "Slack", "Project Dashboard"],
          frequency: "One-time setup"
        },
        {
          title: "Weekly Updates",
          description: "Detailed progress reports with visual updates, completed tasks, and upcoming milestones.",
          tools: ["Email Reports", "Dashboard", "Screenshots"],
          frequency: "Every Friday"
        },
        {
          title: "Milestone Reviews",
          description: "Interactive sessions to review completed phases and gather feedback before proceeding.",
          tools: ["Screen Sharing", "Live Demo", "Feedback Forms"],
          frequency: "End of each phase"
        },
        {
          title: "Daily Availability",
          description: "Quick questions and urgent matters addressed within 4 hours during business days.",
          tools: ["Slack", "Email", "Phone"],
          frequency: "Mon-Fri, 9AM-6PM EST"
        }
      ]
    },
    development: {
      title: "Development Workflow",
      icon: "Code",
      color: "gold",
      description: "Our systematic approach to building robust, scalable solutions.",
      steps: [
        {
          title: "Environment Setup",
          description: "Secure development, staging, and production environments with proper version control.",
          tools: ["Git", "Docker", "CI/CD Pipeline"],
          frequency: "Project initialization"
        },
        {
          title: "Feature Development",
          description: "Iterative development with regular commits and code reviews for quality assurance.",
          tools: ["VS Code", "GitHub", "Code Review"],
          frequency: "Daily commits"
        },
        {
          title: "Testing & QA",
          description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
          tools: ["Jest", "Cypress", "Manual Testing"],
          frequency: "Continuous"
        },
        {
          title: "Deployment",
          description: "Automated deployment process with rollback capabilities and performance monitoring.",
          tools: ["Vercel", "AWS", "Monitoring"],
          frequency: "Weekly releases"
        }
      ]
    },
    quality: {
      title: "Quality Assurance",
      icon: "CheckCircle",
      color: "success",
      description: "Multi-layered quality control to ensure flawless deliverables.",
      steps: [
        {
          title: "Code Review",
          description: "Peer review of all code changes with focus on best practices and maintainability.",
          tools: ["GitHub PR", "SonarQube", "ESLint"],
          frequency: "Every commit"
        },
        {
          title: "Automated Testing",
          description: "Comprehensive test suite covering functionality, performance, and security.",
          tools: ["Unit Tests", "Integration Tests", "E2E Tests"],
          frequency: "Continuous integration"
        },
        {
          title: "Manual Testing",
          description: "Human testing across different devices, browsers, and user scenarios.",
          tools: ["BrowserStack", "Device Testing", "User Flows"],
          frequency: "Before each release"
        },
        {
          title: "Performance Audit",
          description: "Regular performance monitoring and optimization to maintain optimal speed.",
          tools: ["Lighthouse", "GTMetrix", "Core Web Vitals"],
          frequency: "Weekly monitoring"
        }
      ]
    },
    feedback: {
      title: "Feedback Integration",
      icon: "MessageSquare",
      color: "conversion",
      description: "How we collect, process, and implement your feedback effectively.",
      steps: [
        {
          title: "Feedback Collection",
          description: "Multiple channels for gathering your thoughts, concerns, and suggestions.",
          tools: ["Feedback Forms", "Video Calls", "Annotated Screenshots"],
          frequency: "Ongoing availability"
        },
        {
          title: "Prioritization",
          description: "Collaborative prioritization of feedback based on impact, effort, and project goals.",
          tools: ["Priority Matrix", "Impact Analysis", "Timeline Review"],
          frequency: "Within 24 hours"
        },
        {
          title: "Implementation",
          description: "Systematic implementation of approved changes with progress tracking.",
          tools: ["Task Management", "Progress Updates", "Version Control"],
          frequency: "Next development cycle"
        },
        {
          title: "Validation",
          description: "Confirmation that implemented changes meet your expectations and requirements.",
          tools: ["Demo Sessions", "Testing Environment", "Approval Process"],
          frequency: "Before final deployment"
        }
      ]
    }
  };

  const getColorClass = (color, type = 'text') => {
    const colorMap = {
      accent: type === 'text' ? 'text-accent' : type === 'bg' ? 'bg-accent' : 'border-accent',
      gold: type === 'text' ? 'text-gold' : type === 'bg' ? 'bg-gold' : 'border-gold',
      success: type === 'text' ? 'text-success' : type === 'bg' ? 'bg-success' : 'border-success',
      conversion: type === 'text' ? 'text-conversion' : type === 'bg' ? 'bg-conversion' : 'border-conversion'
    };
    return colorMap[color] || 'text-accent';
  };

  const transparencyPrinciples = [
    {
      icon: "Eye",
      title: "Full Visibility",
      description: "Complete access to project progress, code repositories, and development environments."
    },
    {
      icon: "Clock",
      title: "Real-time Updates",
      description: "Live project dashboards and instant notifications for all major milestones."
    },
    {
      icon: "FileText",
      title: "Detailed Documentation",
      description: "Comprehensive documentation of decisions, changes, and technical specifications."
    },
    {
      icon: "Users",
      title: "Open Communication",
      description: "Direct access to team members and transparent discussion of challenges and solutions."
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
          Process <span className="text-gradient">Transparency</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Complete visibility into our workflows, communication protocols, and quality assurance processes. 
          No black boxes, no surprises – just clear, transparent collaboration.
        </p>
      </motion.div>

      {/* Transparency Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transparencyPrinciples.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium text-center"
          >
            <Icon name={principle.icon} size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary-dark mb-2">{principle.title}</h3>
            <p className="text-text-secondary-dark text-sm">{principle.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Workflow Selector */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Detailed Workflows</h3>
        
        {/* Workflow Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(workflows).map(([key, workflow]) => (
            <button
              key={key}
              onClick={() => setActiveWorkflow(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium ${
                activeWorkflow === key
                  ? `${getColorClass(workflow.color, 'bg')} text-primary`
                  : 'bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40'
              }`}
            >
              <Icon name={workflow.icon} size={16} />
              <span className="hidden sm:inline">{workflow.title}</span>
            </button>
          ))}
        </div>

        {/* Active Workflow Details */}
        <motion.div
          key={activeWorkflow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/20 rounded-xl p-8 border border-border-dark"
        >
          <div className="space-y-8">
            {/* Workflow Header */}
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${getColorClass(workflows[activeWorkflow].color, 'bg')} rounded-lg flex items-center justify-center`}>
                <Icon name={workflows[activeWorkflow].icon} size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-text-primary-dark">{workflows[activeWorkflow].title}</h4>
                <p className="text-text-secondary-dark">{workflows[activeWorkflow].description}</p>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {workflows[activeWorkflow].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-primary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 ${getColorClass(workflows[activeWorkflow].color, 'bg')} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h5 className="text-lg font-semibold text-text-primary-dark">{step.title}</h5>
                      <p className="text-text-secondary-dark">{step.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="Tool" size={14} className={getColorClass(workflows[activeWorkflow].color)} />
                          <span className="text-sm text-text-secondary-dark">Tools:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className={`px-2 py-1 ${getColorClass(workflows[activeWorkflow].color, 'bg')}/20 ${getColorClass(workflows[activeWorkflow].color)} text-xs rounded-full`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className={getColorClass(workflows[activeWorkflow].color)} />
                        <span className="text-sm text-text-secondary-dark">{step.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary-dark mb-2">Live Project Dashboard</h3>
            <p className="text-text-secondary-dark">
              Every client gets access to a real-time dashboard showing project progress, milestones, and communication history.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/30 rounded-lg p-6 text-center">
              <Icon name="BarChart3" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Progress Tracking</h4>
              <p className="text-text-secondary-dark text-sm">
                Visual progress indicators for all project phases and tasks.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-6 text-center">
              <Icon name="MessageSquare" size={32} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Communication Hub</h4>
              <p className="text-text-secondary-dark text-sm">
                Centralized communication with message history and file sharing.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-6 text-center">
              <Icon name="FileText" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Document Library</h4>
              <p className="text-text-secondary-dark text-sm">
                Access to all project documents, designs, and deliverables.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessTransparency;