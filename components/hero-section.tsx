"use client"

import {useEffect, useState} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"

const slides = [
    {
        image: "/website_1.jpg?height=800&width=1400",

    },
    {
        image: "/website_2.jpg?height=800&width=1400",

    },
    {
        image: "/3.jpg?height=800&width=1400",

    },
]

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const currentSlideData = slides[currentSlide]


    return (
        <>
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt="Hero Background"
                            fill
                            priority={index === 0}
                            className="object-cover object-center w-full h-full"
                            sizes="100vw" // ✅ responsive sizing hint
                        />
                    </div>
                ))}

                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-white/30"
                >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-white/30"
                >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide
                                    ? "w-8 sm:w-12 h-2 sm:h-3 bg-white"
                                    : "w-2 sm:w-3 h-2 sm:h-3 bg-white/50 hover:bg-white/70"
                            }`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </section>

        </>
    )
}
