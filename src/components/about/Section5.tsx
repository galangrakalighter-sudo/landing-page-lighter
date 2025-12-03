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
        <section className="bg-[#161616] text-white xs:pt-[10vw] sm:pt-[5vw] md:pt-[5vw] lg:pt-[5vw] xl:pt-[5vw]" id="ourClient">
      {/* TITLE + DESCRIPTION */}
      <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT TITLE */}
        <div>
          <h1 className="xs:text-4xl sm:text-5xl md:text-6xl md:ml-[10%] lg:ml-[-1%] xl:text-7xl font-[Arial,Helvetica,sans-serif] text-white">
            OURS CLIENT
          </h1>

        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="flex items-start">
          <h5 className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-4xl leading-relaxed sm:text-start md:text-end font-[Arial,Helvetica,sans-serif]">
            Berpengalaman melayani ratusan klien, kami memahami kebutuhan
            bisnis Anda secara mendalam.
          </h5>
        </div>
      </div>

      {/* TOP LINE */}
      <div className="mx-auto mt-10 border-t border-white/30"></div>

      {/* CLIENT LOGOS */}
      <div className="mx-auto flex flex-warp justify-center gap-12 py-12 w-full">
        <LogoLoop logos={imageLogos} speed={120} direction="left" logoHeight={120} gap={40} hoverSpeed={0} scaleOnHover ariaLabel="Technology partners"/>
      </div>

        {/* <div className="w-full overflow-hidden py-12">
          <marquee width="100%" direction="left" scrollamount={15}>
            <div className="inline-flex gap-6">
              {imageLogos.map((logo, i) => (
                <img key={i} src={logo.src} />
              ))}
            </div>
          </marquee>
        </div> */}

      {/* BOTTOM LINE */}
      <div className=" mx-auto border-t border-white/30"></div>
    </section>
    )
}

export default Section5