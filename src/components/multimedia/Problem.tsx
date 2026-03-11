import React from 'react';
import { 
  CameraOff, 
  VideoOff, 
  Timer, 
  History, 
  UserX 
} from 'lucide-react';

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => {
  const arialBlack = "font-['Arial_Black',_Arial,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`${arialBlack} ${light ? 'text-white/60' : 'text-[#FF6600]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
        {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
        {subtitle}
      </h2>
      <h3 className={`${arialBlack} text-4xl md:text-6xl ${light ? 'text-white' : 'text-slate-900'} tracking-normal uppercase leading-[0.95]`}>
        {title}
      </h3>
    </div>
  );
};

const MediaProblemSection = () => {
  const arialBlack = "font-['Arial_Black',_Arial,_sans-serif]";
  
  const problems = [
    { 
      title: "Dokumentasi Buruk", 
      desc: "Event besar yang sudah direncanakan matang tidak terdokumentasi dengan baik secara profesional",
      icon: <CameraOff className="w-6 h-6" />
    },
    { 
      title: "Video Recap Standar", 
      desc: "Hasil video recap terlihat biasa saja dan tidak memiliki nyawa atau emosi yang kuat",
      icon: <VideoOff className="w-6 h-6" />
    },
    { 
      title: "Momen Terlewat", 
      desc: "Momen-momen krusial terlewat karena tim dokumentasi kurang responsif di lapangan saat acara",
      icon: <Timer className="w-6 h-6" />
    },
    { 
      title: "Nol Storytelling", 
      desc: "Visual yang dihasilkan tidak mampu menceritakan pengalaman event secara utuh dan menarik",
      icon: <History className="w-6 h-6" />
    },
    { 
      title: "Kurang Profesional", 
      desc: "Tim dokumentasi yang tidak disiplin dan mengganggu jalannya alur acara utama di lokasi",
      icon: <UserX className="w-6 h-6" />
    }
  ];

  return (
    <section className={`py-24 bg-[#FFF8E7] ${arialBlack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="The Challenge" title="Masalah Dokumentasi Event Anda" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="p-10 bg-white border border-[#FF6600]/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#FF660020] group">
              {/* Icon Container - Now using Lucide Icons adjusted to Orange */}
              <div className="w-12 h-12 bg-[#FF6600]/10 rounded-xl flex items-center justify-center mb-8 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                {p.icon}
              </div>

              {/* Card Title - Arial Black */}
              <h4 className={`${arialBlack} text-xl font-black text-slate-900 mb-4 uppercase leading-tight group-hover:text-[#FF6600] transition-colors`}>
                {p.title}
              </h4>

              {/* Card Description - Arial Black (Bold) */}
              <p className={`${arialBlack} text-slate-500 text-sm leading-relaxed font-black`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaProblemSection;