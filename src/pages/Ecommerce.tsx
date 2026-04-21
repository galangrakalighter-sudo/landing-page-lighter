import HeroSection from "@/components/ecommerce/Hero"; 
import PortfolioSection from "@/components/ecommerce/Portofolio";
import ProblemSection from "@/components/ecommerce/Problem";
import ProcessSection from "@/components/ecommerce/Proces";
import ServicesScopeSection from "@/components/ecommerce/Service";
import SolutionSection from "@/components/ecommerce/Solution";
import TestimonialSection from "@/components/ecommerce/Testimonial";
import AboutLabSection from "@/components/ecommerce/About";
import MarketplaceSection from "@/components/ecommerce/Market";
import CaseStudySection from "@/components/ecommerce/Case";
// import StrategySection from "@/components/ecommerce/Strategy";
import ConversionSystemSection from "@/components/ecommerce/Conversion";
import ValuePropositionSection from "@/components/ecommerce/Proposisi";
import FAQSection from "@/components/ecommerce/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Client from "@/components/home/Client";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Ecommerce: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FEFFFF] text-slate-900">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutLabSection />
      <ValuePropositionSection />
      <ServicesScopeSection />
      <ConversionSystemSection />
      <ProcessSection />
      {/* <CaseStudySection /> */}
      {/* <TestimonialSection /> */}
      <Client />
      <FAQSection />
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Ecommerce;
