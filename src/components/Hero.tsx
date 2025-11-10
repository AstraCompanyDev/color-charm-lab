import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      
      {/* Floating avatars with real community member photos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={avatar1} 
          alt="Community member" 
          className="absolute top-1/4 left-1/4 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse shadow-lg shadow-secondary/20"
        />
        <img 
          src={avatar2} 
          alt="Community member" 
          className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse delay-75 shadow-lg shadow-secondary/20"
        />
        <img 
          src={avatar3} 
          alt="Community member" 
          className="absolute bottom-1/3 left-1/3 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse delay-150 shadow-lg shadow-secondary/20"
        />
        <img 
          src={avatar4} 
          alt="Community member" 
          className="absolute bottom-1/4 right-1/3 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse delay-300 shadow-lg shadow-secondary/20"
        />
        <img 
          src={avatar5} 
          alt="Community member" 
          className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse delay-200 shadow-lg shadow-secondary/20"
        />
        <img 
          src={avatar6} 
          alt="Community member" 
          className="absolute top-2/3 right-1/5 w-14 h-14 rounded-full object-cover border-2 border-secondary/40 animate-pulse delay-500 shadow-lg shadow-secondary/20"
        />
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
