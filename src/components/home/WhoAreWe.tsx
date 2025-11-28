import { Sparkles, Heart, Palette, Package } from "lucide-react";
import { Element } from "react-scroll";
import Garis from "@/assets/garis.png"
import Garis_Hitam from "@/assets/garis_hitam.png"
const features = [
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Luxurious paper stocks, foil stamping, and exquisite finishes that feel as beautiful as they look",
  },
  {
    icon: Heart,
    title: "Custom Design",
    description: "Personalized designs crafted specifically for your wedding, reflecting your unique style and story",
  },
  {
    icon: Palette,
    title: "Expert Artistry",
    description: "Hand-crafted by skilled designers who bring decades of experience in luxury stationery",
  },
  {
    icon: Package,
    title: "Complete Suites",
    description: "From save-the-dates to thank you cards, we create cohesive stationery for your entire celebration",
  },
];

const WhoAreWe = () => {
  return (
    <Element name="about-section">
    <section id="about" className="py-16 relative bg-[radial-gradient(circle,rgba(0,0,0,0.73)_0%,rgba(130,130,130,0.33)_100%)]">
  <div className="max-w-6xl mx-auto px-4">

    {/* WHO WE ARE & WHAT WE DO */}
    <div className="flex flex-col md:flex-row text-center md:text-left gap-6 pt-4">

      {/* WHO WE ARE */}
      <div className="w-full md:w-1/2">
        <div className="p-6 tracking-widest rounded-xl">
          <h3 className="text-xl font-bold text-white mb-3 textChange font-[Arial,Helvetica,sans-serif]">WHO WE ARE?</h3>
          <p className="text-white textChange font-[Arial,Helvetica,sans-serif]">
            Lighter Media Group menjadi <strong>partner</strong> digital dalam membangun media digital bagi bisnis.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="w-full md:w-1/2">
        <div className="p-6 tracking-widest rounded-xl">
          <h3 className="text-xl font-bold text-white textChange mb-3 font-[Arial,Helvetica,sans-serif]">WHAT WE DO?</h3>
          <p className="text-white textChange font-[Arial,Helvetica,sans-serif]">
            Lighter Media Group adalah perusahaan yang bergerak di bidang jasa media digital yang mengutamakan <strong>excellent service</strong> sebagai <strong>value</strong> utama.
          </p>
        </div>
      </div>

    </div>

    {/* STATISTICS */}
    <div className="grid grid-cols-3 text-center mt-10">

      {/* CLIENT */}
                <div className="p-6">
                    <p className="text-4xl font-extrabold text-white textChange md:ml-[5%]">100 +</p>
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

    </Element>
  );
};

export default WhoAreWe;
