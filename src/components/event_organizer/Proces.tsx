import React from 'react';
import { 
  Search, 
  Map, 
  PenTool, 
  Cpu, 
  Hammer, 
  CheckCircle2 
} from 'lucide-react';

interface Step {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { 
    title: "Brief & Discovery", 
    desc: "Audit mendalam terhadap visi dan tujuan acara untuk menentukan pondasi narasi yang tepat",
    icon: <Search className="w-10 h-10" />
  },
  { 
    title: "Creative Mapping", 
    desc: "Penyusunan peta jalan kreatif, moodboard, dan penentuan atmosfer emosional audiens",
    icon: <Map className="w-10 h-10" />
  },
  { 
    title: "Technical Design", 
    desc: "Visualisasi 3D panggung, multimedia flow, dan arsitektur pencahayaan secara presisi",
    icon: <PenTool className="w-10 h-10" />
  },
  { 
    title: "System Integration", 
    desc: "Sinkronisasi seluruh aset multimedia dan infrastruktur teknis ke dalam satu kendali produksi",
    icon: <Cpu className="w-10 h-10" />
  },
  { 
    title: "Bespoke Production", 
    desc: "Pembangunan aset fisik kustom dan persiapan teknis di lokasi dengan standar kualitas tinggi",
    icon: <Hammer className="w-10 h-10" />
  },
  { 
    title: "Perfect Execution", 
    desc: "Orkestrasi momen puncak secara real-time untuk memastikan pengalaman nol kesalahan",
    icon: <CheckCircle2 className="w-10 h-10" />
  },
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-black ${light ? 'text-[#FCFFFF]/60' : 'text-[#6B3BA7]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 ${arialStack}`}>
        {centered ? null : <span className={`w-12 h-[3px] ${light ? 'bg-[#FCFFFF]/30' : 'bg-[#6B3BA7]'}`}></span>}
        {subtitle}
      </h2>
      <h3 className={`font-black text-4xl md:text-6xl ${light ? 'text-[#FCFFFF]' : 'text-slate-900'} tracking-normal uppercase leading-[0.95] ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const ProcessSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="framework" className={`py-32 bg-[#FCFFFF] relative overflow-hidden border-y border-slate-100 ${arialStack}`}>
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6B3BA7]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <SectionHeader subtitle="Lumina Framework" title="Langkah Menuju Kesempurnaan" centered={false} />
          </div>
          <p className={`text-slate-400 text-lg md:text-xl max-w-sm lg:text-right mx-auto lg:mx-0 font-black uppercase leading-tight border-r-8 border-[#6B3BA7] pr-6 hidden md:block ${arialStack}`}>
            Sistem operasional standar yang menjamin kualitas pengalaman tanpa komprom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="group relative p-12 bg-white border border-slate-100 hover:border-[#6B3BA7]/30 rounded-[60px] transition-all duration-700 overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(107,59,167,0.12)] hover:-translate-y-3">
              
              {/* Sequence Number & Icon */}
              <div className="mb-12 flex items-end justify-between">
                <span className={`font-black text-6xl md:text-8xl text-[#6B3BA7] opacity-10 group-hover:opacity-100 transition-all duration-700 select-none tracking-tighter ${arialStack}`}>
                  0{i + 1}
                </span>
                <div className="w-20 h-20 rounded-[28px] bg-[#6B3BA7]/5 flex items-center justify-center text-[#6B3BA7] group-hover:bg-[#6B3BA7] group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-[#6B3BA7]/40">
                  {s.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h4 className={`font-black text-3xl text-slate-900 uppercase tracking-normal mb-6 group-hover:text-[#6B3BA7] transition-colors duration-300 leading-none ${arialStack}`}>
                  {s.title}
                </h4>
                <p className={`text-slate-500 text-base font-bold leading-relaxed pr-4 ${arialStack}`}>
                  {s.desc}
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-[#6B3BA7] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;