const ModernTimeline = () => {
  const events = [
    {
      time: "3:30 PM",
      title: "Guest Arrival",
      description: "Join us for pre-ceremony refreshments"
    },
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "The Garden Pavilion"
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Terrace overlooking the gardens"
    },
    {
      time: "6:30 PM",
      title: "Reception & Dinner",
      description: "The Grand Ballroom"
    },
    {
      time: "9:00 PM",
      title: "Dancing",
      description: "Celebrate with us into the night"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-light text-foreground mb-4">
            Our Moment
          </h2>
          <div className="h-px w-20 bg-primary mx-auto" />
        </div>
        
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">Photo Template</div>
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">Photo Template</div>
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">Photo Template</div>
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">Photo Template</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTimeline;
