import Phone from '@/assets/phone.png'
import { Element } from "react-scroll";
import React from "react";

const Collections: React.FC = () => {
  return (
    <Element name="collect-section">
    <section id="why-digital-marketing-section" className="text-white py-16" style={{ backgroundColor: "#161616" }}>
  <div className="relative max-w-6xl mx-auto px-4 z-20">
    <div className="flex flex-col md:flex-row items-center">

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center">
        <div className="w-full flex justify-center">
          {/* Mobile Image */}
          <img
            src={Phone}
            alt="Visual Marketing Digital Mobile"
            className="block md:hidden w-[70%]"
          />

          {/* Desktop Image */}
          <img
            src={Phone}
            alt="Visual Marketing Digital Desktop"
            className="hidden md:block w-[90%] mr-[45%]"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                        font-extrabold mb-0 whitespace-nowrap 
                        font-[Arial,Helvetica,sans-serif]">
            WHY DIGITAL
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                        font-extrabold mb-0 whitespace-nowrap 
                        font-[Arial,Helvetica,sans-serif]">
            MARKETING
          </h1>
        </div>

        <p className="mt-4 text-white opacity-70 mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl md:mx-0 font-[Arial,Helvetica,sans-serif]" id='paragraf_sec1'>
          Mengapa Digital Marketing? Dunia semakin digital. Untuk bisnis Anda tetap 
          relevan dan berkembang, kehadiran online adalah suatu keharusan. Memungkinkan 
          Anda menjangkau lebih banyak pelanggan, menjangkau kinerja dengan lebih akurat.
        </p>

        <div className="flex justify-center md:justify-start">
          <a href="#" className="mt-6 px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 border border-white rounded-full font-medium hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg" id='button_read'>
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

export default Collections;
