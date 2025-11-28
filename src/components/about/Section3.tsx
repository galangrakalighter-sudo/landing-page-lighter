import React from "react";
import Korek from "@/assets/about/korek.png"


const Section3 = () => {
    return (
        <>
        <section id="visiMisi" className="w-full bg-[#161616] text-white px-6 md:px-16 lg:px-24 py-20 font-[Arial,Helvetica,sans-serif]">
      
          {/* VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — TEXT */}
          <div>
            <div className="relative mb-24 md:ml-[10%]">
              {/* <div className="absolute sm:w-32 sm:ml-[45%] sm:mt-[-6%] md:ml-[70%] md:mt-[10%] md:w-32 lg:ml-[50%] lg:mt-[10%] xl:mt-[-5%] xl:ml-[72%] opacity-60">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full titikDiv"/>
                  ))}
                </div>
              </div> */}

              <h2 className="sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 text-white textChange uppercase font-[Arial,Helvetica,sans-serif]">
                OUR VISION
              </h2>

              <p className="max-w-2xl text-lg md:text-xl md:ml-[3%] opacity-80 leading-relaxed mt-6 text-white textChange font-[Arial,Helvetica,sans-serif]">
                Provider media digital yang memberikan keuntungan bagi pengguna jasa-nya
                dan menjadi perusahaan media digital terbaik di Bandung
              </p>
            </div>

            {/* MISSION */}
            <div className="relative md:ml-[10%]">
              {/* <div className="absolute sm:w-32 sm:ml-[50%] sm:mt-[-6%] md:ml-[75%] md:mt-[10%] md:w-32 lg:ml-[58%] lg:mt-[10%] xl:mt-[-6%] xl:ml-[80%] opacity-60">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full titikDiv"/>
                  ))}
                </div>
              </div> */}

              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase font-[Arial,Helvetica,sans-serif]">
                OUR MISSION
              </h2>

              <ul className="text-lg md:text-xl opacity-80 leading-relaxed space-y-4 max-w-3xl pl-5">
                <li className="font-[Arial,Helvetica,sans-serif]">• Membangun organisasi yang profesional dan excellent service</li>
                <li className="font-[Arial,Helvetica,sans-serif]">
                  • Melakukan riset dan development dalam menghadapi tantangan 2025,
                  menyediakan tempat produksi yang lebih besar dan layak untuk meningkatkan kualitas jasa
                </li>
                <li className="font-[Arial,Helvetica,sans-serif]">
                  • Upgrade peralatan digital yang sesuai perkembangan
                </li>
                <li className="font-[Arial,Helvetica,sans-serif]">• Meningkatkan omset hingga 1000%</li>
              </ul>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center">
            <img
              src={Korek}
              alt="Korek"
              className="w-full max-w-md md:mb-[-30%]"
            />
          </div>

        </div>

    </section>
        </>
    )
}

export default Section3