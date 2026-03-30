import { useState } from "react";
import Image1 from "@/assets/home/raja.jpeg"
import Image2 from "@/assets/home/ratu.jpeg"
import Image3 from "@/assets/home/gajah (2).jpeg"
import Image4 from "@/assets/home/gajah.jpeg"
import Image5 from "@/assets/home/benteng.jpeg"
import Image6 from "@/assets/home/pion.jpeg"
import Image7 from "@/assets/home/kuda.jpeg"
import Image8 from "@/assets/home/ratu.jpeg"
import Image9 from "@/assets/home/pion.jpeg"

const divisions = [
  {
    id: "raddine",
    title: "BRANDING",
    badge: "Branding",
    desc: `Kami membantu brand membangun identitas yang jelas dan konsisten agar relevan dan mudah dikenali di berbagai kanal digital.`,
    image: Image1,
    url: "/branding"
  },
  {
    id: "digimark",
    title: "DIGITAL MARKETING",
    badge: "Marketing",
    desc: `Kami membantu bisnis menjangkau target yang tepat dan mendorong penjualan melalui strategi pemasaran digital terarah dan terukur.`,
    image: Image2,
    url: "/digital_marketing"
  },
  {
    id: "mcn",
    title: "MULTI CHANEL NETWORK",
    badge: "MCN",
    desc: `Kami menghubungkan kreator dengan brand untuk kolaborasi konten yang relevan dan bernilai bagi kedua pihak.`,
    image: Image3,
    url: "/mcn"
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA",
    badge: "Multimedia",
    desc: `Kami menyediakan produksi konten visual dan video untuk mendukung kebutuhan media dan komunikasi brand.`,
    image: Image4,
    url: "/multimedia"
  },
  {
    id: "academy",
    title: "ACADEMY",
    badge: "Academy",
    desc: `Kami menyediakan program edukasi dan pelatihan untuk pengembangan skill di bidang media dan digital.`,
    image: Image5,
    url: "/academy"
  },
  {
    id: "academy",
    title: "TECHNOLOGY",
    badge: "Technology",
    desc: `Kami menyediakan solusi teknologi dan AI untuk mendukung sistem digital, automasi, dan kebutuhan bisnis.`,
    image: Image6,
    url: "/tech"
  },
  {
    id: "academy",
    title: "EVENT ORGANIZER",
    badge: "Event Organizer",
    desc: `Kami merancang dan mengeksekusi acara untuk mendukung aktivasi brand, komunitas, dan kebutuhan bisnis.`,
    image: Image7,
    url: "/event_organizer"
  },
  {
    id: "academy",
    title: "ECOMMERCE",
    badge: "Ecommerce",
    desc: `Kami membantu bisnis mengelola serta mengoptimalkan penjualan melalui kanal e-commerce.`,
    image: Image8,
    url: "/ecommerce"
  },
];

const Jelajah = () => {
  return (
    <section id="eksplorasi" className="py-16 md:py-24 bg-[#161616] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        <h2 className="text-white text-3xl md:text-5xl font-semibold textChange font-[Arial,Helvetica,sans-serif] tracking-tight">
          JELAJAHI EKOSISTEM MEDIA DIGITAL
        </h2>

        <p className="mt-2 text-3xl md:text-5xl font-semibold text-white mb-16 textChange font-[Arial,Helvetica,sans-serif]">
          TERINTEGRASI LIGHTER MEDIA GROUP
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {divisions.map((item) => (
            <div key={item.id} className="bg-[#1f1f1f] border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col text-left transition-all duration-300 hover:border-white/30 hover:-translate-y-2">
              
              {/* Image Section */}
              <div className="relative h-32 sm:h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">

                <h5 className="mt-2 mb-2 sm:mt-4 sm:mb-3 text-sm sm:text-2xl md:text-2xl tracking-tight text-white leading-tight min-h-[2.5rem] sm:min-h-[3rem] font-[Arial,Helvetica,sans-serif] font-bold">
                  {item.title}
                </h5>

                <p className="text-gray-400 sm:text-xl md:text-xl lg:text-[17px] sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {item.desc}
                </p>

                {/* Read More Button - Ukuran disesuaikan agar muat di grid 2 kolom HP */}
                <div className="mt-auto">
                  <a href={item.url} className="inline-flex items-center justify-center w-full text-black bg-white hover:bg-gray-200 transition-colors font-bold rounded-full text-[9px] sm:text-xs px-3 py-2 sm:px-5 sm:py-2.5 uppercase tracking-tighter">
                    info lengkap
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ms-1 sm:ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
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