import { ArrowRight, LineChart, Target, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Our Goal",
    description:
      "Helping clients achieve consistent returns across multiple segments with precision and discipline.",
    icon: <Target className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Crafting research-backed strategies that maximize profits while managing risks effectively.",
    icon: <LineChart className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    title: "Our Interest",
    description:
      "Delivering reliable support and exceptional service at every step of your trading journey.",
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
  },
];

export const ProjectsSection = () => {
  const navigate = useNavigate(); // hook from react-router

  return (
    <section id="services" className="py-24 px-4 relative scroll-mt-14">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          What We <span className="text-primary"> Do?</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We deliver expert research and actionable insights across equity and commodity markets, 
          helping traders make informed decisions with confidence. Our focus is on accuracy, 
          timely strategies, and tailored solutions for every market segment.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center p-4 rounded-full bg-primary/10 ring-2 ring-primary/20">
                {project.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/services")}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Our Services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
