import heroImage from "@/assets/Home.png";
import LiquidEther from '@/components/LiquidEther';
import Logo from '@/assets/Home/logo.jpg';

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[1080px] overflow-hidden flex items-center justify-center">
        
        {/* BOTTOM: Kolase / Hero Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY: Agar teks lebih kontras dan terbaca */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT LAYER */}
        <div className="relative mb-[5%] z-10 container mx-auto px-6 text-center text-white">
    
          {/* Headline: Menambahkan Drop Shadow agar teks lebih "keluar" */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 max-w-5xl mx-auto tracking-tight drop-shadow-2xl font-[Arial,Helvetica,sans-serif]">
            Bangun, Scale, dan Monetize Bisnis Anda dalam Satu Sistem Terintegrasi
          </h1>

          {/* Subheadline: Margin top tetap 5% sesuai script asal */}
          <p className="text-lg mt-[8%] md:text-2xl font-medium mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed drop-shadow-md font-[Arial,Helvetica,sans-serif]">
            Kami membantu brand berkembang dari branding, marketing, hingga revenue dengan dukungan media dan teknologi dalam satu ekosistem.
          </p>

          {/* CTA Button: Menambahkan efek hover glow yang lebih halus */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#konsultasi" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] shadow-2xl text-xl tracking-wide uppercase font-[Arial,Helvetica,sans-serif]"
            >
              🔥 Konsultasi Gratis
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;