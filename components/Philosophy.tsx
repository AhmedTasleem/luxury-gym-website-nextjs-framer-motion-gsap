import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Text stagger
      const words = textRef.current?.querySelectorAll('span');
      if (words) {
        gsap.fromTo(words,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 md:py-48 px-6 bg-luxury-charcoal relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-luxury-gold"></div>
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase">The Philosophy</span>
        </div>

        <h2 ref={textRef} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-16">
          <span className="block">WE DO NOT SELL</span>
          <span className="block italic text-white/50">MEMBERSHIPS.</span>
          <span className="block mt-4">WE GRANT ACCESS</span>
          <span className="block">TO A <span className="text-luxury-gold">NEW REALITY.</span></span>
        </h2>

        <div ref={lineRef} className="w-full h-[1px] bg-white/10 origin-left mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <p className="text-white/70 font-sans font-light leading-relaxed text-lg">
            In a world of noise, we curate silence. In a culture of excess, we practice precision. LuxeFit is not merely a facility; it is a cathedral of the human potential, designed for those who understand that the body is the only true luxury asset.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4 border-b border-white/5 pb-6">
               <span className="text-luxury-gold font-serif text-2xl">01</span>
               <h3 className="text-white text-sm uppercase tracking-[0.2em]">Biomechanics</h3>
            </div>
            <div className="flex items-baseline gap-4 border-b border-white/5 pb-6">
               <span className="text-luxury-gold font-serif text-2xl">02</span>
               <h3 className="text-white text-sm uppercase tracking-[0.2em]">Recovery Science</h3>
            </div>
            <div className="flex items-baseline gap-4 border-b border-white/5 pb-6">
               <span className="text-luxury-gold font-serif text-2xl">03</span>
               <h3 className="text-white text-sm uppercase tracking-[0.2em]">Spatial Aesthetics</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};