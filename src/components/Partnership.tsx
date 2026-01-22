import Bc from "@/assets/Hand 1.png"
import Phone from "@/assets/phone.png"
import { Element } from "react-scroll";
import Partner from "@/assets/partner_baru.png"

const Partnership = () => {
  return (
    <Element name="process-section">
      <section id="partnership" className="relative">
      <img src={Partner} alt="Partner" className="w-full h-[200px] md:h-auto object-cover"/>

      <div className="absolute inset-0 flex items-center justify-center text-white ml-[30%] md:ml-[50%]">
        <div>
          <h5 className="xs:text-xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold text-center text-white md:mr-5 font-[Arial,Helvetica,sans-serif]">BE PARTNERSHIP</h5>
          <h1 className="xs:text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold mt-2 text-white font-[Arial,Helvetica,sans-serif]">WITH US NOW!</h1>
          <div className="mt-6 flex justify-center md:justify-center">
              <a href="#contact" className="inline-flex items-center text-lg font-medium text-white rounded-full border border-white px-3 py-1 md:px-10 md:py-2" id="button_contact">
                HUBUNGI KAMI SEKARANG
              </a>
          </div>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-3 w-full marqueChange h-10 bg-black" style={{ width: "100%"}}>
      <marquee behavior="scroll" direction="left" scrollamount="15" className="text-white font-semibold textMove xs:mt-[9%] sm:mt-[5%] md:mt-[4%] lg:mt-[3%] xl:mt-[2%]" style={{ width: "300%", paddingBottom: "6%" }}>
        <span className='textChange'>WIN THE MARKET FOR YOU</span>
        <span className='textMoving textChange'>WIN THE MARKET FOR YOU</span>
        <span className='textMoving textChange'>WIN THE MARKET FOR YOU</span>
        <span className='textMoving textChange'>WIN THE MARKET FOR YOU</span>
      </marquee>
    </div>
    </Element>
  );
};

export default Partnership;
