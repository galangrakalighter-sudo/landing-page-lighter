import React from "react";
import Brief from "@/assets/About/briefcase 1.png"
import Coffee from "@/assets/About/coffee_shop.png"
import DKW from "@/assets/About/DKW.png"
import Gafi from "@/assets/About/gafi.png"
import Harlexis from "@/assets/About/harlezis.png"
import Italy from "@/assets/About/italy_express.png"
import Padimas from "@/assets/About/padimas.png"
import Reunion from "@/assets/About/Reunion.png"
import Warung from "@/assets/About/warung_happy.png"
import Ignite from "@/assets/About/ignite.png"
import Susu from "@/assets/About/susu_sapi.png"
import Jari from "@/assets/About/jari_jari.png"
import Rista from "@/assets/About/rista.png"
import Foto_8 from "@/assets/About/foto_8.png"
import Ardan from "@/assets/About/ardan.png"
import Kubik from "@/assets/About/kubik.png"
import Wuling from "@/assets/About/wuling.png"
import JariBeauty from "@/assets/About/jari_beauty.png"
import LogoLoop from '@/components/LogoLoop';
const Section5 = () => {
    const clients = [
        Gafi,
        Reunion,
        DKW,
        Coffee,
        Padimas,
        Italy,
        Warung,
        Harlexis,
        Ignite,
        Susu,
        JariBeauty,
        Rista,
        Foto_8,
        Ardan,
        Kubik,
        Jari,
        Wuling
    ];
    const imageLogos = [
      { src: Gafi, alt: "Gafi"},
      { src: Reunion, alt: "Reunion"},
      { src: DKW, alt: "DKV"},
      { src: Coffee, alt: "Coffee"},
      { src: Padimas, alt: "Padimas"},
      { src: Italy, alt: "Italy"},
      { src: Warung, alt: "Warung"},
      { src: Harlexis, alt: "Harlexis"},
      { src: Ignite, alt: "Ignite"},
      { src: Susu, alt: "Susu Sapi"},
      { src: JariBeauty, alt: "Jari Jari Beauty"},
      { src: Rista, alt: "Rista"},
      { src: Foto_8, alt: "Foto"},
      { src: Ardan, alt: "Ardan"},
      { src: Kubik, alt: "Kubik"},
      { src: Jari, alt: "Jari Jari"},
      { src: Wuling, alt: "Wuling"},
    ];
    return (
        <section className="bg-[#161616] text-white py-20 sm:pt-[30%] xl:pt-[15%]">
      {/* TITLE + DESCRIPTION */}
      <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT TITLE */}
        <div>
          {/* Dotted decorative element */}
          {/* <div className="absolute sm:ml-[60%] md:mt-[-3%] md:ml-[34%] lg:ml-[32%] xl:mt-[5%] xl:ml-[27%] w-32">
            <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60" />
                ))}
            </div>
          </div> */}
          <h1 className="text-[70px] md:text-[52px] md:ml-[-5%] lg:ml-[10%] xl:text-8xl font-[Arial,Helvetica,sans-serif] text-white">
            OURS CLIENT
          </h1>

        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="flex items-right">
          <h5 className="text-xl md:text-1xl xl:text-5xl leading-relaxed sm:text-start md:text-end font-[Arial,Helvetica,sans-serif]">
            Berpengalaman melayani ratusan klien, kami memahami kebutuhan
            bisnis Anda secara mendalam.
          </h5>
        </div>
      </div>

      {/* TOP LINE */}
      <div className="mx-auto mt-10 border-t border-white/30"></div>

      {/* CLIENT LOGOS */}
      <div className="mx-auto flex flex-wrap justify-center gap-12 py-12">
        <LogoLoop logos={imageLogos} speed={120} direction="left" logoHeight={120} gap={40} hoverSpeed={0} scaleOnHover fadeOut
        ariaLabel="Technology partners"
      />
      </div>

      {/* BOTTOM LINE */}
      <div className=" mx-auto border-t border-white/30"></div>
    </section>
    )
}

export default Section5