import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedArticleCarousel = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? articles.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === articles.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (!articles || articles.length === 0) return null;

  const currentArticle = articles[currentIndex];

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-secondary-dark border border-border-dark">
        <div className="relative h-96 md:h-[500px]">
          <div className="absolute inset-0">
            <Image
              src={currentArticle.image}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-2xl px-8 md:px-12">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30">
                  {currentArticle.type.charAt(0).toUpperCase() + currentArticle.type.slice(1)}
                </span>
                <span className="text-text-secondary-dark text-sm">{currentArticle.readTime}</span>
                <span className="text-text-secondary-dark text-sm">•</span>
                <span className="text-text-secondary-dark text-sm">{new Date(currentArticle.publishDate).toLocaleDateString()}</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-text-primary-dark mb-4 leading-tight">
                {currentArticle.title}
              </h3>
              
              <p className="text-text-secondary-dark mb-6 text-lg leading-relaxed line-clamp-3">
                {currentArticle.excerpt.split('\n')[0]}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} color="var(--color-primary)" />
                  </div>
                  <span className="text-text-secondary-dark text-sm">{currentArticle.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentArticle.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-secondary/50 text-text-secondary-dark px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="bg-conversion hover:bg-conversion-light text-white px-6 py-3 rounded-lg font-semibold transition-premium transform hover:scale-105">
                  Read Article
                </button>
                <button className="text-accent hover:text-accent-light font-semibold flex items-center space-x-2 transition-premium">
                  <Icon name="Download" size={16} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-primary-dark/80 hover:bg-primary-dark text-text-primary-dark rounded-full flex items-center justify-center transition-premium pointer-events-auto backdrop-blur-sm border border-border-dark hover:border-accent/30"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-primary-dark/80 hover:bg-primary-dark text-text-primary-dark rounded-full flex items-center justify-center transition-premium pointer-events-auto backdrop-blur-sm border border-border-dark hover:border-accent/30"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-premium ${
              index === currentIndex
                ? 'bg-accent' :'bg-text-secondary-dark/30 hover:bg-text-secondary-dark/50'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-premium backdrop-blur-sm border ${
            isAutoPlaying
              ? 'bg-accent/20 border-accent/30 text-accent' :'bg-primary-dark/80 border-border-dark text-text-secondary-dark hover:text-text-primary-dark'
          }`}
        >
          <Icon name={isAutoPlaying ? 'Pause' : 'Play'} size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedArticleCarousel;