import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building Your Dream Business
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From advisors, investors, mentors & entrepreneurs, CoFoundersLab provides you with all the means necessary to find the perfect fit for your startup.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            <Rocket className="mr-2" />
            Join for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
