const pillars = [
  { 
    title: "Store Optimization", 
    desc: "Memastikan fondasi teknis dan visual toko online Anda siap untuk menerima trafik skala besar.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  },
  { 
    title: "Marketplace Growth", 
    desc: "Strategi agresif untuk mendominasi peringkat marketplace dan memenangkan persaingan harga.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  },
  { 
    title: "Conversion System", 
    desc: "Implementasi funnel dan retensi untuk mengubah pembeli pertama menjadi pelanggan setia.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  },
];
const SolutionSection = () => (
  <section id="solution" className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-[#00B288] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center justify-center gap-4 italic">
          <span className="w-12 h-px bg-[#00B288]"></span> The Solution
        </h2>
        <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-24 uppercase italic leading-none">
          TIGA PILAR <br /> <span className="text-slate-200 not-italic">PERTUMBUHAN KAMI.</span>
        </h3>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center p-12 bg-white border border-[#00B288]/20 rounded-[60px] shadow-xl relative overflow-hidden">
              {/* Ikon Statis - Langsung berwarna Teal */}
              <div className="w-28 h-28 bg-[#00B288] border border-[#00B288] rounded-[40px] flex items-center justify-center mb-10 shadow-lg shadow-[#00B288]/20 text-white">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   {p.icon}
                </svg>
              </div>
              
              <div className="relative mb-6 text-center">
                <span className="text-[10px] font-black text-[#00B288] uppercase tracking-[0.4em] absolute -top-4 left-1/2 -translate-x-1/2">Pillar 0{i + 1}</span>
                <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-none pt-2">
                  {p.title}
                </h4>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-center font-bold text-lg">
                {p.desc}
              </p>

              {/* Decorative architectural element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B288]/5 rounded-bl-[100px] -z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;