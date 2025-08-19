"use client"

import { useEffect, useState } from "react"
import { Award, X } from "lucide-react"
import Image from "next/image"

interface Expert {
    id: number
    name: string
    position: string
    description: string
    image: string
    created_at: string
    updated_at: string
}

export function PanelOfExperts() {
    const [experts, setExperts] = useState<Expert[]>([])
    const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const res = await fetch("https://shakil.rrbaghouse.com/api/get-experts")
                const data = await res.json()
                if (data?.data) {
                    setExperts(data.data)
                }
            } catch (error) {
                console.error("Failed to fetch experts:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchExperts()
    }, [])

    return (
        <section id="panel-of-experts" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Subject Matter{" "}
                        <span className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
                            Experts
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Our team consists of global specialists with deep real-world experience—not just consultants,
                        but practitioners and executive leaders.
                    </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {loading
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-3xl p-6 sm:p-8 border border-gray-200 animate-pulse bg-gray-100 h-64"
                            >
                                <div className="h-24 w-24 bg-gray-300 rounded-2xl mb-4"></div>
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        ))
                        : experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="bg-gradient-to-br from-gray-50 to-springer-dark-blue/5 rounded-3xl p-6 sm:p-8 border border-springer-dark-blue/10 hover:shadow-xl transition-all duration-300 group hover:scale-[1.03] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-springer-dark-blue/5 to-springer-dark-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative shrink-0">
                                            <Image
                                                src={`https://shakil.rrbaghouse.com/${expert.image}`}
                                                alt={expert.name}
                                                width={100}
                                                height={100}
                                                className="rounded-2xl border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-full p-2 shadow-md">
                                                <Award className="h-4 w-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 self-end">
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-springer-dark-blue transition-colors leading-tight">
                                                {expert.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm font-medium text-springer-dark-blue leading-snug mt-2 mb-4">{expert.position}</p>

                                    <button
                                        onClick={() => setSelectedExpert(expert)}
                                        className="text-sm text-springer-dark-blue hover:text-white hover:bg-springer-dark-blue px-4 py-2 rounded-full border border-springer-dark-blue transition-colors duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal */}
            {selectedExpert && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedExpert(null)}
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={`https://shakil.rrbaghouse.com/${selectedExpert.image}`}
                                alt={selectedExpert.name}
                                width={80}
                                height={80}
                                className="rounded-xl border-4 border-white shadow-md"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{selectedExpert.name}</h3>
                                <p className="text-sm text-springer-dark-blue font-medium">{selectedExpert.position}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{selectedExpert.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
