// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
import { useState } from "react";
import Image1 from "@/assets/home/image1-eksplor.png"
import Image2 from "@/assets/home/image2-eksplor.png"
import Image3 from "@/assets/home/image3-eksplor.png"
import Image4 from "@/assets/home/image4-eksplor.png"
import Image5 from "@/assets/home/image5-eksplor.png"
import FlipCard from "@/components/home/Card"
import Card from "../Card";
const divisions = [
  {
    id: "raddine",
    title: "RADDINE.",
    desc: `Partnership terpercaya Anda, memberikan excellent branding service. RADDINE adalah mitra strategis Anda dalam membangun identitas merek yang kuat.
           Kami menawarkan layanan konsultasi branding, desain logo, manajemen kampanye,
           dan strategi komunikasi untuk memastikan merek Anda menonjol di pasar`,
    image: Image1,
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA.",
    desc: `Memberikan jasa dokumentasi terbaik untuk kebutuhan event Anda. Tim multimedia kami siap mengabadikan setiap momen penting dengan kualitas profesional.`,
    image: Image2,
  },
  {
    id: "digimark",
    title: "LGTR DIGIMARK.",
    desc: `Pelayanan jasa terbaik untuk digital marketing Anda. Tingkatkan kehadiran digital Anda dengan strategi marketing online yang efektif.`,
    image: Image3,
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    desc: `Memberikan pelatihan SDM berkualitas dengan skill yang teruji. Lighter Academy berkomitmen untuk mengembangkan talenta melalui program pelatihan.`,
    image: Image4,
  },
  {
    id: "eikyo",
    title: "EIKYO.",
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

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {divisions.map((item) => (
        <FlipCard image={item.image}/>
    // <div key={item.id} className="bg-neutral-primary-soft border border-default rounded-md shadow-xs p-6 flex flex-col justify-between">
    //   <div>
    //     <div className="w-full h-50 overflow-hidden rounded-md">
    //       <img className="w-[65%] md:w-[100%] lg:w-[100%] mx-auto object-cover" src={item.image} alt={item.title} />
    //     </div>

    //     <h3 className="mt-6 mb-2 text-2xl font-semibold font-[Arial,Helvetica,sans-serif] text-center md:text-left">{item.title}</h3>
    //     <p className="text-body font-[Arial,Helvetica,sans-serif] text-center md:text-left text-1xl">{item.desc}</p>
    //   </div>

    //   <div className="mt-6 text-center md:text-left">
    //     <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-md text-sm px-10 py-3">
    //       Read more
    //       <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-4-4 4 4-4 4"/>
    //       </svg>
    //     </a>
    //   </div>
    // </div>
  ))}
</div>



      </div>
    </section>
  );
};

export default Jelajah;
