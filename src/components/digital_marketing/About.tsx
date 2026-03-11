const AboutLGTRSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-32 bg-[#020066] relative overflow-hidden border-t border-white/5 ${arialStack}`}>
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F96300]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="mb-10 text-left">
              {/* Tagline - Arial Black */}
              <h2 className={`text-[#F96300] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4 leading-none ${arialStack}`}>
                <span className="w-12 h-px bg-[#F96300]"></span> 
                Framework Internal
              </h2>
              
              {/* Main Title - Arial Black, Tracking Normal */}
              <h3 className={`text-5xl md:text-8xl font-black text-white uppercase leading-[0.95] mb-10 tracking-normal ${arialStack}`}>
                LGTR <br /> 
                <span className={`text-white/30 ${arialStack}`}>Bukan Sekadar</span> <br /> 
                Iklan Biasa
              </h3>
              
              {/* Description - Arial Bold */}
              <p className={`text-white/70 text-lg md:text-2xl mb-12 leading-relaxed font-bold uppercase tracking-normal ${arialStack}`}>
                LGTR adalah performance engine strategis yang kami kembangkan untuk membangun pertumbuhan bisnis dari akar hingga ke puncak. Kami merancang ekosistem data yang bernapas dan tumbuh bersama bisnis Anda
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F96300]/20 blur-2xl opacity-50"></div>
              <div className="relative bg-[#010033] p-12 md:p-16 rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#F96300]"></div>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 rounded-full bg-[#F96300] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  {/* Card Subtitle - Arial Black */}
                  <h4 className={`text-white font-black text-xl uppercase tracking-widest leading-none ${arialStack}`}>
                    Filosofi Performa
                  </h4>
                </div>

                <blockquote className="relative">
                  <svg className="absolute -top-6 -left-8 w-16 h-16 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L10.017 3V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C4.91243 8 4.017 7.10457 4.017 6V3L0.017 3V21H4.017Z" />
                  </svg>
                  {/* Quote - Arial Bold, Removed Italic */}
                  <p className={`text-white/80 text-xl md:text-2xl leading-relaxed relative z-10 font-bold uppercase tracking-normal ${arialStack}`}>
                    "Growth yang hebat lahir dari kejelasan data, dieksekusi dengan kampanye yang tajam, dan dikelola dalam sistem yang scalable. LGTR memastikan ketiga pilar ini bekerja secara harmonis untuk pertumbuhan bisnis jangka panjang"
                  </p>
                </blockquote>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                  {/* Footer Card Text - Arial Black */}
                  <p className={`text-[#F96300] font-black text-xs uppercase tracking-[0.3em] ${arialStack}`}>
                    Performance Grade Protocol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLGTRSection;