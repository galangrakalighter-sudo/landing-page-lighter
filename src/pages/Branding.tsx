import HeroSection from "@/components/branding/Hero"; 
import PortfolioSection from "@/components/branding/Portofolio";
import ProblemSection from "@/components/branding/Problem";
import ProcessSection from "@/components/branding/Process";
import ServicesScopeSection from "@/components/branding/Service";
import SolutionSection from "@/components/branding/Solution";
import TestimonialSection from "@/components/branding/Testimonial";
import AboutRaddineSection from "@/components/branding/About";
import FAQSection from "@/components/branding/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Branding: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutRaddineSection />
      <SolutionSection />
      <ServicesScopeSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialSection />
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Branding;
