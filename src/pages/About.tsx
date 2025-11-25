import Home from "@/components/Home";
// import WhyDigital from "@/components/home/WhyDigital";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
// import WhoAreWe from "@/components/home/WhoAreWe";
// import Jelajah from "@/components/home/Jelajah";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
// import Projects from "@/components/home/Projects";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <Section2 />
      <Section3 />
      {/* <WhyDigital /> */}
      {/* <WhoAreWe />
      <Jelajah />
      <Projects /> */}
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default About;
