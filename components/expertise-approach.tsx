import {CheckCircle, Target, Lightbulb, Users, Award, Clock, Shield} from "lucide-react"
import Image from "next/image"

const approaches = [
    {
        icon: Users,
        title: "In-house practitioners.",
        description: "Comprehensive risk identification and impact analysis tailored to your industry and business model",
        color: "from-springer-dark-blue to-springer-dark-blue-accent",
    },
    {
        icon: Users,
        title: "Subject-matter experts and senior executives.",
        description: "Creative problem-solving approaches that turn challenges into competitive advantages",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: Users,
        title: "Global heads of function and regional leads",
        description: "Working closely with your teams to ensure knowledge transfer and sustainable implementation",
        color: "from-green-500 to-green-600",
    },
]

const stats = [
    {icon: Award, number: "100+", label: "Countries", color: "text-primary"},
    {icon: Users, number: "500+", label: "High-impact crises", color: "text-green-600"},
    {icon: Shield, number: "100+", label: "Companies", color: "text-purple-600"},
    // {icon: Clock, number: "15+", label: "Years Experience", color: "text-orange-600"},
]

export function ExpertiseApproach() {
    return (
        <section id="expertise" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Expertise &{" "}
                        <span
                            className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
              Approach
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">At Group Resilience, we deliver more than advice—we combine operational experience, strategic expertise, and global insight to shape real resilience outcomes. Our team is composed of internationally recognized specialists who have led resilience from the inside—bringing first-hand knowledge, not just external perspective.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        {/*<h3 className="text-4xl font-bold text-gray-900 mb-8">Our Methodology</h3>*/}
                        <div className="space-y-8">
                            {approaches.map((approach, index) => {
                                const IconComponent = approach.icon
                                return (
                                    <div key={index} className="flex items-start space-x-6 group">
                                        <div
                                            className={`bg-gradient-to-br ${approach.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <IconComponent className="h-8 w-8 text-white"/>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors  align-middle">
                                                {approach.title}
                                            </h4>
                                            {/*<p className="text-gray-600 leading-relaxed text-lg">{approach.description}</p>*/}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-3xl opacity-10 rotate-12"></div>
                        <div
                            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
                            <Image
                                src="/expert.png?height=600&width=700"
                                alt="Our Approach"
                                width={700}
                                height={600}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>

                    <div className="relative">
                        {/*<div className="text-center mb-12">*/}
                        {/*    <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h3>*/}
                        {/*    <p className="text-gray-600 text-lg">Numbers that speak to our commitment and expertise</p>*/}
                        {/*</div>*/}

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 t">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div key={index} className="text-center group">
                                        <div
                                            className={`${stat.color} bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <IconComponent className="h-10 w-10"/>
                                        </div>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
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
