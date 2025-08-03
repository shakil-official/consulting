"use client"

import {useEffect, useState} from "react"
import Image from "next/image"
import {Play, Pause, Award, Building, TrendingUp} from "lucide-react"

const defaultLogos = [
    {
        id: "1",
        name: "Global Manufacturing Corp",
        logo: "/IMG_8289.PNG",
        industry: "Manufacturing",
        partnership: "5+ Years",
        description: "Leading global manufacturer with operations in 40+ countries",
        size: "large",
        tier: "fortune500",
        revenue: "$50B+",
        employees: "100K+",
    },
    {
        id: "2",
        name: "International Bank Holdings",
        logo: "/IMG_8289.PNG",
        industry: "Financial Services",
        partnership: "3+ Years",
        description: "Top-tier investment bank serving institutional clients worldwide",
        size: "large",
        tier: "fortune500",
        revenue: "$25B+",
        employees: "50K+",
    },
    {
        id: "3",
        name: "Energy Solutions International",
        logo: "/IMG_8289.PNG",
        industry: "Energy & Utilities",
        partnership: "7+ Years",
        description: "Renewable energy leader with sustainable power solutions",
        size: "medium",
        tier: "enterprise",
        revenue: "$5B+",
        employees: "15K+",
    },
    {
        id: "4",
        name: "Defense Technologies Ltd",
        logo: "/IMG_8289.PNG",
        industry: "Defense & Security",
        partnership: "4+ Years",
        description: "Advanced defense systems and security technology provider",
        size: "medium",
        tier: "enterprise",
        revenue: "$3B+",
        employees: "8K+",
    },
    {
        id: "5",
        name: "Healthcare Innovation Group",
        logo: "/IMG_8289.PNG",
        industry: "Healthcare",
        partnership: "6+ Years",
        description: "Medical technology innovator improving patient outcomes globally",
        size: "medium",
        tier: "enterprise",
        revenue: "$8B+",
        employees: "25K+",
    },
    {
        id: "6",
        name: "Fortune Financial Services",
        logo: "/IMG_8289.PNG",
        industry: "Financial Services",
        partnership: "8+ Years",
        description: "Premier wealth management and investment advisory firm",
        size: "large",
        tier: "fortune500",
        revenue: "$15B+",
        employees: "35K+",
    },
]

export function BrandingSlider({
                                   logos = defaultLogos,
                                   title = "Trusted by Industry Leaders",
                                   subtitle = "Partnering with global organizations to build resilient futures",
                                   autoPlay = true,
                                   speed = 35,
                                   showControls = true,
                                   className = "",
                               }) {
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [hoveredLogo, setHoveredLogo] = useState(null)
    const duplicatedLogos = [...logos, ...logos, ...logos]

    const getTierConfig = (tier) => {
        switch (tier) {
            case "fortune500":
                return {
                    color: "from-yellow-400 via-orange-400 to-red-500",
                    icon: Award,
                    label: "Fortune 500",
                    glow: "shadow-yellow-500/30",
                }
            case "enterprise":
                return {
                    color: "from-blue-400 via-purple-400 to-indigo-500",
                    icon: Building,
                    label: "Enterprise",
                    glow: "shadow-blue-500/30",
                }
            default:
                return {
                    color: "from-gray-400 to-gray-600",
                    icon: TrendingUp,
                    label: "Growth",
                    glow: "shadow-gray-500/30",
                }
        }
    }

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
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
      }
      .floating { animation: float 6s ease-in-out infinite; }
      .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
    `
        document.head.appendChild(style)
        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style)
            }
        }
    }, [autoPlay])

    return (
        <div
            className={`w-full py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-primary/5 text-foreground relative overflow-hidden  ${className}`}>
            {/* Floating BG Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating"
                     style={{animationDelay: "2s"}}></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating"
                     style={{animationDelay: "4s"}}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <div className="text-center mb-12">
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

                {/*{showControls && (*/}
                {/*    <div className="flex justify-center mb-8">*/}
                {/*        <button*/}
                {/*            className="bg-card hover:bg-card/80 backdrop-blur-sm p-3 rounded-full border border-border transition-all duration-300 hover:scale-110 pulse-glow"*/}
                {/*            onClick={() => setIsPlaying(!isPlaying)}*/}
                {/*            aria-label={isPlaying ? "Pause slider" : "Play slider"}*/}
                {/*        >*/}
                {/*            {isPlaying ? <Pause size={20}/> : <Play size={20}/>}*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*)}*/}

                {/* Slider */}
                <div
                    className="relative overflow-visible rounded-3xl  backdrop-blur-md bg-card/70"
                    onMouseEnter={() => autoPlay && setIsPlaying(false)}
                    onMouseLeave={() => autoPlay && setIsPlaying(true)}
                >
                    <div
                        className="flex gap-6 py-10 px-6"
                        style={{
                            animation: isPlaying ? `scrollX ${speed}s linear infinite` : "none",
                            width: `${duplicatedLogos.length * 320}px`,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => {


                            return (
                                <div
                                    key={`${logo.id}-${index}`}
                                    className="relative min-w-[280px] group cursor-pointer"
                                    onMouseEnter={() => setHoveredLogo(`${logo.id}-${index}`)}
                                    onMouseLeave={() => setHoveredLogo(null)}
                                >
                                    {/* Tooltip */}
                                    {/*{hoveredLogo === `${logo.id}-${index}` && (*/}
                                    {/*    <div*/}
                                    {/*        className="absolute top-full mb-4 left-1/2 transform -translate-x-1/2 w-80 z-50"*/}
                                    {/*        role="tooltip">*/}
                                    {/*        <div*/}
                                    {/*            className="bg-popover backdrop-blur-xl border border-border text-foreground p-6 rounded-2xl shadow-2xl">*/}
                                    {/*            <div className="flex items-start justify-between mb-3">*/}
                                    {/*                <div>*/}
                                    {/*                    <h4 className="text-lg font-bold mb-1">{logo.name}</h4>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div*/}
                                    {/*                className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-popover"></div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}

                                    <div
                                        className="bg-muted backdrop-blur-md border border-border rounded-2xl p-6 h-[160px] flex flex-col justify-center items-center transition-all duration-500 hover:bg-muted/80 hover:scale-105 hover:rotate-1 group-hover:shadow-2xl relative">

                                        <div className="relative mb-4 w-full flex justify-center">
                                            <Image
                                                src={logo.logo}
                                                alt={logo.name}
                                                height={48}
                                                width={150}
                                                className="object-contain transition-all duration-300 group-hover:brightness-100"
                                            />
                                        </div>
                                        <div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    </div>


                                </div>
                            )
                        })}
                    </div>

                    {/* Gradient Edges */}
                    {/*<div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background via-muted/80 to-transparent pointer-events-none z-10"></div>*/}
                    {/*<div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background via-muted/80 to-transparent pointer-events-none z-10"></div>*/}
                </div>
            </div>
        </div>
    )
}
