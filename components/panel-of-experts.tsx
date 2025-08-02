import { Award } from "lucide-react"
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
    },
]

export function PanelOfExperts() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
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
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Subject Matter{" "}
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
              Experts
            </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Our team consists of global specialists with deep real-world experience—not just consultants, but
                        practitioners and executive leaders.
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-springer-dark-blue/5 rounded-3xl p-6 sm:p-8 border border-springer-dark-blue/10 hover:shadow-xl transition-all duration-300 group hover:scale-[1.03] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-springer-dark-blue/5 to-springer-dark-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="relative shrink-0">
                                        <Image
                                            src={expert.image || "/placeholder.svg"}
                                            alt={expert.name}
                                            width={100}
                                            height={100}
                                            className="rounded-2xl border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-full p-2 shadow-md">
                                            <Award className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-springer-dark-blue transition-colors leading-tight">
                                            {expert.name}
                                        </h3>
                                        <p className="text-sm font-medium text-springer-dark-blue leading-snug mt-2 mb-2">{expert.title}</p>
                                        {/*<p className="text-sm text-gray-500 leading-snug mb-2">*/}
                                        {/*    {expert.specialization}*/}
                                        {/*</p>*/}
                                        {/*<div className="flex flex-wrap gap-4 text-sm text-gray-500">*/}
                                        {/*    <div className="flex items-center">*/}
                                        {/*        <MapPin className="h-4 w-4 mr-1" />*/}
                                        {/*        {expert.location}*/}
                                        {/*    </div>*/}
                                        {/*    <div className="flex items-center">*/}
                                        {/*        <Briefcase className="h-4 w-4 mr-1" />*/}
                                        {/*        {expert.experience}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{expert.background}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
