import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ResourceCard = ({ resource }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return 'FileText';
      case 'tutorial':
        return 'PlayCircle';
      case 'case-study':
        return 'BarChart3';
      default:
        return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'article':
        return 'text-accent';
      case 'tutorial':
        return 'text-gold';
      case 'case-study':
        return 'text-conversion';
      default:
        return 'text-accent';
    }
  };

  return (
    <article className="group bg-secondary-dark/50 rounded-xl border border-border-dark hover:border-accent/30 transition-premium overflow-hidden hover:shadow-glow">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-premium duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-1 bg-primary-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border-dark ${getTypeColor(resource.type)}`}>
            <Icon name={getTypeIcon(resource.type)} size={14} />
            <span>{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
          </div>
        </div>

        {/* Featured Badge */}
        {resource.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs font-medium border border-gold/30 backdrop-blur-sm">
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center space-x-3 text-sm text-text-secondary-dark mb-3">
          <span>{resource.readTime}</span>
          <span>•</span>
          <span>{new Date(resource.publishDate).toLocaleDateString()}</span>
          <span>•</span>
          <span>{resource.author}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary-dark mb-3 group-hover:text-accent transition-premium line-clamp-2">
          {resource.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary-dark mb-4 line-clamp-3 leading-relaxed">
          {resource.excerpt.split('\n')[0]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-secondary/30 text-text-secondary-dark px-2 py-1 rounded-full text-xs hover:bg-accent/10 hover:text-accent transition-premium cursor-pointer"
            >
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="text-text-secondary-dark text-xs px-2 py-1">
              +{resource.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border-dark">
          <button className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium">
            <span>Read More</span>
            <Icon name="ArrowRight" size={16} />
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-secondary/50 hover:bg-accent/20 text-text-secondary-dark hover:text-accent rounded-lg flex items-center justify-center transition-premium">
              <Icon name="Bookmark" size={16} />
            </button>
            <button className="w-8 h-8 bg-secondary/50 hover:bg-accent/20 text-text-secondary-dark hover:text-accent rounded-lg flex items-center justify-center transition-premium">
              <Icon name="Share2" size={16} />
            </button>
            {resource.downloadUrl && (
              <button className="w-8 h-8 bg-secondary/50 hover:bg-conversion/20 text-text-secondary-dark hover:text-conversion rounded-lg flex items-center justify-center transition-premium">
                <Icon name="Download" size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;