import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BeforeAfterSlider = ({ beforeImage, afterImage, title, showLabels = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden group cursor-col-resize">
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image 
          src={beforeImage}
          alt={`${title} - Before`}
          className="w-full h-full object-cover"
        />
        {showLabels && (
          <div className="absolute top-4 left-4 bg-error/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            Before
          </div>
        )}
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={afterImage}
          alt={`${title} - After`}
          className="w-full h-full object-cover"
        />
        {showLabels && (
          <div className="absolute top-4 right-4 bg-success/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            After
          </div>
        )}
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-premium">
          <Icon name="Move" size={16} color="var(--color-primary)" />
        </div>
      </div>

      {/* Overlay for mouse events */}
      <div 
        className="absolute inset-0 z-5"
        onMouseDown={handleMouseDown}
      />

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-dark/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-premium">
        Drag to compare
      </div>
    </div>
  );
};

export default BeforeAfterSlider;