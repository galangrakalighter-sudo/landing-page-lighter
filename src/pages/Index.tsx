import Home from "@/components/Home";
import WhyDigital from "@/components/home/WhyDigital";
import WhoAreWe from "@/components/home/WhoAreWe";
import Jelajah from "@/components/home/Jelajah";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import CaraKerja from "@/components/home/CaraKerja";
import Client from "@/components/home/Client";
import Projects from "@/components/home/Projects";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <WhyDigital />
      <WhoAreWe />
      <Jelajah />
      <CaraKerja />
      <Client />
      {/* <Projects /> */}
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Index;
