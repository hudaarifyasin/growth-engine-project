const steps = [
  {
    number: "01",
    title: "Strategy Call",
    description:
      "We learn about your business, goals, and challenges. You walk away with clarity on what needs to happen next — whether you work with us or not.",
  },
  {
    number: "02",
    title: "Custom Plan",
    description:
      "We craft a tailored strategy and roadmap specific to your objectives. No templates, no one-size-fits-all packages.",
  },
  {
    number: "03",
    title: "Execution & Growth",
    description:
      "We build, launch, and optimise. You see measurable progress, transparent reporting, and a clear path to ROI.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Three Steps to{" "}
            <span className="text-gradient-gold">Measurable Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <span className="font-display text-5xl font-bold text-primary/15 absolute top-4 right-6">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-bold mb-4 mt-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
