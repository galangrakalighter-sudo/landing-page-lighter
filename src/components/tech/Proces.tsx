import React from 'react';

const ProcessSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  
  const steps = [
    "Discovery", "Planning", "UI/UX Design", "Architecture", 
    "Development", "Testing & QA", "Deployment"
  ];

  return (
    <section id="process" className={`py-32 bg-[#0F172A] text-white relative overflow-hidden ${arialStack}`}>
      {/* Background Decorative Element */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#DAA059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-24">
          {/* Badge - Arial Black */}
          <h2 className={`font-black text-[#DAA059] tracking-[0.3em] uppercase text-xs mb-4 ${arialStack}`}>
            Development Lifecycle
          </h2>
          {/* Main Title - Arial Black */}
          <h3 className={`font-black text-4xl md:text-5xl uppercase tracking-normal ${arialStack}`}>
            Professional <span className="text-[#DAA059]">Engineering</span> Framework
          </h3>
          <div className="w-20 h-1.5 bg-[#DAA059] mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Number Box - Arial Black */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#DAA059] group-hover:border-[#DAA059] group-hover:shadow-[0_20px_40px_-10px_rgba(218,160,89,0.4)] transition-all duration-500 group-hover:-translate-y-3">
                  <span className={`font-black text-2xl text-white/20 group-hover:text-white transition-colors ${arialStack}`}>
                    0{i + 1}
                  </span>
                </div>

                {/* Step Label - Arial Black */}
                <h4 className={`font-black text-sm lg:text-base text-white mb-2 uppercase tracking-widest group-hover:text-[#DAA059] transition-colors leading-tight ${arialStack}`}>
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;