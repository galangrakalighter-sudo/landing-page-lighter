import { useState } from "react";
import Raja from "@/assets/home/raja.png"
import Gajah from "@/assets/home/gajah.png"
import Benteng from "@/assets/home/benteng.png"
import Pion from "@/assets/home/pion.png"
import Kuda from "@/assets/home/kuda.png"

const divisions = [
  {
    id: "raddine",
    title: "BRANDING",
    badge: "Raddine Branding",
    desc: `Kami membantu brand membangun identitas yang jelas dan konsisten agar relevan dan mudah dikenali di berbagai kanal digital.`,
    image: Gajah,
    url: "/branding"
  },
  {
    id: "digimark",
    title: "DIGITAL MARKETING",
    badge: "LGTR Digital Marketing",
    desc: `Kami membantu bisnis menjangkau target yang tepat dan mendorong penjualan melalui strategi pemasaran digital terarah dan terukur.`,
    image: Gajah,
    url: "/digital_marketing"
  },
  {
    id: "mcn",
    title: "MULTI CHANEL NETWORK",
    badge: "EIKYOO MCN",
    desc: `Kami menghubungkan kreator dengan brand untuk kolaborasi konten yang relevan dan bernilai bagi kedua pihak.`,
    image: Kuda,
    url: "/mcn"
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA",
    badge: "Lighter Multimedia",
    desc: `Kami menyediakan produksi konten visual dan video untuk mendukung kebutuhan media dan komunikasi brand.`,
    image: Pion,
    url: "/multimedia"
  },
  {
    id: "academy",
    title: "ACADEMY",
    badge: "Lighter Academy",
    desc: `Kami menyediakan program edukasi dan pelatihan untuk pengembangan skill di bidang media dan digital.`,
    image: Benteng,
    url: "/academy"
  },
  {
    id: "academy",
    title: "TECHNOLOGY",
    badge: "Lighter Technology",
    desc: `Kami menyediakan solusi teknologi dan AI untuk mendukung sistem digital, automasi, dan kebutuhan bisnis.`,
    image: Kuda,
    url: "/tech"
  },
  {
    id: "academy",
    title: "EVENT ORGANIZER",
    badge: "Lumina Event",
    desc: `Kami merancang dan mengeksekusi acara untuk mendukung aktivasi brand, komunitas, dan kebutuhan bisnis.`,
    image: Pion,
    url: "/event_organizer"
  },
  {
    id: "academy",
    title: "ECOMMERCE",
    badge: "E-commers Lab",
    desc: `Kami membantu bisnis mengelola serta mengoptimalkan penjualan melalui kanal e-commerce.`,
    image: Benteng,
    url: "/ecommerce"
  },
];

const Jelajah = () => {
  return (
    <section id="eksplorasi" className="py-16 md:py-24 bg-[#161616] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section - Responsif Text Size */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight font-[Arial,Helvetica,sans-serif]">
            JELAJAHI EKOSISTEM MEDIA DIGITAL
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-5xl font-semibold text-white font-[Arial,Helvetica,sans-serif]">
            TERINTEGRASI LIGHTER MEDIA GROUP
          </p>
        </div>

        {/* Grid System - 2 Kolom di HP, 4 di Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {divisions.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#1f1f1f] border border-white/10 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col text-left transition-all duration-300 hover:border-white/30 hover:-translate-y-2"
            >
              
              {/* Image Section - Menggunakan Aspect Ratio agar konsisten di semua layar */}
              <div className="relative h-[48%] min-h-[150px] sm:min-h-[180px] overflow-hidden bg-gradient-to-b from-[#252525] to-[#1f1f1f]">
                
                {/* Badge - Ukuran adaptif */}
                <div className="absolute top-4 left-3 sm:top-6 sm:left-5 z-10">
                    <h3 className="mb-1 sm:mb-3 text-xs sm:text-lg md:text-xl lg:text-2xl tracking-tight text-white leading-tight font-bold font-[Arial,Helvetica,sans-serif] min-h-[32px] sm:min-h-[48px] flex flex-col justify-center">
                      {item.badge.split(' ').map((word, index) => (
                        <span key={index} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                </div>

                <img 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  src={item.image} 
                  alt={item.title} 
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Section - Padding adaptif */}
              <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-grow">

                <h3 className="mb-1 sm:mb-3 text-xs sm:text-lg md:text-xl lg:text-2xl tracking-tight text-white leading-tight font-bold font-[Arial,Helvetica,sans-serif] min-h-[32px] sm:min-h-[48px] flex items-center">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[10px] sm:text-sm md:text-base leading-relaxed mb-4 line-clamp-3 sm:line-clamp-none">
                  {item.desc}
                </p>

                {/* Button - Menyesuaikan ukuran layar HP yang sempit */}
                <div className="mt-auto">
                  <a 
                    href={item.url} 
                    className="inline-flex items-center justify-center w-full text-black bg-white hover:bg-gray-200 transition-all duration-300 font-bold rounded-full text-[8px] sm:text-xs px-2 py-2 sm:px-5 sm:py-2.5 uppercase tracking-tighter active:scale-95"
                  >
                    info lengkap
                    <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 ms-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Jelajah;