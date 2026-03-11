import React from 'react';

interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const problems: CardProps[] = [
  {
    title: "Event Terasa Biasa",
    desc: "Acara yang monoton tanpa konsep kuat gagal meninggalkan kesan mendalam bagi audiens",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  },
  {
    title: "Konsep Tidak Matang",
    desc: "Tanpa arah kreatif yang jelas, pesan brand seringkali hilang di tengah keramaian acara",
    icon: <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  },
  {
    title: "Eksekusi Berantakan",
    desc: "Detail teknis yang terabaikan dapat merusak seluruh pengalaman dan reputasi penyelenggara",
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    title: "Kurang Diferensiasi",
    desc: "Event yang terlihat 'sama saja' dengan kompetitor membuat brand sulit tampil stand-out",
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 11-4 4 4 4 0 014-4z" />
  }
];

const ProblemSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#FFFFFE] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          {/* Label - Arial Black, Ungu */}
          <h2 className={`font-black text-[#6B3BA7] tracking-[0.3em] uppercase text-[10px] mb-4 ${arialStack}`}>
            Common Obstacles
          </h2>
          {/* Header - Arial Black, No Italic */}
          <h3 className={`font-black text-3xl md:text-5xl text-slate-900 tracking-normal uppercase leading-tight ${arialStack}`}>
            Mengapa Event <span className="text-[#6B3BA7]">Biasa</span> Tidak Cukup?
          </h3>
          <div className="w-16 h-1.5 bg-[#6B3BA7] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="group p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(107,59,167,0.15)] hover:border-[#6B3BA7]/20"
            >
              {/* Icon Container - Ungu Asli */}
              <div className="w-14 h-14 bg-[#6B3BA7]/5 rounded-2xl flex items-center justify-center text-[#6B3BA7] mb-8 group-hover:bg-[#6B3BA7] group-hover:text-white transition-all duration-500">
                <svg 
                  className="w-7 h-7" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2}
                >
                  {p.icon}
                </svg>
              </div>

              {/* Title - Arial Black */}
              <h4 className={`font-black text-xl text-slate-900 mb-4 uppercase tracking-normal leading-snug group-hover:text-[#6B3BA7] transition-colors ${arialStack}`}>
                {p.title}
              </h4>

              {/* Description - Arial Bold, No Italic */}
              <p className={`text-slate-500 text-sm leading-relaxed font-bold ${arialStack}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;