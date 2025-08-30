import React from "react";

const maturityData = [
    {
        level: "Level-1",
        score: "0-1.5",
        risk: "High",
        description: "Reactive with limited planning and coordination",
    },
    {
        level: "Level-2",
        score: "1.51-2.5",
        risk: "Moderate",
        description: "Proactive, planned, coordinated",
    },
    {
        level: "Level-3",
        score: "2.51-3.0",
        risk: "Low",
        description: "Proactive, agile, and well-coordinated",
    },
];

export default function MaturityTable() {
    return (
        <div className="flex justify-center mt-8">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 border-b">Maturity Level</th>
                        <th className="px-3 py-2 border-b">Score</th>
                        <th className="px-3 py-2 border-b">Risk</th>
                        <th className="px-3 py-2 border-b">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {maturityData.map((item) => (
                        <tr key={item.level} className="hover:bg-gray-50">
                            <td className="px-3 py-2 border-b">{item.level}</td>
                            <td className="px-3 py-2 border-b">{item.score}</td>
                            <td className="px-3 py-2 border-b">{item.risk}</td>
                            <td className="px-3 py-2 border-b">{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
