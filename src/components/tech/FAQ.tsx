import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string; title: string; centered?: boolean }) => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-[#DAA059] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3 italic ${arialStack}`}>
        <span className="w-10 h-[2px] bg-[#DAA059]/30"></span>
        {subtitle}
      </h2>
      <h3 className={`text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase italic ${arialStack}`}>
        {title}
      </h3>
    </div>
  );
};

const FAQSection = () => {
  // Independent toggle agar tidak menutup saat klik yang lain
  const faqs: FAQItem[] = [
    { question: "Berapa lama waktu pengerjaan sistem skala besar?", answer: "Tergantung kompleksitas, namun untuk Minimum Viable Product (MVP) biasanya membutuhkan waktu 8-12 minggu. Kami memprioritaskan kualitas arsitektur di atas segalanya." },
    { question: "Apakah sistem kami bisa terintegrasi dengan API pihak ketiga?", answer: "Tentu. Kami memiliki spesialisasi dalam membangun middleware dan integrasi API (Payment Gateway, Logistik, dll) dengan standar keamanan enkripsi tertinggi." },
    { question: "Bagaimana standar keamanan data di Lighter Tech?", answer: "Kami menerapkan 'Secure by Design'—artinya keamanan bukan tambahan, tapi fondasi. Menggunakan enkripsi AES-256, perlindungan SQL Injection, dan audit rutin." },
    { question: "Apakah ada dukungan teknis setelah aplikasi rilis?", answer: "Kami adalah partner teknologi jangka panjang. Setiap proyek mencakup masa pemeliharaan gratis dan opsi kontrak Technical Partnership untuk skalabilitas berkelanjutan." }
  ];

  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-slate-50 border-t border-slate-100 ${arialStack}`}>
      <div className="container mx-auto max-w-5xl px-6">
        
        {/* Header - Mengikuti Struktur Referensi */}
        <SectionHeader subtitle="Help Center" title="Technical FAQ." centered={false} />

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <FAQRow key={i} faq={f} arialStack={arialStack} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-komponen agar State bersifat mandiri (Independent Toggle)
const FAQRow = ({ faq, arialStack }: { faq: FAQItem; arialStack: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-slate-200 rounded-[32px] overflow-hidden transition-all duration-500 bg-white ${isOpen ? 'border-[#DAA059]/40 shadow-xl translate-x-2' : 'hover:border-[#DAA059]/20 shadow-sm'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 md:p-10 text-left flex justify-between items-center bg-white group focus:outline-none"
      >
        <span className={`font-black text-[#0F172A] uppercase tracking-tighter text-xl italic group-hover:text-[#DAA059] transition-colors duration-300 ${arialStack}`}>
          {faq.question}
        </span>
        
        {/* Toggle Icon Bulat Gold */}
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#DAA059] flex items-center justify-center text-[#DAA059] transition-all duration-500 flex-shrink-0 ${isOpen ? 'rotate-180 bg-[#DAA059] text-white shadow-lg' : 'group-hover:bg-[#DAA059]/5'}`}>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Answer Content */}
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className={`px-10 md:px-14 pb-10 text-slate-500 font-bold italic leading-relaxed text-lg pt-2 border-l-4 border-[#DAA059] ml-10 mb-4 ${arialStack}`}>
          "{faq.answer}"
        </div>
      </div>
    </div>
  );
};

export default FAQSection;