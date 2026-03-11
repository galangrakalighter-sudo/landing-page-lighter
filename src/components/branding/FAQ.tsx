import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs: FAQ[] = [
    { q: "Mengapa RADDINE berbeda dengan jasa desain logo?", a: "RADDINE adalah sistem branding strategis. Kami fokus pada positioning dan framework bisnis Anda sebelum menyentuh desain visual, memastikan brand Anda memiliki jiwa dan tujuan." },
    { q: "Berapa lama proses framework RADDINE berlangsung?", a: "Proses standar kami memakan waktu 6-10 minggu tergantung pada kedalaman riset dan jumlah aset implementasi yang dibutuhkan." },
    { q: "Apa yang saya dapatkan di akhir proyek?", a: "Anda akan mendapatkan sistem identitas lengkap (AI, EPS, PDF) dan 'The RADDINE Brand Book'—panduan strategis dan visual komprehensif untuk brand Anda." },
    { q: "Apakah RADDINE cocok untuk bisnis yang baru mulai?", a: "Sangat. RADDINE didesain untuk memberikan pondasi profesional kelas atas sejak hari pertama, sehingga Anda bisa langsung bersaing di level premium." },
    { q: "Bagaimana sistem pembayarannya?", a: "Kami menggunakan sistem bertahap sesuai dengan milestone framework kami (Discovery, Strategy, and Delivery)." },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-900 border-t border-white/5">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-black tracking-widest uppercase text-sm mb-4">Inquiry</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic">Pertanyaan Umum</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-white/5"
              >
                <span className="font-bold text-white pr-8">{f.q}</span>
                <span className={`text-red-600 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4">
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
export default FAQSection;