import React from 'react';

interface StepItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  { 
    title: "Audit", 
    desc: "Bedah total tracking dan performa historis bisnis Anda untuk menemukan kebocoran budget",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  { 
    title: "Research", 
    desc: "Analisis kompetitor agresif dan audit psikologi audiens untuk pesan yang tepat sasaran",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  },
  { 
    title: "Strategy Mapping", 
    desc: "Merancang arsitektur funnel dan peta jalan pertumbuhan khusus untuk skala bisnis Anda",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.936L9 2l5.447 2.724A2 2 0 0115 6.512v9.976a2 2 0 01-1.553 1.936L9 20z" /></svg>
  },
  { 
    title: "Campaign Setup", 
    desc: "Implementasi teknis struktur iklan dan infrastruktur tracking berbasis konversi tinggi",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
  },
  { 
    title: "Optimization", 
    desc: "Testing berkelanjutan pada variabel kreatif dan audiens untuk efisiensi biaya per akuisisi",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  { 
    title: "Scaling", 
    desc: "Agresivitas budget pada kampanye pemenang untuk mendominasi pasar dan revenue maksimal",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
];

const ProcessSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="framework" className={`py-32 bg-[#010033] relative overflow-hidden ${arialStack}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[#F96300]/[0.02] pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            {/* Delivery Tagline - Arial Black */}
            <h2 className={`text-[#F96300] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4 leading-none ${arialStack}`}>
              <span className="w-12 h-px bg-[#F96300]"></span> Delivery Protocol
            </h2>
            {/* Title - Arial Black, Normal Tracking */}
            <h3 className={`text-5xl md:text-8xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
              LGTR <br /> <span className={`text-white/20 ${arialStack}`}>FRAMEWORK</span>
            </h3>
          </div>
          {/* Support Description - Arial Bold */}
          <p className={`text-white/60 text-lg md:text-xl max-w-sm lg:text-right font-bold leading-relaxed border-r-4 border-[#F96300] pr-8 hidden md:block tracking-normal ${arialStack}`}>
            Sistem operasional standar yang menjamin kualitas pertumbuhan bisnis Anda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="group relative p-10 bg-[#020066]/60 border border-white/10 rounded-[40px] shadow-2xl transition-all duration-500 hover:border-[#F96300]/40 overflow-hidden">
              <div className="mb-10 flex items-center justify-between">
                {/* Step Number - Arial Black */}
                <span className={`text-5xl font-black text-white/30 leading-none group-hover:text-[#F96300] transition-all duration-500 tracking-normal ${arialStack}`}>
                  0{i + 1}
                </span>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#010033] border border-[#F96300]/20 flex items-center justify-center text-[#F96300]">
                  {s.icon}
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Step Title - Arial Black */}
                <h4 className={`text-2xl font-black text-white uppercase mb-4 tracking-normal leading-tight group-hover:text-[#F96300] transition-colors ${arialStack}`}>
                  {s.title}
                </h4>
                {/* Step Description - Arial Bold */}
                <p className={`text-white/80 text-base font-bold leading-relaxed tracking-normal ${arialStack}`}>
                  {s.desc}
                </p>
              </div>
              
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#F96300]/[0.05] blur-3xl rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;