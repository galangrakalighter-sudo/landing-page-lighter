import HeroSection from "@/components/academy/Hero";
import EducationProblemSection from "@/components/academy/Problem";
import AboutAcademySection from "@/components/academy/About";
import LearningPillarsSection from "@/components/academy/Pillar";
import CurriculumSection from "@/components/academy/Curicullum";
import CorporateTrainingSection from "@/components/academy/Training";
import LearningMethodSection from "@/components/academy/Method";
import CareerOutcomeSection from "@/components/academy/Outcome";
import TestimonialSection from "@/components/academy/Testimonial";
import FAQSection from "@/components/academy/FAQ";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import Maps from "@/components/Maps";
import React, { useState } from "react";

const Academy: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFFFFE] min-h-screen selection:bg-[#6B3BA7] selection:text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <EducationProblemSection />
      <AboutAcademySection />
      <LearningPillarsSection />
      <CurriculumSection />
      <CorporateTrainingSection />
      <LearningMethodSection />
      <CareerOutcomeSection />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Maps />
      <Partnership />
      <Footer />
    </main>
  );
};

export default Academy;
