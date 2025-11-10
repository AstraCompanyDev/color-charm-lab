import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import avatar7 from "@/assets/avatar-7.jpg";
import avatar8 from "@/assets/avatar-8.jpg";
import avatar9 from "@/assets/avatar-9.jpg";
import avatar10 from "@/assets/avatar-10.jpg";
import avatar11 from "@/assets/avatar-11.jpg";
import avatar12 from "@/assets/avatar-12.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      
      {/* Floating avatars in organized circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left cluster */}
        <div className="absolute top-[15%] left-[10%] animate-pulse">
          <img src={avatar1} alt="Community member" className="w-12 h-12 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute top-[20%] left-[15%] animate-pulse delay-100">
          <img src={avatar2} alt="Community member" className="w-10 h-10 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute top-[12%] left-[18%] animate-pulse delay-200">
          <img src={avatar3} alt="Community member" className="w-14 h-14 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        
        {/* Top right cluster */}
        <div className="absolute top-[18%] right-[12%] animate-pulse delay-300">
          <img src={avatar4} alt="Community member" className="w-12 h-12 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute top-[14%] right-[18%] animate-pulse delay-400">
          <img src={avatar5} alt="Community member" className="w-10 h-10 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute top-[22%] right-[8%] animate-pulse delay-500">
          <img src={avatar6} alt="Community member" className="w-14 h-14 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        
        {/* Bottom left cluster */}
        <div className="absolute bottom-[20%] left-[8%] animate-pulse delay-150">
          <img src={avatar7} alt="Community member" className="w-10 h-10 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute bottom-[15%] left-[14%] animate-pulse delay-250">
          <img src={avatar8} alt="Community member" className="w-12 h-12 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute bottom-[25%] left-[12%] animate-pulse delay-350">
          <img src={avatar9} alt="Community member" className="w-14 h-14 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        
        {/* Bottom right cluster */}
        <div className="absolute bottom-[18%] right-[10%] animate-pulse delay-450">
          <img src={avatar10} alt="Community member" className="w-12 h-12 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute bottom-[23%] right-[15%] animate-pulse delay-550">
          <img src={avatar11} alt="Community member" className="w-10 h-10 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
        <div className="absolute bottom-[14%] right-[18%] animate-pulse delay-100">
          <img src={avatar12} alt="Community member" className="w-14 h-14 rounded-full object-cover border-2 border-secondary/50 shadow-lg" />
        </div>
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
