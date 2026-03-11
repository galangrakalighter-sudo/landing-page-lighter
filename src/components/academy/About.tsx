import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, light = false }: { subtitle: string; light?: boolean }) => (
  <div className="mb-8 text-center">
    {/* Subtitle - Arial Black (Small) */}
    <h2 className={`${arialStack} ${light ? 'text-blue-400' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[9px] md:text-[11px] mb-6 flex items-center justify-center gap-4`}>
      <span className="w-8 h-[1px] bg-blue-500/40"></span>
      {subtitle}
      <span className="w-8 h-[1px] bg-blue-500/40"></span>
    </h2>
    
    {/* Title - Diperkecil ukurannya & Leading dibuat rapat (0.9) */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[0.95] uppercase`}>
      INSTITUSI BERBASIS <br />
      PRAKTIK INDUSTRI
    </h3>
  </div>
);

const AboutAcademySection = () => (
  <section className={`py-24 bg-[#010050] relative overflow-hidden ${arialStack}`}>
    {/* Background Glow */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="container mx-auto max-w-5xl px-6 relative z-10">
      <div className="text-center">
        
        {/* Header Section */}
        <SectionHeader subtitle="About Lighter Academy" light={true} />
        
        {/* Main Content - Ukuran disesuaikan agar proporsional */}
        <div className="max-w-4xl mx-auto mt-12">
          <p className={`${arialStack} text-xl md:text-2xl text-white font-black leading-[1.2] mb-10 uppercase tracking-tighter`}>
            LIGHTER ACADEMY INDONESIA adalah pusat pengembangan skill digital profesional yang menggabungkan <span className="text-blue-500">standar akademik</span> dengan <span className="text-blue-500">realitas industri</span>
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="h-[3px] w-24 bg-blue-500"></div>
          </div>
          
          <p className={`${arialStack} text-blue-100/60 text-base md:text-lg leading-relaxed font-black mb-12 max-w-2xl mx-auto uppercase tracking-tight`}>
            Kami tidak memberikan janji tanpa bukti. Setiap program kami dirancang agar peserta dapat menguasai skill yang benar-benar dibutuhkan oleh dunia kerja modern, dengan sistem pembelajaran yang terukur dan terstruktur
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4">
             {['Structured', 'Measurable', 'Industry-Ready'].map(t => (
               <div key={t} className="group relative">
                 <span className={`${arialStack} relative font-black px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] md:text-xs uppercase text-white tracking-[0.2em] transition-all duration-300 hover:border-blue-500`}>
                   {t}
                 </span>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutAcademySection;