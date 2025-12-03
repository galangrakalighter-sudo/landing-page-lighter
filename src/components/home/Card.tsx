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
    <div className="group relative w-[100%] h-[500px] sm:w-[100%] sm:h-[500px] lg:w-[112%] lg:h-[400px] lg:ml-[-4%] [perspective:1000px] lg:ml-[11%] xl:ml-[-6%]">
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
          <small className="bg-[#20c997] text-black px-2 py-1 rounded-md w-fit text-xs">
            {product}
          </small>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold font-[Arial,Helvetica,sans-serif]">{text}</p>
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
