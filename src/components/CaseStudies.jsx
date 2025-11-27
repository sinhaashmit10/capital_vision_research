import React from "react";

// Importing assets directly so bundler handles the paths (best for Netlify)
import bharat from "@/assets/bharat.png";
import krishna from "@/assets/krishna.png";
import shaily from "@/assets/shaily.png";
import bosch from "@/assets/bosch.png";
import zuari from "@/assets/zuari.png";
import jubilant from "@/assets/jubilant.png";
import sml from "@/assets/sml.png";

const caseStudies = [
  {
    id: 1,
    name: "Bharat Seats Limited",
    logo: bharat,
    price: 121,
    status: "Holding",
  },
  {
    id: 2,
    name: "Krishana Phoschem Limited",
    logo: krishna,
    price: 381.35,
    status: "Sold",
  },
  {
    id: 3,
    name: "Shaily Engineering Plastics Limited",
    logo: shaily,
    price: 1930.9,
    status: "Holding",
  },
  {
    id: 4,
    name: "Bosch Limited",
    logo: bosch,
    price: 34245,
    status: "Holding",
  },
  {
    id: 5,
    name: "Zuari Agro Chemicals Limited",
    logo: zuari,
    price: 290.7,
    status: "Sold",
  },
  {
    id: 6,
    name: "Jubilant Agri & Consumer Products",
    logo: jubilant,
    price: 2002.2,
    status: "Holding",
  },
  {
    id: 7,
    name: "SML Isuzu Limited",
    logo: sml,
    price: 2791.6,
    status: "Sold",
  },
];

export const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-24 px-4 bg-secondary/10 scroll-mt-12 relative z-10"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          Case <span className="text-primary">Studies</span>
        </h2>

        {/* Description */}
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          The securities quoted below are ONLY for illustration purposes and are
          not recommendations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              {/* Status Ribbon */}
              <div
                className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded-tr-xl rounded-bl-xl ${
                  item.status === "Holding" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {item.status}
              </div>

              {/* Logo */}
              <div className="flex items-center justify-center mb-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Name + price */}
              <h3 className="font-semibold text-lg mb-1 text-white">
                {item.name}
              </h3>
              <p className="text-sm text-white/70">
                (Reco Price Rs. {item.price}/share; Status- {item.status})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;