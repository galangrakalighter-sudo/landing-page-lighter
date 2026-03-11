const ArchitectureSection = () => {
  const layers = [
    { label: "User Layer", detail: "Multi-channel access" },
    { label: "Application Layer", detail: "Business logic engine" },
    { label: "API Layer", detail: "Seamless communication" },
    { label: "Database", detail: "Structured data integrity" },
    { label: "Cloud Infrastructure", detail: "Global scaling capacity" }
  ];
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Scalable & Modular Ecosystem</h2>
        <p className="opacity-60 mb-20 max-w-xl mx-auto">Setiap lapisan arsitektur kami dibangun untuk dapat dipertukarkan dan diskalakan secara independen.</p>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
           {/* Visual connection line */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D49045]/40 to-transparent -translate-y-1/2 z-0" />
           
           {layers.map((layer, i) => (
             <div key={i} className="relative z-10 group cursor-default">
               <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D49045] mb-4 group-hover:bg-[#D49045] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(212,144,69,0.1)] group-hover:shadow-[0_0_30px_rgba(212,144,69,0.4)]">
                  <span className="font-bold text-xl">{i + 1}</span>
               </div>
               <div className="font-bold text-sm uppercase tracking-widest text-[#D49045]">{layer.label}</div>
               <div className="text-[10px] opacity-40 uppercase mt-1">{layer.detail}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default ArchitectureSection;