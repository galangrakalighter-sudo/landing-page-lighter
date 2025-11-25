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
            <section>
                <div className="max-w-8xl mx-auto px-4 pt-[6%] text-center bg-[#161616]">
                    <div className="absolute md:ml-[62%] md:mt-[3%] w-32 h-32">
                    <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60" />
                        ))}
                    </div>
                    </div>
                    <h1 className="text-white text-8xl md:text-8xl font-semibold md:mt-[4%] text-white textChange font-[Arial,Helvetica,sans-serif]">
                    CORE VALUE
                    </h1>

                    <div className="max-w-7xl mt-[3%] mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">

                        {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            
                            {/* Circle */}
                            <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-xl">
                            <img src={item.img} alt={item.label} className="w-16 h-16" />
                            </div>

                            {/* Label */}
                            <p className="text-white tracking-wide text-lg font-[Arial,Helvetica,sans-serif]">
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