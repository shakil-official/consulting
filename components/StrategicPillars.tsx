"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {Header} from "@/components/header";

const pillars = [
    {
        title: "1. Strategic Risk & Reputation Leadership",
        summary: "Transform risk into competitive advantage. We align climate adaptation, stakeholder engagement, enterprise risk management, regulatory intelligence, and community relations into a cohesive strategic narrative that positions your organization as an industry leader while maintaining competitive awareness and market positioning.",
        outcomes: "Enhanced market positioning, stronger stakeholder trust, proactive risk culture, improved regulatory relationships, competitive intelligence advantage",
    },
    {
        title: "2. Operational Resilience",
        summary: "Build infrastructure that withstands disruption. We develop robust security frameworks, conduct comprehensive maturity assessments, establish readiness protocols, and integrate emerging technology safeguards that ensure your operations can adapt, respond, and recover from any threat.",
        outcomes: "Reduced downtime, faster recovery times, strengthened operational continuity, future-ready technology infrastructure",
    },
    {
        title: "3. Crisis & Continuity Governance",
        summary: "Institutionalize confidence through proven systems. We create tested crisis response protocols, integrate stakeholder ecosystems, build decision-making frameworks that perform under pressure, and establish comprehensive recovery and renewal capabilities that enable organizations to emerge stronger from disruptions.",
        outcomes: "Faster crisis response, coordinated stakeholder communication, preserved business continuity, enhanced post-crisis recovery",
    },
    {
        title: "4. Leadership & Human Capital",
        summary: "Strengthen organizational capability from the top down. We enhance leadership foresight through C-suite development, board advisory services, and culture resilience programs that prepare your people for uncertainty.",
        outcomes: "Improved decision-making, stronger organizational culture, enhanced leadership readiness",
    },
    {
        title: "5. Third-Party & Supply Chain Resilience",
        summary: "Strengthen your extended enterprise ecosystem. We assess vendor dependencies, design resilient supply networks, and establish monitoring systems that ensure your third-party relationships enhance rather than endanger your operations.",
        outcomes: "Reduced supplier risk, diversified supply chains, stronger vendor partnerships, faster disruption recovery",
    },
    {
        title: "6. Transformation Enablement",
        summary: "Embed resilience into growth initiatives. We help organizations drive sustainable transformation by integrating geopolitical foresight, ESG requirements, and organizational design principles into every strategic initiative.",
        outcomes: "Future-ready operations, sustainable growth, integrated risk management",
    },
]

export default function StrategicPillars() {
    return (
        <>
            <div className="min-h-screen">
            <Header/>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-6">
                    <h2 className="text-4xl font-bold text-center mb-8">Our Strategic Pillars</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Our work is anchored in six strategic pillars that guide every engagement, helping organizations move from risk exposure to resilience leadership.
                    </p>

                    <Accordion type="single" collapsible className="space-y-4">
                        {pillars.map((pillar, idx) => (
                            <AccordionItem key={idx} value={`pillar-${idx}`} className="border border-gray-200 rounded-xl bg-white shadow-sm">
                                <AccordionTrigger className="text-lg font-semibold px-6 py-4 text-gray-800 hover:bg-gray-50 rounded-t-xl">
                                    {pillar.title}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 text-gray-700 space-y-3">
                                    <p>{pillar.summary}</p>
                                    <p><strong>Key outcomes for you and your company:</strong> {pillar.outcomes}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-12 text-gray-700 space-y-6">
                        <h3 className="text-2xl font-semibold">Important Note on Financial & Economic Resilience</h3>
                        <p>
                            While we recognize that financial and economic resilience is a critical component of organizational resilience, our primary focus is on non-financial risks. Financial and economic resilience—including market volatility, currency fluctuations, liquidity management, and economic shock absorption—requires specialized expertise that falls outside our core competencies.
                        </p>
                        <p>
                            We partner with leading financial risk management firms and economic advisory specialists to ensure our clients receive comprehensive coverage across all resilience domains. This collaborative approach allows us to focus on what we do best while ensuring no critical area is overlooked.
                        </p>

                        <h3 className="text-2xl font-semibold">The Integrated Approach</h3>
                        <p>
                            These pillars work together to create a comprehensive resilience ecosystem. Strategic leadership informs operational design, which strengthens crisis capabilities, which develops human capital, which secures third-party relationships, which enables sustainable transformation—creating a virtuous cycle of organizational strength and adaptability.
                        </p>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}
