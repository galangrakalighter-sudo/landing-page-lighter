import heroImage from "@/assets/Home.png";
import LiquidEther from '@/components/LiquidEther';
import Logo from '@/assets/Home/logo.jpg'

const Home = () => {
  return (
    <>
  <div className="relative w-full h-[1080px] overflow-hidden">

  {/* BOTTOM: Kolase / Hero Image */}
  <img
    src={heroImage}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* LIQUID ETHER (di atas gambar, tapi tidak memblok interaksi) */}
  <div className="absolute inset-0 pointer-events-none mix-blend-screen">
    <LiquidEther
      colors={['#342d53ff', '#968595ff', '#3a3746ff']}
      mouseForce={20}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
  </div>

  <div className="textImage absolute inset-0 w-full h-full object-cover xs:mt-[30%] sm:mt-[20%] md:mt-[15%] lg:mt-[8%]">
    <img src={Logo} className="xs:mx-auto"/>
    <h1 className="xs:mt-[20%] xs:text-center md:mt-[5%] font-[Arial,Helvetica,sans-serif] text-white">INTEGRATED DIGITAL ECOSYSTEM FOR BUSINESS GROWTH</h1>
  </div>

</div>

    {/* </section> */}
    </>
  );
};

export default Home;
