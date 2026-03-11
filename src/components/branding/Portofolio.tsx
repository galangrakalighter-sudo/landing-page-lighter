import React from 'react';

interface Portfolio {
  name: string;
  desc: string;
  category: string;
}

const PortfolioSection = () => {
  const projects: Portfolio[] = [
    { name: "Vanguard Fx", category: "Fintech Strategy", desc: "Reposisi identitas untuk fintech global guna menarik investor tier-1." },
    { name: "Crimson Roast", category: "F&B Identity", desc: "Sistem branding premium untuk luxury roastery berskala internasional." },
    { name: "Aura Lifestyle", category: "Systemic Brand", desc: "Implementasi brand holistik untuk wellness hub generasi masa depan." },
  ];

  const arialStack = "font-['Arial','Helvetica',sans-serif]";

  return (
    <section id="portfolio" className={`py-32 bg-neutral-900 border-y border-white/5 relative ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6 text-center">
        {/* Subtitle - Arial Stack */}
        <h2 className={`text-red-600 font-black tracking-[0.4em] uppercase text-xs mb-6 font-['Arial','Helvetica',sans-serif]`}>
          Showcase
        </h2>
        
        {/* Main Title - Arial Stack (Tracking Normal) */}
        <h3 className={`text-5xl md:text-7xl font-black text-white uppercase mb-24 tracking-normal leading-none font-['Arial','Helvetica',sans-serif]`}>
          KARYA TERPILIH
        </h3>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-[40px] overflow-hidden aspect-[4/5] bg-neutral-950 border border-white/5 transition-all duration-500 hover:-translate-y-4">
              {/* Image Placeholder Context */}
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-20">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-0 left-0 p-10 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 w-full">
                {/* Category Label - Arial Stack */}
                <span className={`text-[10px] font-black uppercase text-red-600 bg-black/80 border border-red-600/30 px-3 py-1 rounded-full mb-6 inline-block tracking-[0.2em] leading-none font-['Arial','Helvetica',sans-serif]`}>
                  {p.category}
                </span>

                {/* Project Name - Arial Stack */}
                <h4 className={`text-4xl font-black text-white uppercase tracking-normal mb-4 leading-none font-['Arial','Helvetica',sans-serif]`}>
                  {p.name}
                </h4>

                {/* Description - Arial Stack */}
                <p className={`text-neutral-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500 max-w-xs font-bold tracking-normal font-['Arial','Helvetica',sans-serif]`}>
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

export default PortfolioSection;