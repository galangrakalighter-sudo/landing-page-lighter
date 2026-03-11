import React from 'react';

// Definisi Font Stack Utama
const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

const TestimonialSection = () => {
  const testimonials = [
    { 
      name: "Adrian Hartono", 
      role: "CEO TechCore", 
      quote: "Lighter Multimedia berhasil memvisualisasikan visi bisnis kami jauh melampaui ekspektasi. Bukan sekadar video, ini adalah mahakarya strategis" 
    },
    { 
      name: "Siska Wijaya", 
      role: "Marketing Director", 
      quote: "Storytelling mereka benar-benar kuat. Konten yang dihasilkan berhasil meningkatkan engagement brand kami hingga 3x lipat" 
    }
  ];

  return (
    <section className={`py-24 bg-[#FF6600] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="p-16 bg-[#FFF8E7] rounded-3xl border-l-[16px] border-slate-900 shadow-2xl relative transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Quote Teks - No Italic, Font Black */}
              <p className={`text-2xl text-[#FF6600] font-black leading-[1.1] mb-10 uppercase tracking-tighter ${arialStack}`}>
                "{t.quote}"
              </p>
              
              <div>
                {/* Nama - No Italic, Font Black */}
                <h5 className={`text-slate-900 font-black uppercase text-2xl tracking-tighter ${arialStack}`}>
                  {t.name}
                </h5>
                
                {/* Role - Font Black */}
                <p className={`text-[#FF6600] text-xs font-black uppercase tracking-[0.3em] mt-2 ${arialStack}`}>
                  {t.role}
                </p>
              </div>

              {/* Dekorasi Kutipan Besar di Background */}
              <span className="absolute top-8 right-12 text-slate-200/50 text-8xl font-black pointer-events-none select-none">
                ”
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;