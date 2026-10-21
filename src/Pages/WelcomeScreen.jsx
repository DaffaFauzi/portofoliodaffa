import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!text) return;
    setDisplayText('');
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 90);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete?.();
    }, 1800);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#030014] z-[9999] cursor-pointer"
      onClick={() => onLoadingComplete?.()}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
    >
      <BackgroundEffect />
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Icons */}
          <motion.div 
            className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
            variants={childVariants}
          >
            {[Code2, User, Github].map((Icon, index) => (
              <div key={index}>
                <IconButton Icon={Icon} />
              </div>
            ))}
          </motion.div>

          {/* Welcome Text */}
          <motion.div 
            className="text-center mb-6 sm:mb-8 md:mb-12"
            variants={childVariants}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                <TypewriterEffect text={language === 'en' ? "Welcome to My Portfolio" : "Selamat Datang di Portofolio Saya"} />
              </span>
            </h1>
            <p className="text-gray-200 text-sm md:text-base tracking-widest uppercase font-semibold">
              {language === 'en' ? "Frontend Developer Portfolio" : "Portofolio Pengembang Frontend"}
            </p>
          </motion.div>

          {/* Website Link */}
          <motion.div 
            className="text-center"
            variants={childVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-md" />
              <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  <TypewriterEffect text="daffafauzi.com" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
