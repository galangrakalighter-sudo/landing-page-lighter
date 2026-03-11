import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
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

const GrowthFrameworkSection = () => {
  const steps = [
    { title: "Creator Audit", desc: "Analisis mendalam terhadap data performa, niche, dan potensi konten Anda saat ini" },
    { title: "Positioning Strategy", desc: "Membangun identitas unik yang membedakan Anda di tengah jutaan creator lain secara tajam" },
    { title: "Content Planning", desc: "Perancangan kalender konten strategis untuk meningkatkan retensi dan engagement audience" },
    { title: "Audience Growth", desc: "Ekspansi jangkauan melalui algoritma dan taktik distribusi konten yang agresif dan terukur" },
    { title: "Monetization Strategy", desc: "Optimasi berbagai aliran pendapatan (revenue streams) mulai dari brand deal hingga digital products" },
    { title: "Long-Term Scaling", desc: "Membangun sistem operasional agar personal brand Anda terus bertumbuh secara otomatis" }
  ];

  return (
    <section id="framework" className={`py-32 bg-white overflow-hidden relative border-y border-slate-100 ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader subtitle="The Protocol" title="6-Step Growth Framework" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className="relative group p-12 bg-[#FCFBFC] rounded-[50px] border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:bg-white hover:border-[#FDA11C]/30 overflow-hidden"
            >

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#FDA11C] rounded-xl flex items-center justify-center text-white font-black text-sm transition-transform group-hover:rotate-12">
                    {i + 1}
                  </div>
                  <span className="text-[10px] font-black text-[#FDA11C] uppercase tracking-[0.2em]">Phase Protocol</span>
                </div>
                
                {/* Title - Arial Black */}
                <h4 className="text-2xl text-slate-900 font-black mb-6 uppercase tracking-tighter leading-none group-hover:text-[#FDA11C] transition-colors duration-500">
                  {s.title}
                </h4>
                
                {/* Desc - Arial Black Uppercase */}
                <p className="text-slate-500 font-black leading-tight text-[11px] md:text-xs uppercase tracking-tight group-hover:text-slate-800 transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthFrameworkSection;