import React from 'react';

interface ServiceItem {
  title: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    title: "Performance Ads",
    items: ["Meta Ads Architecture", "Google Search & Display", "TikTok Growth Ads"]
  },
  {
    title: "Social Growth",
    items: ["Revenue-First Content", "Creative Production", "Community Capitalization"]
  },
  {
    title: "SEO Authority",
    items: ["Intent-Based Keywords", "On-Page Mastery", "Technical SEO Scaling"]
  },
  {
    title: "Conversion (CRO)",
    items: ["Landing Page Science", "Funnel Architecture", "A/B Testing Protocol"]
  }
];

const ServicesScopeSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#010033] border-y border-white/5 ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          {/* Subtitle - Arial Black */}
          <h2 className={`text-[#F96300] font-black tracking-[0.3em] uppercase text-xs mb-4 leading-none ${arialStack}`}>
            Full Spectrum
          </h2>
          {/* Main Title - Arial Black, Tracking Normal */}
          <h3 className={`text-4xl md:text-8xl font-black text-white uppercase tracking-normal leading-none ${arialStack}`}>
            Cakupan Layanan
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-[#020066] p-10 rounded-[40px] border border-white/5 transition-all duration-500 hover:border-[#F96300]/40 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-white/5 group-hover:bg-[#F96300] transition-colors"></div>
              
              {/* Card Title - Arial Black */}
              <h4 className={`text-2xl font-black text-white mb-10 uppercase tracking-normal leading-tight group-hover:text-[#F96300] transition-colors ${arialStack}`}>
                {s.title}
              </h4>

              <ul className="space-y-6">
                {s.items.map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-4 text-white/40 font-black uppercase text-[10px] tracking-[0.15em] group-hover:text-white/80 transition-colors ${arialStack}`}>
                    <span className="w-1.5 h-1.5 bg-[#F96300] rounded-full flex-shrink-0 animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScopeSection;