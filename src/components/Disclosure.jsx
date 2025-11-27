import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Disclosure = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-16">
      <div className="max-w-5xl w-full bg-card/90 border border-border backdrop-blur-lg rounded-2xl shadow-md p-8 sm:p-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Disclosure
        </h1>

        <p className="text-lg font-medium mb-4">
          <strong>SEBI Registered Research Entity Registration No:</strong>{" "}
          INH000022482
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          This Disclosure Document has been prepared in compliance with the SEBI
          (Capital Vision Research) Regulations. Its purpose is to provide key
          information about the Research and Recommendation Services, enabling
          prospective clients or clients to make informed decisions about
          engaging in these services before making investment decisions.
        </p>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          For the purpose of this Disclosure Document, Capital Vision Research
          hereinafter referred as the <strong>Research Entity</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-primary mb-3">
          Descriptions about “Research Entity”
        </h2>

        <h3 className="text-xl font-semibold text-primary mb-2">
          Terms and Conditions of Capital Vision Research
        </h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            The Research Services are strictly limited to offering independent
            research recommendations and do not include advisory services.
          </li>
          <li>
            The Research Entity does not guarantee returns on any
            recommendations provided. Investors are advised that investing or
            trading in stocks, indices, or other securities involves market
            risks. Past performance is not indicative of future outcomes.
          </li>
          <li>
            The Research Entity is not liable for any losses incurred by
            investors.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-primary mb-2">
          Disciplinary History
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          There are no pending material litigations or legal proceedings against
          the Research Entity. As on date, no penalties or directions have been
          issued by SEBI under the SEBI Act or Regulations made thereunder
          against the Research Entity relating to its services.
        </p>

        <h3 className="text-xl font-semibold text-primary mb-2">
          Details of Associates and Holding
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The Research Entity has no associates.
        </p>

        <h3 className="text-xl font-semibold text-primary mb-2">
          Disclosures with respect to Research and Recommendation Services
        </h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-10">
          <li>
            The Research Entity or any of its officers/employees does not trade
            in securities which are subject matter of recommendation.
          </li>
          <li>
            There are no actual or potential conflicts of interest arising from
            any connection or association with any issuer of products or
            securities that might compromise its objectivity or independence in
            carrying on Research Entity services. Any such conflict will be
            disclosed when they arise.
          </li>
          <li>
            The Research Entity or its employees/associates have not received
            any compensation from the company which is the subject of
            recommendation.
          </li>
          <li>
            The Research Entity or its employees/associates have not managed or
            co-managed the public offering of any company.
          </li>
          <li>
            The Research Entity or its employees/associates have not received
            compensation for investment banking, merchant banking, or brokerage
            services from the subject company.
          </li>
          <li>
            The Research Entity or its employees/associates have not received
            compensation for any other products or services from the subject
            company.
          </li>
          <li>
            The subject company was not a client of the Research Entity or its
            employees/associates during the twelve months preceding the date of
            recommendation services provided.
          </li>
          <li>
            The Research Entity or its employees/associates have not served as
            officers, directors, or employees of the subject company.
          </li>
          <li>
            The Research Entity has not been engaged in market-making activity
            of the subject company.
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

export default Disclosure;
