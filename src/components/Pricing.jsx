import { CheckCircle, IndianRupee, ArrowLeft } from "lucide-react";
import { useNavigate, ScrollRestoration } from "react-router-dom";

const pricingData = [
  {
    category: "Basic",
    plans: [
      { name: "Stock Cash", monthly: 1700, quarterly: 4720 },
      { name: "Stock Future", monthly: 1700, quarterly: 4720 },
      { name: "Stock Option", monthly: 1700, quarterly: 4720 },
      { name: "Index Option", monthly: 1700, quarterly: 4720 },
    ],
  },
  {
    category: "Combo",
    plans: [
      { name: "Stock Cash + Stock Option", monthly: 29500, quarterly: 76700 },
      { name: "Stock Future + Stock Option", monthly: 29500, quarterly: 76700 },
      { name: "Index Future + Index Option", monthly: 29500, quarterly: 76700 },
      {
        name: "Stock Future + Stock Cash + Stock Option + Index Option",
        monthly: 68180,
        quarterly: 149999,
      },
    ],
  },
  {
    category: "Bullions / Base Metal / Energy",
    plans: [
      { name: "Gold / Silver", monthly: 1700, quarterly: 4720 },
      {
        name: "Zinc / Aluminium / Lead / Copper / Nickel",
        monthly: 1700,
        quarterly: 4720,
      },
      { name: "Crude / Natural Gas", monthly: 1700, quarterly: 4720 },
    ],
  },
  {
    category: "Commodity Combo",
    plans: [
      {
        name: "Bullions + Base Metal + Energy",
        monthly: 68180,
        quarterly: 149999,
      },
    ],
  },
];

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Pricing <span className="text-primary">Plans</span>
        </h2>

        {pricingData.map((section, idx) => (
          <div key={idx} className="mb-16">
            {/* Category Title */}
            <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
              {section.category}
            </h3>

            {/* Grid of Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.plans.map((plan, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-3xl shadow-lg hover:shadow-xl border border-gray-200 p-6 flex flex-col items-center text-center transition transform hover:scale-[1.02]"
                >
                  <h4 className="text-xl font-semibold mb-6">{plan.name}</h4>

                  <div className="space-y-4">
                    <p className="flex items-center justify-center gap-2 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Monthly:{" "}
                      <span className="font-bold flex items-center">
                        <IndianRupee size={16} />{" "}
                        {plan.monthly.toLocaleString()}
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-2 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Quarterly:{" "}
                      <span className="font-bold flex items-center">
                        <IndianRupee size={16} />{" "}
                        {plan.quarterly.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>
      </div>
      <ScrollRestoration/>
    </section>
  );
};

export default Pricing;
