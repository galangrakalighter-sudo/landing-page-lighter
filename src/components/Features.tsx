import { Sparkles, Heart, Palette, Package } from "lucide-react";
import { Element } from "react-scroll";
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

const Features = () => {
  return (
    <Element name="about-section">
    <section id="about" className="py-16 relative" style={{ backgroundColor: "#161616" }}>
  <div className="max-w-6xl mx-auto px-4">

    {/* WHO WE ARE & WHAT WE DO */}
    <div className="flex flex-col md:flex-row text-center md:text-left gap-6 pt-4">

      {/* WHO WE ARE */}
      <div className="w-full md:w-1/2">
        <div className="p-6 tracking-widest rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-white mb-3 textChange">WHO WE ARE?</h3>
          <p className="text-white textChange">
            Lighter Media Group menjadi <strong>partner</strong> digital dalam membangun media digital bagi bisnis.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="w-full md:w-1/2">
        <div className="p-6 tracking-widest rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-white textChange mb-3">WHAT WE DO?</h3>
          <p className="text-white textChange">
            Lighter Media Group adalah perusahaan yang bergerak di bidang jasa media digital yang mengutamakan <strong>excellent service</strong> sebagai <strong>value</strong> utama.
          </p>
        </div>
      </div>

    </div>

    {/* STATISTICS */}
    <div className="grid grid-cols-3 text-center mt-10">

      {/* CLIENT */}
      <div className="p-6">
        <p className="text-4xl font-extrabold text-white textChange">0 +</p>
        <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium">CLIENT</p>
      </div>

      {/* PARTNERSHIP */}
      <div className="p-6">
        <p className="text-4xl font-extrabold text-white textChange">0 +</p>
        <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium">PARTNERSHIP</p>
      </div>

      {/* BUSINESS */}
      <div className="p-6">
        <p className="text-4xl font-extrabold text-white textChange">0 Y</p>
        <p className="mt-2 text-gray-400 text-xs text-white textChange font-medium">BUSINESS</p>
      </div>

    </div>

  </div>
</section>

    </Element>
  );
};

export default Features;
