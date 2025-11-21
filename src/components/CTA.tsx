import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Element } from "react-scroll";
const CTA = () => {
  return (
    <Element name="process-section">
    <section className="py-16 bg-[#161616] text-white text-center" id="section4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-4">
          BE PARTNERSHIP WITH US NOW!
        </h2>

        <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-medium rounded-full text-white textChange shadow-lg border border-transparent">
          CONTACT US NOW
        </a>
      </div>
    </section>
    </Element>
  );
};

export default CTA;
