'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const SCROLL_OFFSET = 70;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll('section'));

    const scrollToElement = (element: Element) => {
      const top = (element as HTMLElement).offsetTop - SCROLL_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    // CSS scroll-snap handles snapping automatically
    const snapToSection = () => {};

    let scrollTimeout: NodeJS.Timeout;
    let isUserScrolling = false;
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Don't auto-snap if user is scrolling via navigation
      if (isScrolling) return;
      
      isUserScrolling = true;
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Dynamic timeout based on scroll velocity
      const timeoutDuration = scrollVelocity > 50 ? 500 : 300;
      
      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        if (isUserScrolling && scrollVelocity < 10) {
          isUserScrolling = false;
        }
      }, timeoutDuration);
      
      // Update active section based on scroll position (CSS handles snapping)
      const scrollPosition = window.scrollY + SCROLL_OFFSET;
      const sections = getSections();

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, '', `#${sectionId}`);
          }
          break;
        }
      }
    };

    // Handle initial hash on page load
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          setTimeout(() => {
            scrollToElement(element);
            setActiveSection(hash);
          }, 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    const sectionId = href.slice(1);
    
    if (element) {
      // Temporarily disable auto-snap
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);
      
      // Update URL hash
      window.history.pushState(null, '', href);
      
      // Remove focus from all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('section-focused');
      });
      
      // Add focus to target section
      element.classList.add('section-focused');
      
      // Update active section
      setActiveSection(sectionId);
      
      // Smooth scroll to section
      const top = (element as HTMLElement).offsetTop - SCROLL_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      
      // Remove focus after animation
      setTimeout(() => {
        element.classList.remove('section-focused');
      }, 2000);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full z-50 h-[70px] transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ying Prapada 
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-200 relative group px-4 py-2 ${
                  activeSection === item.href.slice(1) 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-white hover:text-purple-400'
                }`}
                style={{ marginRight: index < navItems.length - 1 ? '2rem' : '0' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-purple-500/20 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-xl shadow-purple-500/20 overflow-hidden w-full"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 font-medium border-b border-gray-700/50 last:border-b-0 ${
                  activeSection === item.href.slice(1)
                    ? 'text-purple-400 bg-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
