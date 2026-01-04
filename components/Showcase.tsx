import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    id: 1,
    title: "THE ARENA",
    subtitle: "STRENGTH & CONDITIONING",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&w=2070&auto=format&fit=crop",
    desc: "Technogym Artis line. Monolith racks. Olympic lifting platforms set in sound-dampened acoustics."
  },
  {
    id: 2,
    title: "THE VOID",
    subtitle: "MIND & BODY",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    desc: "A distraction-free yoga sanctuary with heated basalt floors and circadian lighting systems."
  },
  {
    id: 3,
    title: "THE PLUNGE",
    subtitle: "HYDROTHERAPY",
    image: "https://images.unsplash.com/photo-1596131397999-dbd951951564?q=80&w=2128&auto=format&fit=crop",
    desc: "Contrast therapy suites. 8°C Cold Plunge. 90°C Finnish Sauna. Eucalyptus steam rooms."
  }
];

export const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.showcase-panel');
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (containerRef.current?.offsetWidth || 0),
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sanctuaries" className="h-screen bg-luxury-black overflow-hidden relative">
      <div className="absolute top-12 left-12 z-20">
         <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase">Sanctuaries</span>
      </div>

      <div ref={containerRef} className="h-full flex w-[300%]">
        {facilities.map((facility, index) => (
          <div key={facility.id} className="showcase-panel w-screen h-full flex relative border-r border-white/5">
            <div className="w-full h-full absolute inset-0">
               <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent z-10" />
               <img src={facility.image} alt={facility.title} className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000" />
            </div>
            
            <div className="relative z-20 w-full h-full flex flex-col justify-end p-12 md:p-24 pb-32">
              <div className="max-w-2xl">
                <span className="text-luxury-gold text-xs tracking-[0.4em] uppercase mb-4 block">{facility.subtitle}</span>
                <h3 className="font-serif text-6xl md:text-8xl text-white mb-8">{facility.title}</h3>
                <p className="text-white/70 font-sans font-light leading-relaxed max-w-lg">
                  {facility.desc}
                </p>
                <button className="mt-12 text-white border border-white/20 px-8 py-4 uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-luxury-black transition-all">
                  Explore Space
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-12 right-12 z-20 text-white/20 font-serif text-9xl leading-none opacity-20 select-none">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};