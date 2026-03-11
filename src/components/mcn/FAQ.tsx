import React, { useState } from 'react';
interface FAQItem {
  question: string;
  answer: string;
}
const SectionHeader = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${light ? 'text-white/60' : 'text-[#FDA11C]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3 italic`}>
      <span className={`w-10 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FDA11C]/30'}`}></span>
      {subtitle}
    </h2>
    <h3 className={`text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter leading-none uppercase italic`}>
      {title}
    </h3>
  </div>
);
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs: FAQItem[] = [
    { question: "Apakah semua creator bisa join?", answer: "EIKYOO melakukan audit pada kualitas konten dan engagement rate. Kami mencari creator yang memiliki visi serius dalam membangun brand jangka panjang." },
    { question: "Apakah ada kontrak eksklusif?", answer: "Ya, kami menerapkan sistem partnership eksklusif untuk memastikan fokus penuh pada pengembangan karir dan kolaborasi brand Anda." },
    { question: "Bagaimana sistem pembagian revenue?", answer: "Kami menggunakan sistem persentase yang kompetitif dan transparan, disesuaikan dengan tingkat layanan dan dukungan yang creator terima." },
    { question: "Apakah EIKYOO membantu produksi konten?", answer: "Tentu. Kami menyediakan dukungan konsep kreatif, editing, hingga visual enhancement untuk memastikan konten Anda memiliki standar industri premium." },
    { question: "Apakah brand bisa request talent tertentu?", answer: "Ya, brand dapat berkonsultasi dengan tim kami untuk mendapatkan talent yang paling cocok dengan campaign objectives dan target audience mereka." }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeader subtitle="Help Center" title="Soalan Lazim." />
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border border-[#FDA11C]/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#FDA11C]/30 shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center bg-white group"
              >
                <span className="font-black text-slate-900 uppercase tracking-tighter text-xl italic group-hover:text-[#FDA11C] transition-colors">{f.question}</span>
                <span className={`w-10 h-10 rounded-full border-2 border-[#FDA11C] flex items-center justify-center text-[#FDA11C] transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-[#FDA11C] text-white shadow-lg' : ''}`}>
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