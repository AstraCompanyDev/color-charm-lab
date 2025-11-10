import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-foreground">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">CoFoundersLab</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Login
            </Button>
            <Button variant="outline">
              Find a CoFounder
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
