import { Button } from "@/components/ui/button"
import { Users, Globe, Award, TrendingUp, ArrowRight } from "lucide-react"

const partnershipOptions = [
    {
        title: "Information Only",
        description: "Receive updates, newsletters, and relevant information related to the resilience field",
        icon: Globe,
    },
    {
        title: "Content Contributor",
        description: "Contribute articles, research papers, or other content to share insights with the community",
        icon: Award,
    },
    {
        title: "Independent SME",
        description: "Collaborate on projects and provide consultations as an independent subject matter expert",
        icon: Users,
    },
    {
        title: "Commercial Partner",
        description: "Partner commercially on specific projects or missions related to resilience",
        icon: TrendingUp,
    },
]

export function JoinAsExpert() {
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

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Join us as an{" "}
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
              Expert
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We're always looking for experienced professionals passionate about resilience, crisis management, and risk
                        leadership. Collaborate with a global team of specialists and make a real impact across industries and
                        geographies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {partnershipOptions.map((option, index) => {
                        const IconComponent = option.icon
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-primary/5 border-2 border-transparent hover:border-primary/20 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-springer-dark-blue/5 to-springer-dark-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative text-center">
                                    <div className="bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{option.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Registration Form Preview */}
                {/*<div className="bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-3xl p-12 text-white relative overflow-hidden">*/}
                {/*    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>*/}
                {/*    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>*/}

                {/*    <div className="relative text-center">*/}
                {/*        <h3 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h3>*/}
                {/*        <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">*/}
                {/*            Bring your expertise where it matters most. Join our global network of resilience professionals and help*/}
                {/*            organizations build a more resilient future.*/}
                {/*        </p>*/}

                {/*        <div className="grid md:grid-cols-3 gap-6 mb-8">*/}
                {/*            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">*/}
                {/*                <div className="text-2xl font-bold mb-2">Global Network</div>*/}
                {/*                <div className="text-white/70">Connect with experts worldwide</div>*/}
                {/*            </div>*/}
                {/*            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">*/}
                {/*                <div className="text-2xl font-bold mb-2">Real Impact</div>*/}
                {/*                <div className="text-white/70">Work on meaningful projects</div>*/}
                {/*            </div>*/}
                {/*            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">*/}
                {/*                <div className="text-2xl font-bold mb-2">Flexible Engagement</div>*/}
                {/*                <div className="text-white/70">Choose your level of involvement</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <Button*/}
                {/*            size="lg"*/}
                {/*            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"*/}
                {/*        >*/}
                {/*            Apply as Expert*/}
                {/*            <ArrowRight className="ml-2 h-5 w-5" />*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
