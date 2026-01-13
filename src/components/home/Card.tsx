// src/components/FlipCard.tsx
import React from "react";

interface FlipCardProps {
  id: string;
  image: string; // path atau import gambar
  product: string;
  text: string;
  title: string;
}

export default function FlipCard({ image, product, text, id, title }: FlipCardProps) {
  return (
    <div className="group relative w-[100%] h-[500px] sm:w-[100%] sm:h-[500px] lg:w-[112%] lg:h-[400px] lg:ml-[-4%] [perspective:1000px] xl:ml-[-6%]">
      {/* CARD CONTENT */}
      <div className="relative w-full h-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border border-white lg:w-[100%] lg:mx-auto" key={id}>
        {/* FRONT */}
        <div className="absolute inset-0 bg-[#151515] text-white rounded-xl w-[100%] h-[100%] [backface-visibility:hidden]">
          
          {/* 🖼️ Gambar dari props */}
          <img
            src={image}
            alt="card-image"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="z-10 text-xl font-semibold font-[Arial,Helvetica,sans-serif]">{title}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-xl bg-[#151515] text-white p-4 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="p-6 text-center">
              <a href="#">
                  <img className="rounded-t-base xs:h-[40%] xs:w-[100%]" src={image} alt="" />
              </a>
              <a href="#">
                  <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{text}</h5>
              </a>
              <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                  Read more
                  <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
              </a>
          </div>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 2.6s linear infinite;
        }
      `}</style>
    </div>
  );
}
