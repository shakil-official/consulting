"use client"

import React from "react"
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer, Tooltip,
    Dot,
} from "recharts"

export default function RadarChartResult({ scores }) {
    // Professional, readable colors
    const categoryColors = [
        "#2563EB", // blue
        "#10B981", // green
        "#F59E0B", // amber
        "#EF4444", // red
        "#8B5CF6", // violet
        "#0EA5E9", // cyan
        "#F43F5E", // pink
        "#64748B", // slate
    ]

    // Map scores to Recharts data format
    const data = scores.map(({ category_name, weighted_average }, index) => ({
        subject: category_name,
        A: weighted_average,
        color: categoryColors[index % categoryColors.length], // assign color per category
    }))

    // Custom dot renderer to color each vertex
    const renderCustomDot = (props) => {
        const { cx, cy, payload } = props
        return (
            <circle cx={cx} cy={cy} r={5} fill={payload.color} stroke="#fff" strokeWidth={1} />
        )
    }

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#CBD5E1" /> {/* light gray grid */}
                    <PolarAngleAxis dataKey="subject" stroke="#334155" /> {/* labels */}
                    {/*<PolarRadiusAxis angle={30} domain={[0, 3]} tickCount={3} stroke="#334155" />*/}

                    <PolarRadiusAxis
                        domain={[0, 3]}          // সর্বোচ্চ মান
                        ticks={[1, 2, 3]}        // rings নির্দিষ্ট করে দিলাম
                        axisLine={false}         // axis লাইন নেই
                        tick={false}             // label নেই
                    />

                    <Radar
                        name="Average Score"
                        dataKey="A"
                        stroke="#0a2259"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                        dot={renderCustomDot} // use custom colored dots
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#F8FAFC",
                            border: "1px solid #CBD5E1",
                            color: "#111827",
                        }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
