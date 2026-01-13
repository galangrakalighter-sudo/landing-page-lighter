import heroImage from "@/assets/Home.png";
import Project1 from "@/assets/home/OurProject1.png"
import Project2 from "@/assets/home/OurProject2.png"
import Project3 from "@/assets/home/OurProject3.png"
import Project4 from "@/assets/home/OurProject4.png"
import Project5 from "@/assets/home/OurProject5.png"
import Project6 from "@/assets/home/OurProject6.png"
import Project7 from "@/assets/home/OurProject7.png"

const Projects = () => {
  return (
    <>
      <section className="w-full bg-[#161616] text-white py-16 sm:py-24 px-6 md:px-12 overflow-hidden" id="ourproject">
        <div className="max-w-full mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-5 md:w-full">

          {/* LEFT TEXT SECTION */}
          <div className="w-full md:flex-1 md:ml-[16%] xl:ml-[9%] text-left">
            {/* Ukuran teks diperkecil: text-4xl di HP hingga text-7xl di PC */}
            <h1 className="font-extrabold leading-[0.85] text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-[Arial,Helvetica,sans-serif] uppercase">
              OUR
            </h1>

            <h1 className="font-extrabold leading-[0.85] text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-[Arial,Helvetica,sans-serif] uppercase">
              PROJECT
            </h1>

            {/* Explore link */}
            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              <p className="tracking-[0.4em] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                JELAJAHI &gt;&gt;
              </p>
              <div className="h-[1px] bg-white w-full max-w-[100px] sm:max-w-[150px] md:max-w-[180px] opacity-70" />
            </div>
          </div>

          {/* RIGHT MARQUEE SECTION */}
          <div className="w-full md:flex-1 overflow-hidden flex justify-end items-center md:mr-5">
            <marquee behavior="scroll" direction="left" scrollamount={15} loop="infinite" className="py-4">
              <div className="inline-flex items-center gap-6 md:gap-10">
                <img src={Project1} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project2} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project3} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project4} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project5} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project6} className="h-20 md:h-28 w-auto object-contain" />
                <img src={Project7} className="h-20 md:h-28 w-auto object-contain" />
              </div>
            </marquee>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Projects;