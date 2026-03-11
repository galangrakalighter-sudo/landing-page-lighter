import React from "react";
import Korek from "@/assets/about/korek.png"

const Section3 = () => {
    return (
        <>
        <section id="visiMisi" className="w-full bg-[#161616] text-white px-6 md:px-16 lg:px-24 py-12 md:py-20 lg:py-32 font-[Arial,Helvetica,sans-serif] overflow-hidden">
            
            <div className="max-w-7xl mx-auto">
                {/* VISION & MISSION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">

                    {/* LEFT — TEXT */}
                    <div className="order-1 md:order-1">
                        {/* VISION */}
                        <div className="relative mb-16 md:mb-24 md:ml-[10%]">
                            {/* Commented code preserved exactly as provided */}
                            {/* <div className="absolute sm:w-32 sm:ml-[45%] sm:mt-[-6%] md:ml-[70%] md:mt-[10%] md:w-32 lg:ml-[50%] lg:mt-[10%] xl:mt-[-5%] xl:ml-[72%] opacity-60">
                                <div className="grid grid-cols-6 gap-2">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-white rounded-full titikDiv"/>
                                ))}
                                </div>
                            </div> */}

                            <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-white textChange uppercase font-[Arial,Helvetica,sans-serif] leading-tight">
                                VISI KAMI
                            </h2>

                            <p className="text-lg xs:text-2xl sm:text-3xl md:text-2xl xl:text-4xl md:ml-[3%] opacity-80 leading-relaxed mt-4 md:mt-6 text-white textChange font-[Arial,Helvetica,sans-serif]">
                                Menjadi ekosistem media digital terintegrasi yang profesional
                                dan terpercaya untuk mendorong pertumbuhan bisnis klien secara
                                terukur dan berkelanjutan di Indonesia
                            </p>
                        </div>

                        {/* MISSION */}
                        <div className="relative md:ml-[10%]">
                            {/* <div className="absolute sm:w-32 sm:ml-[50%] sm:mt-[-6%] md:ml-[75%] md:mt-[10%] md:w-32 lg:ml-[58%] lg:mt-[10%] xl:mt-[-6%] xl:ml-[80%] opacity-60">
                                <div className="grid grid-cols-6 gap-2">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-white rounded-full titikDiv"/>
                                ))}
                                </div>
                            </div> */}

                            <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 md:mb-8 tracking-tight uppercase font-[Arial,Helvetica,sans-serif] leading-tight">
                                MISI KAMI
                            </h2>

                            <ul className="text-base xs:text-3xl sm:text-lg md:text-xl opacity-80 leading-relaxed space-y-4 max-w-3xl pl-5">
                                <li className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-[Arial,Helvetica,sans-serif]">• Mengintegrasikan media, layanan spesialis, teknologi, dan commerce dalam satu sistem kerja yang saling terhubung</li>
                                <li className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-[Arial,Helvetica,sans-serif]">
                                    • Menjadikan media sebagai aset traffic dan trust untuk mendukung pertumbuhan bisnis klien
                                </li>
                                <li className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-[Arial,Helvetica,sans-serif]">
                                    • Mengembangkan strategi berbasis data, riset, dan performa yang dapat dipertanggungjawabkan
                                </li>
                                <li className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-[Arial,Helvetica,sans-serif]">• Memanfaatkan teknologi dan AI untuk meningkatkan efisiensi, konsistensi, dan skalabilitas layanan</li>
                                <li className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-[Arial,Helvetica,sans-serif]">• Membangun tim spesialis yang solid dan mandiri di setiap unit agar eksekusi tetap berkualitas</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="flex justify-center order-2 md:order-2 mt-12 md:mt-0">
                        <img
                            src={Korek}
                            alt="Korek"
                            className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl h-auto md:mb-[-30%] object-contain drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>

        </section>
        </>
    )
}

export default Section3