import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/70' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/40' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black (Ukuran Disesuaikan) */}
    <h3 className={`${arialStack} text-4xl md:text-6xl lg:text-7xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.9] uppercase`}>
      {title}
    </h3>
  </div>
);

const AboutEikyooSection = () => (
  <section className={`py-32 bg-[#FDA11C] relative overflow-hidden ${arialStack}`}>
    {/* Decorative Elements */}
    <div className="absolute -right-20 top-0 w-96 h-96 bg-white/10 blur-[150px] rounded-full pointer-events-none"></div>
    <div className="absolute -left-20 bottom-0 w-80 h-80 bg-black/5 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
      <div className="text-white">
        <SectionHeader 
          subtitle="The Ecosystem" 
          title="Bukan Sekadar Management" 
          light={true} 
          centered={true} 
        />
        
        {/* Highlight Statement - Arial Black */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] mb-12 uppercase tracking-tighter">
          EIKYOO adalah ekosistem creator modern yang dirancang untuk menjembatani <span className="text-black/20">kreativitas</span> dengan <span className="underline decoration-white/40 underline-offset-8 decoration-4">keberlanjutan bisnis</span>
        </p>

        {/* Separator */}
        <div className="h-[3px] w-24 bg-white/30 mx-auto mb-12 rounded-full"></div>
        
        {/* Description - Arial Black (Responsive & Clean) */}
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-tight font-black mb-16 max-w-4xl mx-auto uppercase tracking-tight">
          Kami menggabungkan strategi pertumbuhan, optimasi monetisasi, dan jaringan kolaborasi brand premium dalam satu sistem yang terintegrasi. Kami percaya creator adalah entitas bisnis masa depan
        </p>

        {/* Tag Modules - Arial Black */}
        <div className="flex flex-wrap justify-center gap-4">
           {['Strategy-Driven', 'Monetization-First', 'Brand-Aligned'].map(t => (
             <span 
               key={t} 
               className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-[#FDA11C] transition-all duration-300 cursor-default"
             >
               {t}
             </span>
           ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutEikyooSection;