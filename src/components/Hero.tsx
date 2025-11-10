import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      
      {/* Floating avatars - decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-card animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-card animate-pulse delay-75"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-card animate-pulse delay-150"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-card animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-foreground mb-4">The Startup Community</span>
            <span className="bg-gradient-coral bg-clip-text text-transparent">
              Start. Grow. Fund.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CoFoundersLab is the largest startup community on the Internet. Accelerate your business today.
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

export default Hero;
