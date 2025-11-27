import React from "react";
import { cn } from "@/lib/utils";

const ScrollingText = () => {
  const text = `Important Note: Capital Vision Research is a SEBI-registered Research Analyst (INH000022482) with its registered office in India. We do not have any branch offices. 
  Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. 
  Registration granted by SEBI, enlistment on BSE, and certification from the National Institute of Securities Markets (NISM) in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.`;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 overflow-hidden bg-primary text-primary-foreground py-2"
      )}
    >
      <div className="flex whitespace-nowrap">
        {/* First copy */}
        <div className="animate-scroll flex-shrink-0 min-w-full">
          <span className="mx-8 text-sm font-medium">{text}</span>
        </div>
        {/* Second copy (seamless loop) */}
        <div className="animate-scroll flex-shrink-0 min-w-full">
          <span className="mx-8 text-sm font-medium">{text}</span>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingText;
