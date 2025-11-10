import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Wallet } from "lucide-react";

const communityCards = [
  {
    icon: Rocket,
    title: "Start your business",
    description: "Got the next best idea in business? Get access to everything you need to take on the world with your StartUp",
    color: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "Grow your business",
    description: "Ready to grow your market? Get exclusive access to professionals and leaders to get you there!",
    color: "from-primary to-secondary",
  },
  {
    icon: Wallet,
    title: "Fund your business",
    description: "Is your business seeking capital? Access an exclusive network of investors and prepare your business to get Funded!",
    color: "from-secondary to-accent",
  },
];

const Community = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-secondary mb-4 tracking-wider">
            Our Community
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            With you every step of the way
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communityCards.map((card, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {card.description}
              </p>
              <Button variant="link" className="px-0">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
