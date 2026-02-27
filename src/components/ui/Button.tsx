import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  download,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm';
  
  const variants = {
    primary: 'bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 text-white hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105',
    secondary: 'border-2 border-gray-600/50 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-md transform hover:scale-105'
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        {...(download && { download })}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
