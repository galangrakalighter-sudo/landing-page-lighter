// src/components/FlipCard.tsx
import React from "react";

interface FlipCardProps {
  image: string; // path atau import gambar
}

export default function FlipCard({ image }: FlipCardProps) {
  return (
    <div className="group relative w-[100%] lg:h-[400px] [perspective:1000px] lg:ml-[11%]">
      {/* CARD CONTENT */}
      <div className="relative w-full h-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 bg-[#151515] text-white rounded-xl overflow-hidden [backface-visibility:hidden]">
          
          {/* 🖼️ Gambar dari props */}
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="z-10 text-xl font-semibold font-[Arial,Helvetica,sans-serif]">Hover Me</p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-xl bg-[#151515] text-white p-4 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <small className="bg-[#20c997] text-black px-2 py-1 rounded-md w-fit text-xs">
            Pasta
          </small>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold font-[Arial,Helvetica,sans-serif]">Spaghetti Bolognese</p>

            <p className="text-sm opacity-80">
              30 Mins • 1 Serving
            </p>
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
