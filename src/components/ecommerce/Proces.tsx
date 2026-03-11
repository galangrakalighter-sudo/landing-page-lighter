import React from 'react';

const ProcessSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const steps = [
    { 
      title: "Audit & Analysis", 
      desc: "Menganalisis bottleneck teknis dan peluang pertumbuhan di sistem Anda saat ini",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    { 
      title: "Market Mapping", 
      desc: "Memetakan customer journey dan membedah psikologi perilaku pembeli target",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      title: "Store Architecture", 
      desc: "Merancang arsitektur toko online yang cepat, modular, dan siap untuk skala besar",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    },
    { 
      title: "Development", 
      desc: "Membangun sistem dengan standar kode tinggi yang dioptimalkan untuk performa",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    { 
      title: "Optimization", 
      desc: "Siklus eksperimen CRO & A/B Testing intensif untuk memaksimalkan ROI setiap traffic",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      title: "Scale & Automation", 
      desc: "Mengintegrasikan sistem otomatisasi untuk memastikan profit tumbuh berkelanjutan",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>
    }
  ];

  return (
    <section className={`py-24 bg-[#FEFFFF] relative overflow-hidden ${arialStack}`}>
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00B288 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-[#00B288]/10 text-[#00B288] text-xs font-black mb-4 tracking-[0.2em] uppercase">
            Metodologi Lab
          </div>
          {/* Main Title - Arial Black */}
          <h2 className={`font-black text-4xl md:text-6xl text-slate-900 mb-4 uppercase tracking-normal ${arialStack}`}>
            The Growth Lab <span className="text-[#00B288]">Framework</span>
          </h2>
          {/* Description - Arial Bold */}
          <p className={`text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-bold ${arialStack}`}>
            Pendekatan sistematis 6-tahap kami untuk mengubah platform e-commerce Anda menjadi mesin penghasil profit otomatis
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00B288]/20 to-transparent z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="group relative">
                {/* Step Card */}
                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,178,136,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#00B288]/5 flex items-center justify-center text-[#00B288] group-hover:bg-[#00B288] group-hover:text-white transition-all duration-300 shadow-inner">
                      {s.icon}
                    </div>
                  </div>

                  {/* Content Title - Arial Black */}
                  <h3 className={`font-black text-2xl text-slate-900 mb-4 group-hover:text-[#00B288] transition-colors uppercase tracking-normal ${arialStack}`}>
                    {s.title}
                  </h3>
                  {/* Content Description - Arial Bold */}
                  <p className={`text-slate-500 text-base leading-relaxed relative z-10 font-bold ${arialStack}`}>
                    {s.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#00B288] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;