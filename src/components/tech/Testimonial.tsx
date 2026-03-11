const TestimonialSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="border-l-[12px] border-[#D49045] p-12 bg-slate-50 rounded-r-3xl">
          <p className="text-2xl italic text-slate-800 font-medium mb-8 leading-relaxed">
            "Bekerja dengan Lighter Tech memberikan kami ketenangan infrastruktur. Mereka memikirkan skalabilitas yang bahkan belum kami bayangkan sebelumnya."
          </p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#D49045]/20 rounded-full flex items-center justify-center font-bold text-[#D49045]">JP</div>
             <div>
                <div className="font-bold text-slate-900">Julian Pratama</div>
                <div className="text-xs text-[#D49045] font-bold uppercase tracking-widest">CTO, Nexus Corp</div>
             </div>
          </div>
        </div>
        <div className="border-l-[12px] border-[#D49045] p-12 bg-slate-50 rounded-r-3xl">
          <p className="text-2xl italic text-slate-800 font-medium mb-8 leading-relaxed">
            "Bukan sekadar coding, mereka mendesain sistem. Otomatisasi proses internal kami sekarang berjalan 24/7 tanpa intervensi manual."
          </p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#D49045]/20 rounded-full flex items-center justify-center font-bold text-[#D49045]">SW</div>
             <div>
                <div className="font-bold text-slate-900">Sarah Wijaya</div>
                <div className="text-xs text-[#D49045] font-bold uppercase tracking-widest">VP Engineering, FlowLogistics</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default TestimonialSection;