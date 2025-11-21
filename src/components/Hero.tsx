import heroImage from "@/assets/Home.png";
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center py-10">
        {/* Kamu bisa masukkan isi apa saja di sini */}
      </div>
    </section>
  );
};

export default Hero;
