"use client"

import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

interface Testimonial {
    id: number
    title: string
    name: string
    message: string
    rating: number
    status: string
    created_at: string
    updated_at: string
}

const ITEMS_PER_SLIDE = 3

export function OurClients() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch("https://shakil.rrbaghouse.com/api/feedback/list")
                const data: Testimonial[] = await res.json()
                setTestimonials(data)
            } catch (error) {
                console.error("Failed to fetch testimonials", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTestimonials()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + ITEMS_PER_SLIDE) % (testimonials.length || 1))
        }, 8000)
        return () => clearInterval(timer)
    }, [testimonials])

    const getCurrentTestimonials = () => {
        if (!testimonials.length) return []
        const result = []
        for (let i = 0; i < ITEMS_PER_SLIDE; i++) {
            result.push(testimonials[(currentIndex + i) % testimonials.length])
        }
        return result
    }

    const currentTestimonials = getCurrentTestimonials()

    const renderSkeleton = () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 py-10 px-6">
            {Array.from({ length: ITEMS_PER_SLIDE }).map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-64 animate-pulse" />
            ))}
        </div>
    )

    return (
        <section className="py-16 bg-gradient-to-br from-springer-dark-blue via-springer-dark-blue-accent to-springer-dark-blue-accent text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-48 h-48 bg-primary-foreground/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                {/* Header */}
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

                {isLoading ? (
                    renderSkeleton()
                ) : (
                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            {currentTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`} // ✅ Unique key
                                    className="bg-primary-foreground/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between transform transition-all duration-500 hover:scale-105 hover:bg-primary-foreground/15"
                                >
                                    <div>
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
                                    </div>

                                    {/* Client Info at the bottom */}
                                    <div className="mt-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                                        <h4 className="text-lg font-bold text-white mb-1">{testimonial.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: Math.ceil(testimonials.length / ITEMS_PER_SLIDE) }).map((_, index) => (
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
                )}
            </div>
        </section>
    )
}
