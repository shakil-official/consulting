import {Globe, Users, Target, Shield, Award, TrendingUp} from "lucide-react"

const reasons = [
    {
        icon: Globe,
        title: "Global Experience",
        description: "Operated in 100+ countries with real crisis management on the ground",
        stats: "100+ Countries",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: Users,
        title: "Practical Expertise",
        description: "In-house practitioners with executive-level insight and real-world experience",
        stats: "500+ Crises Managed",
        color: "from-green-500 to-green-600",
    },
    {
        icon: Target,
        title: "Tailored Solutions",
        description: "Customized strategies that fit your business and risk profile perfectly",
        stats: "Bespoke Frameworks",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: Shield,
        title: "End-to-End Support",
        description: "From planning through execution and recovery - complete lifecycle support",
        stats: "Full Lifecycle",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Award,
        title: "Trusted by Leaders",
        description: "Serving Fortune 100, FTSE 100, and mission-driven organizations worldwide",
        stats: "Fortune 100 Clients",
        color: "from-indigo-500 to-indigo-600",
    },
    {
        icon: TrendingUp,
        title: "Proven Results",
        description: "Track record of successful crisis management and resilience building",
        stats: "Multi-Billion Impact",
        color: "from-teal-500 to-teal-600",
    },
]

export function WhyPartnerWithUs() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    {/*<div*/}
                    {/*    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">*/}
                    {/*    Partnership Value*/}
                    {/*</div>*/}
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Why Partner{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">With Us?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We bring unmatched expertise, global experience, and proven results to every partnership. Here's
                        what sets
                        us apart in the resilience and crisis management space.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason, index) => {
                        const IconComponent = reason.icon
                        return (
                            <div
                                key={index}
                                className="bg-white border-2 border-transparent hover:border-blue-200 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                <div className="relative">
                                    <div
                                        className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        <IconComponent className="h-8 w-8 text-white"/>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{reason.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{reason.description}</p>

                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                                        <div className="text-lg font-bold text-blue-600">{reason.stats}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Call to Action */}
                {/*<div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">*/}
                {/*  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>*/}
                {/*  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>*/}

                {/*  <div className="relative text-center">*/}
                {/*    <h3 className="text-4xl font-bold mb-6">Ready to Build Resilience?</h3>*/}
                {/*    <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">*/}
                {/*      Contact us today to discuss how Group Resilience can help your organization prepare, respond, and*/}
                {/*      transform. Let's build a resilient future together.*/}
                {/*    </p>*/}
                {/*    <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
                {/*      <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">*/}
                {/*        Schedule Consultation*/}
                {/*      </button>*/}
                {/*      <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl bg-transparent transition-all duration-300 hover:scale-105">*/}
                {/*        Take Maturity Check*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
