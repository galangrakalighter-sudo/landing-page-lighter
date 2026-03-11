import Home from "@/components/Home";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Section4 from "@/components/about/Section4";
import Client from "@/components/home/Client";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Client />
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
