import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { 
    question: "Berapa lama waktu persiapan ideal untuk sebuah event?", 
    answer: "Idealnya antara 2 hingga 6 bulan tergantung skala acara, namun kami dapat menyesuaikan untuk proyek dengan tenggat waktu lebih singkat melalui sistem manajemen krisis kami." 
  },
  { 
    question: "Apakah LUMINA melayani event di luar kota?", 
    answer: "Tentu. Kami memiliki jaringan vendor produksi nasional yang memungkinkan kami mengeksekusi standar kualitas LUMINA di mana pun acara Anda diadakan." 
  },
  { 
    question: "Apa yang membedakan LUMINA dengan EO konvensional?", 
    answer: "Fokus kami adalah pada 'Experiential Design'. Kami tidak hanya mengatur logistik, tapi merancang perjalanan emosional tamu melalui konsep kreatif dan teknologi produksi." 
  },
  { 
    question: "Apakah bisa menangani produksi teknis saja tanpa manajemen event?", 
    answer: "Ya, tim Creative Production kami dapat bekerja sama dengan tim internal Anda atau agensi lain khusus untuk kebutuhan teknis dan desain panggung." 
  },
  { 
    question: "Bagaimana sistem penawaran harga di LUMINA?", 
    answer: "Penawaran kami bersifat kustom (bespoke). Setelah sesi Discovery, kami akan menyusun rincian biaya yang transparan berdasarkan kompleksitas konsep dan spesifikasi teknis." 
  }
];

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${light ? 'text-[#FCFFFF]/60' : 'text-[#6B3BA7]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 italic`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-[#FCFFFF]/30' : 'bg-[#6B3BA7]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`text-4xl md:text-6xl font-black ${light ? 'text-[#FCFFFF]' : 'text-slate-900'} tracking-tighter italic uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#6B3BA7] relative overflow-hidden border-y border-white/10">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <SectionHeader subtitle="Inquiry" title="Pertanyaan Umum." centered={true} light={true} />
        
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center transition-colors group-hover:text-white"
              >
                <span className="font-black text-white uppercase tracking-tighter text-xl italic leading-tight pr-8">
                  {f.question}
                </span>
                <span className={`flex-shrink-0 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-white text-[#6B3BA7]' : 'group-hover:border-white'}`}>
                  {openIdx === i ? 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round"/></svg> : 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  }
                </span>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-10 pb-10 text-purple-100 text-lg leading-relaxed font-bold italic border-t border-white/5 pt-8">
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
export default FAQSection;