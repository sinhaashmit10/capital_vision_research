import { ArrowLeft } from "lucide-react";
import { useNavigate, ScrollRestoration } from "react-router-dom";

const RefundPolicy = () => {
  const navigate = useNavigate();

  return (
    <section
      id="refund-policy"
      className="py-24 px-6 bg-secondary/30 text-foreground scroll-mt-12"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Refund <span className="text-primary">Policy</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Please review our refund policy carefully before subscribing to any of
          our services offered by{" "}
          <span className="font-semibold">Capital Vision Research</span>.
        </p>

        {/* Content */}
        <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-lg leading-relaxed space-y-5 text-justify text-[15px] md:text-base">
          <p>
            All sales are final, and we do not offer refunds for the paid period
            of services already availed by the client. Complaints or
            dissatisfaction regarding the quality of services during the paid
            period shall not entitle the client to any refund or compensation.
          </p>

          <p>
            As per SEBI guidelines, if a client requests to cancel the
            subscription, a refund shall only be issued for the unused portion
            of the subscription period. The refund will be calculated on a
            pro-rata basis, deducting the charges for the services already
            availed, including applicable taxes and administrative fees.
          </p>

          <p>
            Refunds will not be provided for the period of services already
            availed, irrespective of the client’s satisfaction with the
            recommendations or the outcome of trades.
          </p>

          <p>
            Investments in securities markets are subject to market risks.
            Profits and losses incurred due to the use of our recommendations
            are solely the responsibility of the client.
          </p>

          <p>
            By subscribing to our services and making payment, the client
            acknowledges that they have read, understood, and agreed to this
            refund policy, as well as the{" "}
            <a
              href="/disclaimer"
              className="text-primary hover:underline"
            >
              Disclaimer
            </a>
            ,{" "}
            <a
              href="/disclosure"
              className="text-primary hover:underline"
            >
              Disclosure
            </a>
            , and other terms mentioned on our website.
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              Contact Information
            </h3>
            <p>
              For any questions or assistance regarding our refund policy,
              please contact us:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@capitalvisionresearch.com"
                  className="text-primary hover:underline"
                >
                  info@capitalvisionresearch.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+919008404236"
                  className="text-primary hover:underline"
                >
                  +91 90084 04236
                </a>
              </li>
            </ul>
          </div>
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

export default RefundPolicy;
