import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { BackgroundVideo } from "../components/BackgrounVideo";
import ScrollingText from "../components/ScrollingText";
import InvestorCharter from "../components/InvestorCharter";
import CaseStudies from "../components/CaseStudies";
import ComplaintsSection from "../components/ComplaintsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <BackgroundVideo />
      <ScrollingText />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <InvestorCharter />
        <CaseStudies />
        <div className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10 items-stretch justify-center">
            {/* Contact Section */}
            <div className="flex-1 flex justify-center">
              <ContactSection />
            </div>

            {/* Complaints Section */}
            <div className="flex-1 flex justify-center">
              <ComplaintsSection />
            </div>
          </div>
        </div>


      </main>
    </div>
  );
};
