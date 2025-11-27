import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  BarChart3,
  Layers,
  LineChart,
  PieChart,
  Gem,
  Package,
  Flame,
} from "lucide-react";

const skills = [
  // Equity
  {
    name: "Equity Cash",
    description:
      "Research-based intraday and delivery calls for stocks listed on NSE and BSE.",
    category: "equity",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
  {
    name: "Equity Future",
    description:
      "Strategic trading recommendations on stock futures with proper risk management.",
    category: "equity",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
  {
    name: "Equity Option",
    description:
      "Expert guidance on option trading strategies including calls, puts, and spreads.",
    category: "equity",
    icon: <Layers className="w-8 h-8 text-primary" />,
  },
  {
    name: "Index Futures",
    description:
      "In-depth analysis and trading calls on major index futures like Nifty and Bank Nifty.",
    category: "equity",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
  {
    name: "Index Option",
    description:
      "Comprehensive strategies for index options to capture short-term and long-term opportunities.",
    category: "equity",
    icon: <PieChart className="w-8 h-8 text-primary" />,
  },

  // Commodity
  {
    name: "Bullions",
    description: "Trading insights for gold, silver, and other precious metals.",
    category: "commodity",
    icon: <Gem className="w-8 h-8 text-primary" />,
  },
  {
    name: "Metals",
    description: "Research-driven calls on base metals like copper, zinc, and aluminum.",
    category: "commodity",
    icon: <Package className="w-8 h-8 text-primary" />,
  },
  {
    name: "Energy",
    description:
      "Market outlook and strategies for crude oil, natural gas, and other energy products.",
    category: "commodity",
    icon: <Flame className="w-8 h-8 text-primary" />,
  },
];

const categories = ["all", "equity", "commodity"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 scroll-mt-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-primary"> Expertise</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
