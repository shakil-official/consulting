import {Award, Globe, Shield, Users} from "lucide-react"
import Image from "next/image"

const achievements = [
    {icon: Globe, number: "100+", label: "Countries"},
    {icon: Shield, number: "500+", label: "Crises Managed"},
    {icon: Users, number: "Multi-Billion", label: "Dollar Impact"},
    {icon: Award, number: "World-Class", label: "Specialists"},
]

export function OurStory() {
    return (
        <>
            <section id="story" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 lg:px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div
                                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-2xl opacity-10 rotate-12"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/our_story.png?height=600&width=700"
                                    alt="Our Story"
                                    width={700}
                                    height={600}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>

                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Empowering Organizations to{" "}
                                    <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">Thrive</span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p className="text-xl text-gray-700 font-medium">
                                    At Group Resilience, we empower CEOs, Boards, Executive Suites, and organizations to
                                    prepare for and
                                    thrive amid uncertainty.
                                </p>
                                <p>
                                    We enable our clients to mitigate non-financial risks, drive sustainable growth,
                                    build resilient
                                    futures, and generate competitive advantages. From managing resource constraints to
                                    embedding resilience
                                    across every business function, we deliver systems that add value before, during,
                                    and after crises.
                                </p>
                                <p>
                                    We provide tailored risk solutions—whether as specialized expertise or fully
                                    embedded strategies—for the
                                    most pressing business challenges and controversies, building trust with all
                                    stakeholders.
                                </p>
                                <p className="text-primary font-medium">
                                    Our team is composed of world-recognized specialists who have led resilience from
                                    the inside—not just as
                                    consultants, but as in-house practitioners, subject-matter experts, senior
                                    executives, and global heads
                                    of function.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
