'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/prapada', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prapada-somboonruengsri-3132b815b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ying.prapada@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="w-full h-17.5 bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © 2026 Ying Prapada. All rights reserved.
            </p>
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  {...({ target: "_blank", rel: "noopener noreferrer" })}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
