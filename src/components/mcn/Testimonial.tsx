import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const TestimonialSection = () => (
  <section className={`py-32 bg-white ${arialStack} relative overflow-hidden`}>
    {/* Background Decor */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
    </div>

    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {[
          { 
            name: "Andini Putri", 
            role: "Digital Content Creator", 
            quote: "EIKYOO BUKAN SEKADAR AGENCY, MEREKA ADALAH TIM STRATEGIS YANG MENGERTI BAGAIMANA MENGUBAH KONTEN SAYA MENJADI BISNIS YANG SCALABLE" 
          },
          { 
            name: "Brand Manager", 
            role: "Consumer Goods Brand", 
            quote: "TALENT MATCHING DI EIKYOO SANGAT PRESISI. KAMPANYE KAMI MENCAPAI TARGET ROI DALAM WAKTU YANG LEBIH SINGKAT DARI BIASANYA" 
          }
        ].map((t, i) => (
          <div 
            key={i} 
            className="group p-12 md:p-16 bg-[#FCFBFC] rounded-[60px] border-2 border-slate-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(253,161,28,0.25)] hover:bg-white overflow-hidden"
          >
            {/* Massive Quote Icon Decor - Arial Black */}
            <div className="absolute -top-10 -right-4 font-black text-[15rem] text-slate-100 group-hover:text-[#FDA11C]/10 transition-colors duration-700 select-none pointer-events-none leading-none">
              "
            </div>

            {/* Quote Text - Arial Black */}
            <p className="relative z-10 font-black text-2xl md:text-3xl text-slate-900 leading-[1.1] mb-16 uppercase tracking-tighter group-hover:text-[#FDA11C] transition-colors duration-500">
              {t.quote}
            </p>
            
            {/* Heavy Divider */}
            <div className="w-16 h-[5px] bg-[#FDA11C] mb-12 group-hover:w-32 transition-all duration-700 rounded-full"></div>

            {/* Author Identity Area with Increased Spacing */}
            <div className="relative z-10 mt-10">
               <h5 className="font-black text-slate-900 uppercase text-2xl tracking-tighter leading-none mb-4">
                 {t.name}
               </h5>
               <p className="text-[#FDA11C] text-[10px] font-black uppercase tracking-[0.5em] opacity-80 group-hover:opacity-100 transition-opacity">
                 {t.role}
               </p>
            </div>

            {/* Industrial Tag */}
            <div className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-100 transition-all duration-500">
               <div className="px-4 py-1 border-2 border-slate-200 rounded-lg">
                 <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">Auth_Verified</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;