import { Building2, Lightbulb, Rocket, Users } from "lucide-react";

const BuildingGreatCompanies = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Turn groundbreaking ideas into reality with the right team and resources"
    },
    {
      icon: Users,
      title: "Find Your Co-Founder",
      description: "Connect with complementary skills and shared vision to build something amazing"
    },
    {
      icon: Building2,
      title: "Scale Together",
      description: "Access mentorship, resources, and a community that supports your growth"
    },
    {
      icon: Rocket,
      title: "Launch Faster",
      description: "Accelerate your path from concept to market with proven frameworks"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-purple/20 via-background to-brand-blue/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Building The World's Next{" "}
            <span className="bg-gradient-coral bg-clip-text text-transparent">
              Great Companies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the largest startup community where entrepreneurs connect, collaborate, 
            and create the future of business together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-brand-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingGreatCompanies;
