import React from "react";
import Phone from "@/assets/phone.png"
import About_sec1 from "@/assets/About/About-sec1.png"
import Garis from "@/assets/garis.png"
import Garis_Hitam from "@/assets/garis_hitam.png"

const Section2 = () => {
    return (
        <>
    <section id="about_us" className="text-white py-16 bg-[#161616]">
        <div className="relative max-w-6xl mx-auto px-4 z-20">
            <div className="flex flex-col md:flex-row items-center">

            {/* IMAGE SECTION */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center">
                <div className="w-full flex justify-center">
                {/* Desktop Image */}
                <img src={About_sec1} alt="Visual Marketing Digital Desktop" className="md:block w-[100%] mr-[1%] md:mr-0 md:w-[100%]"/>
                </div>
            </div>

            {/* TEXT SECTION */}
            <div className="w-full md:w-1/2 text-center sm:text-left sm:ml-[15%] md:text-left">
                <p className="xs:mt-0 text-white text-xl sm:text-lg md:text-2xl lg:text-2xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl md:mx-0 font-[Arial,Helvetica,sans-serif] textChange">
                Lighter Media Group adalah perusahaan jasa media digital yang berlokasi di Bandung.
                Perusahaan ini berdiri pada tahun 2018. Lighter Media Group berawal dari studio kecil
                dengan sumber daya terbatas. Lighter Media Group menyediakan solusi yang membantu bisnis
                Anda tumbuh di era digita, tim bekerja dengan standar profesional agar setiap layanan
                menghasilkan dampak yang jelas
                </p>
            </div>

            </div>
        <div className="grid grid-cols-3 xs:pt-[5%] text-center md:pt-[5%]">
                {/* CLIENT */}
                <div className="p-6">
                    <p className="xs:text-3xl xs:ml-[-10%] font-extrabold sm:ml-[20%] md:mr-[18%] lg:mr-[20%] text-white textChange">100&nbsp;+</p>
                    <p className="xs:mt-3 xs:mr-[5%] text-gray-400 text-xs text-white textChange font-medium md:mr-[3%] md:text-[100%]">CLIENT</p>
                </div>

                {/* PARTNERSHIP */}
                <div className="p-6">
                    <p className="xs:text-3xl xs:ml-[10%] font-extrabold text-white textChange md:ml-[4%]">50&nbsp;+</p>
                    <p className="xs:mt-3 xs:ml-[-10%] text-gray-400 text-xs text-white textChange font-medium md:ml-[4%] md:text-[100%]">PARTNERSHIP</p>
                </div>

                {/* BUSINESS */}
                <div className="p-6">
                    <p className="xs:text-3xl font-extrabold text-white textChange md:ml-[4%]">8 Y</p>
                    <p className="xs:mt-3 text-gray-400 text-xs text-white textChange font-medium md:ml-[4%] md:text-[100%]">BUSINESS</p>
                </div>

                <div className="w-[210%] ml-[45%]">
                    <img src={Garis} className="w-full" id="garisPutih"/>
                    <img src={Garis_Hitam} className="w-full" id="garisHitam" style={{ display: "none"}}/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Section2;