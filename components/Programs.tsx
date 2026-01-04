import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

const tiers = [
  {
    name: "Foundation",
    price: "250",
    period: "/mo",
    description: "Essential access to the sanctuary.",
    features: ["Global Club Access", "Group Alchemist Classes", "Digital Concierge", "Recovery Lounge Access"],
    highlight: false
  },
  {
    name: "Ascension",
    price: "450",
    period: "/mo",
    description: "Elevated privileges for the committed.",
    features: ["All Foundation Perks", "Unlimited Cryotherapy", "2x Monthly PT Sessions", "Nutritional Blueprint", "Private Locker"],
    highlight: true
  },
  {
    name: "Apex",
    price: "Inquiry",
    period: "",
    description: "The pinnacle of performance infrastructure.",
    features: ["All Ascension Perks", "Private Valet Entrance", "Biometric Quarterly Analysis", "Dedicated Performance Coach", "Laundry Service"],
    highlight: false
  }
];

export const Programs: React.FC = () => {
  return (
    <section id="membership" className="py-32 md:py-48 px-6 bg-luxury-charcoal relative z-10">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-24">
            <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase block mb-6">Membership</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">CHOOSE YOUR <span className="italic text-white/50">PATH</span></h2>
            <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent mx-auto"></div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative p-8 md:p-12 border transition-all duration-500 flex flex-col ${
                  tier.highlight 
                    ? 'border-luxury-gold bg-luxury-gold/5' 
                    : 'border-white/10 hover:border-white/30 bg-luxury-black'
                }`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <h3 className="text-white font-serif text-2xl mb-2">{tier.name}</h3>
                <p className="text-white/40 text-xs font-sans tracking-wide mb-8 min-h-[40px]">{tier.description}</p>
                
                <div className="mb-12">
                  <span className="text-4xl md:text-5xl text-luxury-gold font-serif">{tier.price}</span>
                  <span className="text-white/30 text-xs tracking-widest uppercase ml-2">{tier.period}</span>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-light">
                      <div className="w-1 h-1 bg-luxury-gold rotate-45" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant={tier.highlight ? 'primary' : 'outline'} className="w-full">
                  Select {tier.name}
                </Button>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
};