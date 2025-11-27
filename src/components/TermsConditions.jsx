import { ArrowLeft } from "lucide-react";
import { useNavigate, ScrollRestoration } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <section
      id="terms-conditions"
      className="py-24 px-6 bg-secondary/30 text-foreground scroll-mt-12"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Terms & <span className="text-primary">Conditions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Please read these Terms and Conditions carefully before using the
          services provided by <span className="font-semibold">Capital Vision Research</span>.
        </p>

        {/* Content Box */}
        <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-lg leading-relaxed space-y-5 text-justify text-[15px] md:text-base">
          <p>
            This section contains the Terms and Conditions of Use of this
            website. By accessing this website and any of its pages, you are
            agreeing to these Terms and Conditions. You also agree that{" "}
            <span className="font-semibold">Capital Vision Research</span> can
            modify or alter the terms and conditions of the use of this service
            without any liability.
          </p>

          <p>
            <span className="font-semibold">Capital Vision Research</span> shall
            not be liable for any misrepresentation, falsification, deception,
            or lack of availability of services through the website, even if the
            same are advertised for on the site. No judgment, warranty, or
            representation is made regarding the accuracy, timeliness, or
            suitability of the content of other services or sites;{" "}
            <span className="font-semibold">Capital Vision Research</span> shall
            not be responsible therefore.
          </p>

          <p>
            <span className="font-semibold">Capital Vision Research</span> shall
            not be liable if the customer downloads any information from this
            website. Further, the company shall not be liable if the customer
            makes a copy, modifies, uploads, downloads, or otherwise
            distributes any service or content from this site.
          </p>

          <p>
            The company, its owners, and employees shall not be responsible for
            any loss incurred during free or paid advisory services.{" "}
            <span className="font-semibold">Capital Vision Research</span> does
            not guarantee any fixed profit on its free or paid services.
          </p>

          <p>
            The company reserves the right, at any time and from time to time,
            to modify or discontinue, temporarily or permanently, the service
            (or any part thereof) with or without notice. You agree that{" "}
            <span className="font-semibold">Capital Vision Research</span> shall
            not be liable to you or any third party for any modification,
            suspension, or discontinuance of the service.
          </p>

          <p>
            <span className="font-semibold">Registration:</span> In order to use{" "}
            <span className="font-semibold">Capital Vision Research</span>{" "}
            services, you must provide certain personal information.
          </p>

          <p>
            <span className="font-semibold">Privacy Policy:</span> Registration
            data and certain other information about you are subject to the
            privacy policy available at{" "}
            <a
              href="https://www.srresearch.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.srresearch.co.in
            </a>
            . Please read this policy carefully.
          </p>

          <p>
            The stock tips, commodity tips, views, blogs, and comments made by
            users and placed on the site are their own independent views. The
            company, its owners, management, shareholders, and employees are not
            in any way linked to these users or have any vested or beneficial
            interest in such content.
          </p>

          <p>
            These terms and conditions shall apply to any person visiting or
            accessing this website.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
      </div>

      <ScrollRestoration />
    </section>
  );
};

export default TermsConditions;
