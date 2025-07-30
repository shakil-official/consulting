import {Award, MapPin, Briefcase, GraduationCap} from "lucide-react"
import Image from "next/image"

const experts = [
    {
        name: "Dr. Sarah Mitchell",
        title: "Global Crisis Management Director",
        specialization: "Geopolitical Risk & Crisis Response",
        image: "/team_2.png?height=300&width=300",
        location: "London, UK",
        experience: "20+ Years",
        background:
            "Former Head of Crisis Management at Fortune 100 multinational, led response to 50+ international crises across 30 countries. PhD in International Relations from Oxford.",
        expertise: ["Geopolitical Analysis", "Crisis Communication", "Stakeholder Management", "Cross-border Operations"],
        achievements: [
            "Led $2B crisis recovery",
            "Managed 15 political transitions",
            "Published crisis management framework",
        ],
    },
    {
        name: "Marcus Chen",
        title: "Chief Resilience Officer",
        specialization: "Digital Threats & Cybersecurity",
        image: "/team_1.png?height=300&width=300",
        location: "Singapore",
        experience: "18+ Years",
        background:
            "Former CISO at leading financial institutions, specialized in cyber resilience and digital transformation. Masters in Cybersecurity from MIT.",
        expertise: ["Cyber Risk Assessment", "Digital Resilience", "Technology Governance", "Incident Response"],
        achievements: [
            "Prevented 200+ cyber attacks",
            "Built resilient systems for 5M+ users",
            "Industry cybersecurity awards",
        ],
    },
    {
        name: "Elena Rodriguez",
        title: "Environmental Risk Specialist",
        specialization: "Climate Adaptation & ESG",
        image: "/team_3.png?height=300&width=300",
        location: "São Paulo, Brazil",
        experience: "15+ Years",
        background:
            "Former Environmental Director at major mining corporation, expert in climate risk and sustainability. PhD in Environmental Science from Stanford.",
        expertise: ["Climate Risk Assessment", "ESG Strategy", "Environmental Compliance", "Sustainability Planning"],
        achievements: ["Managed $500M environmental programs", "Reduced carbon footprint by 40%", "UN Climate advisor"],
    },
    {
        name: "James Thompson",
        title: "Operational Continuity Director",
        specialization: "Business Continuity & Supply Chain",
        image: "/team_1.png?height=300&width=300",
        location: "New York, USA",
        experience: "22+ Years",
        background:
            "Former COO at global logistics company, specialized in supply chain resilience and business continuity. MBA from Wharton.",
        expertise: ["Supply Chain Risk", "Business Continuity", "Operational Excellence", "Vendor Management"],
        achievements: ["Managed $10B supply networks", "99.9% uptime achievement", "Industry continuity standards"],
    },
]

export function PanelOfExperts() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
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
                    <div
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                        World-Class Team
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Panel of{" "}
                        <span
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Experts</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our team is composed of world-recognized specialists who have led resilience from the inside—not
                        just as
                        consultants, but as in-house practitioners, subject-matter experts, and senior executives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden border border-blue-100"
                        >
                            {/* Background Gradient */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div className="flex items-start space-x-6 mb-6">
                                    <div className="relative">
                                        <Image
                                            src={expert.image || "/team_1.png"}
                                            alt={expert.name}
                                            width={120}
                                            height={120}
                                            className="rounded-2xl border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div
                                            className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full p-2">
                                            <Award className="h-4 w-4 text-white"/>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {expert.name}
                                        </h3>
                                        <p className="text-lg font-semibold text-blue-600 mb-2">{expert.title}</p>
                                        <p className="text-gray-600 font-medium mb-4">{expert.specialization}</p>

                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-1"/>
                                                <span>{expert.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Briefcase className="h-4 w-4 mr-1"/>
                                                <span>{expert.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">{expert.background}</p>

                                {/*<div className="grid md:grid-cols-2 gap-6">*/}
                                {/*    <div>*/}
                                {/*        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">*/}
                                {/*            <GraduationCap className="h-4 w-4 mr-2 text-blue-600"/>*/}
                                {/*            Expertise*/}
                                {/*        </h4>*/}
                                {/*        <div className="space-y-2">*/}
                                {/*            {expert.expertise.map((skill, skillIndex) => (*/}
                                {/*                <div key={skillIndex}*/}
                                {/*                     className="flex items-center text-sm text-gray-600">*/}
                                {/*                    <div*/}
                                {/*                        className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>*/}
                                {/*                    <span>{skill}</span>*/}
                                {/*                </div>*/}
                                {/*            ))}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div>*/}
                                {/*        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">*/}
                                {/*            <Award className="h-4 w-4 mr-2 text-blue-600"/>*/}
                                {/*            Key Achievements*/}
                                {/*        </h4>*/}
                                {/*        <div className="space-y-2">*/}
                                {/*            {expert.achievements.map((achievement, achievementIndex) => (*/}
                                {/*                <div key={achievementIndex}*/}
                                {/*                     className="flex items-center text-sm text-gray-600">*/}
                                {/*                    <div*/}
                                {/*                        className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>*/}
                                {/*                    <span>{achievement}</span>*/}
                                {/*                </div>*/}
                                {/*            ))}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                {/*<div className="text-center mt-16">*/}
                {/*    <div*/}
                {/*        className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">*/}
                {/*        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>*/}
                {/*        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>*/}

                {/*        <div className="relative">*/}
                {/*            <h3 className="text-3xl font-bold mb-4">Join Our Expert Network</h3>*/}
                {/*            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">*/}
                {/*                We're always looking for experienced professionals passionate about resilience, crisis*/}
                {/*                management, and*/}
                {/*                risk leadership.*/}
                {/*            </p>*/}
                {/*            <button*/}
                {/*                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300">*/}
                {/*                Apply as Expert*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
