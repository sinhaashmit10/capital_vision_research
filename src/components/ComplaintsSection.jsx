import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ComplaintsSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleComplaintsClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/complaints");
      toast({
        title: "Redirecting",
        description: "Taking you to the complaints page...",
      });
      setIsLoading(false);
    }, 500);
  };

  return (
    <section
      id="complaints"
      className="py-24 px-4 bg-secondary/30 flex justify-center items-center scroll-mt-24"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-lg w-full text-center space-y-6 flex flex-col justify-between h-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Complaints <span className="text-primary">Section</span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground flex-1">
          Click below to view our complaints list regarding services, transactions, or research recommendations. We regularly review and update it to ensure prompt responses.”
        </p>

        {/* Button */}
        <button
          onClick={handleComplaintsClick}
          disabled={isLoading}
          className={cn(
            "mt-6 px-6 py-2 bg-primary text-white rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-primary border-2 border-primary transition w-full"
          )}
        >
          {isLoading ? "Redirecting..." : "Complaints"}
        </button>
      </div>
    </section>
  );
};

export default ComplaintsSection;
