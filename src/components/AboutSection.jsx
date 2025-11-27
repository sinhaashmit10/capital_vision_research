import { Briefcase, LineChart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-12">
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Capital Vision Research</h3>

            <p className="text-muted-foreground">
              <b>Capital Vision Research (INH000022482)</b> is a market-focused
              research firm specializing in generating both intraday and delivery
              calls for equity cash and F&O segments in NSE and BSE, as well as
              commodities including bullion, metals, and energy products traded on
              MCX and NCDEX.
            </p>

            <p className="text-muted-foreground">
              Our advanced call delivery system ensures instant and reliable
              message transmission, enabling clients to receive timely trade
              recommendations and execute their positions efficiently, thereby
              maximizing profit opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 gap-6">
            {/* Equity Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-1">
                  <h4 className="font-semibold text-lg text-foreground">Equity</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide research-backed recommendations for Equity Cash, Futures, and Options,
                    including strategies for major indices like Nifty and Bank Nifty to help clients
                    capitalize on both intraday and long-term opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Commodity Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ring-2 ring-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-1">
                  <h4 className="font-semibold text-lg text-foreground">Commodity</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our commodity research covers Bullions, Metals, and Energy products,
                    offering strategic insights to trade effectively in MCX and NCDEX markets
                    with a focus on accuracy and risk management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
