import Bc from "@/assets/Hand 1.png"
import Phone from "@/assets/phone.png"
import { Element } from "react-scroll";
import Partner from "@/assets/partner_with.png"

const CTA = () => {
  return (
    <Element name="process-section">
    <section className="py-16 text-white" id="section4" style={{ backgroundImage: `url(${Partner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Bc}
              alt="Partnership"
              className="w-[75%] md:w-[100%] max-w-md object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-[Arial,Helvetica,sans-serif]">
              BE PARTNERSHIP
            </h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mt-2 font-[Arial,Helvetica,sans-serif]">
              WITH US NOW!
            </h1>

            <div className="mt-6 flex justify-center md:justify-start">
              <a href="#contact" className="inline-flex items-center justifyext-lg font-medium text-white rounded-full border border-white shado-center px-10 py-4 tw-lg" id="button_contact">
                CONTACT US NOW
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div className="grid grid-cols-3 w-full marqueChange h-10 bg-black" style={{ width: "100%"}}>
      <marquee behavior="scroll" direction="left" scrollamount="15" className="text-white font-semibold textMove" style={{ width: "324%", paddingBottom: "6%", marginTop: "2%" }}>
        <span className='textChange'>LIGHT THE WORLD THROUGH MEDIA</span>
        <span className='textMoving textChange'>LIGHT THE WORLD THROUGH MEDIA</span>
        <span className='textMoving textChange'>LIGHT THE WORLD THROUGH MEDIA</span>
        <span className='textMoving textChange'>LIGHT THE WORLD THROUGH MEDIA</span>
      </marquee>
    </div>
    </Element>
  );
};

export default CTA;
