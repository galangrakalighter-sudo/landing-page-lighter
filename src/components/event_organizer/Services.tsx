import React from 'react';

interface ServiceCard {
  category: string;
  items: string[];
}

const services: ServiceCard[] = [
  {
    category: "Corporate Event",
    items: ["Product Launch", "Awarding Night", "Company Gathering"]
  },
  {
    category: "Brand Activation",
    items: ["Experiential Campaign", "Roadshow", "Exhibition Booth"]
  },
  {
    category: "Private Event",
    items: ["High-End Wedding", "Private Party", "Special Celebration"]
  },
  {
    category: "Creative Production",
    items: ["Stage Design", "Multimedia Show", "Talent Management"]
  }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Subtitle - Arial Black, No Italic */}
      <h2 className={`font-black ${light ? 'text-white/60' : 'text-[#6B3BA7]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 ${arialStack}`}>
        {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#6B3BA7]/30'}`}></span>}
        {subtitle}
      </h2>
      {/* Title - Arial Black, No Italic */}
      <h3 className={`font-black text-4xl md:text-6xl ${light ? 'text-white' : 'text-slate-900'} tracking-normal uppercase leading-[0.95] ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const ServicesScopeSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="services" className={`py-32 bg-[#6B3BA7] relative overflow-hidden border-y border-white/10 ${arialStack}`}>
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader subtitle="Full Spectrum" title="Cakupan Layanan Kami" centered={true} light={true} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] flex flex-col h-full transition-all duration-500 hover:bg-white/10 hover:border-white/30 group shadow-2xl hover:-translate-y-2"
            >
              {/* Category Title - Arial Black */}
              <h4 className={`font-black text-2xl text-purple-200 mb-8 border-b border-white/10 pb-6 uppercase leading-none tracking-normal group-hover:text-white transition-colors ${arialStack}`}>
                {s.category}
              </h4>

              {/* Service Items - Arial Bold, No Italic */}
              <ul className="space-y-6 flex-grow">
                {s.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={`flex items-start gap-4 text-white/70 font-black uppercase text-[10px] tracking-[0.15em] leading-relaxed group-hover:text-white/90 transition-colors ${arialStack}`}
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_#A855F7]"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner Element */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-8 h-[2px] bg-white/40"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScopeSection;