import { Globe, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Websites that sell, not just sit.",
    description:
      "We design and build high-converting business websites with seamless booking and payment integrations. Every page is engineered to guide visitors toward action — whether that's booking a call, making a purchase, or signing up.",
    outcomes: [
      "Higher conversion rates from day one",
      "Integrated booking & payment systems",
      "Mobile-first, lightning-fast performance",
      "Built to scale with your business",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    tagline: "Reach the right audience through voices they trust.",
    description:
      "We connect your brand with carefully selected influencers who drive real engagement and measurable sales. No vanity metrics — just partnerships that move the needle.",
    outcomes: [
      "Expanded reach to targeted audiences",
      "Authentic brand credibility & social proof",
      "Measurable ROI on every campaign",
      "End-to-end campaign management",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Two Services. One Goal:{" "}
            <span className="text-gradient-gold">Your Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 md:p-10 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="font-body text-primary text-sm font-medium mb-4">
                {service.tagline}
              </p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="font-body text-sm text-secondary-foreground flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
