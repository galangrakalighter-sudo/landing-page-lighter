import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const LearningMethodSection = () => {
  const methods = [
    { title: "Online Live Class", desc: "Interaksi langsung dengan mentor via streaming" },
    { title: "Offline Intensive", desc: "Belajar tatap muka secara mendalam di kampus kami" },
    { title: "Hybrid Learning", desc: "Fleksibilitas gabungan antara online dan offline" },
    { title: "Practical Assignment", desc: "Tugas praktis berbasis studi kasus nyata" },
    { title: "Real Client Project", desc: "Mengerjakan proyek dari klien asli Lighter Media" }
  ];

  return (
    <section className={`py-24 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="The Framework" title="Metode Belajar Kami" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {methods.map((m, i) => (
            <div 
              key={i} 
              className="p-8 bg-[#F7FDFF] rounded-[32px] border border-[#010050]/5 text-center group transition-all duration-500 hover:bg-[#010050] hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between h-full"
            >
               <div>
                  {/* Title - Arial Black */}
                  <h4 className={`${arialStack} font-black text-[#010050] group-hover:text-white text-xl lg:text-2xl uppercase tracking-tighter mb-4 leading-[1.1] transition-colors duration-300`}>
                    {m.title}
                  </h4>
               </div>

               {/* Description - Arial Black, Uppercase, Small */}
               <p className={`${arialStack} text-slate-500 group-hover:text-white/70 text-[10px] font-black uppercase tracking-wider leading-relaxed transition-colors duration-300`}>
                 {m.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningMethodSection;