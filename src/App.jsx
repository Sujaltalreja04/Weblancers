import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Routes from './Routes';

const SplashScreen = () => (
  <motion.div
    className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <div className="relative flex flex-col items-center">
      <motion.div
        className="rounded-full p-6 bg-black"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.img
          src="https://i.ibb.co/q3dnyX5z/Whats-App-Image-2025-06-26-at-17-33-59-03c6c590.jpg"
          alt="Weblancer Logo"
          className="w-32 h-32 object-contain"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-lightgreen"
          style={{ borderColor: '#B5FF6D', boxShadow: '0 0 40px 10px #B5FF6D55' }}
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="mt-6 text-purewhite text-2xl font-bold tracking-widest">WEBLANCER</div>
    </div>
  </motion.div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash ? <SplashScreen key="splash" /> : <Routes key="routes" />}
    </AnimatePresence>
  );
}

export default App;
