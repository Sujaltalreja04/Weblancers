import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessVisualization = ({ service }) => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = {
    'web-development': [
      {
        title: 'Discovery & Planning',
        description: 'Requirements gathering, technical architecture planning, and project roadmap creation',
        icon: 'Search',
        duration: '1-2 weeks',
        deliverables: ['Technical Specification', 'Project Timeline', 'Wireframes']
      },
      {
        title: 'Design & Prototyping',
        description: 'UI/UX design, interactive prototypes, and design system development',
        icon: 'Palette',
        duration: '2-3 weeks',
        deliverables: ['Design System', 'Interactive Prototype', 'Asset Library']
      },
      {
        title: 'Development & Integration',
        description: 'Frontend development, backend integration, and API implementation',
        icon: 'Code',
        duration: '4-8 weeks',
        deliverables: ['Functional Application', 'API Integration', 'Testing Suite']
      },
      {
        title: 'Testing & Optimization',
        description: 'Quality assurance, performance optimization, and cross-browser testing',
        icon: 'TestTube',
        duration: '1-2 weeks',
        deliverables: ['Test Reports', 'Performance Metrics', 'Bug Fixes']
      },
      {
        title: 'Launch & Support',
        description: 'Deployment, monitoring setup, and ongoing maintenance support',
        icon: 'Rocket',
        duration: 'Ongoing',
        deliverables: ['Live Application', 'Monitoring Dashboard', 'Support Documentation']
      }
    ],
    'mobile-apps': [
      {
        title: 'Strategy & Research',
        description: 'Market research, user persona development, and platform strategy',
        icon: 'Target',
        duration: '1-2 weeks',
        deliverables: ['Market Analysis', 'User Personas', 'Platform Strategy']
      },
      {
        title: 'UX/UI Design',
        description: 'User experience design, interface mockups, and interaction design',
        icon: 'Smartphone',
        duration: '2-4 weeks',
        deliverables: ['App Mockups', 'Interaction Design', 'Style Guide']
      },
      {
        title: 'Development',
        description: 'Cross-platform development, native feature integration, and API development',
        icon: 'Code',
        duration: '6-12 weeks',
        deliverables: ['Beta Application', 'API Backend', 'Testing Build']
      },
      {
        title: 'Testing & QA',
        description: 'Device testing, performance optimization, and user acceptance testing',
        icon: 'Shield',
        duration: '2-3 weeks',
        deliverables: ['QA Reports', 'Performance Optimization', 'User Testing Results']
      },
      {
        title: 'App Store Launch',
        description: 'Store submission, launch strategy, and post-launch monitoring',
        icon: 'Store',
        duration: '1-2 weeks',
        deliverables: ['App Store Listing', 'Launch Campaign', 'Analytics Setup']
      }
    ],
    'social-media': [
      {
        title: 'Brand Analysis',
        description: 'Brand audit, competitor analysis, and audience research',
        icon: 'BarChart3',
        duration: '1 week',
        deliverables: ['Brand Audit Report', 'Competitor Analysis', 'Audience Insights']
      },
      {
        title: 'Strategy Development',
        description: 'Content strategy, posting schedule, and campaign planning',
        icon: 'Calendar',
        duration: '1 week',
        deliverables: ['Content Strategy', 'Editorial Calendar', 'Campaign Plan']
      },
      {
        title: 'Content Creation',
        description: 'Visual content design, copywriting, and multimedia production',
        icon: 'Image',
        duration: 'Ongoing',
        deliverables: ['Visual Content', 'Copy Library', 'Video Content']
      },
      {
        title: 'Campaign Execution',
        description: 'Content publishing, community management, and engagement optimization',
        icon: 'Send',
        duration: 'Ongoing',
        deliverables: ['Published Content', 'Engagement Reports', 'Community Growth']
      },
      {
        title: 'Analytics & Optimization',
        description: 'Performance tracking, ROI analysis, and strategy refinement',
        icon: 'TrendingUp',
        duration: 'Monthly',
        deliverables: ['Analytics Reports', 'ROI Analysis', 'Strategy Updates']
      }
    ],
    'ai-agents': [
      {
        title: 'Requirements Analysis',
        description: 'Use case definition, workflow mapping, and integration planning',
        icon: 'Brain',
        duration: '1-2 weeks',
        deliverables: ['Use Case Document', 'Workflow Map', 'Integration Plan']
      },
      {
        title: 'AI Model Selection',
        description: 'Model evaluation, training data preparation, and architecture design',
        icon: 'Cpu',
        duration: '1-2 weeks',
        deliverables: ['Model Selection Report', 'Training Dataset', 'Architecture Design']
      },
      {
        title: 'Development & Training',
        description: 'AI agent development, model training, and integration implementation',
        icon: 'Bot',
        duration: '3-5 weeks',
        deliverables: ['Trained AI Model', 'Agent Implementation', 'API Integration']
      },
      {
        title: 'Testing & Refinement',
        description: 'Performance testing, accuracy validation, and response optimization',
        icon: 'TestTube2',
        duration: '1-2 weeks',
        deliverables: ['Test Results', 'Performance Metrics', 'Optimization Report']
      },
      {
        title: 'Deployment & Monitoring',
        description: 'Production deployment, monitoring setup, and continuous improvement',
        icon: 'Activity',
        duration: 'Ongoing',
        deliverables: ['Live AI Agent', 'Monitoring Dashboard', 'Improvement Plan']
      }
    ]
  };

  const steps = processSteps[service.id] || processSteps['web-development'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary-dark mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
            Transparent methodology with clear milestones and deliverables at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Process Steps */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer transition-premium ${
                    activeStep === index ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`glassmorphism rounded-xl p-6 ${
                      activeStep === index
                        ? 'shadow-glow border-accent/50'
                        : 'hover:shadow-premium'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeStep === index
                            ? `bg-gradient-to-br ${service.color}`
                            : 'bg-secondary'
                        }`}>
                          <Icon 
                            name={step.icon} 
                            size={20} 
                            color={activeStep === index ? "var(--color-primary)" : "var(--color-text-secondary-dark)"}
                          />
                        </div>
                        <div className="text-xs text-center mt-2 text-text-secondary-dark">
                          Step {index + 1}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-text-primary-dark">
                            {step.title}
                          </h3>
                          <span className="text-sm text-accent font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-text-secondary-dark text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Active Indicator */}
                      {activeStep === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-accent rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={steps[activeStep].icon} size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary-dark">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-sm text-accent">
                      {steps[activeStep].duration}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary-dark mb-6">
                  {steps[activeStep].description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary-dark mb-3">
                    Key Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {steps[activeStep].deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={10} className="text-accent" />
                        </div>
                        <span className="text-sm text-text-secondary-dark">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-border-dark">
                  <div className="flex items-center justify-between text-xs text-text-secondary-dark mb-2">
                    <span>Progress</span>
                    <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-2 bg-gradient-to-r ${service.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization;