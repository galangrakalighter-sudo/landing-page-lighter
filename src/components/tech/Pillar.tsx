const CorePillarsSection = () => {
  const pillars = [
    { title: "Architecture First", desc: "Kami merancang cetak biru sistem yang komprehensif sebelum penulisan kode dimulai." },
    { title: "Process Automation", desc: "Menghilangkan friksi operasional melalui engineering alur kerja yang cerdas." },
    { title: "Scalable Engineering", desc: "Membangun software yang mampu tumbuh seiring dengan pertumbuhan basis pengguna Anda." }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-left p-10 rounded-2xl border-l-4 border-[#D49045] bg-[#FEFFFF] shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#D49045] font-bold text-5xl mb-6 opacity-20">0{i+1}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CorePillarsSection;