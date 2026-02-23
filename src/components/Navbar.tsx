import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient-gold">Media Authority</span>{" "}
          <span className="text-foreground">Network</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Services</button>
          <button onClick={() => scrollTo("why-us")} className="hover:text-foreground transition-colors">Why Us</button>
          <button onClick={() => scrollTo("process")} className="hover:text-foreground transition-colors">Process</button>
          <button onClick={() => scrollTo("portfolio")} className="hover:text-foreground transition-colors">Work</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition-colors">Contact</button>
        </div>
        <Button variant="hero" size="sm" onClick={() => scrollTo("contact")}>
          Book a Call <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
