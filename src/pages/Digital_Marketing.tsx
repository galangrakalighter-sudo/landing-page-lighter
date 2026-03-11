import HeroSection from "@/components/digital_marketing/Hero"; 
import PortfolioSection from "@/components/digital_marketing/Portofolio";
import ProblemSection from "@/components/digital_marketing/Problem";
import ProcessSection from "@/components/digital_marketing/Process";
import ServicesScopeSection from "@/components/digital_marketing/Service";
import SolutionSection from "@/components/digital_marketing/Solution";
import TestimonialSection from "@/components/digital_marketing/Testimonial";
import AboutLGTRSection from "@/components/digital_marketing/About";
import StrategySection from "@/components/digital_marketing/Strategy";
import FAQSection from "@/components/digital_marketing/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const DigitalMarketing: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutLGTRSection />
      <SolutionSection />
      <ServicesScopeSection />
      <StrategySection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default DigitalMarketing;
