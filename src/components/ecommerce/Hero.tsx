import React from 'react';

const HeroSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#FEFFFF] ${arialStack}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00B288]/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00B288]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className={`text-5xl md:text-7xl lg:text-[90px] text-slate-900 leading-[0.95] mb-8 uppercase tracking-normal font-black ${arialStack}`}>
              LIGHTER <br />
              <span className="relative inline-block text-[#00B288]">
                REVENUE
              </span> <br />
              SYSTEM
            </h1>

            <p className={`text-lg md:text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-bold tracking-normal ${arialStack}`}>
              Kami bukan sekadar jasa pembuatan toko online. Kami membangun sistem pertumbuhan bisnis digital berbasis data untuk mengakselerasi skala bisnis Anda secara sistematis
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className={`px-10 py-5 bg-[#00B288] text-white font-black rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,178,136,0.3)] hover:scale-105 active:scale-95 uppercase tracking-widest text-xs ${arialStack}`}>
                Hubungi Kami Sekarang
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 transition-transform duration-500">
              {/* Window Bar */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="h-4 bg-slate-50 rounded-full w-3/4" />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-[#00B288]/5 rounded-2xl border border-[#00B288]/10 flex flex-col items-center justify-center">
                    <span className={`text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 ${arialStack}`}>Conv Rate</span>
                    <span className={`text-2xl font-black text-[#00B288] ${arialStack}`}>+142%</span>
                  </div>
                  <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
                    <span className={`text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 ${arialStack}`}>AOV</span>
                    <span className={`text-2xl font-black text-slate-800 ${arialStack}`}>$120</span>
                  </div>
                  <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
                    <span className={`text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1 ${arialStack}`}>Retention</span>
                    <span className={`text-2xl font-black text-slate-800 ${arialStack}`}>45%</span>
                  </div>
                </div>
                
                {/* Simple Chart Representation */}
                <div className="h-40 bg-slate-50 rounded-2xl flex items-end p-6 gap-3">
                  <div className="w-full bg-[#00B288]/20 h-1/4 rounded-md" />
                  <div className="w-full bg-[#00B288]/40 h-2/4 rounded-md" />
                  <div className="w-full bg-[#00B288]/60 h-3/4 rounded-md" />
                  <div className="w-full bg-[#00B288] h-full rounded-md" />
                  <div className="w-full bg-[#00B288]/80 h-4/5 rounded-md" />
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