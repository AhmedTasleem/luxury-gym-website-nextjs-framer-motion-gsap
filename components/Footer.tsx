import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-6">LUXEFIT</h3>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              A global destination for the pursuit of physical perfection.
              New York • London • Dubai
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Sanctuaries</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © 2024 LuxeFit Holdings. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {/* Social Icons would go here */}
             <div className="w-4 h-4 bg-white/20 rounded-full"></div>
             <div className="w-4 h-4 bg-white/20 rounded-full"></div>
             <div className="w-4 h-4 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};