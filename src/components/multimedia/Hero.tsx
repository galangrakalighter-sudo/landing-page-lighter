import React from 'react';

const HeroSection = () => {
  // Shortcut untuk font stack Arial Black
  const arialBlack = "font-['Arial_Black',_Arial,_sans-serif]";

  return (
    <section className={`relative min-h-screen flex items-center pt-24 bg-gradient-to-br from-orange-950 via-[#FF6600] to-orange-700 overflow-hidden ${arialBlack}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-black/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left text-white max-w-lg">
            {/* Title */}
            <h1 className={`text-6xl md:text-8xl lg:text-[105px] font-black leading-[0.85] mb-10 tracking-tighter uppercase drop-shadow-2xl ${arialBlack}`}>
              LIGHTER <br />
              <span className={`text-white/30 ${arialBlack}`}>STUDIO</span>
            </h1>

            <div className="max-w-xs md:max-w-sm mb-12">
              {/* Highlight Text */}
              <p className={`text-orange-50 text-xl md:text-3xl font-black leading-tight uppercase border-l-4 border-white pl-6 mb-6 tracking-tight ${arialBlack}`}>
                Visual That Speaks<br />
                Stories That Move
              </p>
              {/* Body Text */}
              <p className={`text-white/70 text-sm font-bold leading-relaxed pl-7 opacity-90 ${arialBlack}`}>
                Kami merekayasa konten cinematic untuk audiens yang mendambakan kualitas di atas rata-rata. Kami menangkap momen dan mengabadikan pengalaman
              </p>
            </div>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className={`px-10 py-5 bg-white text-[#FF6600] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 uppercase font-black tracking-widest text-xs ${arialBlack}`}>
                Start Production
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-full animate-pulse"></div>
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[60px] aspect-square lg:aspect-[4/5] flex items-center justify-center overflow-hidden shadow-3xl transform hover:rotate-2 transition-transform duration-700">
              {/* Viewfinder Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none opacity-40">
                <div className="flex justify-between">
                  <div className="w-8 h-8 border-t-2 border-l-2 border-white"></div>
                  <div className="w-8 h-8 border-t-2 border-r-2 border-white"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-8 h-8 border-b-2 border-l-2 border-white"></div>
                  <div className="w-8 h-8 border-b-2 border-r-2 border-white"></div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              
              {/* Cinematic Centerpiece */}
              <div className="text-center z-20">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20 animate-[spin_8s_linear_infinite]">
                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                   </svg>
                </div>
                {/* Center Text */}
                <p className={`text-white text-4xl font-black tracking-tighter uppercase leading-none mb-3 ${arialBlack}`}>Cinematic</p>
                <p className={`text-white/40 text-[9px] font-black uppercase tracking-[0.5em] ${arialBlack}`}>Production_Engine_v.1</p>
              </div>

              {/* Bottom Status Tag */}
              <div className="absolute bottom-12 left-12 z-20 flex items-center gap-4">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FF6600] bg-white/20 backdrop-blur-md"></div>)}
                </div>
                <div>
                  <p className={`text-white text-xs font-black uppercase tracking-wide leading-none ${arialBlack}`}>Creative Partners</p>
                  <p className={`text-white/40 text-[8px] font-black uppercase mt-1 tracking-widest ${arialBlack}`}>Ready to Engage</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;