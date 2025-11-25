import React from "react";
import Korek from "@/assets/about/korek.png"


const Section3 = () => {
    return (
        <>
        <section className="w-full bg-[#161616] text-white px-6 md:px-16 lg:px-24 py-20 font-[Arial,Helvetica,sans-serif]">
      
          {/* VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — TEXT */}
          <div>
            <div className="relative mb-24 md:ml-[10%]">
              <div className="absolute md:ml-[24%] w-32 h-32 opacity-60">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase font-[Arial,Helvetica,sans-serif]">
                OUR VISION
              </h2>

              <p className="max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed mt-6 font-[Arial,Helvetica,sans-serif]">
                Provider media digital yang memberikan keuntungan bagi pengguna jasa-nya
                dan menjadi perusahaan media digital terbaik di Bandung
              </p>
            </div>

            {/* MISSION */}
            <div className="relative md:ml-[10%]">
              <div className="absolute md:ml-[27%] md:mt-[-1%] w-32 h-32 opacity-60">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight uppercase font-[Arial,Helvetica,sans-serif]">
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