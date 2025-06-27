import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectFilter = ({ options, selectedFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-premium ${
            selectedFilter === option.value
              ? 'bg-accent text-primary shadow-glow'
              : 'bg-primary hover:bg-primary-light text-text-secondary-dark hover:text-text-primary-dark'
          }`}
        >
          <Icon name={option.icon} size={18} />
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;