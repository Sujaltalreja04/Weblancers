import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesInAction = () => {
  const values = [
    {
      title: "Quality Excellence",
      icon: "Award",
      color: "accent",
      description: "We never compromise on quality, ensuring every deliverable exceeds expectations.",
      examples: [
        {
          situation: "E-commerce Platform Development",
          action: "Discovered performance issues during testing phase",
          result: "Rebuilt entire checkout process to achieve 40% faster load times",
          clientFeedback: "The attention to detail and commitment to performance was exceptional. Our conversion rates improved by 25% after launch."
        }
      ],
      metrics: [
        { label: "Code Quality Score", value: "9.8/10" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Bug-Free Launches", value: "94%" }
      ]
    },
    {
      title: "Transparent Communication",
      icon: "MessageSquare",
      color: "gold",
      description: "Open, honest communication builds trust and ensures project success.",
      examples: [
        {
          situation: "Mobile App Development",
          action: "Identified scope creep that would impact timeline and budget",
          result: "Proactively communicated changes and provided alternative solutions",
          clientFeedback: "Their transparency about challenges and solutions helped us make informed decisions. No surprises, just honest partnership."
        }
      ],
      metrics: [
        { label: "Response Time", value: "< 4 hours" },
        { label: "Weekly Updates", value: "100%" },
        { label: "Client Retention", value: "89%" }
      ]
    },
    {
      title: "Client Partnership",
      icon: "Handshake",
      color: "success",
      description: "We view every client relationship as a long-term partnership, not just a transaction.",
      examples: [
        {
          situation: "Startup Website Launch",
          action: "Client needed to pivot business model mid-project",
          result: "Adapted design and functionality without additional costs",
          clientFeedback: "They treated our success as their own success. When we needed to pivot, they were right there with us, making it work."
        }
      ],
      metrics: [
        { label: "Long-term Clients", value: "67%" },
        { label: "Referral Rate", value: "43%" },
        { label: "Project Extensions", value: "78%" }
      ]
    },
    {
      title: "Innovation Leadership",
      icon: "Lightbulb",
      color: "conversion",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
      examples: [
        {
          situation: "Corporate Website Redesign",
          action: "Proposed AI-powered chatbot integration for customer support",
          result: "Reduced support tickets by 60% and improved user satisfaction",
          clientFeedback: "They didn't just build what we asked for – they brought ideas we never considered that transformed our business."
        }
      ],
      metrics: [
        { label: "New Tech Adoption", value: "6 months" },
        { label: "Innovation Projects", value: "34%" },
        { label: "Performance Gains", value: "45%" }
      ]
    }
  ];

  const getColorClass = (color, type = 'text') => {
    const colorMap = {
      accent: type === 'text' ? 'text-accent' : type === 'bg' ? 'bg-accent' : 'border-accent',
      gold: type === 'text' ? 'text-gold' : type === 'bg' ? 'bg-gold' : 'border-gold',
      success: type === 'text' ? 'text-success' : type === 'bg' ? 'bg-success' : 'border-success',
      conversion: type === 'text' ? 'text-conversion' : type === 'bg' ? 'bg-conversion' : 'border-conversion'
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
          Values in <span className="text-gradient">Action</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Our values aren't just words on a wall – they guide every decision, interaction, and deliverable. 
          See how our commitment translates into real results for our clients.
        </p>
      </motion.div>

      {/* Values Showcase */}
      <div className="space-y-16">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Value Header */}
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${getColorClass(value.color, 'bg')} rounded-lg flex items-center justify-center`}>
                <Icon name={value.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary-dark">{value.title}</h3>
                <p className="text-text-secondary-dark">{value.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Case Study */}
              <div className="lg:col-span-2 space-y-6">
                <h4 className="text-lg font-semibold text-text-primary-dark">Real Example</h4>
                
                {value.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="bg-secondary/20 rounded-lg p-6 border border-border-dark">
                    <div className="space-y-4">
                      <div>
                        <h5 className={`font-semibold ${getColorClass(value.color)} mb-2`}>Situation</h5>
                        <p className="text-text-secondary-dark">{example.situation}</p>
                      </div>
                      
                      <div>
                        <h5 className={`font-semibold ${getColorClass(value.color)} mb-2`}>Our Action</h5>
                        <p className="text-text-secondary-dark">{example.action}</p>
                      </div>
                      
                      <div>
                        <h5 className={`font-semibold ${getColorClass(value.color)} mb-2`}>Result</h5>
                        <p className="text-text-secondary-dark">{example.result}</p>
                      </div>
                      
                      <div className={`bg-gradient-to-r from-${value.color}/10 to-${value.color}/5 rounded-lg p-4 border-l-4 ${getColorClass(value.color, 'border')}`}>
                        <Icon name="Quote" size={20} className={`${getColorClass(value.color)} mb-2`} />
                        <p className="text-text-primary-dark italic">"{example.clientFeedback}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-text-primary-dark">By the Numbers</h4>
                
                <div className="space-y-4">
                  {value.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-secondary/20 rounded-lg p-4 border border-border-dark text-center"
                    >
                      <div className={`text-2xl font-bold ${getColorClass(value.color)} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-text-secondary-dark">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className={`bg-gradient-to-br from-${value.color}/10 to-${value.color}/5 rounded-lg p-4 border ${getColorClass(value.color, 'border')}/20`}>
                  <Icon name="Info" size={20} className={`${getColorClass(value.color)} mb-2`} />
                  <p className="text-text-secondary-dark text-sm">
                    This value is demonstrated across all our projects, with consistent measurement and improvement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Success Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="text-center space-y-6">
          <Icon name="Target" size={48} className="text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-text-primary-dark">Our Client Success Philosophy</h3>
          <p className="text-text-secondary-dark text-lg leading-relaxed max-w-3xl mx-auto">
            We believe that our success is directly tied to our clients'success. This isn't just about delivering a project – it's about creating lasting value, building long-term relationships, and being a trusted 
            partner in your digital journey. Every decision we make is filtered through one question: 
            "How does this help our client achieve their goals?"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Partnership Approach</h4>
              <p className="text-text-secondary-dark text-sm">
                We're not just vendors – we're strategic partners invested in your success.
              </p>
            </div>
            
            <div className="text-center">
              <Icon name="TrendingUp" size={32} className="text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Long-term Value</h4>
              <p className="text-text-secondary-dark text-sm">
                Every solution is designed for scalability and future growth.
              </p>
            </div>
            
            <div className="text-center">
              <Icon name="Shield" size={32} className="text-success mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary-dark mb-2">Reliable Support</h4>
              <p className="text-text-secondary-dark text-sm">
                Ongoing support and maintenance to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ValuesInAction;