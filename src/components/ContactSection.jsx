import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleContactClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/contact-page");
      toast({
        title: "Redirecting",
        description: "Taking you to the contact page...",
      });
      setIsLoading(false);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-secondary/30 flex justify-center items-center scroll-mt-24"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-lg w-full text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground">
          Have questions about trading strategies, investment opportunities, or our services? Our team is here to assist you. Reach out today, and we’ll provide expert guidance to help you make informed financial decisions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/amit-anand-3ba0a070/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-primary hover:text-white transition" />
          </a>
          <a href="https://x.com/ananddamit" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-primary hover:text-white transition" />
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-primary hover:text-white transition" />
          </a> */}
          <a href="mailto:hello@gmail.com">
            <Mail className="w-6 h-6 text-primary hover:text-white transition" />
          </a>
        </div>

        {/* Contact Us Button */}
        <button
          onClick={handleContactClick}
          disabled={isLoading}
          className={cn(
            "mt-6 px-6 py-2 bg-primary text-white rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-primary border-2 border-primary transition w-full"
          )}
        >
          {isLoading ? "Redirecting..." : "Contact Us"}
        </button>
      </div>
    </section>
  );
};
