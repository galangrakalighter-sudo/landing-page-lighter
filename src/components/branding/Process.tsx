import React from 'react';
import { 
  Eye, 
  Search, 
  Map, 
  Lightbulb, 
  PenTool, 
  FileCheck 
} from 'lucide-react';

interface Step {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ProcessSection = () => {
  const steps: Step[] = [
    { 
      title: "Discovery", 
      desc: "Audit mendalam visi, nilai, dan tantangan brand Anda saat ini melalui sesi konsultasi strategis",
      icon: <Eye className="w-6 h-6" />
    },
    { 
      title: "Research", 
      desc: "Menganalisis kompetitor, tren industri, dan audit perilaku pasar untuk menemukan celah peluang",
      icon: <Search className="w-6 h-6" />
    },
    { 
      title: "Strategic Mapping", 
      desc: "Menentukan arah, pesan utama, dan posisi brand yang unik untuk menciptakan dominasi pasar",
      icon: <Map className="w-6 h-6" />
    },
    { 
      title: "Concept Development", 
      desc: "Eksplorasi visual kreatif yang berani, menerjemahkan strategi ke dalam sistem identitas yang tajam",
      icon: <Lightbulb className="w-6 h-6" />
    },
    { 
      title: "Execution", 
      desc: "Pembangunan seluruh aset visual mulai dari logo, tipografi, hingga elemen grafis pendukung secara utuh",
      icon: <PenTool className="w-6 h-6" />
    },
    { 
      title: "Finalization", 
      desc: "Penyerahan Brand Book komprehensif sebagai panduan implementasi brand Anda secara konsisten",
      icon: <FileCheck className="w-6 h-6" />
    },
  ];

  const arialStack = "font-['Arial','Helvetica',sans-serif]";

  return (
    <section id="framework" className={`py-32 bg-neutral-950 relative ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className={`text-red-600 font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center justify-center lg:justify-start gap-4 leading-none ${arialStack}`}>
              <span className="w-12 h-px bg-red-600"></span> 
              Methodology
            </h2>
            <h3 className={`text-5xl md:text-7xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
              RADDINE <br /> <span className={`text-neutral-500 ${arialStack}`}>FRAMEWORK</span>
            </h3>
          </div>
          <p className={`text-neutral-400 text-lg md:text-xl max-w-sm lg:text-right mx-auto lg:mx-0 font-bold leading-relaxed border-r-4 border-red-600 pr-6 hidden md:block uppercase tracking-normal ${arialStack}`}>
            Proses sistematis yang menjamin lahirnya brand dengan otoritas tak tergoyahkan
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="group relative p-10 bg-neutral-900/50 border border-white/5 hover:border-red-600/30 rounded-[40px] transition-all duration-500 overflow-hidden hover:-translate-y-2">
              
              <div className="mb-8 flex items-end justify-between">
                {/* Sequence Number - Arial Black */}
                <span className={`text-5xl md:text-6xl font-black text-red-600 leading-none tracking-normal opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${arialStack}`}>
                  0{i + 1}
                </span>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-red-600/20">
                  {s.icon}
                </div>
              </div>

              <div className="relative z-10">
                {/* Step Title - Arial Black */}
                <h4 className={`text-2xl font-black text-white uppercase tracking-normal mb-4 group-hover:text-red-600 transition-colors leading-none ${arialStack}`}>
                  {s.title}
                </h4>
                {/* Step Description - Arial Bold */}
                <p className={`text-neutral-400 text-base leading-relaxed group-hover:text-neutral-200 transition-colors font-bold tracking-normal ${arialStack}`}>
                  {s.desc}
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/0 via-red-600/40 to-red-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;