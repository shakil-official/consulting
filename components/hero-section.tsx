"use client"

import {useEffect, useState} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"

const slides = [
    {
        image: "/hero_3.png?height=800&width=1400",

    },
    {
        image: "/hero_3.png?height=800&width=1400",

    },
    {
        image: "/hero_3.png?height=800&width=1400",

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
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt="Hero Background"
                        fill
                        className="object-cover transition-all duration-1000"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"/>
            </div>


            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
                <ChevronLeft className="h-6 w-6 text-white"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
                <ChevronRight className="h-6 w-6 text-white"/>
            </button>

            {/* Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/50 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"/>
                </div>
            </div>
        </section>
    )
}
