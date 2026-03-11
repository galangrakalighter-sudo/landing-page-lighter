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

const TalentShowcaseSection = () => (
  <section className={`py-32 bg-[#FDA11C] relative border-y border-white/10 ${arialStack}`}>
    {/* Grid Background Decor */}
    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <SectionHeader subtitle="Showcase" title="High-Value Talent Profile" light={true} />
      
      <div className="grid lg:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group bg-white/10 backdrop-blur-3xl rounded-[60px] border border-white/20 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:bg-white/20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] flex flex-col">
            
            {/* Image Placeholder Area */}
            <div className="h-96 bg-black/5 relative overflow-hidden flex items-center justify-center">
                <span className="font-black text-white/10 text-9xl select-none uppercase tracking-tighter transition-transform duration-700 group-hover:scale-110">
                  T0{i}
                </span>
                <div className="absolute top-8 left-8 px-5 py-2 bg-white text-slate-900 font-black text-[9px] uppercase tracking-widest rounded-xl shadow-lg">
                  Verified Creator
                </div>
                {/* Decorative Element */}
                <div className="absolute bottom-6 right-8 w-12 h-1.5 bg-white/20 rounded-full"></div>
            </div>

            {/* Content Area */}
            <div className="p-12 text-white">
              {/* Creator Name - Arial Black */}
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-10 group-hover:text-slate-900 transition-colors duration-300">
                CREATOR_NAME
              </h4>

              {/* Stats - Arial Black Numbers & Labels */}
              <div className="grid grid-cols-2 gap-8 pt-10 border-t-4 border-white/10">
                 <div className="group/stat">
                    <p className="text-4xl md:text-5xl font-black tracking-tighter mb-1 leading-none group-hover/stat:translate-x-1 transition-transform">50K+</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50">Followers</p>
                 </div>
                 <div className="group/stat">
                    <p className="text-4xl md:text-5xl font-black tracking-tighter mb-1 leading-none group-hover/stat:translate-x-1 transition-transform">1M+</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50">Views/Mo</p>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TalentShowcaseSection;