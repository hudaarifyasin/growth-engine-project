import { Zap, Target, TrendingUp, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Speed That Matters",
    description: "We move fast without cutting corners. Your project launches on time, every time.",
  },
  {
    icon: Target,
    title: "Strategy-First Approach",
    description: "Every decision is backed by data and aligned with your business objectives — no guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Performance Obsessed",
    description: "We measure what matters: conversions, revenue, and ROI. If it doesn't drive results, we don't do it.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Built with the latest tools and frameworks to ensure your digital presence stays ahead of the curve.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Why Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Built Different.{" "}
            <span className="text-gradient-gold">Results Prove It.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
