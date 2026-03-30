import React from 'react';
import { Compass, Zap, Layers } from 'lucide-react';

interface Pillar {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const SolutionSection = () => {
  const pillars: Pillar[] = [
    {
      title: "Brand Strategy",
      desc: "Menemukan 'Who, Why, and How' dari brand Anda untuk dominasi pasar absolut",
      icon: <Compass className="w-10 h-10" />
    },
    {
      title: "Visual Identity System",
      desc: "Menciptakan bahasa visual unik yang konsisten di setiap dimensi fisik dan digital",
      icon: <Layers className="w-10 h-10" />
    },
    {
      title: "Brand Implementation",
      desc: "Memastikan brand hidup di setiap titik sentuh pelanggan dengan standar eksekusi tertinggi",
      icon: <Zap className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-32 bg-neutral-950 font-['Arial','Helvetica',sans-serif]">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        {/* Subtitle - Arial Stack */}
        <h2 className="text-red-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 font-['Arial','Helvetica',sans-serif]">
          The Architecture
        </h2>
        
        {/* Title - Arial Stack (Tracking Normal & Font Black) */}
        <h3 className="text-5xl md:text-7xl font-black text-white uppercase mb-24 tracking-normal leading-tight font-['Arial','Helvetica',sans-serif]">
          TIGA PILAR RADDINE
        </h3>

        <div className="grid lg:grid-cols-3 gap-16">
          {pillars.map((p, i) => (
            <div key={i} className="group flex flex-col items-center">
              {/* Icon Box */}
              <div className="w-24 h-24 bg-neutral-900 border border-red-600/20 rounded-[32px] flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-red-600 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] group-hover:scale-110 group-hover:-rotate-3">
                <div className="text-red-600 group-hover:text-white transition-colors duration-500">
                  {p.icon}
                </div>
              </div>

              {/* Card Title - Arial Stack */}
              <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-normal group-hover:text-red-600 transition-colors leading-none font-['Arial','Helvetica',sans-serif]">
                {p.title}
              </h4>

              {/* Card Desc - Arial Stack */}
              <p className="text-neutral-500 leading-relaxed text-lg font-bold tracking-normal group-hover:text-neutral-300 transition-colors max-w-sm font-['Arial','Helvetica',sans-serif]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;