import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Analisis Kebutuhan",
    description: "Kami melakukan riset mendalam terhadap kebutuhan bisnis dan analisis market yang kompetitif.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Penyusunan Strategi",
    description: "Menentukan strategi media yang tepat dan arah distribusi konten untuk audiens tertarget.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Eksekusi Spesialis",
    description: "Implementasi strategi oleh tim spesialis yang ahli di bidangnya masing-masing.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Monitoring Data",
    description: "Pengawasan performa kampanye secara real-time berbasis data yang akurat.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Optimasi Hasil",
    description: "Melakukan optimasi berkelanjutan untuk memastikan ROI maksimal.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Pelaporan Rutin",
    description: "Penyampaian laporan berkala yang transparan mengenai progres dan pencapaian.",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const CaraKerja = () => {
  return (
    <section id="cara_kerja" className="py-16 md:py-24 bg-[#161616] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase font-[Arial,Helvetica,sans-serif] text-white">
            Cara Kerja
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Alur kerja profesional kami dirancang untuk memastikan setiap langkah memberikan dampak nyata bagi pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Steps Grid - grid-cols-2 untuk Mobile dengan gap yang lebih lebar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 md:gap-8 relative">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="relative group z-10 flex flex-col items-center text-center space-y-4 md:space-y-6 px-2"
              >
                {/* Icon Container - Responsif Size dengan Padding & Margin Bottom */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 border-2 border-slate-700 rounded-2xl flex items-center justify-center text-white group-hover:bg-black group-hover:border-white group-hover:-translate-y-2 transition-all duration-300 shadow-xl mb-2">
                  <div className="text-gray-400 group-hover:text-white transition-colors scale-75 md:scale-100">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-1">
                  <h3 className="text-[11px] sm:text-sm md:text-base lg:text-[14px] font-black font-[Arial,Helvetica,sans-serif] uppercase tracking-wider text-white transition-colors leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default CaraKerja;