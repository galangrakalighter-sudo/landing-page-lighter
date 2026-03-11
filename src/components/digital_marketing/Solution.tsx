import React from 'react';

interface PillarItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const SolutionSection = () => {
  const pillars: PillarItem[] = [
    { 
      title: "Data Strategy", 
      desc: "Setiap langkah berbasis audit data mendalam, bukan sekadar asumsi kreatif",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    { 
      title: "Performance Execution", 
      desc: "Implementasi kampanye agresif dengan fokus utama pada metrik revenue",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    { 
      title: "Continuous Optimization", 
      desc: "Iterasi tanpa henti untuk memastikan biaya akuisisi tetap rendah saat skala naik",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    }
  ];

  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#020066] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          {/* Subtitle - Arial Black */}
          <h2 className={`text-[#F96300] font-black tracking-widest uppercase text-xs mb-4 leading-none ${arialStack}`}>
            Core Strategy
          </h2>
          {/* Main Title - Arial Black, Tracking Normal */}
          <h3 className={`text-4xl md:text-6xl font-black text-white uppercase mb-20 tracking-normal leading-none ${arialStack}`}>
            Tiga Pilar LGTR
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-16">
            {pillars.map((p, i) => (
              <div key={i} className="group text-center">
                {/* Icon Box */}
                <div className="w-24 h-24 bg-[#010033] border border-[#F96300]/20 rounded-[32px] flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:bg-[#F96300] group-hover:shadow-[0_0_40px_rgba(249,99,0,0.3)] group-hover:scale-110 group-hover:-rotate-3">
                  <svg className="w-10 h-10 text-[#F96300] group-hover:text-[#020066] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>
                
                {/* Card Title - Arial Black, Tracking Normal */}
                <h4 className={`text-3xl font-black text-white mb-6 uppercase tracking-normal leading-none group-hover:text-[#F96300] transition-colors ${arialStack}`}>
                  {p.title}
                </h4>
                
                {/* Card Description - Arial Bold */}
                <p className={`text-white/50 leading-relaxed group-hover:text-white/80 transition-colors text-lg font-bold tracking-normal ${arialStack}`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;