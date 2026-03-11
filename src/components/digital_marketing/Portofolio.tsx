import React from 'react';

const PortfolioSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="results" className={`py-24 bg-[#020066] border-y border-white/5 relative ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          {/* Subtitle - Arial Black */}
          <h2 className={`text-[#F96300] font-black tracking-[0.3em] uppercase text-xs mb-6 leading-none ${arialStack}`}>
            Success Archetypes
          </h2>
          {/* Main Title - Arial Black, Normal Tracking */}
          <h3 className={`text-4xl md:text-7xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
            PROJECT TERPILIH
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative bg-[#010033] rounded-[50px] overflow-hidden aspect-[4/5] border border-white/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              {/* Image Placeholder Context */}
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-40">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F96300] via-[#020066]/60 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-0 left-0 p-12 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                {/* Case Study Label - Arial Black */}
                <p className={`text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4 group-hover:text-white/70 transition-colors ${arialStack}`}>
                  Scaling Case Study 0{i}
                </p>

                {/* Project Title - Arial Black */}
                <h4 className={`text-4xl font-black text-white uppercase tracking-normal mb-4 leading-none ${arialStack}`}>
                  OPTIMIZED <br /> GROWTH
                </h4>

                {/* ROI Stat - Arial Black, No Italic */}
                <p className={`text-white font-black text-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200 uppercase tracking-normal ${arialStack}`}>
                  ROI 4.5x
                </p>

                {/* CTA Button - Arial Black */}
                <button className={`text-[#020066] bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all delay-300 hover:bg-[#020066] hover:text-white border border-white leading-none ${arialStack}`}>
                  Review Data
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;