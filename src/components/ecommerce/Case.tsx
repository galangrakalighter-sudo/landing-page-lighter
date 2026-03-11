import React from 'react';

const CaseStudySection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const cases = [
    {
      metric: "+35%",
      label: "Conversion Increase",
      industry: "Retail Fashion Brand",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      metric: "2.4x",
      label: "Revenue Growth",
      industry: "D2C Skincare Startup",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      metric: "50%",
      label: "Faster Checkout",
      industry: "Gadget Accessories Hub",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className={`py-24 bg-[#FEFFFF] relative overflow-hidden ${arialStack}`}>
      {/* Background Decorative - Lab Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00B288 1px, transparent 1px), linear-gradient(90deg, #00B288 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-block px-4 py-1 rounded-full bg-[#00B288]/10 text-[#00B288] text-xs font-black mb-4 tracking-[0.3em] uppercase ${arialStack}`}>
            Experiment Results
          </div>
          {/* Main Title - Arial Black */}
          <h2 className={`font-black text-5xl md:text-6xl text-slate-900 mb-6 uppercase tracking-normal ${arialStack}`}>
            Verified <span className="text-[#00B288]">Performance</span>
          </h2>
          {/* Subtitle - Arial Bold */}
          <p className={`text-slate-500 max-w-xl mx-auto text-lg font-bold ${arialStack}`}>
            Hasil nyata dari implementasi sistem revenue engineering di berbagai industri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,178,136,0.15)] transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B288]/5 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-[#00B288]/10 transition-colors" />

              {/* Icon Badge */}
              <div className="w-16 h-16 bg-white shadow-lg text-[#00B288] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#00B288] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Metric - Arial Black */}
              <div className="relative mb-2">
                <span className={`font-black text-7xl md:text-8xl text-slate-900 leading-none tracking-normal group-hover:text-[#00B288] transition-colors duration-500 ${arialStack}`}>
                  {item.metric}
                </span>
                {/* Visual line behind number */}
                <div className="absolute -bottom-2 left-0 w-12 h-2 bg-[#00B288] rounded-full opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-700" />
              </div>

              {/* Label & Industry */}
              <div className="mt-8">
                {/* Title - Arial Black */}
                <h4 className={`font-black text-xl text-slate-800 uppercase tracking-normal mb-2 ${arialStack}`}>
                  {item.label}
                </h4>
                {/* Industry - Arial Bold */}
                <p className={`text-slate-400 font-bold text-sm tracking-normal ${arialStack}`}>
                  // {item.industry}
                </p>
              </div>

              {/* Decorative Scan Line Animation Placeholder */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B288]/50 to-transparent -translate-y-10 group-hover:translate-y-[400px] transition-all duration-1000 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;