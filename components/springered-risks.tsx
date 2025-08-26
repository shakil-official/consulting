"use client"

import {ArrowRight, Building, Cloud, FileText, Globe, Leaf, Shield, Star, Vote, Zap, Users} from "lucide-react"
import {useEffect, useState} from "react"
import {renderQuillContent} from './renderQuillContent' // parse Quill HTML properly

export function SpringeredRisks() {
    const [risks, setRisks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://shakil.rrbaghouse.com/api/categories?reason=2") // reason=2
            .then(res => res.json())
            .then(data => {
                if (data.success) setRisks(data.data)
            })
            .finally(() => setLoading(false))
    }, [])

    const iconMap = {Shield, Zap, Star, Building, Cloud, Globe, Leaf, FileText, Vote, Users}

    const handleLearnMore = (categoryId) => {
        console.log("Learn more clicked for category:", categoryId)
        // Example navigation
        // window.location.href = `/category/${categoryId}`
    }

    if (loading) {
        return (
            <section className="py-24 container mx-auto px-4 lg:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {Array(5).fill(0).map((_, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-gray-100 animate-pulse h-60"/>
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section id="risks" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
                            SPRINGERED
                        </span>
                        : The Risks We Address
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        In today’s interconnected world, risks can escalate quickly—impacting people, operations,
                        reputation, and compliance within hours. We help clients manage these complex threats across ten
                        critical risk areas using our SPRINGERED framework.
                    </p>
                </div>

                {/* Risk Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {risks.map((risk, index) => {
                        const IconComponent = iconMap[risk.icon] || Shield
                        const firstLetter = risk.name?.charAt(0) || "R"

                        return (
                            <div
                                key={index}
                                className={`${risk.bgColor} border-2 border-transparent hover:border-primary/20 p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                            >
                                <div className="relative">
                                    {/* Icon and Title */}
                                    <div className="flex items-center mb-4">
                                        <div
                                            className={`bg-gradient-to-br ${risk.color} w-12 h-12 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <span className="text-white font-bold text-lg">{firstLetter}</span>
                                        </div>
                                        <div className="text-lg font-bold text-gray-900">{risk.title}</div>
                                    </div>

                                    {/* Quill HTML Description */}
                                    {risk.description && (
                                        <div className="mb-4">{renderQuillContent(risk.description)}</div>
                                    )}

                                    {/* Examples */}
                                    {risk.examples && risk.examples.length > 0 && (
                                        <div className="space-y-1">
                                            <div className="text-xs font-semibold text-gray-700 mb-2">Examples:</div>
                                            {risk.examples.slice(0, 4).map((example, idx) => (
                                                <div key={idx} className="flex items-start text-xs text-gray-600">
                                                    <div
                                                        className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"/>
                                                    <span>{example}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Learn More */}
                                <div
                                    className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer mt-4"
                                    onClick={() => handleLearnMore(risk.id)}
                                >
                                    <span className="text-sm">Learn More</span>
                                    <ArrowRight
                                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
