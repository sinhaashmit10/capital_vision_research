import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-18 md:mt-28 lg:mt-10 scroll-mt-10"
    >
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Left side: Text */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Capital Vision
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Research
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            Capital Vision Research (INH000022482) is a market-focused research firm
            specializing in generating both intraday and delivery calls for equity
            cash and F&O segments in NSE and BSE, as well as commodities including
            bullion, metals, and other products traded on MCX and NCDEX.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#services" className="cosmic-button">
              Explore More
            </a>
          </div>
        </div>

        {/* Right side: Logo */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/logo.png"
            alt="Capital Vision Logo"
            className="w-40 md:w-56 lg:w-64 object-contain"
          />
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
