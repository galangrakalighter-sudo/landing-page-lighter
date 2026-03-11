import React from 'react';

// Definisi Font Stack Utama (Arial Black)
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const TestimonialSection = () => (
  <section className={`py-24 bg-white ${arialStack}`}>
    <div className="container mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { 
            name: "Rizky Pratama", 
            role: "Alumni Digital Marketing", 
            quote: "Lighter Academy benar-benar merubah cara saya berfikir. Kurikulumnya sangat tajam dan langsung bisa saya terapkan di pekerjaan saya saat ini" 
          },
          { 
            name: "Maya Indriani", 
            role: "Alumni UI/UX Design", 
            quote: "Pengerjaan proyek klien nyata di akhir program memberikan saya kepercayaan diri tinggi saat interview di top tech company" 
          }
        ].map((t, i) => (
          <div 
            key={i} 
            className="p-12 md:p-16 bg-[#F7FDFF] rounded-[48px] border-l-[12px] md:border-l-[20px] border-[#010050] shadow-[0_20px_50px_rgba(1,0,80,0.05)] relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(1,0,80,0.1)] hover:-translate-y-2 group"
          >
            {/* Quote Icon Decor - Arial Black */}
            <div className="absolute top-4 right-12 font-black text-8xl text-[#010050]/5 select-none transition-colors group-hover:text-blue-500/10 pointer-events-none">
              “
            </div>

            <div className="relative z-10">
              {/* Quote Text - Arial Black */}
              <p className="font-black text-xl md:text-2xl text-[#010050] leading-[1.1] mb-12 uppercase tracking-tighter">
                "{t.quote}"
              </p>
              
              <div className="flex flex-col">
                 {/* Name - Arial Black */}
                 <h5 className="font-black text-[#010050] text-xl md:text-2xl uppercase leading-none transition-colors group-hover:text-blue-600 tracking-tighter">
                   {t.name}
                 </h5>
                 
                 {/* Role - Arial Black Small */}
                 <div className="flex items-center gap-3 mt-4">
                   <span className="w-6 h-[3px] bg-[#010050]/20 group-hover:w-10 group-hover:bg-blue-500 transition-all duration-500"></span>
                   <p className="text-[#010050]/60 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
                     {t.role}
                   </p>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;