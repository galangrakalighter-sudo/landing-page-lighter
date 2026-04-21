import React from 'react';
import { Link } from "react-router-dom";
import image1 from "@/assets/logo_big_client/Orson.png"
import image2 from "@/assets/logo_big_client/nacific.png"
import image3 from "@/assets/logo_big_client/pw.png"
import image4 from "@/assets/logo_big_client/auto.png"
import image5 from "@/assets/logo_big_client/ini.png"
import image6 from "@/assets/logo_big_client/wuling.png"
import image7 from "@/assets/logo_big_client/ardan.png"
import image8 from "@/assets/logo_big_client/padimas.png"

const Client = () => {
  // 10 Klien dengan icon representatif untuk kesan lebih visual/modern
  const clients = [
    { name: "PADIMAS", industry: "Cloud", img: image8 },
    { name: "ARDAN", industry: "Fintech", img: image7 },
    { name: "NACIFIC", industry: "Logistik", img: image2 },
    { name: "PAKAR WISATA", industry: "AI Research", img: image3 },
    { name: "WULING", industry: "Green Tech", img: image6 },
    { name: "IKATAN DOKTER INDONESIA", industry: "Analytics", img: image5 },
    { name: "AUTO 2000", industry: "Marketing", img: image4 },
    { name: "ORSON", industry: "SaaS", img: image1 },
  ];

  const stats = [
    { label: "Klien Puas", value: "200+", detail: "Kepercayaan Global" },
    { label: "Proyek Selesai", value: "500+", detail: "Eksekusi Sempurna" },
    { label: "Rating", value: "4.9/5", detail: "Kepuasan Tertinggi" },
  ];

  return (
    <div id="client" className="bg-[#161616] text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Mesh Gradient Background Decor */}

      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        
        {/* Header Section - Modern Center Alignment */}
        <div className="text-center mb-24">
          <div className="mb-12 md:mb-12"> {/* Jarak ke bawah: 48px di mobile, 80px di desktop */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase font-[Arial,Helvetica,sans-serif] leading-tight text-white">
              Berkolaborasi Dengan <br /> Raksasa Industri
            </h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Kami tidak hanya mengerjakan proyek, kami membangun ekosistem digital untuk merek-merek yang mendefinisikan masa depan.
          </p>
        </div>

        {/* Client Grid - Static & High Contrast */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0a0a0a] p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Logo Area */}
              <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
                <img 
                  src={client.img} 
                  alt={client.name}
                  className="h-16 sm:h-24 md:h-24 w-auto object-contain brightness-90 group-hover:brightness-100"
                />
              </div>

              <div className="mt-6 text-center relative z-10">
                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors uppercase font-[Arial,Helvetica,sans-serif]">
                  {client.name}
                </h3>
              </div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.07] to-transparent"></div>
              </div>
            </div>
          ))}

          {/* TOMBOL DI DALAM GRID - Menggunakan col-span */}
          <div className="col-span-2 md:col-span-4 bg-[#111111] flex justify-center items-center p-10 border-t border-white/5">
            <Link
              to="#"
              className="group inline-flex items-center justify-center text-black bg-white transition-all duration-300 font-bold rounded-full text-sm sm:text-base px-10 py-4 uppercase tracking-widest"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Client;