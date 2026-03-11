import React from 'react';
import { 
  Unlink, 
  Swords, 
  Target, 
  EyeOff 
} from 'lucide-react';

interface Problem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ProblemSection = () => {
  const problems: Problem[] = [
    { 
      title: "Inkonsistensi Brand", 
      desc: "Komunikasi visual yang berubah-ubah merusak persepsi profesionalitas di mata audiens premium",
      icon: <Unlink className="w-7 h-7" />
    },
    { 
      title: "Kalah Bersaing", 
      desc: "Produk hebat Anda akan tenggelam jika brand Anda tidak memiliki daya tarik visual yang dominan",
      icon: <Swords className="w-7 h-7" />
    },
    { 
      title: "Tanpa Positioning", 
      desc: "Ketidakjelasan pesan membuat audiens kesulitan membedakan Anda dengan opsi yang lebih murah",
      icon: <Target className="w-7 h-7" />
    },
    { 
      title: "Visual Amatir", 
      desc: "Desain yang tidak terkurasi menurunkan nilai jual dan kepercayaan terhadap kualitas produk Anda",
      icon: <EyeOff className="w-7 h-7" />
    },
  ];

  return (
    <section className="py-32 bg-neutral-950 font-['Arial','Helvetica',sans-serif]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            {/* Tagline - Arial */}
            <h2 className="text-red-600 font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4 font-['Arial','Helvetica',sans-serif]">
              <span className="w-12 h-px bg-red-600"></span> 
              The Challenge
            </h2>
            {/* Main Title - Arial (Tracking Normal) */}
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-normal leading-[1.1] font-['Arial','Helvetica',sans-serif]">
              MENGAPA BRAND <br /> 
              <span className="text-neutral-500 font-['Arial','Helvetica',sans-serif]">ANDA STAGNAN?</span>
            </h3>
          </div>
          {/* Side Text - Arial */}
          <p className="text-neutral-400 text-lg md:text-xl max-w-sm font-bold leading-relaxed border-l-4 border-red-600 pl-6 tracking-normal font-['Arial','Helvetica',sans-serif]">
            Produk hebat saja tidak cukup untuk memenangkan pasar yang jenuh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="group relative p-10 bg-neutral-900/40 border border-white/5 rounded-[40px] transition-all duration-500 hover:border-red-600/30 hover:bg-neutral-900/60 overflow-hidden hover:-translate-y-2">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full group-hover:bg-red-600/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-600/10 text-red-600 rounded-[20px] flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-red-600/20">
                  {p.icon}
                </div>
                
                {/* Card Title - Arial */}
                <h4 className="text-2xl text-white mb-4 uppercase font-black tracking-normal group-hover:text-red-600 transition-colors leading-tight font-['Arial','Helvetica',sans-serif]">
                  {p.title}
                </h4>
                
                {/* Card Desc - Arial */}
                <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors text-sm font-bold tracking-normal font-['Arial','Helvetica',sans-serif]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;