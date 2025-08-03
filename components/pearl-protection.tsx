import {Users, Leaf, Building, Star, Scale,Factory, DollarSign} from "lucide-react"

const pearlItems = [
    {
        icon: Users,
        letter: "P",
        title: "People",
        description: "Protecting your workforce, leadership, and human capital from disruption and harm",
        color: "from-springer-dark-blue to-springer-dark-blue-accent",
        bgColor: "bg-primary/10",
        examples: ["Workforce safety", "Leadership protection", "Employee wellbeing", "Talent retention"],
    },
    {
        icon: Leaf,
        letter: "E",
        title: "Environment",
        description: "Safeguarding environmental compliance and sustainability commitments",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        examples: ["Environmental compliance", "Sustainability goals", "Climate adaptation", "Resource management"],
    },
    {
        icon: Factory,
        letter: "A",
        title: "Assets",
        description: "Securing physical and digital assets critical to business operations",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        examples: ["Physical infrastructure", "Digital assets", "Intellectual property", "Operational facilities"],
    },
    {
        icon: Star,
        letter: "R",
        title: "Reputation",
        description: "Maintaining brand integrity and stakeholder trust across all touchpoints",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        examples: ["Brand protection", "Stakeholder trust", "Media relations", "Crisis communication"],
    },
    {
        icon: Scale,
        letter: "L",
        title: "Legal Exposure",
        description: "Minimizing legal risks and regulatory compliance challenges",
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        examples: ["Regulatory compliance", "Legal risk mitigation", "Litigation prevention", "Policy adherence"],
    },
    {
        icon: DollarSign,
        letter: "$",
        title: "Bottom Line",
        description: "Protecting financial performance and long-term value creation",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50",
        examples: ["Financial performance", "Cost management", "Revenue protection", "Value preservation"],
    },
]

export function PearlProtection() {
    return (
        <section id={"pearl"} className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">PEARL$</span>
                        : What We Protect
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our work is guided by a clear purpose: to help you achieve your objectives amid uncertainty. We
                        help you
                        understand your risks, build resilience, and protect what matters most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pearlItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                className={`${item.bgColor} border-2 border-transparent hover:border-primary/20 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                <div className="relative">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <IconComponent className="h-8 w-8 text-white"/>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-gray-900 mb-1">{item.letter}</div>
                                            <div className="text-xl font-bold text-gray-900">{item.title}</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

                                    {/*<div className="space-y-2">*/}
                                    {/*    {item.examples.map((example, exampleIndex) => (*/}
                                    {/*        <div key={exampleIndex} className="flex items-center text-sm text-gray-600">*/}
                                    {/*            <div*/}
                                    {/*                className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>*/}
                                    {/*            <span>{example}</span>*/}
                                    {/*        </div>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
