import React, { useState } from 'react';
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
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { question: "Apakah cocok untuk pemula?", answer: "Sangat cocok. Kurikulum kami disusun mulai dari tingkat dasar (Beginner) hingga tingkat profesional untuk memastikan pemahaman yang menyeluruh." },
    { question: "Apakah ada sertifikat?", answer: "Ya, setiap lulusan akan mendapatkan sertifikasi kompetensi resmi dari Lighter Academy Indonesia yang dapat digunakan sebagai bukti profesionalitas." },
    { question: "Berapa durasi program?", answer: "Durasi program bervariasi antara 3 hingga 6 bulan tergantung pada kategori spesialisasi yang Anda pilih." },
    { question: "Apakah ada job support?", answer: "Kami menyediakan sesi career coaching dan akses ke jaringan partner industri kami untuk membantu alumni dalam proses pencarian kerja." },
    { question: "Apakah tersedia corporate training?", answer: "Ya, kami melayani pelatihan kustom untuk perusahaan yang ingin meningkatkan skill tim kreatif atau digital mereka secara masif." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeader subtitle="Help Center" title="Pertanyaan Umum." />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-[#010050]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#010050]/30 shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center bg-white group"
              >
                <span className="font-black text-slate-900 uppercase tracking-tighter text-xl italic group-hover:text-[#010050] transition-colors">{f.question}</span>
                <span className={`w-10 h-10 rounded-full border-2 border-[#010050] flex items-center justify-center text-[#010050] transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-[#010050] text-white shadow-lg' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-10 pb-10 text-slate-600 font-bold italic leading-relaxed text-lg pt-4">
                  {f.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection