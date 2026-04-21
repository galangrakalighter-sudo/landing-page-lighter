import HeroSection from "@/components/tech/Hero";
import CaseStudySection from "@/components/tech/Case";
import ProcessSection from "@/components/tech/Proces";
import ServicesSection from "@/components/tech/Service";
import TechStackSection from "@/components/tech/TechStack";
import WhyUsSection from "@/components/tech/Why";
import FAQSection from "@/components/tech/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";
import Client from "@/components/home/Client";

const Tech: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <CaseStudySection />
      <WhyUsSection />
      <Client />
      <FAQSection />
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Tech;
