import HeroSection from "@/components/event_organizer/Hero";
import ProblemSection from "@/components/event_organizer/Problem";
import AboutLumineSection from "@/components/event_organizer/About";
import SolutionSection from "@/components/event_organizer/Solution";
import ServicesScopeSection from "@/components/event_organizer/Services";
import ProcessSection from "@/components/event_organizer/Proces";
import PortfolioSection from "@/components/event_organizer/Portofolio";
import TestimonialSection from "@/components/event_organizer/Testimonial";
import FAQSection from "@/components/event_organizer/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const EventOrganizer: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFFFFE] min-h-screen selection:bg-[#6B3BA7] selection:text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutLumineSection />
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

export default EventOrganizer;
