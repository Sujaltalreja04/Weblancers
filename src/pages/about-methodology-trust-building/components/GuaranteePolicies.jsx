import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GuaranteePolicies = () => {
  const [activeGuarantee, setActiveGuarantee] = useState('quality');

  const guarantees = {
    quality: {
      title: "Quality Guarantee",
      icon: "Award",
      color: "accent",
      description: "Comprehensive quality assurance with measurable standards and satisfaction guarantees.",
      details: [
        {
          title: "Code Quality Standards",
          description: "All code meets industry best practices with comprehensive testing and documentation.",
          commitment: "100% code review coverage with automated quality checks",
          remedy: "Free refactoring if code quality standards are not met"
        },
        {
          title: "Performance Benchmarks",
          description: "Guaranteed performance metrics including load times and responsiveness.",
          commitment: "Sub-3 second load times and 95+ Lighthouse scores",
          remedy: "Performance optimization at no additional cost"
        },
        {
          title: "Cross-Browser Compatibility",
          description: "Consistent functionality across all major browsers and devices.",
          commitment: "Testing on Chrome, Firefox, Safari, and Edge browsers",
          remedy: "Free compatibility fixes for any browser issues"
        },
        {
          title: "Accessibility Compliance",
          description: "WCAG 2.1 AA compliance for inclusive user experiences.",
          commitment: "Full accessibility audit and compliance certification",
          remedy: "Accessibility improvements included in project scope"
        }
      ]
    },
    delivery: {
      title: "Delivery Guarantee",
      icon: "Clock",
      color: "gold",
      description: "Reliable project delivery with transparent timelines and milestone commitments.",
      details: [
        {
          title: "Timeline Adherence",
          description: "Projects delivered on schedule with regular progress updates.",
          commitment: "95% on-time delivery rate with weekly progress reports",
          remedy: "10% discount for delays beyond agreed timeline"
        },
        {
          title: "Milestone Completion",
          description: "Clear milestones with defined deliverables and approval processes.",
          commitment: "Detailed milestone documentation with client approval",
          remedy: "Milestone rework included until client satisfaction"
        },
        {
          title: "Scope Management",
          description: "Clear scope definition with transparent change management.",
          commitment: "Detailed project scope with change request process",
          remedy: "Free minor scope adjustments within reason"
        },
        {
          title: "Communication Standards",
          description: "Regular communication with defined response times.",
          commitment: "4-hour response time during business hours",
          remedy: "Extended support hours for communication delays"
        }
      ]
    },
    support: {
      title: "Support Guarantee",
      icon: "Headphones",
      color: "success",
      description: "Comprehensive post-launch support with guaranteed response times and issue resolution.",
      details: [
        {
          title: "Bug-Free Launch",
          description: "Thorough testing ensures minimal post-launch issues.",
          commitment: "Comprehensive testing with bug tracking and resolution",
          remedy: "Free bug fixes for 90 days post-launch"
        },
        {
          title: "Technical Support",
          description: "Ongoing technical support for questions and minor issues.",
          commitment: "Email and chat support with 24-hour response time",
          remedy: "Priority support escalation for urgent issues"
        },
        {
          title: "Security Updates",
          description: "Regular security updates and vulnerability patches.",
          commitment: "Monthly security reviews and immediate critical patches",
          remedy: "Emergency security response within 4 hours"
        },
        {
          title: "Performance Monitoring",
          description: "Continuous monitoring with proactive issue identification.",
          commitment: "24/7 uptime monitoring with performance alerts",
          remedy: "Performance optimization included in support"
        }
      ]
    },
    satisfaction: {
      title: "Satisfaction Guarantee",
      icon: "Heart",
      color: "conversion",
      description: "Client satisfaction commitment with revision policies and satisfaction measures.",
      details: [
        {
          title: "Revision Rounds",
          description: "Multiple revision rounds included in project scope.",
          commitment: "Up to 3 major revision rounds per project phase",
          remedy: "Additional revisions at 50% standard rate"
        },
        {
          title: "Client Approval Process",
          description: "Clear approval process with documented sign-offs.",
          commitment: "Formal approval process with detailed documentation",
          remedy: "Rework included until client approval achieved"
        },
        {
          title: "Satisfaction Surveys",
          description: "Regular satisfaction surveys with improvement commitments.",
          commitment: "Monthly satisfaction surveys with action plans",
          remedy: "Service improvements based on feedback"
        },
        {
          title: "Money-Back Guarantee",
          description: "Satisfaction guarantee with refund policy for unresolved issues.",
          commitment: "30-day satisfaction guarantee with clear criteria",
          remedy: "Partial refund for unresolved satisfaction issues"
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

  const riskMitigation = [
    {
      risk: "Project Delays",
      mitigation: "Detailed planning with buffer time and regular milestone reviews",
      protection: "Timeline guarantee with compensation for delays",
      icon: "Clock"
    },
    {
      risk: "Scope Creep",
      mitigation: "Clear scope definition with formal change request process",
      protection: "Fixed-price contracts with transparent change management",
      icon: "Target"
    },
    {
      risk: "Technical Issues",
      mitigation: "Comprehensive testing and quality assurance processes",
      protection: "Free bug fixes and technical support post-launch",
      icon: "Code"
    },
    {
      risk: "Communication Gaps",
      mitigation: "Regular updates and multiple communication channels",
      protection: "Guaranteed response times with escalation procedures",
      icon: "MessageSquare"
    }
  ];

  const clientProtections = [
    {
      title: "Intellectual Property Protection",
      description: "Full ownership transfer of all code and assets upon project completion.",
      icon: "Shield",
      details: ["Complete source code ownership", "Asset transfer documentation", "No licensing restrictions"]
    },
    {
      title: "Data Security Guarantee",
      description: "Comprehensive data protection with encryption and secure handling.",
      icon: "Lock",
      details: ["End-to-end encryption", "Secure data handling", "GDPR compliance"]
    },
    {
      title: "Confidentiality Assurance",
      description: "Strict confidentiality agreements protecting your business information.",
      icon: "Eye",
      details: ["NDA protection", "Secure development environment", "Limited access controls"]
    },
    {
      title: "Business Continuity",
      description: "Documented processes and knowledge transfer for business continuity.",
      icon: "RefreshCw",
      details: ["Complete documentation", "Knowledge transfer sessions", "Ongoing support options"]
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
          Guarantee <span className="text-gradient">Policies</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Comprehensive guarantees that protect your investment and ensure project success. 
          Clear expectations, measurable commitments, and risk mitigation strategies.
        </p>
      </motion.div>

      {/* Guarantee Categories */}
      <div className="space-y-8">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(guarantees).map(([key, guarantee]) => (
            <button
              key={key}
              onClick={() => setActiveGuarantee(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium ${
                activeGuarantee === key
                  ? `${getColorClass(guarantee.color, 'bg')} text-primary`
                  : 'bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40'
              }`}
            >
              <Icon name={guarantee.icon} size={16} />
              <span className="hidden sm:inline">{guarantee.title}</span>
            </button>
          ))}
        </div>

        {/* Active Guarantee Details */}
        <motion.div
          key={activeGuarantee}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Guarantee Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name={guarantees[activeGuarantee].icon} size={32} className={getColorClass(guarantees[activeGuarantee].color)} />
              <h3 className="text-2xl font-bold text-text-primary-dark">{guarantees[activeGuarantee].title}</h3>
            </div>
            <p className="text-text-secondary-dark max-w-2xl mx-auto">
              {guarantees[activeGuarantee].description}
            </p>
          </div>

          {/* Guarantee Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guarantees[activeGuarantee].details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-primary-dark">{detail.title}</h4>
                  <p className="text-text-secondary-dark text-sm">{detail.description}</p>
                  
                  <div className="space-y-3">
                    <div className={`bg-gradient-to-r from-${guarantees[activeGuarantee].color}/10 to-${guarantees[activeGuarantee].color}/5 rounded-lg p-4 border-l-4 ${getColorClass(guarantees[activeGuarantee].color, 'border')}`}>
                      <div className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className={`${getColorClass(guarantees[activeGuarantee].color)} mt-0.5`} />
                        <div>
                          <div className="text-sm font-medium text-text-primary-dark mb-1">Our Commitment</div>
                          <div className="text-sm text-text-secondary-dark">{detail.commitment}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success">
                      <div className="flex items-start space-x-2">
                        <Icon name="Shield" size={16} className="text-success mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-text-primary-dark mb-1">Your Protection</div>
                          <div className="text-sm text-text-secondary-dark">{detail.remedy}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Risk Mitigation */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Risk Mitigation Strategies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {riskMitigation.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-warning/30 transition-premium"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name={item.icon} size={24} className="text-warning" />
                  <h4 className="text-lg font-semibold text-text-primary-dark">{item.risk}</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-text-primary-dark mb-1">Prevention Strategy</div>
                    <p className="text-text-secondary-dark text-sm">{item.mitigation}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-text-primary-dark mb-1">Client Protection</div>
                    <p className="text-text-secondary-dark text-sm">{item.protection}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Protections */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Additional Client Protections</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientProtections.map((protection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium text-center"
            >
              <Icon name={protection.icon} size={32} className="text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{protection.title}</h4>
              <p className="text-text-secondary-dark text-sm mb-4">{protection.description}</p>
              
              <div className="space-y-2">
                {protection.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2 text-xs text-text-secondary-dark">
                    <Icon name="CheckCircle" size={12} className="text-accent" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Guarantee Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="text-center space-y-6">
          <Icon name="Award" size={48} className="text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-text-primary-dark">Our Promise to You</h3>
          <p className="text-text-secondary-dark text-lg leading-relaxed max-w-3xl mx-auto">
            These guarantees aren't just policies – they're our commitment to your success. 
            We stand behind our work with measurable standards, clear remedies, and comprehensive 
            protections that give you confidence in your investment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Icon name="Shield" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Risk-Free Investment</h4>
              <p className="text-text-secondary-dark text-sm">
                Comprehensive guarantees protect your investment and ensure project success.
              </p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={32} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Reliable Delivery</h4>
              <p className="text-text-secondary-dark text-sm">
                Transparent timelines with guaranteed delivery and quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <Icon name="Heart" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Complete Satisfaction</h4>
              <p className="text-text-secondary-dark text-sm">
                Your satisfaction is guaranteed with clear remedies and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GuaranteePolicies;