import React from 'react';
import { Compass, Palette, Megaphone, Zap } from "lucide-react";
import { 
  Unlink, 
  Swords, 
  Target, 
  EyeOff 
} from 'lucide-react';

interface Problem {
  title: string;
  desc: string;
  features: string[];
  icon: React.ReactNode;
}

const ProblemSection = () => {
  const problems: Problem[] = [
    { 
      title: "Brand Strategy", 
      desc: "Fondasi bagaimana brand Anda diposisikan dan dipahami oleh market",
      features: ["Positioning", "Target Market", "Value Proposition"],
      icon: <Compass className="w-7 h-7 text-red-600" /> 
    },
    { 
      title: "Brand Visual", 
      desc: "Representasi visual yang memperkuat persepsi dan identitas brand.",
      features: ["Logo Design", "Color Palette", "Design System"],
      icon: <Palette className="w-7 h-7 text-red-600" /> 
    },
    { 
      title: "Brand Awareness", 
      desc: "Strategi untuk mengenalkan brand Anda secara luas dan konsisten.",
      features: ["Social Media Content", "Digital Ads", "Brand Exposure"],
      icon: <Megaphone className="w-7 h-7 text-red-600" /> 
    },
    { 
      title: "Brand Conversion", 
      desc: "Mengubah brand yang dikenal menjadi brand yang menghasilkan penjualan.",
      features: ["Sales Funnel", "Irresistible Offer", "Conversion Strategy"],
      icon: <Zap className="w-7 h-7 text-red-600" /> 
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
            <div key={i} className="group relative p-10 bg-neutral-900/40 border border-white/5 rounded-[40px] transition-all duration-500 hover:border-red-600/30 hover:bg-neutral-900/60 overflow-hidden hover:-translate-y-2 flex flex-col">
              
              {/* Efek Glow di Pojok Kanan Atas */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full group-hover:bg-red-600/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Container Icon */}
                <div className="w-16 h-16 bg-red-600/10 text-red-600 rounded-[20px] flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-red-600/20">
                  {p.icon}
                </div>
                
                {/* Card Title - Arial Black */}
                <h4 className="text-2xl text-white mb-4 uppercase font-black tracking-normal group-hover:text-red-600 transition-colors leading-tight font-['Arial','Helvetica',sans-serif]">
                  {p.title}
                </h4>
                
                {/* Deskripsi Utama */}
                <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors text-sm font-bold tracking-normal font-['Arial','Helvetica',sans-serif] mb-8">
                  {p.desc}
                </p>

                {/* --- BAGIAN LIST FEATURES (ISI) --- */}
                <div className="mt-auto border-t border-white/5 pt-6 group-hover:border-red-600/20 transition-colors">
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-50 group-hover:opacity-100 transition-opacity font-['Arial','Helvetica',sans-serif]">
                    Mencakup:
                  </p>
                  <ul className="space-y-3">
                    {p.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-neutral-400 group-hover:text-neutral-200 transition-colors text-[11px] font-bold uppercase tracking-wider font-['Arial','Helvetica',sans-serif]">
                        {/* Bullet point dengan glow merah kecil */}
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 shadow-[0_0_8px_rgba(220,38,38,0.5)] group-hover:scale-125 transition-transform" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;