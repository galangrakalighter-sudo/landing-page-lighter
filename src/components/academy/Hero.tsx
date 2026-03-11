import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const HeroSection = () => (
  <section className={`relative min-h-screen flex items-center pt-24 bg-gradient-to-br from-[#000030] to-[#010050] overflow-hidden ${arialStack}`}>
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
    
    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-left text-white z-20">
          {/* Main Title - Menggunakan Arial Black Stack, No Italic */}
          <h1 className={`text-6xl md:text-7xl lg:text-8xl leading-[1.0] mb-8 tracking-tighter uppercase font-black ${arialStack}`}>
            LIGHTER <br /> 
            <span className="text-white/20">ACADEMY</span> <br /> 
            INDONESIA
          </h1>

          {/* Tagline - Menggunakan Arial Black Stack */}
          <p className={`text-blue-100 text-xl md:text-2xl mb-12 max-w-xl leading-tight font-black uppercase tracking-tight border-l-8 border-white pl-6 ${arialStack}`}>
            Empowering Future Professionals Through Structured Digital Education
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className={`px-10 py-5 bg-white text-[#010050] rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-tighter text-sm font-black ${arialStack}`}>
              Jelajahi Program
            </button>
          </div>
        </div>

        {/* Right Visual - Box Industrial Minimalism */}
        <div className="relative group hidden lg:block">
          <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full"></div>
          
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[60px] aspect-square max-w-[500px] ml-auto flex items-center justify-center overflow-hidden shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-700">
            <div className="p-12 text-center">
               <svg className="w-24 h-24 text-white/10 mb-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
               <h4 className={`text-3xl text-white uppercase tracking-tighter mb-2 font-black ${arialStack}`}>Modern Learning Hub</h4>
               <p className={`text-white/40 text-[10px] font-black uppercase tracking-[0.5em] ${arialStack}`}>Global_Standard_Curriculum</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default HeroSection;