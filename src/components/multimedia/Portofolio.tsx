import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

interface PortfolioItem {
  title: string;
  metric: string;
  category: string;
  image: string;
}

const portfolios: PortfolioItem[] = [
  { title: "The Urban Pulse", metric: "200K+ Views", category: "Commercial", image: "https://images.unsplash.com/photo-1492691523567-61723c275df1?auto=format&fit=crop&q=80&w=800" },
  { title: "CorpCore Identity", metric: "High Engagement", category: "Company Profile", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
  { title: "Visionary Brand", metric: "Strong Presence", category: "Social Campaign", image: "https://images.unsplash.com/photo-1542744095-2ad4870b62ef?auto=format&fit=crop&q=80&w=800" }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FF6600]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`${arialStack} text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);

const PortfolioSection = () => (
  <section className={`py-32 bg-[#FFF8E7] border-y border-white/10 ${arialStack}`}>
    <div className="container mx-auto max-w-7xl px-6">
      {/* light={false} karena background adalah cream terang */}
      <SectionHeader subtitle="Impact" title="Momen yang Kami Ciptakan" light={false} />
      
      <div className="grid lg:grid-cols-3 gap-12">
        {portfolios.map((p, i) => (
          <div key={i} className="group bg-white rounded-[50px] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-4">
            <div className="h-80 bg-slate-200 overflow-hidden relative">
               <img 
                 src={p.image} 
                 alt={p.title} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
               />
               <div className={`${arialStack} absolute top-8 left-8 px-4 py-2 bg-[#FF6600] text-white font-black text-[9px] uppercase tracking-[0.3em] rounded-full shadow-lg`}>
                 {p.category}
               </div>
            </div>
            
            <div className="p-12">
              <h4 className={`${arialStack} text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none group-hover:text-[#FF6600] transition-colors`}>
                {p.title}
              </h4>
              
              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <span className={`${arialStack} text-[10px] font-black uppercase tracking-[0.5em] text-slate-400`}>
                  Key Outcome
                </span>
                <span className={`${arialStack} text-[#FF6600] font-black text-xl uppercase tracking-tighter underline underline-offset-8 decoration-slate-200`}>
                  {p.metric}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;