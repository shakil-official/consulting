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
        <section id={"joinUsAs"} className="py-24 bg-white relative overflow-hidden">
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
                        We're seeking experienced professionals passionate about resilience, crisis management, and risk leadership. Join our global team and make a real impact where it matters most.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                    <div className="relative text-center">
                        <h3 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h3>
                        <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                            Bring your expertise where it matters most. Join our global network of resilience professionals and help
                            organizations build a more resilient future.
                        </p>

                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Apply as Expert
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
