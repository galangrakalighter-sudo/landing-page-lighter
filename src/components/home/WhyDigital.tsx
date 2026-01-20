import Phone from '@/assets/home/phone.png'
import { Element } from "react-scroll";
import React from "react";
import Aurora from '@/components/Aurora';
import GradientText from '@/components/GradientText';

const WhyDigital: React.FC = () => {
  return (
    <Element name="collect-section">
      <section id="why-digital-marketing-section" className="relative text-white py-12 md:py-16 lg:py-24 overflow-hidden bg-[#161616]">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">

            {/* IMAGE SECTION - Muncul di atas pada mobile (order-1) */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center order-1 md:order-1">
              <div className="w-full flex justify-center">
                {/* Mobile Image */}
                <img 
                  src={Phone} 
                  alt="Visual Marketing Digital Mobile" 
                  className="block md:hidden w-[70%] sm:w-[50%] h-auto"
                />

                {/* Desktop Image */}
                <img 
                  src={Phone} 
                  alt="Visual Marketing Digital Desktop" 
                  className="hidden md:block w-[90%] lg:w-[85%] xl:w-[90%] mr-[15%] h-auto"
                />
              </div>
            </div>

            {/* TEXT SECTION - Muncul di bawah gambar pada mobile (order-2) */}
            <div className="w-full md:w-1/2 text-left md:text-left order-2 md:order-2">
              <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-y-1 md:gap-y-2">
                <h1 className="text-[8vw] sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] ll:text-5xl font-bold mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif] leading-none" id="gradienTeks1">
                  KENAPA LIGHTER
                </h1>

                <h1 className="text-[8vw] sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] ll:text-5xl font-bold ll:mt-[-1%] mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif] md:mt-[3%] leading-none" id="gradienTeks2">
                  MEDIA GROUP
                </h1>

                {/* Elemen Tambahan tetap dipertahankan sesuai script asli */}
                <h1 className="text-[8vw] sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] font-bold ll:text-5xl mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif] hidden" id="teks_biasa1">
                  KENAPA LIGHTER
                </h1>

                <h1 className="text-[8vw] sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] font-bold ll:text-5xl ll:mt-[-1%] mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif] md:mt-[3%] hidden" id="teks_biasa2">
                  MEDIA GROUP
                </h1>
              </div>

              <p className="mt-6 md:mt-4 text-white mx-auto md:mx-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl font-[Arial,Helvetica,sans-serif]" id='paragraf_sec1'>
                Lighter Media Group bekerja sebagai ekosistem media digital terintegrasi.
                Kami menaungi berbagai kanal media dan layanan digital dalam satu sistem.
                LMG membantu brand hadir dan berkembang di ruang digital yang terus berubah.
                Bukan sekadar tampil, tapi ditempatkan di konteks yang tepat.
                Kami tidak berdiri sebagai vendor satu layanan.
                Lighter Media Group adalah partner media digital untuk pertumbuhan jangka panjang
              </p>

              <div className="flex justify-center md:justify-start">
                {/* TOMBOL DISESUAIKAN DENGAN SECTION JELAJAH */}
                <a 
                  href="#" 
                  className="mt-8 md:mt-10 inline-flex items-center justify-center text-black bg-white hover:bg-gray-200 transition-all duration-300 font-bold rounded-full text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-5 uppercase tracking-tighter" 
                  id='button_read'
                >
                  READ MORE
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Element>
  );
};

export default WhyDigital;