import HeroSection from "@/components/multimedia/Hero";
import MediaProblemSection from "@/components/multimedia/Problem";
import AboutLighterMultimediaSection from "@/components/multimedia/About";
import CreativePillarsSection from "@/components/multimedia/Pillar";
import ServicesScopeSection from "@/components/multimedia/Service";
import ProductionShowcaseSection from "@/components/multimedia/ShowCase";
import ContentTypesSection from "@/components/multimedia/Type";
import ProcessSection from "@/components/multimedia/Proces";
import PortfolioSection from "@/components/multimedia/Portofolio";
import TestimonialSection from "@/components/multimedia/Testimonial";
import FAQSection from "@/components/multimedia/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Multimedia: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFFFFE] min-h-screen selection:bg-[#6B3BA7] selection:text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <MediaProblemSection />
      <AboutLighterMultimediaSection />
      {/* <CreativePillarsSection /> */}
      <ServicesScopeSection />
      <ProductionShowcaseSection />
      <ContentTypesSection />
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

export default Multimedia;
