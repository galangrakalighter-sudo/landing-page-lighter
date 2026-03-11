import React from 'react';

const SectionHeader = ({ subtitle, title1, title2, centered = true, light = false }: { subtitle: string; title1: string; title2: string; centered?: boolean; light?: boolean }) => {
  const arialBold = "font-['Arial',_Helvetica,_sans-serif] font-black";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`${arialBold} ${light ? 'text-white/60' : 'text-[#FF6600]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
        {!centered && <span className={`w-16 h-[4px] ${light ? 'bg-white' : 'bg-[#FF6600]'}`}></span>}
        {subtitle}
      </h2>
      <h3 className={`${arialBold} text-5xl md:text-7xl ${light ? 'text-white' : 'text-slate-900'} tracking-tighter uppercase leading-[0.85]`}>
        {title1} <br />
        <span className={light ? "text-white/40" : "text-slate-400"}>{title2}</span>
      </h3>
    </div>
  );
};

const AboutLighterMultimediaSection = () => {
  // Shortcut untuk font stack Arial, Helvetica, Sans-Serif
  const arialBold = "font-['Arial',_Helvetica,_sans-serif] font-black";

  return (
    <section className={`py-32 bg-[#FF6600] relative overflow-hidden ${arialBold}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end gap-16">
          
          {/* Left Content */}
          <div className="lg:w-7/12">
            <SectionHeader 
              subtitle="About Identity" 
              title1="BUKAN SEKEDAR" 
              title2="TIM DOKUMENTASI" 
              light={true} 
              centered={false} 
            />
            
            <div className="relative pl-12 border-l-8 border-white/20">
              <p className={`text-xl md:text-2xl text-white leading-tight uppercase tracking-tight mb-8 ${arialBold}`}>
                Lighter Multimedia merekayasa momen menjadi aset visual strategis. Kami tidak hanya merekam, kami membangun narasi yang menggerakkan brand Anda
              </p>
            </div>
          </div>

          {/* Right Visual Grid */}
          <div className="lg:w-5/12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 01 */}
            <div className="group relative bg-white p-8 rounded-[30px] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[#FF6600] rounded-full mb-12 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <span className={`block text-4xl text-slate-900 leading-none uppercase tracking-tighter ${arialBold}`}>PRECISE</span>
                <span className={`block text-[10px] text-slate-400 mt-2 uppercase tracking-widest ${arialBold}`}>High-End Capturing</span>
              </div>
            </div>
            
            {/* Card 02 */}
            <div className="group relative bg-slate-900 p-8 rounded-[30px] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="flex gap-1 mb-12">
                  <div className="w-8 h-[2px] bg-[#FF6600]"></div>
                  <div className="w-2 h-[2px] bg-[#FF6600]"></div>
                </div>
                <span className={`block text-4xl text-white leading-none uppercase tracking-tighter ${arialBold}`}>CINEMATIC</span>
                <span className={`block text-[10px] text-[#FF6600] mt-2 uppercase tracking-widest ${arialBold}`}>Elite Grading</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLighterMultimediaSection;