import React from 'react';

const IconCheck = () => (
  <div className="flex-shrink-0 w-6 h-6 bg-[#00B288]/10 rounded-full flex items-center justify-center">
    <svg className="w-4 h-4 text-[#00B288]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const AboutLabSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-20 bg-[#FEFFFF] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Konten Teks */}
          <div className="lg:w-1/2">
            {/* Main Title - Arial Black */}
            <h2 className={`font-black text-4xl md:text-5xl text-slate-900 mb-6 leading-tight uppercase tracking-normal ${arialStack}`}>
              Bukan Sekadar Storefront <br /> Ini Adalah <span className="text-[#00B288]">Lab Optimasi</span>.
            </h2>
            {/* Description - Arial Bold */}
            <p className={`text-slate-600 mb-8 text-lg leading-relaxed font-bold tracking-normal ${arialStack}`}>
              Di LIGHTER ECOMMERCE LAB, kami memandang e-commerce sebagai serangkaian eksperimen data yang berkelanjutan. Kami menggabungkan psikologi user, rekayasa UX, dan arsitektur teknis yang kokoh
            </p>
            
            <div className="space-y-5">
              {[
                "Audit berbasis data real-time",
                "Funnel engineering untuk akuisisi pelanggan",
                "Otomatisasi retensi & CRM",
                "Infrastruktur headless yang scalable"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <IconCheck />
                  {/* List Item - Arial Black */}
                  <span className={`font-black text-lg text-slate-800 uppercase tracking-normal group-hover:text-[#00B288] transition-colors ${arialStack}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Statistik */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
            {/* Uptime Card */}
            <div className="h-72 bg-[#00B288]/5 rounded-3xl flex flex-col items-center justify-center border border-[#00B288]/10 p-8 text-center hover:bg-[#00B288]/10 transition-colors">
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm text-[#00B288]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12.55V17a2 2 0 002 2h10a2 2 0 002-2v-4.45m-5 3l3-3m0 0l-3-3m3 3H9" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2" />
                </svg>
              </div>
              {/* Stat Value - Arial Black */}
              <span className={`font-black text-5xl text-[#00B288] mb-2 tracking-normal ${arialStack}`}>99.9%</span>
              <span className={`font-black text-sm text-slate-700 uppercase tracking-widest ${arialStack}`}>Uptime Architecture</span>
            </div>

            {/* Speed Card */}
            <div className="h-72 bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white lg:mt-12 shadow-2xl shadow-slate-200">
              <div className="mb-4 p-3 bg-white/10 rounded-2xl text-[#00B288]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              {/* Stat Value - Arial Black */}
              <span className={`font-black text-5xl text-[#00B288] mb-2 tracking-normal ${arialStack}`}>3.2s</span>
              <span className={`font-black text-sm uppercase tracking-widest opacity-70 ${arialStack}`}>Avg. Load Speed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLabSection;