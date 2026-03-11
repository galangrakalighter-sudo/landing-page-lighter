import React, { useState } from 'react';
interface FAQItem {
  q: string;
  a: string;
}
const faqs: FAQItem[] = [
  { q: "Apa yang membedakan LGTR dengan agency biasa?", a: "Agency biasa fokus pada traffic; LGTR fokus pada sistem pertumbuhan. Kami bekerja berbasis data dan framework scaling teknis untuk memastikan setiap rupiah iklan menghasilkan revenue." },
  { q: "Berapa lama hasil mulai terlihat?", a: "Fase audit dan setup biasanya memakan waktu 2 minggu. Hasil awal konversi mulai terlihat di bulan pertama, dengan scaling signifikan di bulan ketiga." },
  { q: "Apakah LGTR membantu pembuatan konten?", a: "Ya, dalam framework LGTR kami menyertakan Creative Production yang didesain khusus untuk performa iklan (UGC, Direct Response Video, dll)." },
  { q: "Platform mana yang paling efektif?", a: "Tergantung audit data. Kami ahli di Meta, Google, dan TikTok, dan akan memilihkan platform dengan biaya akuisisi paling efisien untuk produk Anda." },
  { q: "Bagaimana sistem pembayarannya?", a: "Kami menggunakan model Management Fee + Performance Incentive untuk memastikan keselarasan tujuan kami dengan keuntungan bisnis Anda." },
];
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-[#020066] border-t border-white/5">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-[#F96300] font-black tracking-widest uppercase text-xs mb-6 italic">Inquiry</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">PERTANYAAN UMUM</h3>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#010033] border border-white/5 rounded-[32px] overflow-hidden transition-all duration-300 hover:border-[#F96300]/30">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center group transition-colors hover:bg-white/[0.02]"
              >
                <span className="font-black text-white uppercase tracking-tighter text-xl italic group-hover:text-[#F96300] transition-colors">{f.q}</span>
                <span className={`w-10 h-10 rounded-full border border-[#F96300] flex items-center justify-center text-[#F96300] transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-[#F96300] text-[#020066]' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-10 pt-0 text-white/40 text-lg leading-relaxed border-t border-white/5 mt-4 italic font-medium">
                  {f.a}
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