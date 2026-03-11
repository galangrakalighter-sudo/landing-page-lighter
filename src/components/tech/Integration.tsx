const IntegrationSection = () => (
  <section className="py-24 bg-[#ABDDE3]/30">
    <div className="container mx-auto max-w-7xl px-6">
       <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Seamless Connectivity</h2>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">Ekosistem digital Anda tidak boleh bekerja sendirian. Kami ahli dalam mengintegrasikan berbagai platform pihak ketiga untuk menciptakan aliran data yang otomatis dan sinkron.</p>
             <div className="flex flex-wrap gap-3">
                {["Payment Gateway", "CRM Integration", "ERP Sync", "Marketplace API", "Custom Auth"].map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-full border border-[#D49045] text-[#D49045] text-xs font-bold uppercase tracking-wider">
                      {tag}
                   </span>
                ))}
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="bg-white rounded-3xl p-8 shadow-xl border border-white">
                <div className="grid grid-cols-2 gap-8 relative">
                   {/* Decorative connecting lines */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <svg className="w-full h-full opacity-10 stroke-[#D49045]" fill="none" viewBox="0 0 100 100">
                         <path d="M10,10 L90,90 M90,10 L10,90" strokeWidth="2" />
                         <circle cx="50" cy="50" r="10" fill="#D49045" />
                      </svg>
                   </div>
                   <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-300">CRM</div>
                   <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-300">ERP</div>
                   <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-300">Payments</div>
                   <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-300">Analytics</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export default IntegrationSection