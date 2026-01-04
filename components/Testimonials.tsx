import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The only place in the city where chaos dissolves. It's not a gym, it's a reset button for my life.",
    author: "Victoria S.",
    role: "Architect"
  },
  {
    quote: "Precision in every detail. From the lighting to the scent, everything compels you to work harder.",
    author: "James M.",
    role: "Venture Capitalist"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
             <h2 className="font-serif text-4xl text-white mb-8">
               THE <span className="text-luxury-gold">INNER</span> CIRCLE
             </h2>
             <p className="text-white/50 text-sm tracking-wide leading-relaxed max-w-sm">
               Join a community of high-performers. Access is limited to ensure privacy and atmosphere.
             </p>
          </div>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group cursor-default"
              >
                <div className="text-4xl text-luxury-gold font-serif mb-4">"</div>
                <p className="text-xl md:text-2xl font-serif text-white/90 leading-normal mb-6 group-hover:text-white transition-colors">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-luxury-gold"></div>
                  <div>
                    <span className="block text-white text-xs uppercase tracking-[0.2em]">{t.author}</span>
                    <span className="block text-white/40 text-[10px] uppercase tracking-[0.1em] mt-1">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};