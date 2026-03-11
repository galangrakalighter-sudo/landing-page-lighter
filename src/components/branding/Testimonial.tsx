import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    { 
      name: "Adrian Hartono", 
      role: "CEO Vanguard Fx", 
      quote: "RADDINE memberikan kami fondasi yang jauh lebih dari sekadar logo. Kini kami memiliki bahasa brand yang utuh dan mengintimidasi kompetitor" 
    },
    { 
      name: "Siska Wijaya", 
      role: "Founder Crimson Roast", 
      quote: "Proses strategis RADDINE membuka mata kami tentang potensi brand kami sendiri. Hasil visualnya benar-benar standar dunia" 
    },
  ];

  const arialStack = "font-['Arial','Helvetica',sans-serif]";

  return (
    <section className={`py-24 bg-neutral-950 ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-12 bg-neutral-900 rounded-[40px] border-l-8 border-red-600 shadow-2xl relative overflow-hidden group">
              {/* Decorative Quote Mark - Arial Black Instead of Serif Italic */}
              <p className={`text-red-600 text-8xl font-black mb-0 leading-none opacity-10 absolute -top-2 -left-2 select-none ${arialStack}`}>
                “
              </p>
              
              {/* Quote Text - Removed Italic, Bold Arial */}
              <p className={`text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-bold tracking-normal relative z-10 ${arialStack}`}>
                "{t.quote}"
              </p>
              
              <div className="relative z-10">
                {/* Name - Arial Black */}
                <h5 className={`text-white font-black uppercase tracking-normal text-lg ${arialStack}`}>
                  {t.name}
                </h5>
                {/* Role - Arial Bold Wide Tracking */}
                <p className={`text-red-600 text-[10px] font-black uppercase tracking-[0.3em] mt-2 ${arialStack}`}>
                  {t.role}
                </p>
              </div>

              {/* Hover Effect Decor */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;