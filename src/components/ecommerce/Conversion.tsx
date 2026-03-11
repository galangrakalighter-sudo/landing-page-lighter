import React from 'react';

const ConversionSystemSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const steps = [
    { 
      label: "Traffic", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ) 
    },
    { 
      label: "Product Page", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ) 
    },
    { 
      label: "Add to Cart", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ) 
    },
    { 
      label: "Checkout", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ) 
    },
    { 
      label: "Repeat Buyer", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ) 
    }
  ];

  return (
    <section className={`py-24 bg-slate-900 text-white overflow-hidden relative ${arialStack}`}>
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B288]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Headline - Arial Black */}
          <h2 className={`font-black text-4xl md:text-5xl uppercase tracking-normal mb-4 ${arialStack}`}>
            The Conversion <span className="text-[#00B288]">Funnel Blueprint</span>
          </h2>
          {/* Subtitle - Arial Bold */}
          <p className={`text-slate-400 max-w-xl mx-auto font-bold ${arialStack}`}>
            Sistematisasi perjalanan user dari pengunjung menjadi pelanggan setia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-[#00B288] mb-6 border border-white/10 group-hover:bg-[#00B288] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {step.icon}
                </div>
                {/* Step Label - Arial Black */}
                <span className={`font-black text-xs tracking-[0.2em] uppercase text-slate-300 group-hover:text-[#00B288] transition-colors ${arialStack}`}>
                  {step.label}
                </span>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block">
                  <svg className="w-8 h-8 text-[#00B288] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Stats Card */}
        <div className="mt-24 p-1 rounded-[2rem] bg-gradient-to-b from-[#00B288]/50 to-transparent max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-[1.9rem] p-12 text-center border border-white/5">
            {/* Massive Stat - Arial Black */}
            <div className={`font-black text-7xl md:text-8xl text-[#00B288] mb-4 tracking-normal ${arialStack}`}>
              +85%
            </div>
            {/* Stat Label - Arial Black */}
            <p className={`font-black text-xl md:text-2xl opacity-90 uppercase tracking-[0.3em] ${arialStack}`}>
              Average Conversion Uplift
            </p>
            <div className="mt-6 h-1 w-24 bg-[#00B288] mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSystemSection;