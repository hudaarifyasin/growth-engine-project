import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_80%_55%/0.08)_0%,transparent_60%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to Stop Guessing and{" "}
          <span className="text-gradient-gold">Start Growing?</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Book a free strategy call. No pressure, no jargon — just an honest conversation about how we can help your business win online.
        </p>
        <Button variant="hero" size="lg" onClick={() => scrollTo("contact")}>
          Book Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
