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
                <p className="mt-4 text-white text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl md:mx-0 font-[Arial,Helvetica,sans-serif] textChange">
                Lighter Media Group adalah perusahaan jasa media digital yang berlokasi di Bandung.
                Perusahaan ini berdiri pada tahun 2018. Lighter Media Group berawal dari studio kecil
                dengan sumber daya terbatas. Lighter Media Group menyediakan solusi yang membantu bisnis
                Anda tumbuh di era digita, tim bekerja dengan standar profesional agar setiap layanan
                menghasilkan dampak yang jelas
                </p>
            </div>

            </div>
        <div className="grid grid-cols-3 text-center md:pt-[5%]">
                {/* CLIENT */}
                <div className="p-6">
                    <p className="text-4xl font-extrabold sm:ml-[20%] md:mr-[8%] lg:mr-[12%] text-white textChange">100 +</p>
                    <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium md:mr-[3%]">CLIENT</p>
                </div>

                {/* PARTNERSHIP */}
                <div className="p-6">
                    <p className="text-4xl font-extrabold text-white textChange md:ml-[4%]">50 +</p>
                    <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium md:ml-[4%]">PARTNERSHIP</p>
                </div>

                {/* BUSINESS */}
                <div className="p-6">
                    <p className="text-4xl font-extrabold text-white textChange md:ml-[4%]">8 Y</p>
                    <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium md:ml-[4%]">BUSINESS</p>
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