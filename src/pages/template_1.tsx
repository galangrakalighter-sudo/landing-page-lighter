import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import classicOrnament from "@/assets/classic-ornament.jpg";

import ModernHero from "@/components/template_1/Hero";
import ModernDetails from "@/components/template_1/Time";
import ModernTimeline from "@/components/template_1/Moment";

const Template_1 = () => {
  return (
    <main className="min-h-screen bg-background">
      <ModernHero />
      <ModernDetails />
      <ModernTimeline />
    </main>
  );
};

export default Template_1;
