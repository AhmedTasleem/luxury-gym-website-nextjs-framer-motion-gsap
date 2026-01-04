import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Showcase } from './components/Showcase';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxury inertia
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Showcase />
        <Programs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;