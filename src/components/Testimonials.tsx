// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
import { useState } from "react";
import BcTest from "@/assets/bc-test.png"
import Hover from "@/assets/hover.png"
import BcText from "@/assets/textBc.png"
import Image1 from "@/assets/image1-eksplor.png"
import Image2 from "@/assets/image2-eksplor.png"
import Image3 from "@/assets/image3-eksplor.png"
import Image4 from "@/assets/image4-eksplor.png"
import Image5 from "@/assets/image5-eksplor.png"

// const testimonials = [
//   {
//     name: "Sarah & James",
//     text: "Our invitations were absolutely stunning! The attention to detail and quality exceeded our expectations. Our guests are still raving about them.",
//     rating: 5,
//   },
//   {
//     name: "Emily & Michael",
//     text: "Working with Elegance Paper Co. was a dream. They perfectly captured our vision and created invitations that were truly works of art.",
//     rating: 5,
//   },
//   {
//     name: "Jessica & David",
//     text: "From the initial consultation to the final delivery, everything was flawless. The craftsmanship is unmatched. Highly recommend!",
//     rating: 5,
//   },
// ];

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

const Testimonials = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {divisions.map((item) => (
    <div
      key={item.id}
      className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
    >
      {/* FIXED IMAGE WRAPPER */}
      <div className="w-full h-48 overflow-hidden rounded-base">
        <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
      </div>

      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {item.title}
      </h5>

      <p className="mb-6 text-body">{item.desc}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Testimonials;
