"use client"

import {useState, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {ChevronLeft, ChevronRight, Play, ArrowRight, Shield, Globe, TrendingUp} from "lucide-react"
import Image from "next/image"

const slides = [
    {
        title: "",
        subtitle: "",
        description: "",
        image: "/hero_4.jpg?height=800&width=1400",
        cta: "Contact Us",
        stats: {number: "Multi-Billion", label: "Dollar Impact"},
        icon: TrendingUp,
    },
    {
        title: "",
        subtitle: "",
        description: "",
        image: "/hero_1.jpg?height=800&width=1400",
        cta: "Take Maturity Check",
        stats: {number: "100+", label: "Countries Operated"},
        icon: Globe,
    },
    {
        title: "",
        subtitle: "",
        description: "",
        image: "/hero_2.png?height=800&width=1400",
        cta: "Explore SPRINGERED",
        stats: {number: "500+", label: "Crises Managed"},
        icon: Shield,
    },
    {
        title: "",
        subtitle: "",
        description: "",
        image: "/hero_4.jpg?height=800&width=1400",
        cta: "Contact Us",
        stats: {number: "Multi-Billion", label: "Dollar Impact"},
        icon: TrendingUp,
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
    const IconComponent = currentSlideData.icon

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide ? " scale-100" : " scale-105"
                    }`}
                >
                    <Image
                        src={slide.image || "/hero_4.png"}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60"/>*/}
                </div>
            ))}

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
                <div className="mb-8 flex justify-center">
                    {/*<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">*/}
                    {/*  <IconComponent className="h-12 w-12 text-white" />*/}
                    {/*</div>*/}
                </div>

                <div className="mb-6">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {currentSlideData.title}
            </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-blue-200 mb-8">{currentSlideData.subtitle}</h2>
                </div>

                <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-5xl mx-auto">
                    {currentSlideData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    {/*<Button*/}
                    {/*  size="lg"*/}
                    {/*  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"*/}
                    {/*>*/}
                    {/*  {currentSlideData.cta}*/}
                    {/*  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  size="lg"*/}
                    {/*  variant="outline"*/}
                    {/*  className="text-white border-2 border-white/30 hover:bg-white hover:text-blue-900 text-lg px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group"*/}
                    {/*>*/}
                    {/*  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />*/}
                    {/*  Watch Demo*/}
                    {/*</Button>*/}
                </div>

                {/* Stats */}
                {/*<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block">*/}
                {/*  <div className="text-4xl font-bold text-white mb-2">{currentSlideData.stats.number}</div>*/}
                {/*  <div className="text-blue-200 font-medium">{currentSlideData.stats.label}</div>*/}
                {/*</div>*/}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
                <ChevronLeft className="h-6 w-6 text-white"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
                <ChevronRight className="h-6 w-6 text-white"/>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
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
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
