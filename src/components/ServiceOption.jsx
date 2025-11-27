import { useState } from "react";
import { 
  LineChart, BarChart3, ArrowLeft, TrendingUp, TrendingDown, 
  CircleDollarSign, BarChart2, CandlestickChart, Coins, 
  Factory, Flame, DollarSign, IndianRupee
} from "lucide-react"; 
import { useNavigate, ScrollRestoration } from "react-router-dom";

const services = {
  equity: [
    {
      id: 1,
      title: "Equity Cash",
      description:
        "Equity Cash trading involves buying and selling shares of listed companies with full upfront payment. It is the simplest form of stock market investment, where investors take direct ownership of shares and can hold them for short-term gains or long-term wealth creation.",
      icon: <CircleDollarSign className="w-10 h-10 text-primary" />,
    },
    {
      id: 2,
      title: "Equity Futures",
      description:
        "Equity Futures are derivative contracts where investors agree to buy or sell a company’s stock at a predetermined price on a future date. Unlike cash market trading, they allow investors to take larger positions with a fraction of the capital (margin), offering opportunities for both hedging and speculation.",
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
    },
    {
      id: 3,
      title: "Equity Options",
      description:
        "Equity Options are derivative contracts that give investors the right, but not the obligation, to buy (Call Option) or sell (Put Option) a company’s stock at a predetermined price within a specified period. They are powerful tools for hedging, speculation, and leveraging market opportunities with limited upfront investment.",
      icon: <TrendingDown className="w-10 h-10 text-primary" />,
    },
    {
      id: 4,
      title: "Index Futures",
      description:
        "Index Futures are derivative contracts that track the performance of a stock market index (such as Nifty or Sensex). They allow investors to take positions on the overall market direction rather than individual stocks and, with lower volatility than single-stock futures, are widely used for hedging, speculation, and portfolio diversification.",
      icon: <BarChart2 className="w-10 h-10 text-primary" />,
    },
    {
      id: 5,
      title: "Index Options",
      description:
        "Index Options are derivative contracts that give the right, but not the obligation, to buy (Call Option) or sell (Put Option) a stock market index (such as Nifty or Sensex) at a predetermined price before or on expiry. They are among the most popular trading instruments due to their low cost, flexibility, and effectiveness in hedging market risk.",
      icon: <CandlestickChart className="w-10 h-10 text-primary" />,
    },
  ],
  commodity: [
    {
      id: 6,
      title: "Bullions",
      description: "Bullions refer to precious metals such as gold and silver, which are among the most actively traded commodities worldwide. Known as safe-haven assets, bullions hold enduring value and are highly sought after for hedging against inflation, currency fluctuations, and economic uncertainty.",
      icon: <Coins className="w-10 h-10 text-primary" />,
    },
    {
      id: 7,
      title: "Metals",
      description: "Metals trading includes base metals such as copper, aluminium, zinc, lead, and nickel, which play a vital role in global industrial and economic growth. These commodities are highly sensitive to industrial demand, infrastructure development, and global economic cycles, making them attractive to both traders and investors.Research-driven calls on base metals like copper, zinc, and aluminum.",
      icon: <Factory className="w-10 h-10 text-primary" />,
    },
    {
      id: 8,
      title: "Energy",
      description:
        "The Energy segment includes highly traded commodities such as crude oil and natural gas, which form the backbone of the global economy. Energy prices are influenced by geopolitical events, supply-demand dynamics, OPEC policies, and global economic activity, making them both volatile and rich in opportunities for traders and investors.Market outlook and strategies for crude oil, natural gas, and other energy products.",
      icon: <Flame className="w-10 h-10 text-primary" />,
    },
  ],
};

const categories = [
  { key: "equity", label: "Equity", icon: <LineChart className="w-5 h-5" /> },
  { key: "commodity", label: "Commodity", icon: <BarChart3 className="w-5 h-5" /> },
];

export const ServiceOption = () => {
  const [activeCategory, setActiveCategory] = useState("equity");
  const navigate = useNavigate();

  return (
    <section id="services" className="min-h-screen pt-4 pb-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Our <span className="text-primary">Services</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our specialized services across Equity and Commodity segments. 
          Select a category to view tailored offerings that suit your trading needs.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services[activeCategory].map((service) => (
            <div
              key={service.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center p-4 rounded-full bg-primary/10 ring-2 ring-primary/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing CTA */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate("/pricing")}
          >
            <IndianRupee className="w-4 h-4" />
            View Our Pricing Plans
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
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

export default ServiceOption;
