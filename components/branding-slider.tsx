"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, Pause, Award, Building, TrendingUp } from "lucide-react"

interface Logo {
    id: number | string
    title: string
    img: string
}

interface BrandingSliderProps {
    title?: string
    subtitle?: string
    autoPlay?: boolean
    speed?: number
    className?: string
}

export function BrandingSlider({
                                   title = "Trusted by Industry Leaders",
                                   subtitle = "Partnering with global organizations to build resilient futures",
                                   autoPlay = true,
                                   speed = 35,
                                   className = "",
                               }: BrandingSliderProps) {
    const [logos, setLogos] = useState<Logo[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

    // Fetch logos from API
    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const res = await fetch("https://shakil.rrbaghouse.com/api/v1/slider-images")
                const data = await res.json()
                if (data?.data) setLogos(data.data)
            } catch (error) {
                console.error("Failed to fetch slider images", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchLogos()
    }, [])

    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

    // Floating animation
    useEffect(() => {
        if (!autoPlay) return
        const style = document.createElement("style")
        style.innerHTML = `
      @keyframes scrollX {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .floating { animation: float 6s ease-in-out infinite; }
    `
        document.head.appendChild(style)
        return () => {
            if (document.head.contains(style)) document.head.removeChild(style)
        }
    }, [autoPlay])

    // Skeleton Loader
    const renderSkeleton = () => {
        const skeletons = Array.from({ length: 6 })
        return (
            <div className="flex gap-6 py-10 px-6">
                {skeletons.map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl w-[280px] h-[160px] animate-pulse"
                    ></div>
                ))}
            </div>
        )
    }

    return (
        <div className={`w-full py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-primary/5 text-foreground relative overflow-hidden ${className}`}>
            {/* Floating BG */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "4s" }}></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-12">
                <h5 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {title.split(" ").map((word, index) => (
                        <span
                            key={index}
                            className={index >= 6 ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" : ""}
                        >
              {word}{" "}
            </span>
                    ))}
                </h5>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
            </div>

            {/* Slider */}
            <div
                className="relative overflow-visible rounded-3xl backdrop-blur-md bg-card/70"
                onMouseEnter={() => autoPlay && setIsPlaying(false)}
                onMouseLeave={() => autoPlay && setIsPlaying(true)}
            >
                {isLoading ? (
                    renderSkeleton()
                ) : (
                    <div
                        className="flex gap-6 py-10 px-6"
                        style={{
                            animation: isPlaying ? `scrollX ${speed}s linear infinite` : "none",
                            width: `${duplicatedLogos.length * 320}px`,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="relative min-w-[280px] group cursor-pointer"
                                onMouseEnter={() => setHoveredLogo(`${logo.id}-${index}`)}
                                onMouseLeave={() => setHoveredLogo(null)}
                            >
                                <div className="bg-muted backdrop-blur-md border border-border rounded-2xl p-6 h-[160px] flex flex-col justify-center items-center transition-all duration-500 hover:bg-muted/80 hover:scale-105 hover:rotate-1 group-hover:shadow-2xl relative">
                                    <div className="relative mb-4 w-full flex justify-center">
                                        <Image
                                            src={logo.img}
                                            alt={logo.title}
                                            height={48}
                                            width={150}
                                            className="object-contain transition-all duration-300 group-hover:brightness-100"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
