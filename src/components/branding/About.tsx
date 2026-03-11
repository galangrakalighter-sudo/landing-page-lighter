import React from 'react';

const AboutRaddineSection = () => (
  <section className="py-32 bg-neutral-900 relative overflow-hidden font-['Arial','Helvetica',sans-serif]">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] pointer-events-none"></div>
    
    <div className="container mx-auto max-w-7xl px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="mb-10">
            {/* Tagline - Arial Stack */}
            <h2 className="text-red-600 font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4 font-['Arial','Helvetica',sans-serif]">
              <span className="w-12 h-px bg-red-600"></span> 
              Framework Internal
            </h2>
            
            {/* Main Title - Arial Stack (Tracking Normal) */}
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.95] mb-10 tracking-normal font-['Arial','Helvetica',sans-serif]">
              RADDINE <br /> 
              <span className="text-neutral-500 font-['Arial','Helvetica',sans-serif]">Bukan Sekadar</span> <br /> 
              Desain
            </h3>
            
            {/* Description - Arial Stack */}
            <p className="text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed font-bold tracking-normal font-['Arial','Helvetica',sans-serif]">
              RADDINE adalah framework strategis yang kami kembangkan untuk membangun brand dari akar hingga ke puncak. Kami merancang sistem ekosistem yang bernapas dan tumbuh bersama bisnis Anda
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/20 blur-2xl opacity-50"></div>
            <div className="relative bg-neutral-950 p-12 md:p-16 rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </div>
                {/* Subtitle Card - Arial Stack */}
                <h4 className="text-white font-black text-xl uppercase tracking-[0.1em] leading-none font-['Arial','Helvetica',sans-serif]">
                  Filosofi Otoritas
                </h4>
              </div>

              <blockquote className="relative">
                <svg className="absolute -top-6 -left-8 w-16 h-16 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L10.017 3V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C4.91243 8 4.017 7.10457 4.017 6V3L0.017 3V21H4.017Z" />
                </svg>
                {/* Quote - Arial Stack */}
                <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed relative z-10 font-bold tracking-normal font-['Arial','Helvetica',sans-serif]">
                  "Brand yang hebat lahir dari kejelasan strategi, dieksekusi dengan identitas yang tajam, dan dikelola dalam sistem yang scalable. RADDINE memastikan ketiga pilar ini bekerja secara harmonis untuk pertumbuhan bisnis jangka panjang"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutRaddineSection;