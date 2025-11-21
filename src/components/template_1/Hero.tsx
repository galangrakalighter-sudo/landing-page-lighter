import heroImage from "@/assets/modern-wedding-hero.jpg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ModernHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      </div>
      <Link to="/">
        <Button variant="ghost" className="fixed top-6 left-6 bg-red-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gallery
        </Button>

    </Link>
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="space-y-8">
          <p className="font-montserrat text-sm tracking-[0.3em] uppercase text-foreground/80">
            Together with their families
          </p>
          
          <div className="space-y-4">
            <h1 className="font-playfair text-6xl md:text-8xl font-light text-foreground">
              Emily & David
            </h1>
            <div className="h-px w-32 bg-primary mx-auto" />
          </div>
          
          <p className="font-montserrat text-lg md:text-xl tracking-wider text-foreground/90">
            JUNE 15, 2025
          </p>
          
          <p className="font-montserrat text-sm tracking-wide text-muted-foreground max-w-md mx-auto">
            Request the honor of your presence at their wedding celebration
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
