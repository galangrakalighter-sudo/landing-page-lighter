import React from 'react';

interface ServiceCard {
  title: string;
  items: string[];
}

const ServicesScopeSection = () => {
  const scopes: ServiceCard[] = [
    {
      title: "Brand Strategy",
      items: ["Brand Positioning Audit", "Target Audience Mapping", "Value Proposition Design", "Brand Personality Core"]
    },
    {
      title: "Visual Identity",
      items: ["Master Logo System", "Adaptive Color Palette", "Custom Typography", "Systemic Graphic Assets"]
    },
    {
      title: "Brand Application",
      items: ["Omni-channel Asset Kit", "Premium Stationery Kit", "Digital Guideline System", "Concept Packaging"]
    }
  ];

  const arialStack = "font-['Arial','Helvetica',sans-serif]";

  return (
    <section className={`py-32 bg-neutral-900 border-y border-white/5 relative ${arialStack}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-24">
          {/* Subtitle - Arial Stack */}
          <h2 className={`text-red-600 font-black tracking-widest uppercase text-xs mb-6 ${arialStack}`}>
            Full Spectrum
          </h2>
          {/* Main Title - Arial Stack (Tracking Normal) */}
          <h3 className={`text-5xl md:text-8xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
            CAKUPAN LAYANAN
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {scopes.map((s, i) => (
            <div key={i} className="bg-neutral-950 p-12 rounded-[40px] border border-white/5 transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-neutral-800 group-hover:bg-red-600 transition-colors"></div>
              
              {/* Card Title - Arial Stack */}
              <h4 className={`text-3xl font-black text-white mb-10 uppercase tracking-normal group-hover:text-red-600 transition-colors leading-none ${arialStack}`}>
                {s.title}
              </h4>

              <ul className="space-y-6">
                {s.items.map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-4 text-neutral-400 font-bold uppercase text-[10px] md:text-xs tracking-[0.15em] group-hover:text-neutral-200 transition-colors ${arialStack}`}>
                    <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScopeSection;