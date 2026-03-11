import React, { useState } from 'react';
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "Apa yang membedakan LAB ini dengan agency e-commerce biasa?", a: "Agency biasa seringkali hanya melakukan tugas administratif. Kami fokus pada optimasi teknis (ranking algoritma), psikologi pembeli, dan integrasi iklan skala besar untuk mendatangkan pertumbuhan revenue riil." },
    { q: "Berapa lama proses optimasi hingga terlihat hasilnya?", a: "Biasanya perbaikan fundamental (Optimization Setup) dilakukan dalam 2-4 minggu awal. Hasil kenaikan trafik dan konversi mulai terlihat stabil memasuki bulan kedua." },
    { q: "Apakah Anda juga mengelola website Shopify sendiri?", a: "Ya, kami memiliki tim pengembang khusus untuk Shopify dan website kustom guna memastikan pengalaman belanja yang mulus dan konversi tinggi di luar marketplace." },
    { q: "Bagaimana sistem pelaporan datanya?", a: "Anda akan mendapatkan akses ke dashboard data real-time dan laporan analisis mendalam setiap minggunya untuk memantau KPI utama." },
    { q: "Apakah layanan ini cocok untuk brand yang baru rilis?", a: "Sangat. Kami membantu brand baru membangun 'Authority' sejak hari pertama melalui positioning produk yang tepat dan kampanye aktivasi awal." },
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-[#00B288] font-black tracking-widest uppercase text-xs mb-6 italic">Inquiry</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">PERTANYAAN UMUM</h3>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#FEFFFF] border border-slate-100 rounded-[32px] overflow-hidden transition-all hover:border-[#00B288]/30">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-10 text-left flex justify-between items-center group"
              >
                <span className="font-black text-slate-900 uppercase tracking-tighter text-lg md:text-xl italic group-hover:text-[#00B288] transition-colors">{f.q}</span>
                <span className={`w-10 h-10 rounded-full border border-[#00B288] flex items-center justify-center text-[#00B288] transition-all duration-500 ${openIdx === i ? 'rotate-180 bg-[#00B288] text-white' : ''}`}>
                  {openIdx === i ? 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 12H6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg> : 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v12m6-6H6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  }
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-10 pt-0 text-slate-500 text-lg leading-relaxed border-t border-slate-100 mt-4 italic font-medium">
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