import React from "react";
import ServiceOption from "../components/ServiceOption"; // adjust path if needed
import { BackgroundVideo } from "../components/BackgrounVideo";
import { ContactSection } from "../components/ContactSection";

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-background"
    >
      <BackgroundVideo />

      {/* Service Options */}
      <div className="w-full max-w-5xl">
        <ServiceOption />
        <ContactSection />
      </div>
    </section>
  );
};

export default Services;
