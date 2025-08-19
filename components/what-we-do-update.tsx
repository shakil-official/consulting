import { Shield, TrendingUp, Building, Target, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatWeDoUpdate() {
    const grmCategories = [
        {
            category: "Risk",
            icon: Shield,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            services: [
                {
                    name: "ERM Design & Implementation",
                    description: "Comprehensive enterprise risk management framework development",
                },
                {
                    name: "Threat & Risk Assessment",
                    description: "Systematic identification and evaluation of organizational threats",
                },
                {
                    name: "Incident Management",
                    description: "Investigation, lessons learned, OSINT monitoring, and GSOC AI integration",
                },
                {
                    name: "Ecosystem Mapping",
                    description: "Stakeholder mapping and sites mapping application development",
                },
            ],
        },
        {
            category: "Governance",
            icon: Building,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            services: [
                {
                    name: "Strategic Resilience",
                    description: "Governance design, team design, and executive coaching",
                },
                {
                    name: "Head Hunting & Vetting",
                    description: "Specialized recruitment and background checks for resilience teams",
                },
            ],
        },
        {
            category: "Implementation",
            icon: Target,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            services: [
                {
                    name: "Workforce Resilience",
                    description: "Training programs and resilience exercises for staff development",
                },
                {
                    name: "Operational Resilience",
                    description: "Business continuity, emergency response, and third-party resilience planning",
                },
                {
                    name: "Crisis Management",
                    description: "Live crisis support and emergency response for active incidents",
                },
                {
                    name: "Resilience AI Chatbot",
                    description: '"Ask Richard" - AI-powered resilience guidance and support',
                },
            ],
        },
        {
            category: "Performance",
            icon: TrendingUp,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            services: [
                {
                    name: "Strategic Resilience KPIs",
                    description: "Resilience maturity assessment and audit & assurance services",
                },
                {
                    name: "Compliance & Standards",
                    description: "Alignment with international standards (ISO 31000, 22301, 27001)",
                },
                {
                    name: "Certification Programs",
                    description: "Resilience certification for organizations and individuals",
                },
            ],
        },
    ]

    return (
        <section id="what-we-do" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        What We{" "}
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
              Do
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
                        Our comprehensive Group Resilience Model (GRM) provides end-to-end solutions across four critical
                        categories, ensuring your organization is prepared for any challenge.
                    </p>


                    {/* GRM Categories */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-10">
                        {grmCategories.map((category, index) => {
                            const IconComponent = category.icon
                            return (
                                <div
                                    key={index}
                                    className={`${category.bgColor} border-2 border-transparent hover:border-primary/20 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    <div className="relative">
                                        <div className="flex items-center mb-6">
                                            {/*<div*/}
                                            {/*    className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}*/}
                                            {/*>*/}
                                            {/*    /!*<IconComponent className="h-8 w-8 text-white" />*!/*/}
                                            {/*    { category.category[0].toUpperCase()}*/}
                                            {/*</div>*/}

                                            <div
                                                className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white text-lg font-bold`}
                                            >
                                                {category.category[0].toUpperCase()}
                                            </div>

                                            <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-800">
                                                {category.category}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            {category.services.map((service, serviceIndex) => (
                                                <div key={serviceIndex} className="bg-white/50 rounded-xl p-4 border border-white/20">
                                                    <div className="flex items-start">
                                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                                                            <p className="text-sm text-gray-600">{service.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <Button
                                                variant="ghost"
                                                className="text-gray-700 hover:text-springer-dark-blue group-hover:translate-x-1 transition-all"
                                            >
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
