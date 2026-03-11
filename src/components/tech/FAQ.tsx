
import React, { useState } from 'react'
const IconPlus = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
);

const IconMinus = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
  </svg>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Apakah LIGHTER TECH hanya membuat website?", a: "Tidak. Fokus utama kami adalah digital infrastructure dan software engineering yang kompleks. Kami membangun sistem operasional, integrasi API, dan arsitektur cloud untuk mendukung bisnis skala besar." },
    { q: "Berapa lama estimasi waktu pengembangan sistem?", a: "Tergantung pada kompleksitas arsitektur. Audit dan perencanaan biasanya memakan waktu 2-4 minggu, diikuti oleh fase engineering yang iteratif." },
    { q: "Apakah bisa mengintegrasikan sistem baru dengan infrastruktur lama kami?", a: "Ya, kami spesialis dalam integrasi sistem. Kami akan melakukan audit sistem lama untuk menemukan titik integrasi terbaik melalui API atau middleware khusus." },
    { q: "Apakah tersedia layanan maintenance pasca-peluncuran?", a: "Tentu. Sebagai partner jangka panjang, kami menyediakan paket dukungan profesional untuk monitoring sistem, security update, dan optimasi performa berkelanjutan." },
    { q: "Apakah solusi yang dibangun siap untuk skala enterprise?", a: "Sangat. Kami menggunakan pendekatan 'Architecture First' yang menjamin sistem Anda modular dan siap menangani pertumbuhan volume data atau pengguna secara masif." }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Strategic Inquiry</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 bg-[#FEFFFF] text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{f.q}</span>
                <span className="text-[#D49045]">{openIndex === i ? <IconMinus /> : <IconPlus />}</span>
              </button>
              {openIndex === i && (
                <div className="p-7 bg-white border-t border-slate-50 text-slate-600 leading-relaxed animate-fadeIn">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;