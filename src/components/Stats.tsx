const Stats = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-primary mb-4 tracking-wider">
            NETWORK
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect to an Expansive Global Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CoFoundersLab connects you to entrepreneurs, advisors & investors across 200+ cities and 6 continents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-coral bg-clip-text text-transparent mb-4">
              700,000
            </div>
            <p className="text-xl text-muted-foreground">
              User worldwide
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-coral bg-clip-text text-transparent mb-4">
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
