"use client"

import {useEffect, useState} from "react"
import {Award, X} from "lucide-react"
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
        <section id="panel-of-experts" className="py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Who {" "}
                        <span
                            className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">
                            We Are
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600  mx-auto" style={{textAlign: "justify"}}>
                        A group of world-recognized specialists, we have experience operating in over 100 countries and
                        have managed more than 500 local and international crises, all of which have had a global impact
                        on multibillion-dollar companies.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600  mx-auto mt-3" style={{textAlign: "justify"}}>
                        Our real-world experience spans boardrooms to remote industrial sites, servicing sectors from
                        banking and heavy industry to transportation, public institutions, and defense. Our members are
                        selected based on their expertise, integrity, track record, and no-bullshit approach. Each of
                        our SPRINGER threats is supported by experts with a minimum of 15 years of proven expertise.
                    </p>

                    <p className="text-lg md:text-xl text-gray-600  mx-auto mt-3" style={{textAlign: "justify"}}>
                        Our team boasts an extraordinary diversity of skills and backgrounds, including military,
                        scientific, economic, legal, sociopolitical, criminological, linguistic, and more. This varied
                        expertise enables us to approach challenges from multiple perspectives, ensuring innovative and
                        effective solutions. We are not solely military-focused; instead, we pride ourselves on the
                        unique blend of knowledge and academic backgrounds that set us apart from others in the
                        field.</p>
                    <p className="text-lg md:text-xl text-gray-600  mx-auto mt-3" style={{textAlign: "justify"}}>
                        The founder, his executive team and the board of directors, are all invested in the selection
                        process and vouch for each individual member.
                    </p>

                    <p className="text-lg md:text-xl text-gray-600  mx-auto mt-3" style={{textAlign: "justify"}}>
                        This expertise ensures we know what works at every tier—and how to speak the language of both
                        board members and frontline teams.
                    </p>

                    <p className="text-lg md:text-xl text-gray-600  mx-auto mt-3" style={{textAlign: "justify"}}>
                        For reasons of discretion, we do not publicize our members' CVs on this website. However, if clients are interested in obtaining more details about our partners, they are welcome to reach out directly.
                    </p>

                </div>

                <div
                    className={`grid gap-10 
        ${experts.length === 2 ? "sm:grid-cols-2 justify-center place-items-center" : "sm:grid-cols-2 lg:grid-cols-4"}
    `}
                >
                    {loading
                        ? Array.from({length: 4}).map((_, i) => (
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
                                className="bg-gradient-to-br from-gray-50 to-springer-dark-blue/5 rounded-3xl p-6 sm:p-8 border border-springer-dark-blue/10 hover:shadow-xl transition-all duration-300 group hover:scale-[1.03] relative overflow-hidden flex flex-col max-w-sm w-full"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-springer-dark-blue/5 to-springer-dark-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                                {/* Card Content */}
                                <div className="relative z-10 flex-1 flex flex-col">
                                    {/* Top: Image + Name */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="relative shrink-0">
                                            <Image
                                                src={`https://shakil.rrbaghouse.com/${expert.image}`}
                                                alt={expert.name}
                                                width={100}
                                                height={100}
                                                className="rounded-2xl border-4 border-white shadow-md max-w-[100px] max-h-[100px] object-cover"
                                            />

                                            <div
                                                className="absolute -bottom-2 -right-2 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent rounded-full p-2 shadow-md">
                                                <Award className="h-4 w-4 text-white"/>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 self-end">
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-springer-dark-blue transition-colors leading-tight">
                                                {expert.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-700 flex-1">{expert.position}</p>

                                    {/* Button always at bottom */}
                                    <div className="mt-4">
                                        <button
                                            onClick={() => setSelectedExpert(expert)}
                                            className="text-sm text-springer-dark-blue hover:text-white hover:bg-springer-dark-blue px-4 py-2 rounded-full border border-springer-dark-blue transition-colors duration-300 w-full"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

            {/* Modal */}
            {selectedExpert && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
                    <div
                        className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedExpert(null)}
                        >
                            <X className="h-5 w-5"/>
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={`https://shakil.rrbaghouse.com/${selectedExpert.image}`}
                                alt={selectedExpert.name}
                                width={80}
                                height={80}
                                className="rounded-xl border-4 border-white shadow-md object-cover"
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
