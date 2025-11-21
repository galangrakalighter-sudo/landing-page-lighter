import heroImage from "@/assets/Home.png";

const Hero = () => {
  return (
    <>
    {/* <section> */}
      <div id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}></div>

      <div className="absolute inset-0 bg-white/10"></div>
    {/* </section> */}
    </>
  );
};

export default Hero;
