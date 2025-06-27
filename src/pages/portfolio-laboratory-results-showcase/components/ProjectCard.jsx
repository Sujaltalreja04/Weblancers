import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group glassmorphism rounded-xl overflow-hidden hover:shadow-glow transition-premium">
      <div className="relative overflow-hidden">
        <Image 
          src={project.images.after}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-premium"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-premium"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary-dark/80 text-text-primary-dark px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {project.timeline}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary-dark mb-2 group-hover:text-accent transition-premium">
          {project.title}
        </h3>
        <p className="text-text-secondary-dark text-sm mb-4">
          {project.client}
        </p>
        
        <p className="text-text-secondary-dark text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technology.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="bg-secondary text-text-secondary-dark px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technology.length > 3 && (
            <span className="text-text-secondary-dark text-xs px-2 py-1">
              +{project.technology.length - 3} more
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-accent mb-1">
                +{value.improvement}%
              </div>
              <div className="text-xs text-text-secondary-dark capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onViewDetails}
          className="w-full bg-conversion hover:bg-conversion-light text-white py-2 px-4 rounded-lg font-medium transition-premium flex items-center justify-center space-x-2 group"
        >
          <span>View Case Study</span>
          <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-premium" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;