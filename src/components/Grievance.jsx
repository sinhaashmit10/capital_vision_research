import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Grievance = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-10 sm:py-16 flex justify-center">
      <div className="w-full max-w-5xl bg-card/90 border border-border backdrop-blur-lg rounded-2xl shadow-md p-5 sm:p-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8">
          Grievance Redressal Policy
        </h1>

        {/* About Research Analyst */}
        <h2 className="text-2xl font-semibold text-primary mb-4">About the Research Analyst</h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left mb-8 border border-border rounded-lg min-w-[600px]">
            <tbody className="divide-y divide-border text-sm sm:text-base">
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Name</td>
                <td className="px-4 py-2">Amit Anand, Proprietor Capital Vision Research</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Registration No.</td>
                <td className="px-4 py-2">INH000022482</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Type</td>
                <td className="px-4 py-2">Research Analyst</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Registered E-mail</td>
                <td className="px-4 py-2">compliance@capitalvisionresearch.com</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Telephone</td>
                <td className="px-4 py-2">9006533459</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Registered Address</td>
                <td className="px-4 py-2">
                  Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout,
                  Adugodi, Koramangala, BANGALORE, KARNATAKA, 560029
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Contact Person</td>
                <td className="px-4 py-2">Amit Anand</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Email ID</td>
                <td className="px-4 py-2">info@capitalvisionresearch.com</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Correspondence Address</td>
                <td className="px-4 py-2">
                  Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout,
                  Adugodi, Koramangala, BANGALORE, KARNATAKA, 560029
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Validity</td>
                <td className="px-4 py-2">Aug 05, 2025 – Aug 04, 2030</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-primary">Website</td>
                <td className="px-4 py-2">www.capitalvisionresearch.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Policy Description */}
        <h2 className="text-2xl font-semibold text-primary mb-3">About the Policy</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          At Capital Vision Research, we are committed to providing our clients with transparent, fair, and ethical research services.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          This Grievance Redressal Policy is designed to:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Protect Investor Interests</li>
          <li>Promote Accountability</li>
          <li>Encourage Open Communication</li>
          <li>Provide Escalation Avenues</li>
        </ul>

        {/* Nature of Grievances */}
        <h3 className="text-xl font-semibold text-primary mb-3">Nature of Grievances Covered</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Lack of clarity or understanding</li>
          <li>Deficiency in service delivery</li>
          <li>Miscommunication issues</li>
          <li>Perceived conflict of interest</li>
        </ul>

        {/* Commitment */}
        <h3 className="text-xl font-semibold text-primary mb-3">Our Commitment</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We provide time-bound resolutions and maintain detailed records of grievances and actions taken.
        </p>

        {/* Escalation Matrix */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Internal Grievance Redressal / Escalation Matrix</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left mb-8 border border-border rounded-lg min-w-[800px]">
            <thead className="bg-primary/20 text-sm sm:text-base">
              <tr>
                <th className="px-4 py-2">Designation</th>
                <th className="px-4 py-2">Contact Person</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Contact No.</th>
                <th className="px-4 py-2">Email ID</th>
                <th className="px-4 py-2">Working Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm sm:text-base">
              {[
                {
                  designation: "Customer Care",
                  name: "Amit Anand",
                  address:
                    "Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout, Adugodi, Koramangala, Bangalore 560029",
                  contact: "9006533459",
                  email: "info@capitalvisionresearch.com",
                  hours: "10:00 am - 05:30 pm IST",
                },
                {
                  designation: "Head of Customer Care",
                  name: "Amit Anand",
                  address:
                    "Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout, Adugodi, Koramangala, Bangalore 560029",
                  contact: "9006533459",
                  email: "info@capitalvisionresearch.com",
                  hours: "10:00 am - 05:30 pm IST",
                },
                {
                  designation: "Compliance Officer",
                  name: "Amit Anand",
                  address:
                    "Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout, Adugodi, Koramangala, Bangalore 560029",
                  contact: "9006533459",
                  email: "support@capitalvisionresearch.com",
                  hours: "10:00 am - 05:30 pm IST",
                },
                {
                  designation: "CEO",
                  name: "Amit Anand",
                  address:
                    "Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout, Adugodi, Koramangala, Bangalore 560029",
                  contact: "9006533459",
                  email: "support@capitalvisionresearch.com",
                  hours: "10:00 am - 05:30 pm IST",
                },
                {
                  designation: "Principal Officer",
                  name: "Amit Anand",
                  address:
                    "Plot No. 10, 4th Floor, Above Domino’s Pizza, Hosur, Chikku Lakshmaiah Layout, Adugodi, Koramangala, Bangalore 560029",
                  contact: "9006533459",
                  email: "compliance@capitalvisionresearch.com",
                  hours: "10:00 am - 05:30 pm IST",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-semibold">{row.designation}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.address}</td>
                  <td className="px-4 py-2">{row.contact}</td>
                  <td className="px-4 py-2">{row.email}</td>
                  <td className="px-4 py-2">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Level-based Mechanism */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Level Based Grievance Redressal Mechanism</h2>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          <strong>LEVEL 1:</strong> Follow internal escalation. If unresolved within 10 business days, go to LEVEL 2.
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          <strong>LEVEL 2:</strong> Write to the Registered Office. If unresolved within 5 days, go to LEVEL 3.
        </p>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          <strong>LEVEL 3:</strong> File a complaint on SEBI’s SCORES portal:
          <a href="http://scores.gov.in" className="text-primary underline ml-1">http://scores.gov.in</a>
        </p>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          <strong>LEVEL 4:</strong> For dispute resolution, use:
          <a href="https://smartodr.in/login" className="text-primary underline ml-1">
            https://smartodr.in/login
          </a>
        </p>

        {/* Back Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/80 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grievance;
