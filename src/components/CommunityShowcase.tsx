import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const CommunityShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join a Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of entrepreneurs, founders, and innovators from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map((avatar, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-secondary/20">
                <img 
                  src={avatar} 
                  alt={`Community member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            And <span className="text-secondary font-bold">700,000+</span> more entrepreneurs worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
