// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
import { useState } from "react";
import Image1 from "@/assets/home/image1-eksplor.png"
import Image2 from "@/assets/home/File-Department_05.png"
import Image3 from "@/assets/home/image5-eksplor.png"
import Image4 from "@/assets/home/image2-eksplor.png"
import Image5 from "@/assets/home/image4-eksplor.png"
import FlipCard from "@/components/home/Card"
import Card from "../Card";
import { title } from "process";
const divisions = [
  {
    id: "raddine",
    title: "BRANDING.",
    front: "BRANDING",
    desc: `Partnership terpercaya Anda, memberikan excellent branding service. RADDINE adalah mitra strategis Anda dalam membangun identitas merek yang kuat.
           Kami menawarkan layanan konsultasi branding, desain logo, manajemen kampanye,
           dan strategi komunikasi untuk memastikan merek Anda menonjol di pasar`,
    image: Image1,
  },
  {
    id: "digimark",
    title: "LGTR DIGITAL MARKETING",
    front: "DIGITAL MARKETING",
    desc: `Memberikan jasa dokumentasi terbaik untuk kebutuhan event Anda. Tim multimedia kami siap mengabadikan setiap momen penting dengan kualitas profesional.`,
    image: Image2,
  },
  {
    id: "digimark",
    title: "MCN.",
    front: "MCN",
    desc: `Pelayanan jasa terbaik untuk digital marketing Anda. Tingkatkan kehadiran digital Anda dengan strategi marketing online yang efektif.`,
    image: Image3,
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA.",
    front: "MULTIMEDIA",
    desc: `Memberikan pelatihan SDM berkualitas dengan skill yang teruji. Lighter Academy berkomitmen untuk mengembangkan talenta melalui program pelatihan.`,
    image: Image4,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    front: "ACADEMY",
    desc: `Memberikan management influencer dan talent yang terpercaya. EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: Image5,
  },
];

const Jelajah = () => {
  const [active, setActive] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <section id="eksplorasi" className="py-20 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-white text-4xl md:text-5xl font-semibold text-white textChange font-[Arial,Helvetica,sans-serif]">
          JELAJAHI
        </h2>

        <p className="mt-2 text-4xl md:text-5xl font-extrabold text-white mb-12 textChange font-[Arial,Helvetica,sans-serif]">
          DIVISION OF MEDIA GROUP
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {divisions.map((item) => (
              <FlipCard image={item.image} product={item.title} text={item.desc} id={item.id} title={item.front}/>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Jelajah;
