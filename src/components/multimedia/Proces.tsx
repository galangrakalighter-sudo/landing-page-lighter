import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const SectionHeader = ({ subtitle, title, centered = true, light = false }: { subtitle: string; title: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`${arialStack} ${light ? 'text-white/60' : 'text-[#FF6600]'} font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-4`}>
      {centered ? null : <span className={`w-12 h-[2px] ${light ? 'bg-white/30' : 'bg-[#FF6600]/30'}`}></span>}
      {subtitle}
    </h2>
    <h3 className={`${arialStack} text-4xl md:text-6xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tighter uppercase leading-[0.95]`}>
      {title}
    </h3>
  </div>
);

const ProcessSection = () => {
  const steps = [
    { name: "Briefing", desc: "Memahami detail acara, jadwal, dan ekspektasi visual klien" },
    { name: "Planning", desc: "Penyusunan tim, peralatan, dan strategi cakupan lapangan" },
    { name: "On-Site Coverage", desc: "Eksekusi dokumentasi di lapangan dengan standar profesional" },
    { name: "Editing", desc: "Tahap pengolahan visual, color grading, dan storytelling" },
    { name: "Delivery", desc: "Penyerahan hasil akhir dalam resolusi tinggi tepat waktu" }
  ];

  return (
    <section className={`py-24 bg-[#FF6600] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* light={true} digunakan karena background adalah orange */}
        <SectionHeader subtitle="The Process" title="Workflow Kerja Kami" light={true} />
        
        <div className="relative">
          {/* Garis penghubung industrial - Menggunakan putih transparan agar terlihat di atas orange */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-white/20 z-0"></div>
          
          <div className="grid lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="text-center group">
                {/* Lingkaran Angka - Menggunakan BG Putih & Teks Orange agar kontras dengan BG Section */}
                <div className="w-20 h-20 bg-white text-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-8 border-[#FF6600] group-hover:scale-110 transition-transform">
                  <span className={`${arialStack} text-2xl font-black`}>{i + 1}</span>
                </div>
                
                {/* Nama Langkah - Diubah ke Putih */}
                <h4 className={`${arialStack} text-lg font-black text-white mb-2 uppercase leading-none`}>
                  {s.name}
                </h4>
                
                {/* Deskripsi - Diubah ke Putih transparan */}
                <p className={`${arialStack} text-white/80 text-xs font-black leading-relaxed px-4 uppercase`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;