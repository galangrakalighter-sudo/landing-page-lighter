import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const CareerOutcomeSection = () => (
  <section className={`py-32 bg-[#010050] relative overflow-hidden ${arialStack}`}>
    {/* Decorative Subtle Background */}
    <div className="absolute top-0 right-0 w-full h-full bg-white/[0.01] pointer-events-none"></div>
    <div className="absolute -right-20 bottom-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <SectionHeader subtitle="The Results" title="Kualitas Lulusan Kami." light={true} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Industry-Ready Skills", value: "100%", sub: "Verified Competency" },
          { label: "Portfolio-Based", value: "PRO", sub: "Standard Output" },
          { label: "Certification", value: "VALID", sub: "Authorized Grade" },
          { label: "Career Acceleration", value: "FAST", sub: "High Track Record" }
        ].map((o, i) => (
          <div key={i} className="relative group p-10 bg-white/[0.03] border border-white/10 rounded-[48px] shadow-2xl transition-all duration-500 hover:bg-white/[0.07] hover:border-blue-500/30 hover:-translate-y-3 overflow-hidden text-center">
             
             {/* Highlight Glow behind text */}
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>

             <div className="relative z-10">
                {/* Label - Arial Black */}
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 leading-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {o.label}
                </p>

                {/* Value - Arial Black (Large Impact) */}
                <h4 className="text-5xl md:text-6xl lg:text-7xl text-white font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                  {o.value}
                </h4>

                {/* Sub - Arial Black (Extra Small) */}
                <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] group-hover:text-white/50 transition-colors">
                  {o.sub}
                </p>
                
                {/* Accent Divider */}
                <div className="h-[3px] w-10 bg-white/10 mx-auto mt-10 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500 rounded-full"></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerOutcomeSection;