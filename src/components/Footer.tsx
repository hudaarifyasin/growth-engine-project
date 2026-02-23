const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-bold tracking-tight mb-1">
              <span className="text-gradient-gold">Media Authority</span>{" "}
              <span className="text-foreground">Network</span>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              UK-Based Digital Growth Agency
            </p>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Media Authority Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
