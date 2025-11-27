import { Mail, Phone, ArrowLeft, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; //service_9d84l4b
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; //template_m82do1l
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; //4lvAjDg4wMcmXDJxF

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        publicKey
      )
      .then(
        () => {
          toast({
            title: "Message Sent",
            description: "We’ll get back to you as soon as possible.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact-us"
      className="p-8 md:px-12 lg:px-20 w-full scroll-mt-24 bg-background text-white rounded-xl"
    >
      {/* Heading */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a complaint, feedback, or want us to work with you? Fill out the
          form below, and we’ll get back to you promptly.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
        {/* Left - Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Let’s Talk!</h3>
          <p className="text-muted-foreground mb-6">We’d love to hear from you.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/30 bg-background placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/30 bg-background placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/30 bg-background placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Comment"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/30 bg-background placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex justify-between items-center gap-4">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-gray-700 text-gray-200 hover:bg-gray-600 transition flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary transition",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full h-64 bg-muted/10 rounded-xl">
            <MessageCircle className="w-32 h-32 text-primary" />
          </div>

          <div className="p-6 rounded-xl border border-muted-foreground/30 w-full space-y-4">
            <h3 className="text-xl font-semibold text-primary">Connect with Us</h3>
            <p className="text-muted-foreground">We’re always here to assist you online!</p>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                9006533459
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                info.capitalresearch@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default ContactUs;
