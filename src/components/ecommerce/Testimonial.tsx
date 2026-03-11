import React from 'react';

const TestimonialSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  const testimonials = [
    {
      quote: "Kami berpindah dari agensi biasa ke Lighter Ecommerce Lab dan hasilnya luar biasa. Fokus mereka pada data benar-benar mengubah cara kami jualan",
      name: "Budi Santoso",
      role: "Founder, UrbanStyle"
    },
    {
      quote: "Sistem otomatisasi retensi mereka menyelamatkan margin profit kami. Tidak hanya jualan sekali, pelanggan sekarang datang berulang kali",
      name: "Anita Wijaya",
      role: "Marketing Director, GlowUp"
    }
  ];

  return (
    <section className={`py-20 bg-[#FEFFFF] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-8 border-[#00B288] p-10 bg-white shadow-sm group hover:shadow-md transition-shadow">
              {/* Kutipan - Arial Bold (No Italic) */}
              <p className={`text-xl text-[#00B288] font-bold mb-8 leading-relaxed ${arialStack}`}>
                "{t.quote}"
              </p>
              
              {/* Nama - Arial Black */}
              <div className={`font-black text-2xl text-slate-900 uppercase tracking-normal mb-1 ${arialStack}`}>
                {t.name}
              </div>
              
              {/* Role - Arial Black (Ukuran lebih kecil) */}
              <div className={`font-black text-sm text-slate-400 uppercase tracking-[0.2em] ${arialStack}`}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;