import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

interface ServiceCategory {
  category: string;
  items: string[];
}

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-5xl md:text-7xl lg:text-8xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.85] uppercase`}>
      {title}
    </h3>
  </div>
);

const ServicesScopeSection = () => {
  const services: ServiceCategory[] = [
    { category: "Creator Management", items: ["Personal Branding", "Content Direction", "Channel Optimization"] },
    { category: "Monetization", items: ["Brand Deal Management", "Campaign Negotiation", "Revenue Strategy"] },
    { category: "Production Support", items: ["Creative Concept", "Video Production Support", "Visual Enhancement"] },
    { category: "Growth Support", items: ["Analytics & Reporting", "Audience Growth Strategy", "Platform Optimization"] }
  ];

  return (
    <section className={`py-32 bg-[#FDA11C] border-y border-white/10 relative overflow-hidden ${arialStack}`}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader subtitle="The Scope" title="Dukungan Menyeluruh" light={true} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/20 p-10 rounded-[50px] flex flex-col h-full transition-all duration-500 hover:bg-white/10 group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2">
              
              {/* Category Title - Arial Black */}
              <div className="mb-10">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] mb-4 block">Module_0{i + 1}</span>
                <h4 className="text-2xl md:text-3xl font-black text-white transition-colors duration-300 uppercase leading-none tracking-tighter">
                  {s.category}
                </h4>
              </div>

              {/* List Items - Arial Black Uppercase */}
              <ul className="space-y-6 flex-grow">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white font-black uppercase text-[10px] md:text-[11px] tracking-[0.15em] leading-tight group/item">
                    {/* Square Bullet Point */}
                    <span className="w-2 h-2 bg-white group-hover/item:rotate-45 group-hover/item:scale-125 transition-all duration-500 flex-shrink-0"></span>
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{item}</span>
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