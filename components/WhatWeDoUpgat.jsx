import {Users, Vote, Star, Building, Cloud, Globe, Leaf, FileText, Zap, Shield, ArrowRight} from "lucide-react"


const springeredRisks = [
    {
        icon: Shield,
        letter: "R",
        title: "Risk Assessment",
        description: "Analyze vulnerabilities and prioritize mitigation strategies.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Zap,
        letter: "E",
        title: "Emergency Response",
        description: "Coordinate rapid, effective incident management.",
        examples: [
            "Emergency response plan development",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50"
    },
    {
        icon: Star,
        letter: "C",
        title: "Crisis Management",
        description: "Prepare leadership for confident decision-making during crises.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50"
    },
    {
        icon: Building,
        letter: "B",
        title: "Business Continuity",
        description: "Ensure uninterrupted critical operations.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50"
    },
    {
        icon: FileText,
        letter: "D",
        title: "Digital Resilience",
        description: "Safeguard your IT infrastructure and data integrity.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Cloud,
        letter: "N",
        title: "Natural Catastrophe Emergency Response",
        description: "Specialized plans for floods, earthquakes, and other disasters.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50"
    },
    {
        icon: Leaf,
        letter: "C",
        title: "Climate Adaptation Plan",
        description: "Strategize to manage evolving environmental and regulatory challenges.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50"
    },
    {
        icon: Globe,
        letter: "S",
        title: "Supply Chain and Third Party Resilience",
        description: "Strengthen your supply chain against disruption.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50"
    },
    {
        icon: Vote,
        letter: "T",
        title: "Training & Exercises",
        description: "Deliver practical, scenario-based preparedness programs.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50"
    },
    {
        icon: Vote,
        letter: "S",
        title: "Stakeholder Conflict Management",
        description: "Manage relationships and resolve disputes effectively.",
        examples: [
            "Risk assessment",
            "Vulnerability assessments",
            "Residual risk scoring and prioritization",
            "Mitigation planning and strategy development"
        ],
        color: "from-gray-500 to-gray-600",
        bgColor: "bg-gray-50"
    }
];


export function WhatWeDoUpgat() {
    return (
        <section id="whatWeDoNow" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    {/*<div className="inline-block bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent text-white px-6 py-3 rounded-full text-sm font-medium mb-6">*/}
                    {/*    Risk Management Framework*/}
                    {/*</div>*/}
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        What We{" "} <span
                        className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">Do</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We provide comprehensive consulting services that help organizations build resilience, manage
                        risks
                        effectively, and achieve sustainable growth in an uncertain world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {springeredRisks.map((risk, index) => {
                        const IconComponent = risk.icon
                        return (
                            <div
                                key={index}
                                className={`${risk.bgColor} border-2 border-transparent hover:border-primary/20 p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${risk.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                <div className="relative">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className={`bg-gradient-to-br ${risk.color} w-12 h-12 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <span className="text-white font-bold text-lg">{risk.letter}</span>
                                        </div>
                                        <div className="text-lg font-bold text-gray-900">{risk.title}</div>
                                    </div>

                                    {/*<p className="text-gray-600 leading-relaxed text-sm mb-4">{risk.description}</p>*/}

                                    <div className="space-y-1">
                                        <div className="text-xs font-semibold text-gray-700 mb-2"></div>
                                        {risk.examples.slice(0, 4).map((example, exampleIndex) => (
                                            <div key={exampleIndex} className="flex items-start text-xs text-gray-600">
                                                <div
                                                    className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                                <span>{example}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors" style={{ marginTop: '12px' }}>
                                    <span className="text-sm mt-5">Learn More</span>
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
