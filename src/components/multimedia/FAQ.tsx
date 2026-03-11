import React, { useState } from 'react';
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "Berapa lama waktu pengerjaan video komersial?", answer: "Tergantung kompleksitas, biasanya memakan waktu 2-4 minggu dari tahap konsep hingga final handover." },
  { question: "Apakah bisa menangani produksi di seluruh Indonesia?", answer: "Tentu. Tim Lighter Multimedia siap bergerak ke mana pun cerita Anda perlu didokumentasikan." },
  { question: "Bagaimana sistem revisi di Lighter Multimedia?", answer: "Kami menyediakan 2-3 kali revisi mayor pada tahap post-production untuk memastikan hasil akhir sesuai visi Anda." },
  { question: "Apakah harga termasuk biaya talent dan lokasi?", answer: "Biaya tersebut opsional dan akan kami rincikan secara transparan dalam penawaran kreatif setelah sesi brief." },
  { question: "Jenis peralatan apa yang digunakan?", answer: "Kami menggunakan standar cinema grade (Sony FX series / RED) dengan lensa prime untuk hasil visual cinematic." }
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
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeader subtitle="Inquiry" title="Pertanyaan Umum." />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-[#FF6600]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF6600]/30 shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center bg-white group"
              >
                <span className="font-black text-slate-900 uppercase tracking-tighter text-xl italic group-hover:text-[#FF6600] transition-colors">{f.question}</span>
                <span className={`w-10 h-10 rounded-full border-2 border-[#FF6600] flex items-center justify-center text-[#FF6600] transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-[#FF6600] text-white' : ''}`}>
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