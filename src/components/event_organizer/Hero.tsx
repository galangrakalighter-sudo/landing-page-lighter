import React from 'react';

const HeroSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`relative min-h-screen flex items-center pt-24 bg-[#6B3BA7] overflow-hidden ${arialStack}`}>
      {/* Background Decorative Gradients - Warna Asli */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-black/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          
          {/* Title - Arial Black, Warna Putih Asli, No Italic */}
          <h1 className={`font-black text-6xl md:text-8xl text-white leading-[0.9] mb-10 tracking-normal uppercase drop-shadow-2xl ${arialStack}`}>
            <span>LUMINA</span> <br />
            <span className="text-white/30 tracking-tight">CREATIVE EVENT</span>
          </h1>
          
          {/* Description - Arial Bold, No Italic, Border Putih */}
          <p className={`text-purple-100 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-bold border-l-4 border-white/30 pl-6 ${arialStack}`}>
            Kami merekayasa narasi brand menjadi <span className="text-white font-black underline decoration-white/50 underline-offset-8 uppercase tracking-normal">Realitas Fisik yang Imersif</span> di mana setiap detail adalah detak jantung dari keajaiban yang tak terlupakan
          </p>
          
          {/* Buttons - Arial Black, Warna Putih Asli */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className={`px-12 py-6 bg-white text-[#6B3BA7] rounded-2xl shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-xs font-black ${arialStack}`}>
              Mulai Pengalaman
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-full"></div>
          
          {/* Creative Control Dashboard - Warna Asli */}
          <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[50px] p-12 shadow-3xl overflow-hidden group">
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className={`font-black text-[9px] text-white/40 uppercase tracking-[0.4em] ${arialStack}`}>System_Status: Optimal</span>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 group-hover:border-white/20 transition-all">
                  <p className={`font-black text-[10px] text-white/40 uppercase tracking-widest mb-4 ${arialStack}`}>Atmosphere_Index</p>
                  <p className={`font-black text-5xl text-white tracking-normal ${arialStack}`}>94%</p>
                  <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[94%]"></div>
                  </div>
                </div>
                <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 group-hover:border-white/20 transition-all">
                  <p className={`font-black text-[10px] text-white/40 uppercase tracking-widest mb-4 ${arialStack}`}>Resonance_Sync</p>
                  <div className="flex items-end gap-1.5 h-12">
                      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/20 rounded-t-sm group-hover:bg-white/60 transition-all" style={{ height: `${h}%` }}></div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Central Module - No Italic */}
              <div className="relative h-56 bg-black/40 rounded-[40px] flex flex-col items-center justify-center border border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
                <div className="absolute text-center">
                  <p className={`font-black text-white text-3xl uppercase tracking-normal mb-1 ${arialStack}`}>IMMERSIVE</p>
                  <p className={`font-bold text-white/40 text-[9px] uppercase tracking-[0.4em] ${arialStack}`}>Creative Protocol Active</p>
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