import { MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const VenueDetails = () => {
  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Celebration Details
          </h2>
          <div className="h-px w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  Ceremony
                </h3>
                <p className="font-montserrat text-muted-foreground mb-2">
                  4:00 PM
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  Venue
                </h3>
                <p className="font-montserrat text-foreground font-medium mb-2">
                  The Grand Estate
                </p>
                <p className="font-montserrat text-sm text-muted-foreground">
                  123 Elegant Drive<br />
                  Celebration City, CC 12345
                </p>
              </div>
            </div>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default VenueDetails;
