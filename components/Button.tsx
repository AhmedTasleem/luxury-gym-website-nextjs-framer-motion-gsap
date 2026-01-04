import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyles = "px-8 py-4 uppercase tracking-[0.2em] font-sans text-xs font-bold transition-all duration-500 ease-out";
  
  const variants = {
    primary: "bg-luxury-gold text-luxury-black hover:bg-white hover:text-luxury-black",
    outline: "border border-luxury-gold/30 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5",
    ghost: "text-white/60 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};