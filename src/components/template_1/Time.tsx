import { MapPin, Clock, Calendar } from "lucide-react";

const ModernDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Date",
      info: "Sunday, June 15, 2025"
    },
    {
      icon: Clock,
      title: "Time",
      info: "4:00 PM"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "The Garden Estate",
      address: "123 Meadow Lane, Countryside"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-background border-2 border-primary/20">
                <detail.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                {detail.title}
              </h3>
              <p className="font-montserrat text-foreground/80 mb-1">
                {detail.info}
              </p>
              {detail.address && (
                <p className="font-montserrat text-sm text-muted-foreground">
                  {detail.address}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernDetails;
