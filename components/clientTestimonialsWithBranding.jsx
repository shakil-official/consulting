"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { BrandingSlider } from "./branding-slider"

const clientTestimonials = [
    {
        title: "Exceptional Crisis Leadership",
        message:
            "Group Resilience transformed our crisis response capabilities. When we faced a major supply chain disruption across three continents, their team coordinated our response flawlessly, minimizing impact and restoring operations 40% faster than our previous incidents.",
        client: "Sarah Chen",
        position: "Chief Operating Officer",
        company: "Global Manufacturing Corp",
        industry: "Manufacturing",
        rating: 5,
        avatar: "/placeholder.svg?height=80&width=80&text=SC",
        results: "40% faster recovery",
    },
    {
        title: "Strategic Risk Management Excellence",
        message:
            "Their SPRINGERED framework revolutionized how we approach risk management. We now have a comprehensive view of interconnected risks and proactive strategies that have prevented three potential crises in the past year alone.",
        client: "Michael Rodriguez",
        position: "Chief Risk Officer",
        company: "International Bank Holdings",
        industry: "Financial Services",
        rating: 5,
        avatar: "/placeholder.svg?height=80&width=80&text=MR",
        results: "3 crises prevented",
    },
    {
        title: "Unmatched Global Expertise",
        message:
            "Working with Group Resilience across our 15-country operations has been transformational. Their deep understanding of local contexts combined with global best practices helped us navigate complex geopolitical challenges seamlessly.",
        client: "Dr. Emma Thompson",
        position: "Head of Global Operations",
        company: "Energy Solutions International",
        industry: "Energy & Utilities",
        rating: 5,
        avatar: "/placeholder.svg?height=80&width=80&text=ET",
        results: "15 countries optimized",
    },
    {
        title: "Comprehensive Resilience Building",
        message:
            "The PEARL$ protection framework gave us clarity on what truly matters. Their holistic approach to protecting our people, environment, assets, reputation, legal standing, and bottom line has strengthened every aspect of our organization.",
        client: "James Wilson",
        position: "CEO",
        company: "Defense Technologies Ltd",
        industry: "Defense & Security",
        rating: 5,
        avatar: "/placeholder.svg?height=80&width=80&text=JW",
        results: "Complete framework implementation",
    },
    {
        title: "Outstanding Partnership Approach",
        message:
            "Group Resilience doesn't just provide advice—they become part of your team. Their experts worked alongside our leadership during a critical regulatory investigation, ensuring we maintained stakeholder trust throughout the process.",
        client: "Lisa Park",
        position: "General Counsel",
        company: "Healthcare Innovation Group",
        industry: "Healthcare",
        rating: 5,
        avatar: "/placeholder.svg?height=80&width=80&text=LP",
        results: "100% compliance maintained",
    },
]

export default function ClientTestimonialsWithBranding() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % clientTestimonials.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % clientTestimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length)
    }

    const currentClient = clientTestimonials[currentTestimonial]

    return (
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
                        Client Success Stories
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Clients Say
            </span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Hear directly from the leaders who have transformed their organizations' resilience with our partnership
                    </p>
                </div>

                {/*/!* Professional Branding Slider *!/*/}
                <div className="mb-20">
                    <BrandingSlider
                        title="Trusted by Industry Leaders"
                        subtitle="Global partnerships spanning Fortune 500 companies and innovative enterprises"
                        variant="default"
                        showControls={true}
                        showTooltips={true}
                        autoPlay={true}
                        speed={45}
                    />
                </div>

                {/* Testimonials Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                        <div className="relative">
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                                    <Quote className="h-12 w-12 text-white" />
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-8">
                                {[...Array(currentClient.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-8 w-8 text-yellow-400 fill-current animate-pulse"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">{currentClient.title}</h3>

                            {/* Message */}
                            <blockquote className="text-xl md:text-2xl text-center leading-relaxed mb-12 text-blue-100 max-w-4xl mx-auto">
                                "{currentClient.message}"
                            </blockquote>

                            {/* Enhanced Client Info */}
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <Image
                                            src={currentClient.avatar || "/placeholder.svg"}
                                            alt={currentClient.client}
                                            width={80}
                                            height={80}
                                            className="rounded-2xl border-4 border-white/30"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-1">
                                            <Star className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-2xl font-bold text-white mb-1">{currentClient.client}</h4>
                                        <p className="text-blue-200 font-medium mb-1">{currentClient.position}</p>
                                        <p className="text-blue-300 font-semibold">{currentClient.company}</p>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white mb-2">{currentClient.results}</div>
                                        <div className="text-blue-200 text-sm">Key Achievement</div>
                                        <div className="bg-white/20 rounded-full px-4 py-1 text-sm font-medium text-white mt-2">
                                            {currentClient.industry}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* Enhanced Testimonial Indicators */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {clientTestimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`transition-all duration-300 rounded-full relative ${
                                    index === currentTestimonial ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/50 hover:bg-white/70"
                                }`}
                            >
                                {index === currentTestimonial && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
