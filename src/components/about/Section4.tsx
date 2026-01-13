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
        <>
            <section className="bg-[#161616] overflow-hidden">
                <div className="px-6 py-16 md:py-24 lg:py-32 text-center bg-[#161616]" id="coreValue">
                    
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold textChange font-[Arial,Helvetica,sans-serif] mb-12">
                        CORE VALUE
                    </h1>

                    <div className="flex flex-nowrap overflow-x-auto md:overflow-x-auto snap-x snap-mandatory justify-start md:justify-start lg:justify-center gap-6 md:gap-10 pb-8 custom-scrollbar">
                        {values.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center space-y-6 flex-shrink-0 w-[70%] sm:w-[40%] md:w-[30%] lg:w-[18%] snap-center transition-transform duration-300 hover:scale-105"
                            >
                                
                                {/* Circle */}
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    <img 
                                        src={item.img} 
                                        alt={item.label} 
                                        className="w-20 h-20 sm:w-20 sm:h-20 object-contain" 
                                    />
                                </div>

                                {/* Label */}
                                <p className="text-white tracking-widest text-sm sm:text-base md:text-lg font-bold uppercase font-[Arial,Helvetica,sans-serif] textChange">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4;