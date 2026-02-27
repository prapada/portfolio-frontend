'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="w-full relative pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 w-full h-full bg-linear-to-b from-slate-900 via-transparent to-slate-900" />
      </div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTYzIDM0di00aC0ydjRoLTRoMnY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTRoMmg0aDJWNmg0VjRoLTR6TTYgMzR2LTRINGg0SDBoMnY0aDR2NGgydi00aDR2LTJINnptNiA0VjBINGg0SDBoMnY0aDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-center max-w-7xl mx-auto w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              Hi, I'm Prapada Somboonruengsri
            </span>
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              Frontend Developer
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I build modern, scalable, and beautiful web applications with cutting-edge technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="lg"
              href="/files/resume.pdf"
              download="Prapada_Somboonruengsri_Resume.pdf"
              className="group shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="#projects"
              className="group shadow-xl hover:shadow-2xl transition-shadow"
            >
              <ExternalLink className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-linear-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
