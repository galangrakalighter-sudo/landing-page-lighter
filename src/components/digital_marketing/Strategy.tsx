const StrategySection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="strategy" className={`py-32 bg-[#020066] relative overflow-hidden ${arialStack}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[#F96300]/[0.01] pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            {/* Subtitle - Arial Black Wide Tracking */}
            <h2 className={`text-[#F96300] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center justify-center lg:justify-start gap-4 leading-none ${arialStack}`}>
              <span className="w-12 h-px bg-[#F96300]"></span> Growth Analytics
            </h2>
            {/* Main Title - Arial Black, Normal Tracking */}
            <h3 className={`text-5xl md:text-7xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
              STRATEGIC <br /> <span className="text-white/20">OUTPUT</span>
            </h3>
          </div>
          {/* Side Description - Arial Bold */}
          <p className={`text-white/60 text-lg md:text-xl max-w-sm font-black leading-relaxed border-r-4 border-[#F96300] pr-8 hidden lg:block text-right tracking-normal ${arialStack}`}>
            Bukti nyata dari keunggulan sistematis yang kami terapkan pada setiap campaign
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { label: "Average ROAS Lift", value: "+250%", sub: "Efficiency Gain" },
            { label: "Monthly Lead Growth", value: "+180%", sub: "Volume Expansion" },
            { label: "Traffic Authority", value: "+300%", sub: "Market Dominance" }
          ].map((stat, i) => (
            <div key={i} className="group relative p-10 bg-[#010033] border border-white/5 rounded-[40px] shadow-2xl transition-all duration-500 hover:border-[#F96300]/40 overflow-hidden text-center">
              <div className="relative z-10">
                {/* Stats Value - Arial Black Big */}
                <p className={`text-[#F96300] text-5xl md:text-6xl font-black tracking-normal mb-4 leading-none group-hover:scale-105 transition-transform duration-500 ${arialStack}`}>
                  {stat.value}
                </p>
                {/* Stats Label - Arial Black */}
                <p className={`text-white font-black uppercase text-sm tracking-[0.2em] mb-2 leading-none ${arialStack}`}>
                  {stat.label}
                </p>
                {/* Stats Sub-label - Arial Black Small */}
                <p className={`text-white/30 font-black uppercase text-[10px] tracking-[0.4em] leading-none ${arialStack}`}>
                  {stat.sub}
                </p>
              </div>
              {/* Architectural Accent Decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-[#F96300]/20 rounded-b-full"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F96300]/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;