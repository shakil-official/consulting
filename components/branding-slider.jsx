"use client"

import { useEffect, useState } from "react"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const defaultLogos = [
    {
        id: "1",
        name: "Global Manufacturing Corp",
        logo: "/shopno.png?height=80&width=200&text=Global+Manufacturing",
        industry: "Manufacturing",
        partnership: "5+ Years",
        description: "Leading global manufacturer with operations in 40+ countries",
        size: "large",
        tier: "fortune500",
    },
    {
        id: "2",
        name: "International Bank Holdings",
        logo: "/shopno.png?height=80&width=200&text=International+Bank",
        industry: "Financial Services",
        partnership: "3+ Years",
        description: "Top-tier investment bank serving institutional clients worldwide",
        size: "large",
        tier: "fortune500",
    },
    {
        id: "3",
        name: "Energy Solutions International",
        logo: "/shopno.png?height=80&width=200&text=Energy+Solutions",
        industry: "Energy & Utilities",
        partnership: "7+ Years",
        description: "Renewable energy leader with sustainable power solutions",
        size: "medium",
        tier: "enterprise",
    },
    {
        id: "4",
        name: "Defense Technologies Ltd",
        logo: "/shopno.png?height=80&width=200&text=Defense+Tech",
        industry: "Defense & Security",
        partnership: "4+ Years",
        description: "Advanced defense systems and security technology provider",
        size: "medium",
        tier: "enterprise",
    },
    {
        id: "5",
        name: "Healthcare Innovation Group",
        logo: "/shopno.png?height=80&width=200&text=Healthcare+Innovation",
        industry: "Healthcare",
        partnership: "6+ Years",
        description: "Medical technology innovator improving patient outcomes globally",
        size: "medium",
        tier: "enterprise",
    },
    {
        id: "6",
        name: "Fortune Financial Services",
        logo: "/shopno.png?height=80&width=200&text=Fortune+Financial",
        industry: "Financial Services",
        partnership: "8+ Years",
        description: "Premier wealth management and investment advisory firm",
        size: "large",
        tier: "fortune500",
    },
]

export function BrandingSlider({
                                   logos = defaultLogos,
                                   title = "Trusted by Industry Leaders",
                                   subtitle = "A few of our partners across industries",
                                   autoPlay = true,
                                   speed = 40,
                                   showControls = true,
                                   className = "",
                               }) {
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [hoveredLogo, setHoveredLogo] = useState(null)

    const duplicatedLogos = [...logos, ...logos] // seamless loop

    const getTierColor = (tier) => {
        switch (tier) {
            case "fortune500":
                return "from-yellow-400 to-orange-500"
            case "enterprise":
                return "from-blue-500 to-purple-500"
            default:
                return "from-gray-400 to-gray-600"
        }
    }

    useEffect(() => {
        if (!autoPlay) return
        const style = document.createElement("style")
        style.innerHTML = `
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `
        document.head.appendChild(style)
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return (
        <div className={`w-full py-12 px-4 md:px-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b]  text-white ${className}`}>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center">{title}</h2>
                    <p className="text-sm text-gray-300 mt-1">{subtitle}</p>
                </div>
                {showControls && (
                    <div className="flex gap-2">
                        <button
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                    </div>
                )}
            </div>

            <div
                className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md"
                onMouseEnter={() => autoPlay && setIsPlaying(false)}
                onMouseLeave={() => autoPlay && setIsPlaying(true)}
            >
                <div
                    className="flex gap-8 py-8 px-4"
                    style={{
                        animation: isPlaying ? `scrollX ${speed}s linear infinite` : "none",
                        width: `${duplicatedLogos.length * 280}px`,
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative min-w-[240px] h-[120px] flex items-center justify-center bg-white/5 border border-white/10 rounded-xl p-4 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                            onMouseEnter={() => setHoveredLogo(`${logo.id}-${index}`)}
                            onMouseLeave={() => setHoveredLogo(null)}
                        >
                            <Image
                                src={logo.logo || "/shopno.png"}
                                alt={logo.name}
                                width={200}
                                height={80}
                                className="object-contain max-h-[60px]"
                            />
                            <div
                                className={`absolute top-1 right-1 text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getTierColor(
                                    logo.tier,
                                )} text-white opacity-80 capitalize`}
                            >
                                {logo.tier}
                            </div>

                            {hoveredLogo === `${logo.id}-${index}` && (
                                <div className="absolute bottom-full mb-4 w-64 text-sm bg-black/90 text-white p-4 rounded-xl shadow-lg z-10">
                                    <h4 className="text-base font-bold mb-1">{logo.name}</h4>
                                    <div className="flex justify-between text-xs mb-2 text-gray-300">
                                        <span>{logo.industry}</span>
                                        <span>{logo.partnership}</span>
                                    </div>
                                    <p className="text-gray-400">{logo.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f172a] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0f172a] to-transparent pointer-events-none" />
            </div>
        </div>
    )
}
