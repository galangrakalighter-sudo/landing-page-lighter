const AboutLighterTechSection = () => (
  <section className="py-24 bg-[#ABDDE3]">
    <div className="container mx-auto max-w-7xl px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Beyond Coding: We Build <span className="text-[#D49045]">Systems Thinking</span> Foundations.</h2>
          <p className="text-slate-700 mb-6 text-lg leading-relaxed">LIGHTER TECH hadir sebagai partner strategis untuk membangun aset teknologi yang mendalam. Kami tidak hanya mengejar visual, tapi kami memprioritaskan arsitektur data, keamanan, dan skalabilitas.</p>
          <p className="text-slate-700 mb-10 text-lg leading-relaxed">Bagi kami, teknologi adalah mesin pertumbuhan, bukan sekadar biaya operasional. Setiap baris kode adalah investasi untuk fleksibilitas bisnis Anda di masa depan.</p>
          <div className="grid grid-cols-2 gap-8">
             <div>
                <div className="text-3xl font-bold text-[#D49045] mb-1">Architecture</div>
                <div className="text-sm text-slate-600 font-bold uppercase tracking-widest">First Strategy</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-[#D49045] mb-1">Future-Proof</div>
                <div className="text-sm text-slate-600 font-bold uppercase tracking-widest">Digital Foundation</div>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white p-1 rounded-3xl shadow-2xl rotate-2">
            <div className="bg-slate-900 rounded-[calc(1.5rem-2px)] p-10 text-white min-h-[400px] flex flex-col justify-center">
               <div className="text-[#D49045] font-mono text-sm mb-4 uppercase tracking-widest">Core Philosophy</div>
               <div className="text-3xl font-bold mb-6 leading-tight">"Infrastruktur digital yang baik adalah yang tidak terlihat, namun menopang setiap gerakan bisnis tanpa hambatan."</div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-[#D49045] rounded-full" />
                  <span className="font-bold tracking-widest uppercase text-xs opacity-60">Engineering Excellence</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutLighterTechSection;