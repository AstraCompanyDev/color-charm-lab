import { Quote } from "lucide-react";
import drewTaylor from "@/assets/drew-taylor.jpg";

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-12 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              "Take Our Idea And Turn It into A Solid Business"
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              By helping us find the right team member, CoFoundersLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={drewTaylor} 
                alt="Drew Taylor" 
                className="w-16 h-16 rounded-full object-cover border-2 border-secondary/40 shadow-lg"
              />
              <div>
                <div className="font-bold text-foreground text-lg">Drew Taylor</div>
                <div className="text-muted-foreground">CoFounder of AstroPrint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
