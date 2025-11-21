const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Moment
          </h2>
          <div className="h-px w-24 bg-primary mx-auto mb-6" />
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="space-y-2">
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

export default OurStory;
