"use client"

import React from "react"
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer, Tooltip,
} from "recharts"

export default function RadarChartResult({ scores }) {
    // scores = [
    //   { category_id, category_name, average_score, total_score, question_count }
    // ]

    // Map to recharts format: each item needs a "subject" label and a numeric value key
    const data = scores.map(({ category_name, average_score }) => ({
        subject: category_name,
        A: average_score,
    }))

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, "dataMax"]} />
                    <Radar
                        name="Average Score"
                        dataKey="A"
                        stroke="#2563EB"  // blue stroke
                        fill="#3B82F6"    // blue fill
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
