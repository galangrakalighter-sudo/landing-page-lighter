import heroImage from "@/assets/Home.png";
import Project1 from "@/assets/OurProject1.png"
import Project2 from "@/assets/OurProject2.png"
import Project3 from "@/assets/OurProject3.png"
import Project4 from "@/assets/OurProject4.png"
import Project5 from "@/assets/OurProject5.png"
import Project6 from "@/assets/OurProject6.png"
import Project7 from "@/assets/OurProject7.png"

const Projects = () => {
  return (
    <>
     <section className="w-full bg-[#161616] text-white py-16 sm:py-20 px-4 sm:px-8" id="ourproject">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-5 md:w-full">

        {/* LEFT TEXT */}
        <div className="flex-1 mx-auto md:ml-[16%]">
          <h1 className="font-extrabold leading-none mt-2 sm:mt-2 text-5xl sm:text-left md:text-left md:text-8xl font-[Arial,Helvetica,sans-serif]">
            OUR
          </h1>

          <h1 className="font-extrabold leading-none mt-2 sm:mt-2 text-5xl sm:text-left md:text-left md:text-8xl font-[Arial,Helvetica,sans-serif]">
            PROJECT
          </h1>

          {/* Explore link */}
          <div className="mt-8 flex items-center gap-5 sm:flex">
            <p className="tracking-[0.3em] text-xs sm:text-sm">
              JELAJAHI &gt;&gt;
            </p>
            <div className="h-[1px] bg-white w-[120px] sm:w-[180px] md:w-[220px]" />
          </div>
        </div>


        <div className="flex-1 w-full overflow-hidden flex justify-end md:mr-5">
        <marquee behavior="scroll" direction="left" scrollamount={15} className="">
            <div className="inline-flex gap-6">
            <img src={Project1} className="h-30" />
            <img src={Project2} className="h-30" />
            <img src={Project3} className="h-30" />
            <img src={Project4} className="h-30" />
            <img src={Project5} className="h-30" />
            <img src={Project6} className="h-30" />
            <img src={Project7} className="h-30" />
            </div>
        </marquee>
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
