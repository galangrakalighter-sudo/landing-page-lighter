interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const pillars: CardProps[] = [
  { 
    title: "Story-Driven Content", 
    desc: "Setiap frame dirancang untuk menyampaikan pesan yang kuat dan bermakna bagi audiens.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  },
  { 
    title: "Cinematic Quality", 
    desc: "Standar produksi film kelas atas dengan rekayasa visual dan pencahayaan yang artistik.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  },
  { 
    title: "Brand Visual Strategy", 
    desc: "Menyelaraskan estetika multimedia dengan strategi branding untuk hasil yang terukur.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${light ? 'text-white/60' : 'text-[#FF6600]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 italic`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter italic uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);
const CreativePillarsSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-6">
      <SectionHeader subtitle="Creative Pillars" title="Pilar Produksi Visual Kami." />
      <div className="grid lg:grid-cols-3 gap-12">
        {pillars.map((p, i) => (
          <div key={i} className="text-center group">
            <div className="w-24 h-24 bg-[#FF6600]/5 border border-[#FF6600]/20 rounded-[35px] flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:bg-[#FF6600] group-hover:text-white group-hover:shadow-[0_0_30px_#FF6600] group-hover:scale-110">
              <svg className="w-10 h-10 text-[#FF6600] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{p.icon}</svg>
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic leading-none">{p.title}</h4>
            <p className="text-slate-500 text-lg font-bold italic leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CreativePillarsSection