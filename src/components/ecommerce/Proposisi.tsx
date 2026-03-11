import React from 'react';

const ValuePropositionSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-20 bg-white ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Item 1: Conversion First Design */}
          <div className="text-center p-8 rounded-2xl border border-transparent hover:border-[#00B288]/20 transition-all duration-300 hover:shadow-xl group">
            <div className="w-20 h-20 bg-[#00B288]/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#00B288] group-hover:bg-[#00B288] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            {/* Title - Arial Black */}
            <h3 className={`font-black text-2xl mb-4 uppercase tracking-normal text-slate-900 ${arialStack}`}>
              Conversion First Design
            </h3>
            {/* Description - Arial Bold */}
            <p className={`text-slate-600 leading-relaxed font-bold ${arialStack}`}>
              Setiap piksel dirancang untuk memandu user melakukan pembelian, bukan sekadar estetika visual
            </p>
          </div>

          {/* Item 2: Scalable Architecture */}
          <div className="text-center p-8 rounded-2xl border border-transparent hover:border-[#00B288]/20 transition-all duration-300 hover:shadow-xl group">
            <div className="w-20 h-20 bg-[#00B288]/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#00B288] group-hover:bg-[#00B288] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            {/* Title - Arial Black */}
            <h3 className={`font-black text-2xl mb-4 uppercase tracking-normal text-slate-900 ${arialStack}`}>
              Scalable Architecture
            </h3>
            {/* Description - Arial Bold */}
            <p className={`text-slate-600 leading-relaxed font-bold ${arialStack}`}>
              Kami membangun sistem yang siap menangani lonjakan traffic ribuan user per detik tanpa hambatan
            </p>
          </div>

          {/* Item 3: Data-Driven Optimization */}
          <div className="text-center p-8 rounded-2xl border border-transparent hover:border-[#00B288]/20 transition-all duration-300 hover:shadow-xl group">
            <div className="w-20 h-20 bg-[#00B288]/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#00B288] group-hover:bg-[#00B288] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            {/* Title - Arial Black */}
            <h3 className={`font-black text-2xl mb-4 uppercase tracking-normal text-slate-900 ${arialStack}`}>
              Data-Driven Optimization
            </h3>
            {/* Description - Arial Bold */}
            <p className={`text-slate-600 leading-relaxed font-bold ${arialStack}`}>
              Keputusan bisnis dibuat berdasarkan data perilaku user nyata, bukan sekadar asumsi atau tren
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;