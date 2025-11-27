import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background/90 backdrop-blur-md border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
      {/* Left: Copyright */}
      <p className="text-sm text-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} Capital Vision Research (INH000022482). All rights reserved.
      </p>

      {/* Center: Footer Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/80">
        <a
          href="/terms"
          className="hover:text-primary transition-colors duration-300"
        >
          Terms & Conditions
        </a>
        <a
          href="/refund"
          className="hover:text-primary transition-colors duration-300"
        >
          Refund Policy
        </a>
        <a
          href="/disclosure"
          className="hover:text-primary transition-colors duration-300"
        >
          Disclosure
        </a>
        <a
          href="/disclaimer"
          className="hover:text-primary transition-colors duration-300"
        >
          Disclaimer
        </a>
        <a
          href="/grievance"
          className="hover:text-primary transition-colors duration-300"
        >
          Grievance
        </a>
      </div>

      {/* Right: Scroll to Top */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
