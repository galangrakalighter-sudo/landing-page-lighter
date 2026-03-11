import React from 'react';

const ProblemSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const problems = [
    { 
      title: "Traffic Tinggi, Konversi Rendah", 
      desc: "Pengunjung datang tapi tidak membeli karena funnel yang berantakan",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      title: "Checkout Rumit & Lambat", 
      desc: "User meninggalkan keranjang karena proses pembayaran yang berbelit",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
        </svg>
      )
    },
    { 
      title: "Infrastruktur Rapuh", 
      desc: "Toko online sering error saat traffic naik atau promo besar berlangsung",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v4" />
        </svg>
      )
    },
    { 
      title: "Nol Sistem Retensi", 
      desc: "Tidak ada sistem otomatisasi untuk membuat pembeli datang kembali",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <section className={`py-20 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-16">
          {/* Main Title - Arial Black */}
          <h2 className={`font-black text-3xl md:text-5xl text-slate-900 mb-4 uppercase tracking-normal ${arialStack}`}>
            Kebocoran <span className="text-[#00B288]">Profit</span> E-Commerce Anda
          </h2>
          {/* Subtitle - Arial Bold */}
          <p className={`text-slate-600 max-w-2xl mx-auto text-lg font-bold tracking-normal ${arialStack}`}>
            Masalah fundamental yang menghambat pertumbuhan bisnis e-commerce tanpa Anda sadari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl border border-slate-100 bg-[#FEFFFF] hover:border-[#00B288]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 text-[#00B288] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 inline-block">
                {p.icon}
              </div>
              
              {/* Card Title - Arial Black */}
              <h3 className={`font-black text-xl text-slate-900 mb-3 uppercase tracking-normal ${arialStack}`}>
                {p.title}
              </h3>
              
              {/* Card Description - Arial Bold */}
              <p className={`text-slate-500 leading-relaxed font-bold ${arialStack}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;