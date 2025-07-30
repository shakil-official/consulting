import {Button} from "@/components/ui/button"
import {Award, Users, Globe, Shield} from "lucide-react"
import Image from "next/image"

const achievements = [
    {icon: Globe, number: "100+", label: "Countries"},
    {icon: Shield, number: "500+", label: "Crises Managed"},
    {icon: Users, number: "Multi-Billion", label: "Dollar Impact"},
    {icon: Award, number: "World-Class", label: "Specialists"},
]

export function OurStory() {
    return (
        <section id="story" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div
                            className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl opacity-10 rotate-12"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <Image
                                src="/our_story.png?height=600&width=700"
                                alt="Our Story"
                                width={700}
                                height={600}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                        </div>

                        {/* Floating Achievement Card */}
                        <div
                            className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="bg-gradient-to-br from-blue-600 to-indigo-700 w-12 h-12 rounded-xl flex items-center justify-center">
                                    <Globe className="h-6 w-6 text-white"/>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">100+</div>
                                    <div className="text-sm text-gray-600">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div
                                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                Our Story
                            </div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Empowering Organizations to{" "}
                                <span
                                    className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Thrive
                </span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p className="text-xl text-gray-700 font-medium">
                                At Group Resilience, we empower CEOs, Boards, Executive Suites, and organizations to
                                prepare for and
                                thrive amid uncertainty.
                            </p>
                            <p>
                                We enable our clients to mitigate non-financial risks, drive sustainable growth, build
                                resilient
                                futures, and generate competitive advantages. From managing resource constraints to
                                embedding resilience
                                across every business function, we deliver systems that add value before, during, and
                                after crises.
                            </p>
                            <p>
                                We provide tailored risk solutions—whether as specialized expertise or fully embedded
                                strategies—for the
                                most pressing business challenges and controversies, building trust with all
                                stakeholders.
                            </p>
                            <p className="text-blue-700 font-medium">
                                Our team is composed of world-recognized specialists who have led resilience from the
                                inside—not just as
                                consultants, but as in-house practitioners, subject-matter experts, senior executives,
                                and global heads
                                of function.
                            </p>
                        </div>

                        {/* Achievement Stats */}
                        {/*<div className="grid grid-cols-2 gap-6 py-8">*/}
                        {/*    {achievements.map((achievement, index) => {*/}
                        {/*        const IconComponent = achievement.icon*/}
                        {/*        return (*/}
                        {/*            <div key={index} className="text-center group">*/}
                        {/*                <div*/}
                        {/*                    className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">*/}
                        {/*                    <IconComponent className="h-8 w-8 text-white"/>*/}
                        {/*                </div>*/}
                        {/*                <div*/}
                        {/*                    className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>*/}
                        {/*                <div className="text-gray-600 font-medium">{achievement.label}</div>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}

                        {/*<div className="flex flex-col sm:flex-row gap-4">*/}
                        {/*    <Button*/}
                        {/*        size="lg"*/}
                        {/*        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"*/}
                        {/*    >*/}
                        {/*        Take Maturity Check*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        size="lg"*/}
                        {/*        variant="outline"*/}
                        {/*        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"*/}
                        {/*    >*/}
                        {/*        Join as Expert*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}
