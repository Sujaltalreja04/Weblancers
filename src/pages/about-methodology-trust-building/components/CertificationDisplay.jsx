import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationDisplay = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Professional",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      description: "Advanced cloud architecture and infrastructure design capabilities.",
      skills: ["Cloud Architecture", "Scalability", "Security", "Cost Optimization"]
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2024",
      level: "Individual Qualification",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      description: "Advanced analytics implementation and data-driven decision making.",
      skills: ["Analytics", "Conversion Tracking", "Data Analysis", "ROI Measurement"]
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      level: "Professional",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
      description: "Advanced React development patterns and best practices.",
      skills: ["React", "JavaScript", "Component Architecture", "State Management"]
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      level: "Professional",
      logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop",
      description: "Cybersecurity expertise for building secure web applications.",
      skills: ["Security Testing", "Vulnerability Assessment", "Penetration Testing", "Risk Management"]
    },
    {
      title: "UX Design Professional",
      issuer: "Nielsen Norman Group",
      date: "2024",
      level: "Professional",
      logo: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop",
      description: "User experience design principles and usability testing methodologies.",
      skills: ["User Research", "Prototyping", "Usability Testing", "Design Systems"]
    },
    {
      title: "Project Management Professional",
      issuer: "PMI",
      date: "2022",
      level: "Professional",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop",
      description: "Advanced project management methodologies and leadership skills.",
      skills: ["Project Planning", "Risk Management", "Team Leadership", "Agile Methodologies"]
    }
  ];

  const partnerships = [
    {
      name: "Google Partner",
      type: "Technology Partner",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop",
      benefits: ["Priority Support", "Beta Access", "Training Resources"],
      description: "Certified Google Partner with access to advanced tools and support."
    },
    {
      name: "AWS Partner Network",
      type: "Cloud Partner",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=80&h=80&fit=crop",
      benefits: ["Technical Support", "Architecture Reviews", "Cost Optimization"],
      description: "Member of AWS Partner Network with proven cloud expertise."
    },
    {
      name: "Vercel Partner",
      type: "Deployment Partner",
      logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=80&h=80&fit=crop",
      benefits: ["Enhanced Performance", "Global CDN", "Advanced Analytics"],
      description: "Verified Vercel partner for optimal web application deployment."
    },
    {
      name: "Stripe Partner",
      type: "Payment Partner",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop",
      benefits: ["Payment Processing", "Fraud Protection", "Global Payments"],
      description: "Certified Stripe partner for secure payment integration."
    }
  ];

  const continuousLearning = [
    {
      activity: "Weekly Tech Talks",
      description: "Internal knowledge sharing sessions on emerging technologies and best practices.",
      frequency: "Weekly",
      icon: "Users"
    },
    {
      activity: "Conference Attendance",
      description: "Regular attendance at industry conferences like React Conf, AWS re:Invent, and UX Week.",
      frequency: "Quarterly",
      icon: "Calendar"
    },
    {
      activity: "Online Courses",
      description: "Continuous enrollment in advanced courses on platforms like Pluralsight and Udemy.",
      frequency: "Monthly",
      icon: "BookOpen"
    },
    {
      activity: "Open Source Contributions",
      description: "Active contribution to open source projects and maintaining our own libraries.",
      frequency: "Ongoing",
      icon: "Github"
    },
    {
      activity: "Industry Research",
      description: "Regular research and analysis of industry trends, tools, and methodologies.",
      frequency: "Daily",
      icon: "Search"
    },
    {
      activity: "Certification Renewals",
      description: "Maintaining current certifications and pursuing new ones as technology evolves.",
      frequency: "Annual",
      icon: "Award"
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
          Certifications & <span className="text-gradient">Credentials</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Our commitment to excellence is backed by industry-recognized certifications, strategic partnerships, 
          and continuous learning initiatives that keep us at the forefront of technology.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Professional Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium group"
            >
              <div className="space-y-4">
                {/* Certification Header */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-border-dark flex-shrink-0">
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary-dark group-hover:text-accent transition-premium">
                      {cert.title}
                    </h4>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary-dark">
                      <Icon name="Calendar" size={14} />
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span>{cert.level}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary-dark text-sm">{cert.description}</p>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={14} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary-dark">Key Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Partnerships */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Strategic Partnerships</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerships.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-gold/30 transition-premium text-center"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-lg overflow-hidden border border-border-dark">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-text-primary-dark">{partner.name}</h4>
                  <p className="text-gold font-medium text-sm">{partner.type}</p>
                </div>
                
                <p className="text-text-secondary-dark text-sm">{partner.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-text-primary-dark">Benefits</div>
                  <div className="space-y-1">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-xs text-text-secondary-dark">
                        <Icon name="CheckCircle" size={12} className="text-gold" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continuous Learning */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Continuous Learning Commitment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {continuousLearning.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-success/30 transition-premium"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name={activity.icon} size={24} className="text-success" />
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary-dark">{activity.activity}</h4>
                    <p className="text-success font-medium text-sm">{activity.frequency}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary-dark text-sm">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Commitment Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="text-center space-y-6">
          <Icon name="Target" size={48} className="text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-text-primary-dark">Our Learning Commitment</h3>
          <p className="text-text-secondary-dark text-lg leading-relaxed max-w-3xl mx-auto">
            Technology evolves rapidly, and so do we. Our commitment to continuous learning ensures that 
            we're always equipped with the latest knowledge, tools, and best practices to deliver 
            cutting-edge solutions that drive your business forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">40+</div>
              <div className="text-sm text-text-secondary-dark">Hours of Learning Monthly</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-2">12+</div>
              <div className="text-sm text-text-secondary-dark">Certifications Maintained</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">6+</div>
              <div className="text-sm text-text-secondary-dark">Conferences Attended Annually</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationDisplay;