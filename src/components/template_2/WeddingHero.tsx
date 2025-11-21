import heroImage from "@/assets/wedding-hero.jpg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
        <Link to="/">
          <Button variant="ghost" className="fixed top-6 left-6 bg-red-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>

        </Link>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8">
          <div className="text-primary text-6xl mb-4">❦</div>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-wide">
          Sarah & James
        </h1>
        
        <div className="h-px w-32 bg-primary mx-auto mb-6" />
        
        <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mb-8 tracking-wider">
          TOGETHER WITH THEIR FAMILIES
        </p>
        
        <p className="font-montserrat text-lg md:text-xl text-foreground mb-4">
          Request the honor of your presence at their wedding
        </p>
        
        <div className="mt-12">
          <p className="font-playfair text-4xl md:text-5xl text-primary font-semibold mb-2">
            June 15, 2025
          </p>
          <p className="font-montserrat text-lg text-muted-foreground tracking-wide">
            4:00 PM
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary text-2xl">↓</div>
      </div>
    </section>
  );
};

export default WeddingHero;
