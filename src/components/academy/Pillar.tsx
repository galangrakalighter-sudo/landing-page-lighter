import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black (Responsive Size) */}
    <h3 className={`${arialStack} text-4xl md:text-5xl lg:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const LearningPillarsSection = () => {
  const pillars = [
    { 
      title: "Industry-Based Curriculum", 
      desc: "Kurikulum yang terus diperbarui sesuai dengan standar kebutuhan perusahaan teknologi dan kreatif saat ini",
      icon: <BookOpen className="w-10 h-10" />
    },
    { 
      title: "Project-Based Learning", 
      desc: "Siswa belajar melalui pengerjaan proyek nyata yang memberikan pengalaman kerja sesungguhnya",
      icon: <Briefcase className="w-10 h-10" />
    },
    { 
      title: "Mentorship & Evaluation", 
      desc: "Sistem evaluasi berkala oleh mentor profesional untuk memastikan setiap siswa mencapai target kompetensi",
      icon: <GraduationCap className="w-10 h-10" />
    }
  ];

  return (
    <section className={`py-24 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Our Foundation" title="Pilar Utama Pembelajaran" />
        
        <div className="grid lg:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="group p-10 bg-[#F7FDFF] rounded-[40px] border border-[#010050]/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(1,0,80,0.1)] hover:-translate-y-3 flex flex-col items-center text-center">
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-[#010050] text-white rounded-[28px] flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {p.icon}
              </div>

              {/* Title - Arial Black */}
              <h4 className={`${arialStack} text-xl lg:text-2xl text-[#010050] font-black mb-6 uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors`}>
                {p.title}
              </h4>

              {/* Description - Arial Black (Sm) */}
              <p className={`${arialStack} text-slate-500 text-xs font-black uppercase leading-relaxed opacity-80`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPillarsSection;