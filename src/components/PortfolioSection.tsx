const projects = [
  {
    title: "E-Commerce Brand Relaunch",
    category: "Website Development",
    result: "3x increase in online sales within 60 days",
  },
  {
    title: "Fitness Brand Influencer Campaign",
    category: "Influencer Marketing",
    result: "500K+ reach with 8.2% engagement rate",
  },
  {
    title: "SaaS Platform Landing Page",
    category: "Website Development",
    result: "42% improvement in lead conversion",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Results That{" "}
            <span className="text-gradient-gold">Speak Volumes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-lg overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <span className="font-body text-sm text-muted-foreground">
                  Case Study Preview
                </span>
              </div>
              <div className="p-6">
                <p className="font-body text-xs uppercase tracking-widest text-primary mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-lg font-bold mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Result:</span>{" "}
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
