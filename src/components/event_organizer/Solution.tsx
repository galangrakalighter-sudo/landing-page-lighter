import React from 'react';

interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const pillars: CardProps[] = [
  { 
    title: "Concept & Storytelling", 
    desc: "Membangun fondasi narasi emosional yang kuat untuk setiap perjalanan audiens",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  },
  { 
    title: "Immersive Production", 
    desc: "Rekayasa visual dan teknologi panggung yang membawa tamu ke dimensi baru",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-2.25 3m10.5-6l.75 3 2.25 3m-9-22.5L12 3l2.25-1.5M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  },
  { 
    title: "Experience Design", 
    desc: "Merancang interaksi sensorik yang mengubah tamu menjadi bagian integral dari brand",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Subtitle - Arial Black, No Italic */}
      <h2 className={`font-black ${light ? 'text-[#FCFFFF]/60' : 'text-[#6B3BA7]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 ${arialStack}`}>
        {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-[#FCFFFF]/30' : 'bg-[#6B3BA7]/30'}`}></span>}
        {subtitle}
      </h2>
      {/* Title - Arial Black, No Italic */}
      <h3 className={`font-black text-4xl md:text-6xl ${light ? 'text-[#FCFFFF]' : 'text-slate-900'} tracking-normal uppercase leading-[0.95] ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const SolutionSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-32 bg-[#6B3BA7]/5 border-y border-[#6B3BA7]/10 relative overflow-hidden ${arialStack}`}>
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6B3BA7]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader subtitle="Core Foundations" title="Pondasi Keunggulan Kami" centered={true} />
        
        <div className="grid lg:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="group relative p-12 bg-white border border-[#6B3BA7]/10 rounded-[40px] shadow-sm transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_40px_80px_-15px_rgba(107,59,167,0.15)]">
              
              {/* Animated Icon Box - Solid Ungu */}
              <div className="w-20 h-20 bg-[#6B3BA7] rounded-[24px] flex items-center justify-center text-white mb-10 shadow-lg shadow-[#6B3BA7]/30 transform transition-transform duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{p.icon}</svg>
              </div>

              <div className="relative z-10">
                {/* Title - Arial Black */}
                <h4 className={`font-black text-3xl text-slate-900 mb-6 uppercase tracking-normal leading-none group-hover:text-[#6B3BA7] transition-colors duration-300 ${arialStack}`}>
                  {p.title}
                </h4>
                {/* Description - Arial Bold */}
                <p className={`text-slate-500 text-lg leading-relaxed font-bold opacity-90 ${arialStack}`}>
                  {p.desc}
                </p>
              </div>

              {/* Decorative Number - Arial Black Background */}
              <div className={`absolute top-10 right-10 font-black text-6xl text-slate-900/[0.03] pointer-events-none group-hover:text-[#6B3BA7]/[0.05] transition-colors ${arialStack}`}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;