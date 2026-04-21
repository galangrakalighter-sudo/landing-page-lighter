import HeroSection from "@/components/mcn/Hero";
import CreatorProblemSection from "@/components/mcn/Problem";
import AboutEikyooSection from "@/components/mcn/About";
import CreatorPillarsSection from "@/components/mcn/Pillar";
import ServicesScopeSection from "@/components/mcn/Service";
import MonetizationSystemSection from "@/components/mcn/Monetisasi";
import BrandCollaborationSection from "@/components/mcn/Collaboration";
import GrowthFrameworkSection from "@/components/mcn/Framework";
import TalentShowcaseSection from "@/components/mcn/Talent";
import TestimonialSection from "@/components/mcn/Testimonial";
import FAQSection from "@/components/mcn/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Client from "@/components/home/Client";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const MCN: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFFFFE] min-h-screen selection:bg-[#6B3BA7] selection:text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <CreatorProblemSection />
      <AboutEikyooSection />
      <CreatorPillarsSection />
      <ServicesScopeSection />
      <MonetizationSystemSection />
      <BrandCollaborationSection />
      <GrowthFrameworkSection />
      <Client />
      {/* <TalentShowcaseSection /> */}
      {/* <TestimonialSection /> */}
      <FAQSection />
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default MCN;
