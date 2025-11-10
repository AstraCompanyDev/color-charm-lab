const companies = [
  "Slidebean",
  "Customerly",
  "HubSpot",
  "Undock",
  "Pepperdine",
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h4 className="text-sm font-semibold text-secondary text-center mb-12 tracking-wider">
          TRUSTED BY INDUSTRY LEADERS
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-12 max-w-5xl mx-auto opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="text-2xl font-bold text-foreground/40 hover:text-secondary transition-colors duration-300">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
