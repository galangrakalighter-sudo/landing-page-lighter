import React from 'react';

interface PortfolioItem {
  title: string;
  metric: string;
  category: string;
  image: string;
}

const portfolios: PortfolioItem[] = [
  { 
    title: "Aetheria Night", 
    metric: "1.500+ Attendees", 
    category: "Corporate Gala", 
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Neon Pulse", 
    metric: "High Engagement", 
    category: "Brand Launch", 
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Royal Bloom", 
    metric: "Premium Experience", 
    category: "Private Wedding", 
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" 
  }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Subtitle - Arial Black, No Italic */}
      <h2 className={`font-black ${light ? 'text-[#FCFFFF]/60' : 'text-[#6B3BA7]'} tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 ${arialStack}`}>
        {centered ? null : <span className={`w-12 h-[3px] ${light ? 'bg-[#FCFFFF]/30' : 'bg-[#6B3BA7]'}`}></span>}
        {subtitle}
      </h2>
      {/* Title - Arial Black, No Italic */}
      <h3 className={`font-black text-4xl md:text-6xl ${light ? 'text-[#FCFFFF]' : 'text-slate-900'} tracking-normal uppercase leading-[0.95] ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const PortfolioSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section id="portfolio" className={`py-32 bg-[#6B3BA7] border-y border-white/10 relative overflow-hidden ${arialStack}`}>
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader subtitle="Proven Impact" title="The Moments We Created." centered={true} light={true} />
        
        <div className="grid lg:grid-cols-3 gap-12">
          {portfolios.map((p, i) => (
            <div key={i} className="group relative bg-white rounded-[60px] shadow-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <div className="h-80 bg-slate-200 overflow-hidden relative">
                 <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                 {/* Badge Category */}
                 <div className="absolute top-6 right-6 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className={`text-white text-[9px] font-black uppercase tracking-widest ${arialStack}`}>{p.category}</span>
                 </div>
              </div>
              
              <div className="p-12">
                {/* Portfolio Title - Arial Black */}
                <h4 className={`font-black text-3xl text-slate-900 mb-8 uppercase tracking-normal leading-none group-hover:text-[#6B3BA7] transition-colors ${arialStack}`}>
                  {p.title}
                </h4>
                
                <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                  <div className="flex flex-col w-full">
                    {/* Label - Arial Black */}
                    <span className={`font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-3 ${arialStack}`}>Key Outcome</span>
                    {/* Metric - Arial Black, Solid Ungu */}
                    <span className={`font-black text-[#6B3BA7] text-2xl uppercase tracking-tighter decoration-4 group-hover:text-[#6B3BA7] transition-all ${arialStack}`}>
                      {p.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Flash */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#6B3BA7]/[0.03] rounded-tl-[100px] -mr-12 -mb-12 group-hover:bg-[#6B3BA7]/10 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;