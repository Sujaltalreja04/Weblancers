import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

// Placeholder 3D Laptop Model (replace with GLTF/GLB import for real model)
function LaptopModel() {
  return (
    <mesh rotation={[0.3, 0.7, 0]} castShadow receiveShadow>
      <boxGeometry args={[2.5, 0.15, 1.7]} />
      <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
      {/* Screen */}
      <mesh position={[0, 0.25, -0.6]} rotation={[-0.7, 0, 0]}>
        <planeGeometry args={[2.2, 1.2]} />
        <meshStandardMaterial color="#B5FF6D" emissive="#B5FF6D" emissiveIntensity={0.2} />
      </mesh>
      {/* Keyboard */}
      <mesh position={[0, -0.05, 0.4]}>
        <boxGeometry args={[2.2, 0.05, 0.7]} />
        <meshStandardMaterial color="#8A9A5B" />
      </mesh>
    </mesh>
  );
}

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const animatedWords = ["WEB", "WORK", "WAY"];

  useEffect(() => {
    setIsAnimated(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    // Mobile detection
    setIsMobile(window.innerWidth < 768);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-jetblack via-mutedolive to-jetblack">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-lightgreen rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 3D Logo Animation or Fallback */}
        <div className={`mb-8 transform transition-all duration-1000 ${isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{height: '260px'}}>
          {isMobile ? (
            <img src="https://i.ibb.co/q3dnyX5z/Whats-App-Image-2025-06-26-at-17-33-59-03c6c590.jpg" alt="Weblancer Logo" className="w-32 h-32 mx-auto rounded-xl shadow-glow" />
          ) : (
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }} style={{ width: 260, height: 260 }} shadows>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
              <Suspense fallback={<Html center>Loading 3D...</Html>}>
                <LaptopModel />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
            </Canvas>
          )}
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl font-bold text-purewhite mb-6 transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="block mb-2">YOUR</span>
          <span className="text-lightgreen inline-block transition-all duration-500">
            {animatedWords[currentWord]}
          </span>
        </h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl text-mutedolive mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Where creativity meets technology. Transform your digital presence with precision craftsmanship and innovative solutions.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-lightgreen hover:bg-mutedolive text-jetblack px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle flex items-center space-x-2">
            <span>Start Your Project</span>
            <Icon name="ArrowRight" size={20} />
          </button>
          <Link
            to="/portfolio-laboratory-results-showcase"
            className="border border-lightgreen text-lightgreen hover:bg-lightgreen hover:text-jetblack px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View Portfolio</span>
            <Icon name="ExternalLink" size={20} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 text-lightgreen">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-lightgreen rounded-full flex justify-center">
              <div className="w-1 h-3 bg-lightgreen rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/30 rounded-lg transform rotate-45 animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-full animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-gold/40 rounded-full animate-pulse-subtle hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;