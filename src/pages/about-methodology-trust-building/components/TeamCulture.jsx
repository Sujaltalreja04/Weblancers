import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamCulture = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: ["React", "Node.js", "Strategy"],
      bio: "Full-stack developer with 8+ years of experience in creating scalable web solutions."
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: ["Design Systems", "User Research", "Prototyping"],
      bio: "Design strategist focused on creating intuitive experiences that drive business results."
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: ["Python", "Cloud Architecture", "APIs"],
      bio: "Backend engineer specializing in scalable infrastructure and API development."
    },
    {
      name: "Emily Watson",
      role: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: ["SEO", "Analytics", "Growth"],
      bio: "Digital marketing expert helping businesses maximize their online presence and ROI."
    }
  ];

  const cultureValues = [
    {
      icon: "Heart",
      title: "Passion-Driven",
      description: "We genuinely love what we do, and it shows in every project we deliver.",
      color: "text-conversion"
    },
    {
      icon: "Users",
      title: "Collaborative",
      description: "Great results come from great teamwork, both internally and with our clients.",
      color: "text-accent"
    },
    {
      icon: "Lightbulb",
      title: "Innovation-Focused",
      description: "We constantly explore new technologies and approaches to stay ahead of the curve.",
      color: "text-gold"
    },
    {
      icon: "Target",
      title: "Results-Oriented",
      description: "Every decision we make is guided by its potential impact on project success.",
      color: "text-success"
    },
    {
      icon: "Shield",
      title: "Quality-First",
      description: "We never compromise on quality, ensuring every deliverable meets our high standards.",
      color: "text-warning"
    },
    {
      icon: "Clock",
      title: "Reliable",
      description: "Consistent communication, transparent processes, and dependable delivery timelines.",
      color: "text-accent"
    }
  ];

  const workEnvironment = [
    {
      title: "Remote-First Culture",
      description: "Flexible work arrangements that prioritize productivity and work-life balance.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
    },
    {
      title: "Continuous Learning",
      description: "Regular skill development sessions and conference attendance to stay current.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Client-Centric Approach",
      description: "Every team member understands their role in delivering exceptional client experiences.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
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
          Our Team <span className="text-gradient">Culture</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          Meet the passionate professionals who bring your digital visions to life through collaboration, innovation, and unwavering commitment to excellence.
        </p>
      </motion.div>

      {/* Team Members */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Meet Our Team</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium group"
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-premium">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-text-primary-dark">{member.name}</h4>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
                
                <p className="text-text-secondary-dark text-sm">{member.bio}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culture Values */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">Our Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium"
            >
              <Icon name={value.icon} size={32} className={`${value.color} mb-4`} />
              <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{value.title}</h4>
              <p className="text-text-secondary-dark">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Work Environment */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">How We Work</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workEnvironment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-lg overflow-hidden border border-border-dark hover:border-accent/30 transition-premium group"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-premium"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text-primary-dark mb-2">{item.title}</h4>
                <p className="text-text-secondary-dark">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Behind the Scenes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary-dark">Behind the Scenes</h3>
            <p className="text-text-secondary-dark leading-relaxed">
              Our culture isn't just about work – it's about creating an environment where creativity thrives, 
              innovation is encouraged, and every team member feels valued and empowered to do their best work.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Coffee" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Weekly team coffee chats and brainstorming sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Monthly learning sessions and skill sharing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Gamepad2" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Quarterly team building and creative challenges</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Award" size={20} className="text-accent" />
                <span className="text-text-primary-dark">Recognition programs for innovation and excellence</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-text-secondary-dark">Client Satisfaction</div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gold mb-1">24h</div>
                <div className="text-sm text-text-secondary-dark">Response Time</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">150+</div>
                <div className="text-sm text-text-secondary-dark">Projects Delivered</div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-conversion mb-1">5+</div>
                <div className="text-sm text-text-secondary-dark">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamCulture;