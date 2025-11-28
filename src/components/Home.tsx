import heroImage from "@/assets/Home.png";
import LiquidEther from '@/components/LiquidEther';

const Home = () => {
  return (
    <>
    {/* <section> */}
      {/* <div id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}></div>

      <div className="absolute inset-0 bg-white/10"></div> */}
      {/* <div style={{ width: '100%', height: 600, position: 'relative' }}>
      <LiquidEther colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]} mouseForce={20} cursorSize={100} isViscous={false} viscous={30} iterationsViscous={32} iterationsPoisson={32} resolution={0.5} isBounce={false} autoDemo={true} autoSpeed={0.5} autoIntensity={2.2} takeoverDuration={0.25} autoResumeDelay={3000} autoRampDuration={0.6}/>
    </div> */}
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

  {/* GRADIENT TRANSITION (atas → bawah) */}
  <div className="
    absolute inset-x-0 top-0 h-40
    bg-gradient-to-b from-[#0e0f17] to-transparent
    pointer-events-none
  " />

</div>

    {/* </section> */}
    </>
  );
};

export default Home;
