import React from 'react';

// Definisi Font Stack agar konsisten
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FF6600]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`${arialStack} text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);

const ServicesScopeSection = () => {
  const list = [
    "Event Photography", "Event Videography", "Cinematic Aftermovie", 
    "Highlight Recap", "Live Event Coverage", "Corporate Event Documentation", 
    "Wedding Documentation"
  ];

  return (
    <section className={`py-24 bg-[#FFF8E7] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Our Expertise" title="Layanan Dokumentasi Spesialis" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <div key={i} className="flex items-center gap-6 p-8 bg-[#FFF8E7]/30 border border-[#FF6600]/10 rounded-2xl transition-all duration-300 hover:border-[#FF6600] group">
              {/* Checkmark Icon Container */}
              <div className="w-10 h-10 bg-[#FF6600] text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Service Text Item */}
              <span className={`${arialStack} text-lg font-black text-slate-800 uppercase tracking-tight leading-none`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScopeSection;