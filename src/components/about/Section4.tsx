import React from "react";
import Brief from "@/assets/About/briefcase 1.png"
import Inter from "@/assets/About/intersect 1.png"
import Premium from "@/assets/About/premium 1.png"
import Puzzle from "@/assets/About/puzzle 1.png"
import Team from "@/assets/About/team-leader 1.png"

const Section4 = () => {
    const values = [
        { img: Brief, label: "Professional" },
        { img: Inter, label: "Integrity" },
        { img: Premium, label: "Excellent service" },
        { img: Puzzle, label: "Creativity" },
        { img: Team, label: "Leadership" },
    ];

    return (
        <section className="bg-[#161616]">
            <div className="px-6 py-16 md:py-24 lg:py-32 text-center" id="coreValue">
                
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold textChange font-[Arial,Helvetica,sans-serif] mb-16">
                    CORE VALUE
                </h1>

                {/* Grid System: 2 kolom di mobile, 3 di tablet, 5 di desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 max-w-7xl mx-auto justify-items-center">
                    {values.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center space-y-6 group transition-all duration-300"
                        >
                            {/* Circle */}
                            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
                                <img 
                                    src={item.img} 
                                    alt={item.label} 
                                    className="w-14 h-14 sm:w-20 sm:h-20 object-contain" 
                                />
                            </div>

                            {/* Label */}
                            <p className="text-white tracking-widest text-xs sm:text-sm md:text-base font-bold uppercase font-[Arial,Helvetica,sans-serif] textChange max-w-[150px] leading-tight">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section4;