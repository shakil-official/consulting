import { Users, Vote, Star, Building, Cloud, Globe, Leaf, FileText, Zap, Shield } from "lucide-react"

const springeredRisks = [
    {
        icon: Users,
        letter: "S",
        title: "Social Instability",
        description:
            "Mass protests, labor strikes, civil unrest, and workforce disruptions that can halt operations and damage brand reputation.",
        examples: [
            "Anti-government protests blocking key transportation routes",
            "Nationwide strikes affecting supply chain operations",
            "Social media-driven consumer boycotts",
            "Community opposition to new facility construction",
        ],
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: Vote,
        letter: "P",
        title: "Political Instability",
        description:
            "Government upheavals, policy reversals, and electoral crises that create uncertainty and threaten business continuity.",
        examples: [
            "Military coups disrupting international partnerships",
            "Sudden policy changes affecting foreign investment",
            "Electoral disputes leading to extended political uncertainty",
            "Authoritarian crackdowns on business freedoms",
        ],
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: Star,
        letter: "R",
        title: "Reputational Risks",
        description:
            "ESG controversies, corporate scandals, and stakeholder backlash that can erode trust and market value overnight.",
        examples: [
            "Environmental violations exposed by investigative journalism",
            "Executive misconduct generating media scrutiny",
            "Product safety issues triggering consumer lawsuits",
            "Diversity and inclusion failures sparking public outrage",
        ],
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
    },
    {
        icon: Building,
        letter: "I",
        title: "Internal Matters",
        description:
            "Organizational failures, misconduct investigations, and operational breakdowns that threaten corporate governance.",
        examples: [
            "Financial fraud discovered in subsidiary operations",
            "Workplace harassment allegations against senior leadership",
            "Critical system failures during peak business periods",
            "Whistleblower reports of regulatory violations",
        ],
        color: "from-springer-dark-blue to-springer-dark-blue-accent",
        bgColor: "bg-primary/10",
    },
    {
        icon: Cloud,
        letter: "N",
        title: "Natural Hazards",
        description:
            "Extreme weather events, geological disasters, and climate-related disruptions that can devastate operations.",
        examples: [
            "Hurricanes shutting down manufacturing facilities",
            "Earthquakes damaging critical infrastructure",
            "Wildfires forcing evacuations and supply chain rerouting",
            "Flooding affecting data centers and distribution networks",
        ],
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: Globe,
        letter: "G",
        title: "Geopolitical Instability",
        description:
            "International conflicts, sanctions regimes, and cross-border tensions that complicate global operations.",
        examples: [
            "Trade wars triggering sudden tariff increases",
            "Economic sanctions restricting business partnerships",
            "Military conflicts disrupting regional supply chains",
            "Diplomatic tensions affecting market access",
        ],
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
    },
    {
        icon: Leaf,
        letter: "E",
        title: "Environmental Threats",
        description:
            "Pollution incidents, habitat destruction, and regulatory breaches that generate legal and reputational consequences.",
        examples: [
            "Chemical spills contaminating water sources",
            "Deforestation projects triggering environmental lawsuits",
            "Air quality violations resulting in government fines",
            "Waste management failures affecting community health",
        ],
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
    },
    {
        icon: FileText,
        letter: "R",
        title: "Regulatory Shifts",
        description: "Compliance changes, industry reforms, and policy updates that require rapid operational adjustments.",
        examples: [
            "New data privacy laws requiring system overhauls",
            "Financial regulations changing capital requirements",
            "Environmental standards mandating technology upgrades",
            "Industry-specific reforms affecting licensing requirements",
        ],
        color: "from-pink-500 to-pink-600",
        bgColor: "bg-pink-50",
    },
    {
        icon: Zap,
        letter: "E",
        title: "Energy Disruption",
        description: "Power outages, fuel shortages, and energy market volatility that can cripple business operations.",
        examples: [
            "Grid failures causing multi-day production shutdowns",
            "Natural gas shortages affecting manufacturing processes",
            "Renewable energy transitions disrupting traditional suppliers",
            "Cyberattacks on energy infrastructure",
        ],
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50",
    },
    {
        icon: Shield,
        letter: "D",
        title: "Digital Threats",
        description:
            "Cyberattacks, data breaches, and technology failures that can compromise operations and customer trust.",
        examples: [
            "Ransomware attacks encrypting critical business systems",
            "Data breaches exposing customer personal information",
            "Supply chain cyber incidents affecting vendor relationships",
            "Social engineering attacks targeting executive communications",
        ],
        color: "from-gray-500 to-gray-600",
        bgColor: "bg-gray-50",
    },
]

export function SpringeredRisks() {
    return (
        <section id="risks" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    {/*<div className="inline-block bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent text-white px-6 py-3 rounded-full text-sm font-medium mb-6">*/}
                    {/*    Risk Management Framework*/}
                    {/*</div>*/}
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
              SPRINGERED
            </span>
                        : The Risks We Address
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        In today's interconnected world, non-financial risks can emerge rapidly and cascade across industries,
                        borders, and stakeholder groups. A single incident can trigger reputational damage, operational disruption,
                        and regulatory scrutiny within hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
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

                                    <p className="text-gray-600 leading-relaxed text-sm mb-4">{risk.description}</p>

                                    <div className="space-y-1">
                                        <div className="text-xs font-semibold text-gray-700 mb-2">Examples:</div>
                                        {risk.examples.slice(0, 2).map((example, exampleIndex) => (
                                            <div key={exampleIndex} className="flex items-start text-xs text-gray-600">
                                                <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                                <span>{example}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Why SPRINGERED Matters */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>

                    <div className="relative text-center">
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">Why SPRINGERED Matters</h3>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            These risks don't operate in isolation. A cyberattack can trigger regulatory scrutiny, which can lead to
                            reputational damage, which can spark social unrest among stakeholders. We help clients understand these
                            interconnections and develop comprehensive strategies to anticipate, mitigate, and respond to complex risk
                            scenarios before they escalate into crises.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Proven Global Best Practices", icon: Globe },
                                { title: "Tailored Resilience Plans", icon: FileText },
                                { title: "Scenario-Based Simulations", icon: Zap },
                                { title: "Real-World Coaching", icon: Users },
                            ].map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="font-semibold text-gray-900">{item.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
