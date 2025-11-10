import globalMap from "@/assets/global-network-map.jpg";

const Stats = () => {
  return (
    <section className="py-20 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-secondary mb-4 tracking-wider">
            NETWORK
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect to an Expansive Global Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CoFoundersLab connects you to entrepreneurs, advisors & investors across 200+ cities and 6 continents.
          </p>
        </div>

        {/* Global network map */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl shadow-secondary/10">
            <img 
              src={globalMap} 
              alt="Global network map showing connections across continents" 
              className="w-full h-auto opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4">
              700,000
            </div>
            <p className="text-xl text-muted-foreground">
              User worldwide
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4">
              200+
            </div>
            <p className="text-xl text-muted-foreground">
              Expert advisors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
