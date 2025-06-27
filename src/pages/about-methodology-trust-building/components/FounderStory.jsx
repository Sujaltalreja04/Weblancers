import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderStory = () => {
  const founderData = {
    name: "Alex Thompson",
    title: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    story: `My journey into web development began 8 years ago when I was working as a marketing coordinator at a mid-sized tech company. I watched our development team struggle to translate business requirements into functional, beautiful websites that actually drove results. The disconnect between what businesses needed and what developers delivered frustrated me daily.

That frustration became my catalyst. I started learning to code in the evenings, driven by a simple belief: great web development should bridge the gap between technical excellence and business success. After two years of intense learning and building side projects, I made the leap to freelancing.

The early days were challenging. I quickly realized that being a great developer wasn't enough – I needed to understand business strategy, user psychology, and market dynamics. I spent countless hours studying successful businesses, analyzing their digital presence, and understanding what made some websites convert while others failed.

This holistic approach became my differentiator. Instead of just building websites, I started crafting digital experiences that solved real business problems. My clients weren't just getting code – they were getting a strategic partner who understood their challenges and could translate their vision into measurable results.

Today, Weblancer represents everything I've learned about the intersection of technology and business success. We don't just build websites; we create digital transformation experiences that drive real growth for our clients.`,
    achievements: [
      { icon: 'Trophy', label: '150+ Projects Delivered', value: '150+' },
      { icon: 'Users', label: 'Happy Clients', value: '89' },
      { icon: 'Calendar', label: 'Years of Experience', value: '8' },
      { icon: 'Award', label: 'Industry Recognition', value: '12' }
    ],
    philosophy: `"Great web development isn't just about clean code or beautiful design – it's about understanding that every pixel, every interaction, and every line of code should serve a purpose in driving business success. When technology meets strategy, magic happens."`
  };

  const milestones = [
    {
      year: "2016",
      title: "The Spark",
      description: "Started learning web development while working in marketing, frustrated by the gap between business needs and technical delivery."
    },
    {
      year: "2018",
      title: "First Client",
      description: "Launched freelance career with a local restaurant, delivering their first online ordering system that increased revenue by 40%."
    },
    {
      year: "2020",
      title: "Strategic Pivot",
      description: "Shifted from just coding to strategic consulting, helping businesses understand how technology could drive growth."
    },
    {
      year: "2022",
      title: "Weblancer Born",
      description: "Officially launched Weblancer as a premium digital solutions platform, combining technical expertise with business strategy."
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Pioneering AI integration and advanced web technologies, setting new standards for digital transformation."
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
          The Story Behind <span className="text-gradient">Weblancer</span>
        </h2>
        <p className="text-xl text-text-secondary-dark max-w-3xl mx-auto">
          From frustrated marketer to strategic developer – the journey that shaped our approach to digital transformation.
        </p>
      </motion.div>

      {/* Founder Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary-dark">{founderData.name}</h3>
              <p className="text-accent font-medium">{founderData.title}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-text-secondary-dark">
            <p className="mb-4">{founderData.story}</p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-border-dark">
            <Icon name="Quote" size={24} className="text-accent mb-4" />
            <p className="text-text-primary-dark italic text-lg leading-relaxed">
              {founderData.philosophy}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4">
            {founderData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-secondary/20 rounded-lg p-6 text-center border border-border-dark hover:border-accent/30 transition-premium"
              >
                <Icon name={achievement.icon} size={32} className="text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-text-primary-dark mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-text-secondary-dark">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Personal Touch */}
          <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-lg p-6 border border-accent/20">
            <h4 className="text-lg font-semibold text-text-primary-dark mb-3">Beyond the Code</h4>
            <div className="space-y-2 text-text-secondary-dark">
              <div className="flex items-center space-x-2">
                <Icon name="Coffee" size={16} className="text-accent" />
                <span>Fueled by specialty coffee and late-night coding sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mountain" size={16} className="text-accent" />
                <span>Weekend hiker and nature photographer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} className="text-accent" />
                <span>Continuous learner, always exploring new technologies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Journey Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-bold text-text-primary-dark text-center">The Journey</h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-accent rounded-full border-2 border-primary-dark"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-secondary/20 rounded-lg p-6 border border-border-dark hover:border-accent/30 transition-premium">
                    <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-semibold text-text-primary-dark mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-text-secondary-dark">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FounderStory;