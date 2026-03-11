import React from 'react';

const TestimonialSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-24 bg-[#FFFFFE] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
        
        {/* Testimonial 1 */}
        <div className="group p-12 border-l-[16px] border-[#6B3BA7] bg-[#6B3BA7]/5 rounded-r-[60px] transition-all duration-500 hover:bg-[#6B3BA7]/10 hover:translate-x-2">
          {/* Quote - Arial Black, No Italic */}
          <p className={`font-black text-2xl md:text-3xl text-[#6B3BA7] leading-tight mb-10 tracking-tight uppercase ${arialStack}`}>
            "LUMINA tidak hanya mengatur acara, mereka menciptakan atmosfer. Acara peluncuran produk kami menjadi pembicaraan hangat di industri selama berminggu-minggu"
          </p>
          <div className="flex items-center gap-6">
            <div className="w-12 h-[3px] bg-[#6B3BA7] group-hover:w-20 transition-all duration-500"></div>
            <div>
              {/* Position - Arial Black */}
              <h5 className={`font-black text-slate-900 uppercase text-sm tracking-wide leading-none ${arialStack}`}>
                Corporate Director
              </h5>
              {/* Brand - Arial Black */}
              <p className={`font-black text-slate-400 text-[10px] uppercase tracking-[0.4em] mt-3 ${arialStack}`}>
                Astra Venture
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="group p-12 border-l-[16px] border-[#6B3BA7] bg-[#6B3BA7]/5 rounded-r-[60px] transition-all duration-500 hover:bg-[#6B3BA7]/10 hover:translate-x-2">
          {/* Quote - Arial Black, No Italic */}
          <p className={`font-black text-2xl md:text-3xl text-[#6B3BA7] leading-tight mb-10 tracking-tight uppercase ${arialStack}`}>
            "Detail produksinya luar biasa. Kami merasa setiap detik acara telah dipikirkan matang secara artistik. Benar-benar agensi yang berbeda"
          </p>
          <div className="flex items-center gap-6">
            <div className="w-12 h-[3px] bg-[#6B3BA7] group-hover:w-20 transition-all duration-500"></div>
            <div>
              {/* Position - Arial Black */}
              <h5 className={`font-black text-slate-900 uppercase text-sm tracking-wide leading-none ${arialStack}`}>
                Private Client
              </h5>
              {/* Client Name - Arial Black */}
              <p className={`font-black text-slate-400 text-[10px] uppercase tracking-[0.4em] mt-3 ${arialStack}`}>
                H. Wijaya
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;