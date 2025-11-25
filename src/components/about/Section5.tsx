import React from "react";
import Brief from "@/assets/About/briefcase 1.png"
const Section5 = () => {
    const clients = [
        Brief,
        "/logos/reunion.png",
        "/logos/dkw.png",
        "/logos/logo4.png",
        "/logos/padimas.png",
        "/logos/ttals.png",
        "/logos/warunghappy.png",
        "/logos/harkezis.png",
    ];
    return (
        <section className="bg-black text-white py-20">
      {/* TITLE + DESCRIPTION */}
      <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT TITLE */}
        <div>
          <h1 className="text-[70px] md:text-[90px] font-extrabold leading-none">
            OURS<br />CLIENT
          </h1>

          {/* Dotted decorative element */}
          <div className="mt-4 grid grid-cols-10 gap-1 w-40 opacity-50">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="flex items-center">
          <h5 className="text-xl md:text-2xl leading-relaxed">
            Berpengalaman melayani ratusan klien, kami memahami kebutuhan
            bisnis Anda secara mendalam.
          </h5>
        </div>
      </div>

      {/* TOP LINE */}
      <div className="max-w-[1350px] mx-auto mt-10 border-t border-white/30"></div>

      {/* CLIENT LOGOS */}
      <div className="max-w-[1350px] mx-auto px-6 flex flex-wrap justify-center gap-12 py-12">
        {clients.map((logo, i) => (
          <div key={i} className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src={logo} alt="client" className="w-[85%] h-[85%] object-contain" />
          </div>
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div className="max-w-[1350px] mx-auto border-t border-white/30"></div>
    </section>
    )
}

export default Section5