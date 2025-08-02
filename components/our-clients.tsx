"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

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
    },
]

// ✅ Change this to 2 or 3 based on how many you want to show per slide
const ITEMS_PER_SLIDE = 3

export function OurClients() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + ITEMS_PER_SLIDE) % clientTestimonials.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + ITEMS_PER_SLIDE) % clientTestimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - ITEMS_PER_SLIDE + clientTestimonials.length) % clientTestimonials.length)
    }

    const getCurrentTestimonials = () => {
        const result = []
        for (let i = 0; i < ITEMS_PER_SLIDE; i++) {
            result.push(clientTestimonials[(currentIndex + i) % clientTestimonials.length])
        }
        return result
    }

    const currentTestimonials = getCurrentTestimonials()

    return (
        <section className="py-16 bg-gradient-to-br from-springer-dark-blue via-springer-dark-blue-accent to-springer-dark-blue-accent text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-48 h-48 bg-primary-foreground/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Hear directly from the leaders who have transformed their organizations' resilience
                    </p>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Testimonials */}
                    <div className="relative">
                        <div
                            className={`grid grid-cols-1 ${
                                ITEMS_PER_SLIDE === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                            } gap-6 lg:gap-8`}
                        >
                            {currentTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${currentIndex}-${index}`}
                                    className="bg-primary-foreground/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:bg-primary-foreground/15"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl"></div>

                                    <div className="relative">
                                        <div className="flex justify-center mb-4">
                                            <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                                                <Quote className="h-6 w-6 text-white" />
                                            </div>
                                        </div>

                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold text-center mb-4 leading-tight">
                                            {testimonial.title}
                                        </h3>

                                        <blockquote className="text-sm lg:text-base text-center leading-relaxed mb-6 text-blue-100 line-clamp-4">
                                            "{testimonial.message}"
                                        </blockquote>

                                        <div className="text-center">
                                            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                <h4 className="text-lg font-bold text-white mb-1">{testimonial.client}</h4>
                                                {/* Uncomment for more details:
                                                <p className="text-blue-200 text-sm font-medium mb-1">{testimonial.position}</p>
                                                <p className="text-blue-300 text-sm font-semibold mb-2">{testimonial.company}</p>
                                                <div className="bg-primary-foreground/20 rounded-full px-3 py-1 text-xs font-medium text-white inline-block">
                                                    {testimonial.industry}
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optional Arrows */}
                        {/* <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30 z-10"
                        >
                            <ChevronLeft className="h-5 w-5 text-white" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30 z-10"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button> */}
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: Math.ceil(clientTestimonials.length / ITEMS_PER_SLIDE) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * ITEMS_PER_SLIDE)}
                                className={`transition-all duration-300 rounded-full ${
                                    Math.floor(currentIndex / ITEMS_PER_SLIDE) === index
                                        ? "w-8 h-2 bg-primary-foreground"
                                        : "w-2 h-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
