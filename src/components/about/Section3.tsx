import React from "react";



const Section3 = () => {
    return (
        <>
        <section className="w-full bg-black text-white px-6 md:px-16 lg:px-24 py-20 font-[Arial,Helvetica,sans-serif]">
      
      {/* VISION */}
      <div className="relative mb-24">
        {/* Decorative Dots */}
        <div className="absolute md:ml-[24%] md:mt-[-1%] w-32 h-32">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60" />
            ))}
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase font-[Arial,Helvetica,sans-serif]">
          OUR VISION
        </h2>

        <p className="max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed mt-6 font-[Arial,Helvetica,sans-serif]">
          Provider media digital yang memberikan keuntungan bagi pengguna jasa-nya dan menjadi perusahaan media digital terbaik di Bandung
        </p>
      </div>

      {/* MISSION */}
      <div className="relative">
        {/* Decorative Dots */}
        <div className="absolute md:ml-[24%] md:mt-[-1%] w-32 h-32">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60" />
            ))}
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight uppercase font-[Arial,Helvetica,sans-serif]">
          OUR MISSION
        </h2>

        <ul className="text-lg md:text-xl opacity-80 leading-relaxed space-y-4 max-w-3xl pl-5">
          <li className="font-[Arial,Helvetica,sans-serif]">• Membangun organisasi yang profesional dan excellent service</li>
          <li className="font-[Arial,Helvetica,sans-serif]">
            • Melakukan riset dan development dalam menghadapi tantangan 2025 Menyediakan tempat produksi yang lebih besar dan layak untuk meningkatkan kualitas jasa
          </li>
          <li className="font-[Arial,Helvetica,sans-serif]">
            • Upgrade peralatan digital yang sesuai perkembangan
          </li>
          <li className="font-[Arial,Helvetica,sans-serif]">• Meningkatkan omset hingga 1000%</li>
        </ul>
      </div>
    </section>
        </>
    )
}

export default Section3