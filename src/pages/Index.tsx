import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
