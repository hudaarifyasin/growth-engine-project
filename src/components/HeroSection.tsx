import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(40_80%_55%/0.06)_0%,transparent_60%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6 animate-fade-in">
          UK-Based Digital Growth Agency
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up max-w-4xl mx-auto">
          We Build Brands That{" "}
          <span className="text-gradient-gold">Dominate Online</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Strategic websites and influencer partnerships designed to turn attention into revenue — for ambitious businesses across the UK and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" onClick={() => scrollTo("contact")}>
            Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="hero-outline" size="lg" onClick={() => scrollTo("services")}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
