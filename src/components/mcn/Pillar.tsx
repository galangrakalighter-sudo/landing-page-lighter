import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-5xl md:text-7xl lg:text-8xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.85] uppercase`}>
      {title}
    </h3>
  </div>
);

const CreatorPillarsSection = () => {
  const pillars = [
    { 
      title: "Monetization Optimization", 
      desc: "Membangun aliran pendapatan berkelanjutan dari berbagai platform dan jalur komersial",
      icon: <path strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1m4-12H8L4 16h16L16 5z" />
    },
    { 
      title: "Content Strategy & Growth", 
      desc: "Pendekatan berbasis data untuk meningkatkan engagement dan skala pertumbuhan audience Anda",
      icon: <path strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    },
    { 
      title: "Brand Partnership Network", 
      desc: "Akses eksklusif ke jaringan brand global untuk kolaborasi strategis yang berdampak tinggi",
      icon: <path strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    }
  ];

  return (
    <section className={`py-32 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Core Foundations" title="Pilar Utama EIKYOO" />
        
        <div className="grid lg:grid-cols-3 gap-16">
          {pillars.map((p, i) => (
            <div key={i} className="text-center group relative flex flex-col items-center">
              {/* Icon Container */}
              <div className="relative w-28 h-28 bg-white border-4 border-slate-50 rounded-[40px] flex items-center justify-center mb-12 transition-all duration-500 group-hover:border-[#FDA11C] group-hover:shadow-[0_20px_50px_rgba(253,161,28,0.2)] group-hover:-translate-y-2">
                <svg className="w-12 h-12 text-slate-300 group-hover:text-[#FDA11C] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   {p.icon}
                </svg>
              </div>

              {/* Title - Arial Black */}
              <h4 className="text-2xl md:text-3xl text-slate-900 font-black mb-6 uppercase tracking-tighter leading-[1.0] transition-colors group-hover:text-[#FDA11C]">
                {p.title}
              </h4>

              {/* Divider - Dipertebal agar seimbang dengan font */}
              <div className="w-12 h-[3px] bg-slate-100 mb-6 group-hover:w-20 group-hover:bg-[#FDA11C] transition-all duration-500 rounded-full"></div>

              {/* Description - Arial Black (Uppercase & Solid) */}
              <p className="text-slate-500 text-[11px] md:text-xs font-black uppercase tracking-tight leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorPillarsSection;