import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-16">
      <div className="max-w-5xl w-full bg-card/90 border border-border backdrop-blur-lg rounded-2xl shadow-md p-8 sm:p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Disclaimer
        </h1>

        <ul className="list-decimal list-inside text-muted-foreground space-y-4 mb-10 leading-relaxed">
          <li>
            <strong>Warning:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </li>
          <li>
            Market Risks refer to partial or permanent loss on your investments in certain market conditions.
          </li>
          <li>
            Registration granted by SEBI and certification from NISM in no way guarantees the performance of the intermediary or provides any assurance of returns to investors.
          </li>
          <li>
            The securities quoted are for illustration only and are not recommendatory.
          </li>
          <li>
            Investing in financial markets involves risks. Past performance is not indicative of future results. You should carefully consider your risk tolerance and financial situation before making any investment.
          </li>
          <li>
            We operate in accordance with SEBI Research Analyst, 2014 regulations and guidelines. Any information provided here is intended to be accurate and in compliance with SEBI requirements. However, we do not warrant or represent that the information provided on this website/platform is always up-to-date, accurate, or complete.
          </li>
          <li>
            Details provided in any social media platforms are for educational purposes and should not be construed as investment advice. We reserve the right to modify or update this disclaimer at any time without notice.
          </li>
        </ul>

        {/* Back Button at Bottom */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/80 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
