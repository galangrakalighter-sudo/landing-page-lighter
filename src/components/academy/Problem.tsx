import React from 'react';
import { 
  Unplug, 
  MapPinOff, 
  FlaskConicalOff, 
  UserMinus, 
  Briefcase
} from 'lucide-react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {/* Subtitle - Arial Black */}
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#010050]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    {/* Title - Arial Black */}
    <h3 className={`${arialStack} ${light ? 'text-white' : 'text-slate-900'} text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.0] uppercase`}>
      {title}
    </h3>
  </div>
);

const EducationProblemSection = () => {
  const problems = [
    { 
      title: "Skill Mismatch", 
      desc: "Skill yang diajarkan di lembaga pendidikan umum seringkali tidak relevan dengan kebutuhan industri saat ini",
      icon: <Unplug className="w-7 h-7" />
    },
    { 
      title: "Tanpa Roadmap", 
      desc: "Belajar secara otodidak tanpa arah yang jelas membuat proses pengembangan karir menjadi sangat lambat",
      icon: <MapPinOff className="w-7 h-7" />
    },
    { 
      title: "Minim Praktik", 
      desc: "Terlalu banyak teori tanpa implementasi pada proyek nyata (Real client project) yang bisa dipamerkan",
      icon: <FlaskConicalOff className="w-7 h-7" />
    },
    { 
      title: "Kurang Mentoring", 
      desc: "Tidak adanya bimbingan dari mentor profesional yang telah berpengalaman di industri kreatif dan teknologi",
      icon: <UserMinus className="w-7 h-7" />
    },
    { 
      title: "Portofolio Lemah", 
      desc: "Lulus tanpa memiliki bukti karya yang representatif untuk melamar di perusahaan top-tier",
      icon: <Briefcase className="w-7 h-7" />
    }
  ];

  return (
    <section className={`py-24 bg-[#F7FDFF] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="The Skill Gap" title="Tantangan Karir di Era Digital." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="group p-8 bg-white border border-[#010050]/10 rounded-[32px] shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(1,0,80,0.08)] flex flex-col items-start text-left">
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#010050]/5 rounded-2xl flex items-center justify-center text-[#010050] mb-8 group-hover:bg-[#010050] group-hover:text-white transition-all duration-300">
                {p.icon}
              </div>

              {/* Problem Title - Arial Black */}
              <h4 className={`${arialStack} text-xl text-[#010050] mb-4 uppercase font-black tracking-tighter leading-none group-hover:text-blue-600 transition-colors`}>
                {p.title}
              </h4>

              {/* Description - Arial Black (Sm) */}
              <p className={`${arialStack} text-slate-500 text-xs font-black uppercase leading-relaxed opacity-80 mb-6`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationProblemSection;