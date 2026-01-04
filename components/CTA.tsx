import React from 'react';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-48 px-6 bg-luxury-charcoal overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1535743686920-55e4145369b9?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
          ASCEND TO <br/><span className="text-luxury-gold italic">GREATNESS</span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-light">
          Applications for the 2024 season are now open. 
          Limited memberships available for select tiers.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button>Apply for Membership</Button>
          <Button variant="outline">Schedule Visit</Button>
        </div>
      </div>
    </section>
  );
};