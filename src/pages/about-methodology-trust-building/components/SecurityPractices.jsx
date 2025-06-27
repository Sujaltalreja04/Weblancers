import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SecurityPractices = () => {
  const [activeSecurityArea, setActiveSecurityArea] = useState('development');

  const securityAreas = {
    development: {
      title: "Secure Development",
      icon: "Code",
      color: "accent",
      description: "Security-first development practices integrated into every stage of the development lifecycle.",
      practices: [
        {
          title: "Secure Coding Standards",
          description: "Implementation of OWASP secure coding practices and regular code security reviews.",
          implementation: "All code follows OWASP Top 10 guidelines with automated security linting.",
          tools: ["ESLint Security", "SonarQube", "Snyk", "OWASP ZAP"]
        },
        {
          title: "Input Validation & Sanitization",
          description: "Comprehensive input validation and sanitization to prevent injection attacks.",
          implementation: "Multi-layer validation on client-side, server-side, and database level.",
          tools: ["Joi Validation", "DOMPurify", "Helmet.js", "Express Validator"]
        },
        {
          title: "Authentication & Authorization",
          description: "Robust authentication systems with multi-factor authentication and role-based access.",
          implementation: "JWT tokens with refresh mechanisms, OAuth 2.0, and RBAC implementation.",
          tools: ["Auth0", "Passport.js", "JWT", "OAuth 2.0"]
        },
        {
          title: "Secure API Design",
          description: "API security with rate limiting, authentication, and proper error handling.",
          implementation: "RESTful APIs with proper authentication, rate limiting, and input validation.",
          tools: ["Express Rate Limit", "API Gateway", "Swagger Security", "CORS"]
        }
      ]
    },
    infrastructure: {
      title: "Infrastructure Security",
      icon: "Shield",
      color: "gold",
      description: "Comprehensive infrastructure security covering hosting, networking, and deployment.",
      practices: [
        {
          title: "SSL/TLS Encryption",
          description: "End-to-end encryption for all data transmission with modern TLS protocols.",
          implementation: "TLS 1.3 encryption, HSTS headers, and certificate pinning where applicable.",
          tools: ["Let\'s Encrypt", "Cloudflare SSL", "AWS Certificate Manager", "SSL Labs"]
        },
        {
          title: "Network Security",
          description: "Network-level security with firewalls, VPNs, and intrusion detection systems.",
          implementation: "WAF protection, DDoS mitigation, and network segmentation.",
          tools: ["Cloudflare WAF", "AWS Shield", "VPC Security Groups", "Network ACLs"]
        },
        {
          title: "Server Hardening",
          description: "Comprehensive server security configuration and regular security updates.",
          implementation: "Minimal attack surface, regular patching, and security monitoring.",
          tools: ["Docker Security", "AWS Security Groups", "System Hardening", "Vulnerability Scanning"]
        },
        {
          title: "Backup & Recovery",
          description: "Secure backup systems with encryption and tested recovery procedures.",
          implementation: "Automated encrypted backups with point-in-time recovery capabilities.",
          tools: ["AWS Backup", "Database Snapshots", "Encrypted Storage", "Recovery Testing"]
        }
      ]
    },
    compliance: {
      title: "Compliance & Standards",
      icon: "FileCheck",
      color: "success",
      description: "Adherence to industry standards and regulatory compliance requirements.",
      practices: [
        {
          title: "GDPR Compliance",
          description: "Full GDPR compliance with data protection, privacy controls, and user rights.",
          implementation: "Data minimization, consent management, and right to erasure implementation.",
          tools: ["Privacy Policies", "Consent Management", "Data Mapping", "Audit Logs"]
        },
        {
          title: "OWASP Compliance",
          description: "Following OWASP guidelines for web application security best practices.",
          implementation: "Regular OWASP Top 10 assessments and vulnerability remediation.",
          tools: ["OWASP ZAP", "Security Testing", "Vulnerability Assessment", "Penetration Testing"]
        },
        {
          title: "SOC 2 Alignment",
          description: "Security controls aligned with SOC 2 Type II requirements for service organizations.",
          implementation: "Security policies, access controls, and monitoring aligned with SOC 2.",
          tools: ["Access Management", "Audit Logging", "Security Monitoring", "Compliance Reporting"]
        },
        {
          title: "PCI DSS (When Applicable)",
          description: "Payment Card Industry compliance for applications handling payment data.",
          implementation: "Secure payment processing with tokenization and encryption.",
          tools: ["Stripe Security", "Payment Tokenization", "Secure Transmission", "Regular Audits"]
        }
      ]
    },
    monitoring: {
      title: "Security Monitoring",
      icon: "Eye",
      color: "conversion",
      description: "Continuous security monitoring and incident response capabilities.",
      practices: [
        {
          title: "Real-time Monitoring",
          description: "24/7 security monitoring with automated threat detection and alerting.",
          implementation: "SIEM integration with real-time log analysis and anomaly detection.",
          tools: ["CloudWatch", "Datadog Security", "Log Analysis", "Threat Detection"]
        },
        {
          title: "Vulnerability Management",
          description: "Regular vulnerability assessments and prompt remediation procedures.",
          implementation: "Automated vulnerability scanning with prioritized remediation workflows.",
          tools: ["Snyk", "OWASP Dependency Check", "Security Audits", "Patch Management"]
        },
        {
          title: "Incident Response",
          description: "Comprehensive incident response plan with defined procedures and communication.",
          implementation: "Documented incident response procedures with regular drills and updates.",
          tools: ["Incident Management", "Communication Plans", "Forensic Tools", "Recovery Procedures"]
        },
        {
          title: "Security Auditing",
          description: "Regular security audits and penetration testing by third-party security experts.",
          implementation: "Quarterly security assessments with annual penetration testing.",
          tools: ["Third-party Audits", "Penetration Testing", "Security Reports", "Remediation Tracking"]
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

  const securityCertifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      description: "Advanced cybersecurity knowledge and ethical hacking techniques.",
      icon: "Shield"
    },
    {
      title: "AWS Security Specialty",
      issuer: "Amazon Web Services",
      description: "Cloud security expertise and AWS security best practices.",
      icon: "Cloud"
    },
    {
      title: "OWASP Member",
      issuer: "OWASP Foundation",
      description: "Active participation in web application security community.",
      icon: "Users"
    },
    {
      title: "ISO 27001 Knowledge",
      issuer: "ISO",
      description: "Information security management system implementation.",
      icon: "FileCheck"
    }
  ];

  const securityMetrics = [
    { label: "Security Incidents", value: "0", period: "Last 12 months", icon: "AlertTriangle" },
    { label: "Vulnerability Response", value: "< 24h", period: "Average time", icon: "Clock" },
    { label: "Security Score", value: "A+", period: "SSL Labs Rating", icon: "Award" },
    { label: "Compliance Rate", value: "100%", period: "Security standards", icon: "CheckCircle" }
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
          Security <span className="text-gradient">Practices</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Enterprise-grade security practices that protect your data, ensure compliance, 
          and build trust through comprehensive security measures at every level.
        </p>
      </motion.div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-secondary/20 rounded-lg p-6 border border-border-dark text-center"
          >
            <Icon name={metric.icon} size={32} className="text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-text-primary-dark mb-1">{metric.value}</div>
            <div className="text-sm text-text-secondary-dark mb-1">{metric.label}</div>
            <div className="text-xs text-text-secondary-dark opacity-75">{metric.period}</div>
          </motion.div>
        ))}
      </div>

      {/* Security Areas */}
      <div className="space-y-8">
        {/* Area Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(securityAreas).map(([key, area]) => (
            <button
              key={key}
              onClick={() => setActiveSecurityArea(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium ${
                activeSecurityArea === key
                  ? `${getColorClass(area.color, 'bg')} text-primary`
                  : 'bg-secondary/20 text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/40'
              }`}
            >
              <Icon name={area.icon} size={16} />
              <span className="hidden sm:inline">{area.title}</span>
            </button>
          ))}
        </div>

        {/* Active Security Area */}
        <motion.div
          key={activeSecurityArea}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Area Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name={securityAreas[activeSecurityArea].icon} size={32} className={getColorClass(securityAreas[activeSecurityArea].color)} />
              <h3 className="text-2xl font-bold text-text-primary-dark">{securityAreas[activeSecurityArea].title}</h3>
            </div>
            <p className="text-text-secondary-dark max-w-2xl mx-auto">
              {securityAreas[activeSecurityArea].description}
            </p>
          </div>

          {/* Security Practices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {securityAreas[activeSecurityArea].practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-primary-dark">{practice.title}</h4>
                  <p className="text-text-secondary-dark text-sm">{practice.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Settings" size={14} className={getColorClass(securityAreas[activeSecurityArea].color)} />
                        <span className="text-sm font-medium text-text-primary-dark">Implementation</span>
                      </div>
                      <p className="text-text-secondary-dark text-sm">{practice.implementation}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Tool" size={14} className={getColorClass(securityAreas[activeSecurityArea].color)} />
                        <span className="text-sm font-medium text-text-primary-dark">Tools & Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {practice.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className={`px-2 py-1 ${getColorClass(securityAreas[activeSecurityArea].color, 'bg')}/20 ${getColorClass(securityAreas[activeSecurityArea].color)} text-xs rounded-full`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Security Certifications */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Security Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium text-center"
            >
              <Icon name={cert.icon} size={32} className="text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{cert.title}</h4>
              <p className="text-accent font-medium text-sm mb-2">{cert.issuer}</p>
              <p className="text-text-secondary-dark text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Commitment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary-dark">Our Security Commitment</h3>
            <p className="text-text-secondary-dark leading-relaxed">
              Security isn't an afterthought – it's built into every aspect of our development process. 
              From secure coding practices to comprehensive monitoring, we ensure your applications 
              and data are protected against evolving threats while maintaining optimal performance 
              and user experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Security-first development approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Eye" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Continuous monitoring and threat detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="FileCheck" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Compliance with industry standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Regular security training and updates</span>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-6 text-center">
            <Icon name="Award" size={48} className="text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold text-text-primary-dark mb-2">Security Promise</h4>
            <p className="text-text-secondary-dark mb-4">
              We guarantee that every application we build follows industry-leading security practices 
              and undergoes comprehensive security testing before deployment.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary-dark">Security Score</span>
                <span className="text-accent font-bold">A+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary-dark">Vulnerability Response</span>
                <span className="text-success font-bold">&lt; 24h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary-dark">Compliance Rate</span>
                <span className="text-gold font-bold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityPractices;