import { useState, useRef } from "react";
import {
  Eye,
  Target,
  FileText,
  ShieldCheck,
  Users,
  AlertCircle,
  ArrowDown
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const charterSections = [
  {
    id: 1,
    title: "Vision",
    description: "Invest with knowledge & safety.",
    icon: <Eye className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "Mission",
    description:
      "Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "Business Transacted by Research Analyst",
    description: (
      <ul className="list-disc list-outside pl-5 space-y-1">
        <li>Publish research reports based on the research activities of the RA.</li>
        <li>Provide an independent unbiased view on securities.</li>
        <li>Offer unbiased recommendations, disclosing financial interests.</li>
        <li>Provide research recommendations based on publicly available information and known observations.</li>
        <li>Conduct annual audits.</li>
      </ul>
    ),
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "Services Provided to Investors",
    description: (
      <ul className="list-disc list-outside pl-5 space-y-1">
        <li>Onboarding of Clients</li>
        <li>Disclosure to Clients</li>
        <li>Distribute research reports and recommendations to clients without discrimination.</li>
        <li>Maintain confidentiality until reports are publicly released.</li>
      </ul>
    ),
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    id: 5,
    title: "Grievance Redressal Mechanism",
    description: (
      <ul className="list-disc list-outside pl-5 space-y-1">
        <li>Investors should approach the concerned research analyst; grievances should be resolved within 30 days.</li>
        <li>If unresolved, complaints can be lodged with SEBI via SCORES portal.</li>
        <li>Physical complaints can be sent to: Office of Investor Assistance and Education, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400051.</li>
      </ul>
    ),
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
  },
  {
    id: 6,
    title: "Investor Responsibilities",
    description: (
      <>
        <p className="font-bold">Do's:</p>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Always deal with SEBI registered Research Analysts.</li>
          <li>Ensure that the Research Analyst has a valid registration certificate.</li>
          <li>Check for the SEBI registration number.</li>
          <li>
            Refer to the list of all SEBI registered Research Analysts available on the SEBI website{" "}
            <a
              href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Registered Research Analysts List
            </a>
            .
          </li>
          <li>Pay attention to disclosures made in research reports before investing.</li>
          <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
          <li>Before buying securities or applying in a public offer, check for the research recommendation provided by your Research Analyst.</li>
          <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
          <li>Inform SEBI about Research Analysts offering assured or guaranteed returns.</li>
        </ul>

        <p className="mt-3 font-bold">Don'ts:</p>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Do not provide funds for investment to the Research Analyst.</li>
          <li>Don’t fall prey to luring advertisements or market rumours.</li>
          <li>Do not get attracted to limited period discounts or other incentives, gifts, etc., offered by the Research Analyst.</li>
          <li>Do not share login credentials and password of your trading and demat accounts with the Research Analyst.</li>
        </ul>
      </>
    ),
    icon: <Users className="w-6 h-6 text-primary" />,
  },
];

export const InvestorCharter = () => {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});
  const navigate = useNavigate();

  const toggleSection = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="investor-charter"
      className="py-24 px-4 bg-secondary/30 scroll-mt-12 relative z-10"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          Investor <span className="text-primary">Charter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our commitment to investors is built on transparency, knowledge, and
          trust. Explore the key principles, services, and responsibilities.
        </p>

        <div className="space-y-6">
          {charterSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <div
                key={section.id}
                className="bg-white/10 backdrop-blur-md rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="flex items-center gap-3 p-6"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex-shrink-0">{section.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{section.title}</h3>
                </div>

                <div
                  ref={(el) => (contentRefs.current[section.id] = el)}
                  className={`overflow-hidden transition-all duration-500 px-6`}
                  style={{
                    maxHeight: isActive
                      ? `${contentRefs.current[section.id]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <div className="pb-4 text-muted-foreground text-sm md:text-base text-left leading-relaxed">
                    {section.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestorCharter;
