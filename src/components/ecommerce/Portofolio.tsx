interface PortfolioProps {
  name: string;
  metrics: { label: string; value: string }[];
}
const portfolio: PortfolioProps[] = [
  { name: "Brand Fashion X", metrics: [{ label: "Sales Growth", value: "+320%" }, { label: "Conversion Rate", value: "+210%" }] },
  { name: "Skincare Lab Y", metrics: [{ label: "Repeat Order", value: "+150%" }, { label: "Ad Spend ROI", value: "8.5x" }] },
  { name: "Tech Gadget Z", metrics: [{ label: "Organic Traffic", value: "+400%" }, { label: "Market Ranking", value: "Top 3" }] },
];
const PortfolioSection = () => (
  <section id="results" className="py-32 bg-white border-y border-slate-100 relative overflow-hidden">
    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-[#00B288] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center justify-center gap-4 italic text-center">
          <span className="w-12 h-px bg-[#00B288]"></span> Lab Case Studies
        </h2>
        <h3 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none italic text-center">
          RESULTS <br /> <span className="text-slate-200 not-italic uppercase">DELIVERED.</span>
        </h3>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {portfolio.map((p, i) => (
          <div key={i} className="p-12 bg-[#FEFFFF] border border-[#00B288]/20 rounded-[60px] shadow-xl relative overflow-hidden flex flex-col">
             {/* Case Study Technical Badge */}
             <div className="absolute top-4 right-6 text-[8px] font-black text-[#00B288]/40 uppercase tracking-[0.4em]">Report_Ref_{i + 104}</div>
             
             <div className="w-20 h-20 bg-[#00B288] rounded-[24px] flex items-center justify-center text-white mb-10 shadow-lg shadow-[#00B288]/20 mx-auto lg:mx-0">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
               </svg>
             </div>
             
             <h4 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter italic leading-none border-b border-slate-100 pb-8">
               {p.name}
             </h4>
             
             <div className="space-y-10">
                {p.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                      {m.label}
                    </span>
                    <span className="text-5xl font-black text-[#00B288] tracking-tighter italic leading-none">
                      {m.value}
                    </span>
                  </div>
                ))}
             </div>

             {/* Bottom accent */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00B288]/10"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;