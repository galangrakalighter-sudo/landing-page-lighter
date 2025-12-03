import Phone from '@/assets/home/phone.png'
import { Element } from "react-scroll";
import React from "react";
import Aurora from '@/components/Aurora';
import GradientText from '@/components/GradientText';

const WhyDigital: React.FC = () => {
  return (
    <Element name="collect-section">

    <section id="why-digital-marketing-section" className="text-white py-16">
  <div className="relative max-w-6xl mx-auto px-4 z-20">
    <div className="flex flex-col md:flex-row items-center">

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center">
        <div className="w-full flex justify-center">
          {/* Mobile Image */}
          <img src={Phone} alt="Visual Marketing Digital Mobile" className="block md:hidden w-[70%]"/>

          {/* Desktop Image */}
          <img src={Phone} alt="Visual Marketing Digital Desktop" className="hidden md:block w-[90%] mr-[15%]"/>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-y-2">
            <GradientText colors={["#b6c9c0ff", "#606572ff", "#b6c9c0ff", "#606572ff", "#b6c9c0ff"]} animationSpeed={3} showBorder={false} className="custom-class font-[Arial,Helvetica,sans-serif] md:text-[5vw] md:mr-[10%] xl:text-[4vw] xl:mr-[21%]" id="gradienTeks1">KENAPA LIGHTER</GradientText>

          <h1 className="text-4xl sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif]" id="teks_biasa1" style={{ display: "none" }}>
            KENAPA LIGHTER
          </h1>

            <GradientText colors={["#b6c9c0ff", "#606572ff", "#b6c9c0ff", "#606572ff", "#b6c9c0ff"]} animationSpeed={3} showBorder={false} className="custom-class font-[Arial,Helvetica,sans-serif] md:text-[5vw] md:mr-[26%] md:mt-[-3%] xl:text-[4vw] xl:mr-[35%]" id='gradienTeks2'>MEDIA GROUP</GradientText>
          
          <h1 className="text-4xl sm:text-5xl md:text-[5vw] lg:text-7xl xl:text-[4vw] mb-0 whitespace-nowrap font-[Arial,Helvetica,sans-serif] md:mt-[3%]" id="teks_biasa2" style={{ display: "none" }}>
            MEDIA GROUP
          </h1>
        </div>

        <p className="mt-4 text-white mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl md:mx-0 font-[Arial,Helvetica,sans-serif]" id='paragraf_sec1'>
          Lighter Media Group bukan sekadar penyedia jasa digital. Kami adalah ekosistem media terintegrasi yang memahami bahwa Landscape Digital Berubah dan Brand Harus Mengikuti. Dengan kanal media yang kami kelola sendiri, termasuk platform news sebagai generator traffic, kami tidak hanya membuat brand terlihat kami menempatkannya tepat di pusat perhatian digital
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

export default WhyDigital;
