import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-blue-400' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-blue-500' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-7xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const CorporateTrainingSection = () => (
  <section className={`py-32 bg-[#010050] relative overflow-hidden ${arialStack}`}>
    {/* Decorative Elements */}
    <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="bg-white/5 border border-white/10 rounded-[60px] p-10 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden backdrop-blur-sm shadow-2xl">
        
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="lg:w-3/5 relative z-10">
          <SectionHeader subtitle="Enterprise Solution" title="Corporate Training" light={true} centered={false} />
          
          {/* Main Description - Arial Black (Subtle/Lightened) */}
          <p className={`${arialStack} text-blue-100 text-lg md:text-xl font-black leading-tight mb-12 opacity-80 max-w-2xl uppercase tracking-tight`}>
            Akselerasi performa tim Anda dengan kurikulum yang dikustomisasi khusus untuk kebutuhan bisnis perusahaan Anda
          </p>
          
          {/* Feature List - Arial Black */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {['In-House Training', 'Custom Curriculum', 'Skill Upgrade', 'Team Acceleration'].map(item => (
              <div key={item} className="flex items-center gap-4 group">
                <span className="w-8 h-[3px] bg-blue-500 group-hover:w-12 transition-all duration-300"></span>
                <span className={`${arialStack} text-white text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Arial Black */}
        <div className="relative z-10">
          <button className={`${arialStack} px-12 py-8 bg-white text-[#010050] text-2xl font-black rounded-3xl transition-all duration-500 hover:scale-105 hover:bg-blue-500 hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] uppercase tracking-tighter`}>
            Book Training
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CorporateTrainingSection;