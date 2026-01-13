import { useState } from "react";
import Image1 from "@/assets/home/image1-eksplor.png"
import Image2 from "@/assets/home/File-Department_05.png"
import Image3 from "@/assets/home/image5-eksplor.png"
import Image4 from "@/assets/home/image2-eksplor.png"
import Image5 from "@/assets/home/image4-eksplor.png"

const divisions = [
  {
    id: "raddine",
    title: "BRANDING",
    badge: "Branding",
    desc: `Partnership terpercaya Anda, memberikan excellent branding service. RADDINE adalah mitra strategis Anda dalam membangun identitas merek yang kuat.`,
    image: Image1,
  },
  {
    id: "digimark",
    title: "DIGITAL MARKETING",
    badge: "Marketing",
    desc: `Memberikan jasa dokumentasi terbaik untuk kebutuhan event Anda. Tim multimedia kami siap mengabadikan setiap momen penting dengan kualitas profesional.`,
    image: Image2,
  },
  {
    id: "mcn",
    title: "MCN.",
    badge: "MCN",
    desc: `Pelayanan jasa terbaik untuk digital marketing Anda. Tingkatkan kehadiran digital Anda dengan strategi marketing online yang efektif.`,
    image: Image3,
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA.",
    badge: "Multimedia",
    desc: `Memberikan pelatihan SDM berkualitas dengan skill yang teruji. Lighter Academy berkomitmen untuk mengembangkan talenta melalui program pelatihan.`,
    image: Image4,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    badge: "Academy",
    desc: `Memberikan management influencer dan talent yang terpercaya. EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: Image5,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    badge: "Academy",
    desc: `Memberikan management influencer dan talent yang terpercaya. EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: Image5,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    badge: "Academy",
    desc: `Memberikan management influencer dan talent yang terpercaya. EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: Image5,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    badge: "Academy",
    desc: `Memberikan management influencer dan talent yang terpercaya. EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: Image5,
  },
];

const Jelajah = () => {
  return (
    <section id="eksplorasi" className="py-16 md:py-24 bg-[#161616] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        <h2 className="text-white text-3xl md:text-5xl font-semibold textChange font-[Arial,Helvetica,sans-serif] tracking-tight">
          JELAJAHI
        </h2>

        <p className="mt-2 text-3xl md:text-5xl font-extrabold text-white mb-16 textChange font-[Arial,Helvetica,sans-serif]">
          DIVISION OF MEDIA GROUP
        </p>

        {/* GRID CONFIGURATION:
            - grid-cols-2: Tampilan HP & Tablet (2 ke samping)
            - lg:grid-cols-4: Tampilan Laptop & PC (4 ke samping)
        */}
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
                {/* Badge/Tag */}
                {/* <div className="mb-8">
                  <span className="inline-flex items-center bg-white/10 border border-white/20 text-white text-xl sm:text-xl md:text-xl font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-widest">
                    <svg className="w-10 h-10 sm:w-10 sm:h-10 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/>
                    </svg>
                    {item.badge}
                  </span>
                </div> */}

                <h5 className="mt-3 mb-2 sm:mt-4 sm:mb-3 text-sm sm:text-2xl md:text-2xl tracking-tight text-white leading-tight min-h-[2.5rem] sm:min-h-[3rem] font-[Arial,Helvetica,sans-serif] font-bold whitespace-nowrap">
                  {item.title}
                </h5>

                <p className="text-gray-400 sm:text-xl md:text-xl lg:text-xl sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
                  {item.desc}
                </p>

                {/* Read More Button - Ukuran disesuaikan agar muat di grid 2 kolom HP */}
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center justify-center w-full text-black bg-white hover:bg-gray-200 transition-colors font-bold rounded-full text-[9px] sm:text-xs px-3 py-2 sm:px-5 sm:py-2.5 uppercase tracking-tighter">
                    Read more
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