import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowLeft } from "lucide-react";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { cn } from "@/lib/utils";

// === Data ===
const activitiesData = [
    { id: 1, source: "Directly from Investor", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionTime: 0 },
    { id: 2, source: "SEBI (SCORES)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionTime: 0 },
    { id: 3, source: "Other Sources (if any)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionTime: 0 },
];

const monthlyDisposalData = [
    { id: 1, month: "Aug 2024", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
    { id: 2, month: "Sep 2024", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
    { id: 3, month: "Oct 2024", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
    { id: 4, month: "Nov 2024", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
    { id: 5, month: "Dec 2024", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
    { id: 6, month: "Jan 2025", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 },
];

const annualDisposalData = [{ id: 1, year: "2024-2025", carriedForward: 0, received: 0, resolved: 0, totalPending: 0 }];

// === Table Component ===
const DataTable = ({ headers, rows, rowRenderer }) => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
                <tr className="bg-gray-700 text-white-700">
                    {headers.map((header, i) => (
                        <th key={i} className="border border-gray-200 px-4 py-2 text-left">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => rowRenderer(row, i))}
                <tr className="font-semibold bg-white/10">
                    <td className="border px-4 py-2">Grand Total</td>
                    {headers.slice(1).map((_, j) => (
                        <td key={j} className="border px-4 py-2 text-center">0</td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
);

// === Complaints Section ===
export const Complaints = () => {
    const navigate = useNavigate();

    return (
        <section id="complaints" className="py-16 px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">

                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl mb-2 font-bold">
                        Complaints <span className="text-primary">Status</span>
                    </h2>
                    <p className="text-sm text-white-600">-As of 31st August 2025</p>
                </div>


                {/* Activities Registered */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Activities Registered</h3>
                    <DataTable
                        headers={["ID", "Received From", "Pending Last Month", "Received", "Resolved", "Total Pending", "Pending > 3 Months", "Avg Resolution Time"]}
                        rows={activitiesData}
                        rowRenderer={(row) => (
                            <tr key={row.id}>
                                <td className="border px-4 py-2">{row.id}</td>
                                <td className="border px-4 py-2">{row.source}</td>
                                <td className="border px-4 py-2 text-center">{row.pendingLastMonth}</td>
                                <td className="border px-4 py-2 text-center">{row.received}</td>
                                <td className="border px-4 py-2 text-center">{row.resolved}</td>
                                <td className="border px-4 py-2 text-center">{row.totalPending}</td>
                                <td className="border px-4 py-2 text-center">{row.pendingOver3Months}</td>
                                <td className="border px-4 py-2 text-center">{row.avgResolutionTime}</td>
                            </tr>
                        )}
                    />
                </div>

                {/* Monthly Disposal */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Trend of Monthly Disposal</h3>
                    <DataTable
                        headers={["ID", "Month", "Carried Forward", "Received", "Resolved", "Total Pending"]}
                        rows={monthlyDisposalData}
                        rowRenderer={(row) => (
                            <tr key={row.id}>
                                <td className="border px-4 py-2">{row.id}</td>
                                <td className="border px-4 py-2">{row.month}</td>
                                <td className="border px-4 py-2 text-center">{row.carriedForward}</td>
                                <td className="border px-4 py-2 text-center">{row.received}</td>
                                <td className="border px-4 py-2 text-center">{row.resolved}</td>
                                <td className="border px-4 py-2 text-center">{row.totalPending}</td>
                            </tr>
                        )}
                    />

                    {/* Chart */}
                    <div className="mt-6 bg-white rounded-xl shadow p-4">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthlyDisposalData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="received" stroke="#f59e0b" strokeWidth={2} />
                                <Line type="monotone" dataKey="resolved" stroke="#16a34a" strokeWidth={2} />
                                <Line type="monotone" dataKey="totalPending" stroke="#dc2626" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Annual Disposal */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Trend of Annual Disposal</h3>
                    <DataTable
                        headers={["ID", "Year", "Carried Forward", "Received", "Resolved", "Total Pending"]}
                        rows={annualDisposalData}
                        rowRenderer={(row) => (
                            <tr key={row.id}>
                                <td className="border px-4 py-2">{row.id}</td>
                                <td className="border px-4 py-2">{row.year}</td>
                                <td className="border px-4 py-2 text-center">{row.carriedForward}</td>
                                <td className="border px-4 py-2 text-center">{row.received}</td>
                                <td className="border px-4 py-2 text-center">{row.resolved}</td>
                                <td className="border px-4 py-2 text-center">{row.totalPending}</td>
                            </tr>
                        )}
                    />

                    {/* Chart */}
                    <div className="mt-6 bg-white rounded-xl shadow p-4">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={annualDisposalData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="received" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                                <Bar dataKey="resolved" fill="#16a34a" radius={[8, 8, 0, 0]} />
                                <Bar dataKey="totalPending" fill="#dc2626" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Notes */}
                <div className="text-sm text-white-600 space-y-1">
                    <p>• Data is updated on 7th of every month.</p>
                    <p>• Data presented here is taken from SCORES portal.</p>
                    <p>• Importance is given to resolve the complaint in prescribed TAT.</p>
                </div>

                {/* Back Button */}
                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-gray-700 text-gray-200 hover:bg-gray-600 transition flex items-center gap-2"
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                </div>
            </div>
            <ScrollRestoration />
        </section>
    );
};

export default Complaints;
