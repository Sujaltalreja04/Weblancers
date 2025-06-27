import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SearchAndFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularSearches = [
    "AI integration",
    "React patterns",
    "Mobile design",
    "Performance optimization",
    "Accessibility",
    "Web trends 2024",
    "Digital strategy",
    "User experience"
  ];

  const handleSearchChange = (value) => {
    onSearchChange(value);
    
    if (value.length > 1) {
      const suggestions = popularSearches.filter(search =>
        search.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    onSearchChange('');
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="Search" size={20} color="var(--color-text-secondary-dark)" />
          </div>
          <input
            type="text"
            placeholder="Search articles, tutorials, case studies..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
            className="w-full pl-12 pr-12 py-4 bg-secondary-dark/50 border border-border-dark rounded-xl text-text-primary-dark placeholder-text-secondary-dark focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-premium"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary-dark hover:text-text-primary-dark transition-premium"
            >
              <Icon name="X" size={20} />
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-secondary-dark border border-border-dark rounded-xl shadow-premium z-10">
            <div className="p-2">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 text-text-secondary-dark hover:text-text-primary-dark hover:bg-accent/10 rounded-lg transition-premium flex items-center space-x-3"
                >
                  <Icon name="Search" size={16} />
                  <span>{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        {/* Category Filters - Desktop */}
        <div className="hidden lg:flex items-center space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-premium whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50 border border-transparent'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
              <span className="bg-text-secondary-dark/20 text-text-secondary-dark px-2 py-0.5 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden w-full">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-secondary-dark/50 border border-border-dark rounded-xl text-text-primary-dark transition-premium"
          >
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} />
              <span>
                {categories.find(c => c.id === selectedCategory)?.name || 'All Resources'}
              </span>
            </div>
            <Icon name={isFilterOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
          </button>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <span className="text-text-secondary-dark text-sm">Sort by:</span>
          <select className="bg-secondary-dark/50 border border-border-dark rounded-lg px-3 py-2 text-text-primary-dark text-sm focus:outline-none focus:border-accent/50 transition-premium">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>

      {/* Mobile Category Filters */}
      {isFilterOpen && (
        <div className="lg:hidden grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                onCategoryChange(category.id);
                setIsFilterOpen(false);
              }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-premium text-sm ${
                selectedCategory === category.id
                  ? 'bg-accent/20 text-accent border border-accent/30' :'text-text-secondary-dark hover:text-text-primary-dark hover:bg-secondary/50 border border-transparent'
              }`}
            >
              <Icon name={category.icon} size={14} />
              <span>{category.name}</span>
              <span className="bg-text-secondary-dark/20 text-text-secondary-dark px-1.5 py-0.5 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Popular Searches */}
      {!searchQuery && (
        <div className="text-center">
          <p className="text-text-secondary-dark text-sm mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.slice(0, 6).map((search, index) => (
              <button
                key={index}
                onClick={() => handleSearchChange(search)}
                className="px-3 py-1 bg-secondary-dark/30 text-text-secondary-dark hover:text-accent hover:bg-accent/10 rounded-full text-sm transition-premium border border-border-dark hover:border-accent/30"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;