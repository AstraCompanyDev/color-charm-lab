import { Handshake, Lightbulb, DollarSign } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Find a CoFounder",
    description: "Find your perfect partner based on interests, skills and location.",
  },
  {
    icon: Lightbulb,
    title: "Get the Right Advice",
    description: "Get Exclusive Access to industry leaders to accelerate your growth",
  },
  {
    icon: DollarSign,
    title: "Get Funded",
    description: "Prepare and perfect your pitch to get your business funded today!",
  },
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
