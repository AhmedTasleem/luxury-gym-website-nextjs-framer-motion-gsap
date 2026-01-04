import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-luxury-black">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-luxury-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Gym Atmosphere" 
          className="w-full h-full object-cover object-center scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="block text-luxury-gold text-xs md:text-sm tracking-[0.4em] mb-6 uppercase">
            Est. 2024 • New York
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium tracking-tight mb-8">
            REDEFINE<br />
            <span className="italic text-white/80">EXISTENCE</span>
          </h1>
          <p className="max-w-md mx-auto text-white/60 font-sans font-light leading-relaxed tracking-wide mb-12">
            Where biometrics meet brutalism. A sanctuary for those who demand excellence in every breath.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-luxury-black px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold"
             >
                Begin Journey
             </motion.button>
             <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-white border-b border-white/30 pb-1 uppercase tracking-[0.2em] text-xs hover:border-luxury-gold hover:text-luxury-gold transition-colors"
             >
                View Films
             </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
};