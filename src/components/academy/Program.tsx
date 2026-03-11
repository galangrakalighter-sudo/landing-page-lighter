const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${light ? 'text-white/60' : 'text-[#010050]'} font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3`}>
      <span className={`w-8 h-[2px] ${light ? 'bg-white/30' : 'bg-[#010050]/30'}`}></span>
      {subtitle}
    </h2>
    <h3 className={`text-3xl md:text-5xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight uppercase`}>
      {title}
    </h3>
  </div>
);

const ProgramSection = () => {
  const programs = [
    { category: "Digital Marketing", items: ["Performance Marketing", "Social Media Strategy", "Analytics"] },
    { category: "Technology", items: ["Web Development", "UI/UX Design", "Software Engineering"] },
    { category: "Creative & Multimedia", items: ["Video Production", "Design Thinking", "Motion Graphic"] },
    { category: "Entrepreneurship", items: ["Business Model", "Branding Strategy", "Digital Business Growth"] }
  ];

  return (
    <section className="py-24 bg-[#010050]">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader subtitle="Education Programs" title="Kategori Program Spesialis." light={true} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex flex-col h-full transition-all duration-500 hover:bg-white/10 group shadow-2xl">
              <h4 className="text-2xl font-black text-blue-200 mb-8 border-b border-white/10 pb-6 uppercase italic tracking-tighter leading-none group-hover:text-white">
                {p.category}
              </h4>
              <ul className="space-y-5 flex-grow">
                {p.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/80 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
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

export default ProgramSection