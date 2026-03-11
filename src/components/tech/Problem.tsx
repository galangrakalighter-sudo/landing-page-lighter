const TechnologyProblemSection = () => {
  const problems = [
    { title: "Siloed Systems", desc: "Data dan sistem terpisah yang mengakibatkan inefisiensi operasional masif." },
    { title: "Manual Overload", desc: "Proses bisnis manual yang memakan waktu dan rentan terhadap human error." },
    { title: "Performance Issues", desc: "Infrastruktur lambat yang tidak mampu menangani lonjakan traffic secara dinamis." },
    { title: "Legacy Friction", desc: "Ketergantungan pada teknologi lama yang menghambat inovasi dan integrasi." },
    { title: "Fragile Foundation", desc: "Infrastruktur yang tidak dirancang untuk pertumbuhan cepat (scalability)." }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Friction in Your Digital Growth</h2>
          <p className="text-slate-600 max-w-2xl mx-auto italic">Masalah teknologi bukan sekadar bug, tapi hambatan strategis yang membatasi potensi bisnis Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl border border-[#D49045]/10 bg-white hover:border-[#D49045]/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#ABDDE3]/20 flex items-center justify-center text-[#D49045] mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyProblemSection