// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
import { useState } from "react";

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
    desc: "Partnership terpercaya Anda, memberikan excellent branding service.",
    full: `RADDINE adalah mitra strategis Anda dalam membangun identitas merek yang kuat.
           Kami menawarkan layanan konsultasi branding, desain logo, manajemen kampanye,
           dan strategi komunikasi untuk memastikan merek Anda menonjol di pasar.`,
    image: "path/to/handshake-image.png",
  },
  {
    id: "multimedia",
    title: "MULTIMEDIA.",
    desc: "Memberikan jasa dokumentasi terbaik untuk kebutuhan event Anda.",
    full: `Tim multimedia kami siap mengabadikan setiap momen penting dengan kualitas profesional.`,
    image: "path/to/camera-image.png",
  },
  {
    id: "digimark",
    title: "LGTR DIGIMARK.",
    desc: "Pelayanan jasa terbaik untuk digital marketing Anda.",
    full: `Tingkatkan kehadiran digital Anda dengan strategi marketing online yang efektif.`,
    image: "path/to/chart-image.png",
  },
  {
    id: "academy",
    title: "LIGHTER ACADEMY.",
    desc: "Memberikan pelatihan SDM berkualitas dengan skill yang teruji.",
    full: `Lighter Academy berkomitmen untuk mengembangkan talenta melalui program pelatihan.`,
    image: "path/to/graduation-cap-image.png",
  },
  {
    id: "eikyo",
    title: "EIKYO.",
    desc: "Memberikan management influencer dan talent yang terpercaya.",
    full: `EIKYO adalah platform manajemen influencer yang menghubungkan merek dengan talenta.`,
    image: "path/to/crown-image.png",
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

        <h2 className="text-gray-400 text-sm font-semibold text-white textChange">
          JELAJAHI
        </h2>

        <p className="mt-2 text-4xl md:text-5xl font-extrabold text-white mb-12 textChange">
          DIVISION OF MEDIA GROUP
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
          {divisions.map((item) => (
            <div key={item.id} onClick={() => toggleCard(item.id)} className={`p-6 tracking-widest rounded-xl shadow-lg`}>
              {/* Background visual */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

              {/* Content */}
              <div className="relative text-left z-10">
                <h4 className="text-xl font-bold text-white textChange">{item.title}</h4>

                <p className="text-white textChange text-sm mt-2">{item.desc}</p>

                {/* Extra content when expanded */}
                {active === item.id && (
                  <div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    <p>{item.full}</p>
                  </div>
                )}

                {/* Arrow icon */}
                <div className="mt-4 text-white text-lg">
                  <i className="fas fa-arrow-up-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
