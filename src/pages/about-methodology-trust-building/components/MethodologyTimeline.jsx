import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MethodologyTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'discovery',
      title: 'Discovery & Research',
      duration: '1-2 weeks',
      icon: 'Search',
      color: 'accent',
      description: 'Deep dive into your business, audience, and objectives to create a strategic foundation.',
      activities: [
        'Stakeholder interviews and requirement gathering',
        'Competitive analysis and market research',
        'User persona development and journey mapping',
        'Technical architecture planning',
        'Content audit and strategy development'
      ],
      deliverables: [
        'Project roadmap and timeline',
        'Technical specification document',
        'User experience wireframes',
        'Content strategy framework'
      ]
    },
    {
      id: 'planning',
      title: 'Strategic Planning',
      duration: '1 week',
      icon: 'Layout',
      color: 'gold',
      description: 'Transform insights into actionable plans with detailed design and development strategies.',
      activities: [
        'Information architecture design',
        'Visual design system creation',
        'Development approach finalization',
        'Resource allocation and timeline refinement',
        'Risk assessment and mitigation planning'
      ],
      deliverables: [
        'Design system and style guide',
        'Detailed project timeline',
        'Technical implementation plan',
        'Quality assurance framework'
      ]
    },
    {
      id: 'development',
      title: 'Development & Creation',
      duration: '3-6 weeks',
      icon: 'Code',
      color: 'conversion',
      description: 'Bring designs to life with clean, scalable code and pixel-perfect implementation.',
      activities: [
        'Frontend development with modern frameworks',
        'Backend integration and API development',
        'Content management system setup',
        'Performance optimization and security implementation',
        'Cross-browser and device testing'
      ],
      deliverables: [
        'Fully functional website or application',
        'Content management system',
        'Performance optimization report',
        'Security implementation documentation'
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Refinement',
      duration: '1-2 weeks',
      icon: 'TestTube',
      color: 'success',
      description: 'Rigorous testing ensures flawless performance across all devices and scenarios.',
      activities: [
        'Comprehensive functionality testing',
        'User acceptance testing with real users',
        'Performance and load testing',
        'Security vulnerability assessment',
        'Accessibility compliance verification'
      ],
      deliverables: [
        'Testing report and bug fixes',
        'Performance optimization results',
        'Security audit documentation',
        'Accessibility compliance certificate'
      ]
    },
    {
      id: 'optimization',
      title: 'Launch & Optimization',
      duration: 'Ongoing',
      icon: 'Rocket',
      color: 'warning',
      description: 'Strategic launch followed by continuous monitoring and optimization for peak performance.',
      activities: [
        'Production deployment and monitoring',
        'Analytics setup and tracking implementation',
        'SEO optimization and search engine submission',
        'Performance monitoring and optimization',
        'User feedback collection and analysis'
      ],
      deliverables: [
        'Live website or application',
        'Analytics and monitoring dashboard',
        'SEO optimization report',
        'Ongoing support and maintenance plan'
      ]
    }
  ];

  const getColorClass = (color, type = 'text') => {
    const colorMap = {
      accent: type === 'text' ? 'text-accent' : type === 'bg' ? 'bg-accent' : 'border-accent',
      gold: type === 'text' ? 'text-gold' : type === 'bg' ? 'bg-gold' : 'border-gold',
      conversion: type === 'text' ? 'text-conversion' : type === 'bg' ? 'bg-conversion' : 'border-conversion',
      success: type === 'text' ? 'text-success' : type === 'bg' ? 'bg-success' : 'border-success',
      warning: type === 'text' ? 'text-warning' : type === 'bg' ? 'bg-warning' : 'border-warning'
    };
    return colorMap[color] || 'text-accent';
  };

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
          Our Proven <span className="text-gradient">Methodology</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          A systematic approach refined through 150+ successful projects, ensuring consistent excellence and predictable results.
        </p>
      </motion.div>

      {/* Interactive Timeline */}
      <div className="space-y-8">
        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium ${
                activePhase === index
                  ? `${getColorClass(phase.color, 'bg')} text-primary`
                  : 'bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40'
              }`}
            >
              <Icon name={phase.icon} size={16} />
              <span className="hidden sm:inline">{phase.title}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/20 rounded-xl p-8 border border-border-dark"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase Overview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${getColorClass(phases[activePhase].color, 'bg')} rounded-lg flex items-center justify-center`}>
                  <Icon name={phases[activePhase].icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary-dark">
                    {phases[activePhase].title}
                  </h3>
                  <p className={`${getColorClass(phases[activePhase].color)} font-medium`}>
                    Duration: {phases[activePhase].duration}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary-dark text-lg leading-relaxed">
                {phases[activePhase].description}
              </p>

              {/* Key Activities */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary-dark mb-3">Key Activities</h4>
                <ul className="space-y-2">
                  {phases[activePhase].activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className={`${getColorClass(phases[activePhase].color)} mt-0.5 flex-shrink-0`} />
                      <span className="text-text-secondary-dark">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-text-primary-dark">Deliverables</h4>
              <div className="space-y-3">
                {phases[activePhase].deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className="bg-primary/20 rounded-lg p-4 border border-border-dark hover:border-accent/30 transition-premium"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="FileText" size={16} className={getColorClass(phases[activePhase].color)} />
                      <span className="text-text-primary-dark font-medium">{deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phase Progress Indicator */}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-text-secondary-dark mb-2">
                  <span>Phase Progress</span>
                  <span>{activePhase + 1} of {phases.length}</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2">
                  <div
                    className={`${getColorClass(phases[activePhase].color, 'bg')} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium disabled:opacity-50 disabled:cursor-not-allowed bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40"
          >
            <Icon name="ChevronLeft" size={16} />
            <span>Previous Phase</span>
          </button>

          <div className="text-center">
            <div className="text-sm text-text-secondary-dark">
              Phase {activePhase + 1} of {phases.length}
            </div>
          </div>

          <button
            onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
            disabled={activePhase === phases.length - 1}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium disabled:opacity-50 disabled:cursor-not-allowed bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40"
          >
            <span>Next Phase</span>
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>

      {/* Methodology Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border border-accent/20">
          <Icon name="Target" size={32} className="text-accent mb-4" />
          <h3 className="text-lg font-semibold text-text-primary-dark mb-2">Predictable Results</h3>
          <p className="text-text-secondary-dark">
            Our structured approach ensures consistent quality and timeline adherence across all projects.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-6 border border-gold/20">
          <Icon name="Users" size={32} className="text-gold mb-4" />
          <h3 className="text-lg font-semibold text-text-primary-dark mb-2">Client Collaboration</h3>
          <p className="text-text-secondary-dark">
            Transparent communication and regular feedback loops keep you involved throughout the process.
          </p>
        </div>

        <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border border-success/20">
          <Icon name="TrendingUp" size={32} className="text-success mb-4" />
          <h3 className="text-lg font-semibold text-text-primary-dark mb-2">Continuous Improvement</h3>
          <p className="text-text-secondary-dark">
            Each phase includes optimization opportunities to exceed expectations and drive better results.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MethodologyTimeline;