import React from 'react';

// Definisi Font Stack agar konsisten di seluruh elemen
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

const ContentTypesSection = () => {
  const events = ["Corporate Event", "Seminar & Conference", "Product Launch", "Wedding", "Festival", "Community Event"];
  
  return (
    <section className={`py-24 bg-[#FFF8E7] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6 text-center">
        {/* Header dengan prop light={false} untuk teks gelap di bg cream */}
        <SectionHeader subtitle="Experience" title="Berbagai Jenis Event" />
        
        <div className="flex flex-wrap justify-center gap-4">
          {events.map((e, i) => (
            <div 
              key={i} 
              className={`px-10 py-6 bg-white border border-[#FF6600]/10 rounded-2xl text-[#FF6600] font-black uppercase tracking-widest text-sm shadow-md transition-all duration-300 hover:bg-[#FF6600] hover:text-white leading-none ${arialStack}`}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentTypesSection;