import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-colors duration-700 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        <div className="flex items-center gap-2">
           {/* Minimal Logo Mark */}
           <div className="w-8 h-8 border border-luxury-gold rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-luxury-gold rotate-45" />
           </div>
           <span className="font-serif text-xl tracking-[0.15em] font-bold text-white ml-2">
             LUXEFIT
           </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Philosophy', 'Sanctuaries', 'Membership', 'Journal'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-luxury-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:block border border-white/20 px-6 py-3 uppercase text-[10px] tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-300">
          Book Private Tour
        </button>

        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="6" x2="24" y2="6" />
            <line x1="0" y1="18" x2="24" y2="18" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};