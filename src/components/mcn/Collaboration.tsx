import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-6xl lg:text-7xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.85] uppercase`}>
      {title}
    </h3>
  </div>
);

const BrandCollaborationSection = () => (
  <section className={`py-32 bg-[#FDA11C] relative ${arialStack} overflow-hidden`}>
    <div className="container mx-auto max-w-6xl px-6 relative z-10">
      <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[60px] p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] text-center">
        
        {/* Header Section */}
        <SectionHeader 
          subtitle="Partnership" 
          title="Kolaborasi Brand Terukur" 
          light={true} 
          centered={true} 
        />
        
        {/* Main Narrative - Arial Black */}
        <p className="text-2xl md:text-3xl lg:text-3xl text-white font-black leading-tight mb-16 uppercase tracking-tighter max-w-4xl mx-auto">
          Kami mencocokkan brand dengan talenta paling relevan melalui sistem <span className="text-black/20">audit data presisi</span> untuk hasil <span className="underline decoration-white/40 underline-offset-8 decoration-4">ROI yang nyata</span>
        </p>

        {/* Separator Line */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-[2px] w-full bg-white/20 max-w-[100px] rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="h-[2px] w-full bg-white/20 max-w-[100px] rounded-full"></div>
        </div>
        
        {/* Features Row - Arial Black */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {['Campaign Planning', 'Talent Matching', 'Performance Reporting', 'ROI-Based Results'].map((item, i) => (
            <div key={item} className="flex flex-col items-center gap-4 group">
              {/* Feature Title - Arial Black Small */}
              <p className="text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default BrandCollaborationSection;