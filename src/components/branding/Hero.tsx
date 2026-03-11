import React from 'react';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-neutral-950 font-[Arial,Helvetica,sans-serif]">
    {/* Background Decor */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    </div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          {/* Main Title - Arial Stack */}
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.9] text-white tracking-tighter mb-8 uppercase font-[Arial,Helvetica,sans-serif]">
            RADDINE <br />
            <span className="relative inline-block text-red-600">STRATEGIC</span> <br />
            SYSTEM
          </h1>
          
          {/* Paragraph - Arial Stack */}
          <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-bold tracking-tight font-[Arial,Helvetica,sans-serif]">
            Membangun otoritas brand yang tidak tergoyahkan. Kami mentransformasi identitas visual menjadi sistem pertumbuhan yang dominan dan siap skala.
          </p>
          
          {/* Button - Arial Stack */}
          <button className="px-10 py-5 bg-red-600 text-white font-black rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] uppercase tracking-[0.2em] text-xs font-[Arial,Helvetica,sans-serif]">
            Mulai Konsultasi
          </button>
        </div>

        <div className="lg:w-2/5 relative">
          <div className="aspect-[4/5] bg-neutral-900 border border-white/10 rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20"></div>
              <svg className="w-32 h-32 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            {/* Card Text - Arial Stack */}
            <p className="text-white font-black text-5xl mb-2 tracking-tighter uppercase leading-none font-[Arial,Helvetica,sans-serif]">IDENTITY</p>
            <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] font-[Arial,Helvetica,sans-serif]">Framework v.1.0</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;