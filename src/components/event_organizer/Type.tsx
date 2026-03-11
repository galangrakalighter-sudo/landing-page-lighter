const SectionTitle = ({ subtitle, title, centered = true }: { subtitle: string; title: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-[#6B3BA7] font-bold uppercase tracking-[0.3em] text-sm mb-4">{subtitle}</h2>
    <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{title}</h3>
  </div>
);
const eventTypes = [
  { name: "Luxury Gala", tag: "Elegance" },
  { name: "Tech Launch", tag: "Futuristic" },
  { name: "Brand Roadshow", tag: "Dynamic" },
  { name: "Art Exhibition", tag: "Creative" },
  { name: "Private Concert", tag: "Exclusive" },
  { name: "Concept Wedding", tag: "Dreamy" }
];
const EventTypesSection = () => (
  <section className="py-24 bg-[#FFFFFE]">
    <div className="container mx-auto max-w-7xl px-6">
      <SectionTitle subtitle="Kategori Acara" title="Berbagai Bentuk Pengalaman." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {eventTypes.map((type, i) => (
          <div key={i} className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-slate-200">
            <div className="absolute inset-0 bg-[#6B3BA7]/0 group-hover:bg-[#6B3BA7]/80 transition-all duration-500 z-10 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100">
              <span className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">{type.tag}</span>
              <h4 className="text-white text-xl font-black uppercase tracking-tighter italic">{type.name}</h4>
            </div>
            <div className="w-full h-full bg-slate-400 group-hover:scale-110 transition-transform duration-700">
               {/* Placeholder Visual representation */}
               <div className="w-full h-full flex items-center justify-center text-white/30 font-black text-xs uppercase tracking-widest">
                  Visual_REF_0{i + 1}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default EventTypesSection;