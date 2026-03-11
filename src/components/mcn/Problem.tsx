import React from 'react';

// Definisi Font Stack Utama (Arial Black Style)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      <span className={arialStack}>{subtitle}</span>
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-6xl lg:text-7xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.9] uppercase`}>
      {title}
    </h3>
  </div>
);

const CreatorProblemSection = () => {
  const problems = [
    { 
      title: "Monetisasi Tidak Stabil", 
      desc: "Pendapatan yang naik-turun tanpa sistem revenue yang jelas bagi keberlangsungan karir digital",
      icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v1m4-12H8L4 16h16L16 5z" /> 
    },
    { 
      title: "Tidak Ada Tim Support", 
      desc: "Creator terpaksa mengerjakan semuanya sendiri mulai dari editing hingga urusan administratif brand",
      icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    { 
      title: "Brand Deal Tidak Konsisten", 
      desc: "Kesulitan mendapatkan kolaborasi brand berkualitas secara rutin dan jangka panjang",
      icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    { 
      title: "Kurang Strategi Konten", 
      desc: "Produksi konten tanpa arah yang jelas sehingga pertumbuhan audience stagnan dan membosankan",
      icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    { 
      title: "Sulit Scale Personal Brand", 
      desc: "Bingung bagaimana cara mengubah konten menjadi bisnis yang memiliki nilai otoritas tinggi",
      icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    }
  ];

  return (
    <section className={`py-24 bg-[#FCFBFC] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Creator Struggles" title="Hambatan Pertumbuhan Anda." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="p-10 bg-white border-2 border-slate-50 rounded-[40px] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(253,161,28,0.15)] group flex flex-col items-start"
            >
              {/* Icon Wrapper */}
              <div className="w-16 h-16 bg-[#FDA11C]/10 rounded-2xl flex items-center justify-center text-[#FDA11C] mb-8 group-hover:bg-[#FDA11C] group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                   {p.icon}
                </svg>
              </div>

              {/* Title - Arial Black */}
              <h4 className={`${arialStack} text-xl text-slate-900 font-black mb-6 uppercase tracking-tighter leading-[1.1] transition-colors group-hover:text-[#FDA11C]`}>
                {p.title}
              </h4>

              {/* Description - Arial Black (Uppercase, No Dots) */}
              <p className={`${arialStack} text-slate-500 text-[10px] md:text-[11px] font-black uppercase tracking-tight leading-tight opacity-80 group-hover:opacity-100 transition-opacity`}>
                {p.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorProblemSection;