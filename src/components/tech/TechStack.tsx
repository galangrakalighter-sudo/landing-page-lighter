import React from 'react';
import { ChevronRight } from 'lucide-react';

const TechStackSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const tech = [
    { cat: 'Frontend', items: ['React', 'TypeScript'] },
    { cat: 'Backend', items: ['Node.js', 'Express'] },
    { cat: 'Database', items: ['PostgreSQL', 'MySQL'] },
    { cat: 'Cloud & Ops', items: ['Vercel', 'Docker'] }
  ];

  return (
    <section id="tech-stack" className={`py-24 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            {/* Badge - Arial Black */}
            <h2 className={`font-black text-[#DAA059] tracking-[0.3em] uppercase text-xs mb-4 ${arialStack}`}>
              Credibility Builder
            </h2>
            {/* Title - Arial Black */}
            <h3 className={`font-black text-4xl md:text-5xl text-slate-900 uppercase tracking-normal ${arialStack}`}>
              Enterprise <span className="text-[#DAA059]">Tech Stack</span>
            </h3>
          </div>
          {/* Paragraf - Arial Bold */}
          <p className={`text-slate-500 font-bold max-w-md lg:text-right leading-relaxed ${arialStack}`}>
            Kami menggunakan teknologi modern standar industri untuk menjamin keamanan & skalabilitas infrastruktur digital Anda
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.map((group, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[32px] border border-slate-100 bg-[#FEFFFF] hover:border-[#DAA059]/30 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Title - Arial Black */}
              <h5 className={`font-black text-slate-900 mb-8 uppercase tracking-widest text-xs flex items-center gap-2 ${arialStack}`}>
                <span className="w-2 h-2 bg-[#DAA059] rounded-full shadow-[0_0_8px_#DAA059]" /> 
                {group.cat}
              </h5>

              {/* Items List - Arial Black */}
              <div className="space-y-5">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between group/item cursor-default"
                  >
                    <span className={`font-black text-lg text-slate-600 group-hover/item:text-[#DAA059] transition-colors uppercase tracking-normal ${arialStack}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;