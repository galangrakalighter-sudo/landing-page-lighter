import React from 'react';

// Definisi Font Stack Utama (Arial, Helvetica, Sans-Serif)
const arialStack = "font-['Arial',__Helvetica,_sans-serif]";

const HeroSection = () => (
  <section className={`relative min-h-screen flex items-center pt-24 bg-[#FDA11C] overflow-hidden ${arialStack}`}>
    <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
    
    <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="text-left text-white">
        
        {/* Title - Arial Black, Bold, Non-Italic */}
        <h1 className={`${arialStack} text-6xl md:text-8xl text-white font-black leading-[0.85] mb-10 tracking-[-0.05em] uppercase drop-shadow-2xl`}>
          <span className={`${arialStack} tracking-tight`}>
            EIKYOO
          </span> 
          <br />
          <span className={`${arialStack} text-black/20 tracking-tighter`}>
            CREATOR <br className="hidden md:block" /> ENGINE
          </span>
        </h1>
        
        {/* Description - Arial Black, Massive & Solid */}
        <div className="max-w-lg mb-12 relative border-l-8 border-white pl-8">
          <p className={`${arialStack} text-white text-lg md:text-xl leading-tight font-black uppercase tracking-tighter`}>
            Kami merekayasa cara 
            <span className={`${arialStack} text-black font-black uppercase`}>
              {" "}Kreator Berkembang{" "}
            </span> 
            melalui platform monetisasi dan pembangunan brand personal secara profesional
          </p>
        </div>
        
        {/* Buttons - Arial Black Style */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-14 py-7 bg-black text-white font-black rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-[11px]">
            Join as Creator
          </button>
          <button className="px-14 py-7 bg-white text-black font-black rounded-2xl shadow-xl transition-all duration-300 hover:bg-slate-100 uppercase tracking-[0.2em] text-[11px]">
            Brand Inquiry
          </button>
        </div>
      </div>
      
      {/* Visual Component - Arial Black */}
      <div className="relative group hidden lg:block">
        <div className="absolute -inset-10 bg-black/5 blur-[100px] rounded-full animate-pulse"></div>
        <div className="relative aspect-square bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[60px] overflow-hidden shadow-3xl flex items-center justify-center transform hover:rotate-1 transition-transform duration-700">
           
           <div className="text-center p-12">
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl transition-transform group-hover:rotate-6">
                 <svg className="w-16 h-16 text-[#FDA11C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeWidth={3} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                 </svg>
              </div>
              <p className="text-white font-black text-5xl tracking-tighter uppercase mb-4 leading-none">CORE_ENGINE</p>
              <div className="h-1 w-20 bg-white/30 mx-auto mb-4"></div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;