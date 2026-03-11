// import React from "react";
// import Brief from "@/assets/About/briefcase 1.png"
// import Coffee from "@/assets/About/coffee_shop.png"
// import DKW from "@/assets/About/DKW.png"
// import Gafi from "@/assets/About/gafi.png"
// import { Link } from "react-router-dom";
// import Harlexis from "@/assets/About/harlezis.png"
// import Italy from "@/assets/About/italy_express.png"
// import Padimas from "@/assets/About/padimas.png"
// import Reunion from "@/assets/About/Reunion.png"
// import Warung from "@/assets/About/warung_happy.png"
// import Ignite from "@/assets/About/ignite.png"
// import Susu from "@/assets/About/susu_sapi.png"
// import Jari from "@/assets/About/jari_jari.png"
// import Rista from "@/assets/About/rista.png"
// import Foto_8 from "@/assets/About/foto_8.png"
// import Ardan from "@/assets/About/ardan.png"
// import Kubik from "@/assets/About/kubik.png"
// import Wuling from "@/assets/About/wuling.png"
// import JariBeauty from "@/assets/About/jari_beauty.png"
// import LogoLoop from '@/components/LogoLoop';
// const Section5 = () => {
//     const imageLogos = [
//       { src: Gafi, alt: "Gafi"},
//       { src: Reunion, alt: "Reunion"},
//       { src: DKW, alt: "DKV"},
//       { src: Coffee, alt: "Coffee"},
//       { src: Padimas, alt: "Padimas"},
//       { src: Italy, alt: "Italy"},
//       { src: Warung, alt: "Warung"},
//       { src: Harlexis, alt: "Harlexis"},
//       { src: Ignite, alt: "Ignite"},
//       { src: Susu, alt: "Susu Sapi"},
//       { src: JariBeauty, alt: "Jari Jari Beauty"},
//       { src: Rista, alt: "Rista"},
//       { src: Foto_8, alt: "Foto"},
//       { src: Ardan, alt: "Ardan"},
//       { src: Kubik, alt: "Kubik"},
//       { src: Jari, alt: "Jari Jari"},
//       { src: Wuling, alt: "Wuling"},
//     ];
//     return (
//         <section className="bg-[#161616] text-white xs:pt-[10vw] sm:pt-[5vw] md:pt-[5vw] lg:pt-[5vw] xl:pt-[5vw]" id="ourClient">
//       {/* TITLE + DESCRIPTION */}
//       <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* LEFT TITLE */}
//         <div>
//           <h1 className="xs:text-4xl font-extrabold sm:text-5xl md:text-6xl md:ml-[10%] lg:ml-[-1%] lg:text-7xl xl:text-7xl font-[Arial,Helvetica,sans-serif] text-white">
//             OURS CLIENT
//           </h1>

//         </div>

//         {/* RIGHT DESCRIPTION */}
//         <div className="flex items-start">
//           <h5 className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl leading-relaxed sm:text-start md:text-end font-[Arial,Helvetica,sans-serif]">
//             Berpengalaman melayani ratusan klien, kami memahami kebutuhan
//             bisnis Anda secara mendalam.
//           </h5>
//         </div>
//       </div>

//       {/* Client Grid - Static & High Contrast */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
//         {imageLogos.map((client, index) => (
//           <div 
//             key={index} 
//             className="group relative bg-[#0a0a0a] p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.02]"
//           >
//             {/* Logo Area */}
//             <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
//               <img 
//                 src={client.src} 
//                 alt={client.alt}
//                 className="h-16 sm:h-24 md:h-24 w-auto object-contain brightness-90 group-hover:brightness-100"
//               />
//             </div>

//             <div className="mt-6 text-center relative z-10">
//               <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors uppercase">
//                 {client.alt}
//               </h3>
//             </div>
            
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//               <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.07] to-transparent"></div>
//             </div>
//           </div>
//         ))}

//         {/* TOMBOL DI DALAM GRID - Menggunakan col-span */}
//         <div className="col-span-2 md:col-span-4 bg-[#111111] flex justify-center items-center p-10 border-t border-white/5">
//           <Link
//             to="/tentang#tentang"
//             className="group inline-flex items-center justify-center text-black bg-white transition-all duration-300 font-bold rounded-full text-sm sm:text-base px-10 py-4 uppercase tracking-widest"
//           >
//             Lihat Selengkapnya
//           </Link>
//         </div>
//       </div>
//     </section>
//     )
// }

// export default Section5