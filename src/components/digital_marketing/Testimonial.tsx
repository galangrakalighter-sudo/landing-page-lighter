import React from 'react';

const TestimonialSection = () => {
  const arialStack = "font-['Arial',_Helvetica,_sans-serif]";

  return (
    <section className={`py-32 bg-[#010033] ${arialStack}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Testimonial Card 01 */}
          <div className="p-16 bg-[#020066] border-l-[12px] border-[#F96300] rounded-r-[50px] shadow-2xl relative transition-all duration-500 hover:scale-105 group">
            {/* Decorative Quote Mark - Arial */}
            <svg className="absolute top-10 right-10 w-24 h-24 text-[#F96300]/5" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.114 0 2.162-.228 3.12-.64C12.164 25.13 10.22 26 8 26v2c4.418 0 8-3.582 8-8V8h-6zm14 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.114 0 2.162-.228 3.12-.64C26.164 25.13 24.22 26 22 26v2c4.418 0 8-3.582 8-8V8h-6z" />
            </svg>
            
            {/* Quote Text - Arial Black, No Italic */}
            <p className={`text-2xl md:text-[34px] text-white font-black uppercase mb-12 leading-tight tracking-normal transition-colors ${arialStack}`}>
              "LGTR memberikan fondasi data yang kami butuhkan untuk berani scale budget. Hasilnya? Revenue naik 3x lipat dalam satu kuartal"
            </p>
            
            <div>
              {/* Name - Arial Black */}
              <h5 className={`text-[#F96300] font-black uppercase tracking-normal text-2xl leading-none ${arialStack}`}>
                Adrian Hartono
              </h5>
              {/* Role - Arial Black Small */}
              <p className={`text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-3 leading-none ${arialStack}`}>
                Managing Director Tier-1 E-commerce
              </p>
            </div>
          </div>

          {/* Testimonial Card 02 */}
          <div className="p-16 bg-[#020066] border-l-[12px] border-[#F96300] rounded-r-[50px] shadow-2xl relative transition-all duration-500 hover:scale-105 group">
            <svg className="absolute top-10 right-10 w-24 h-24 text-[#F96300]/5" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.114 0 2.162-.228 3.12-.64C12.164 25.13 10.22 26 8 26v2c4.418 0 8-3.582 8-8V8h-6zm14 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.114 0 2.162-.228 3.12-.64C26.164 25.13 24.22 26 22 26v2c4.418 0 8-3.582 8-8V8h-6z" />
            </svg>
            
            <p className={`text-2xl md:text-[34px] text-white font-black uppercase mb-12 leading-tight tracking-normal transition-colors ${arialStack}`}>
              "Bukan sekadar iklan. LGTR merombak total cara kami memandang Funnel bisnis. Kerja sama paling profitable yang pernah kami lakukan"
            </p>
            
            <div>
              <h5 className={`text-[#F96300] font-black uppercase tracking-normal text-2xl leading-none ${arialStack}`}>
                Siska Wijaya
              </h5>
              <p className={`text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-3 leading-none ${arialStack}`}>
                Founder Bloom F&B Group
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;