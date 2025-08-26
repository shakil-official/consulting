"use client"

import {ArrowRight, Building, Cloud, FileText, Globe, Leaf, Shield, Star, Vote, Zap} from "lucide-react";
import {useEffect, useState} from "react";
import parse from "html-react-parser"; // npm install html-react-parser

// icon mapping
const iconMap = {
    Shield,
    Zap,
    Star,
    Building,
    Cloud,
    Globe,
    Leaf,
    FileText,
    Vote
};

export function WhatWeDoUpgat() {
    const [risks, setRisks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://shakil.rrbaghouse.com/api/categories?reason=1")
            .then(res => res.json())
            .then(data => {
                if (data.success) setRisks(data.data);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleLearnMore = (categoryId) => {
        console.log("Learn more clicked for category:", categoryId);
    };

    return (
        <section id="whatWeDoNow" className="py-24 bg-gradient-to-br from-gray-50 to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        What We{" "} <span
                        className="bg-gradient-to-r from-springer-dark-blue to-springer-dark-blue-accent bg-clip-text text-transparent">Do</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We provide comprehensive consulting services that help organizations build resilience, manage
                        risks effectively, and achieve sustainable growth in an uncertain world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {loading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="p-6 rounded-3xl bg-gray-200 animate-pulse h-64"></div>
                        ))
                        : risks.map((risk, index) => {
                            const IconComponent = iconMap[risk.icon] || Shield;

                            return (
                                <div
                                    key={index}
                                    className={`${risk.bgColor} border-2 border-transparent hover:border-primary/20 p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                                >
                                    <div className="relative">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className={`bg-gradient-to-br ${risk.color} w-12 h-12 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <span className="text-white font-bold text-lg">{risk.letter}</span>
                                            </div>
                                            <div className="text-lg font-bold text-gray-900">{risk.title}</div>
                                        </div>

                                        <div className="space-y-1">
                                            {parse(risk.description, {
                                                replace: domNode => {
                                                    if (domNode.name === "li") {
                                                        return (
                                                            <div className="flex items-start text-xs text-gray-600 mb-2">
                                                                <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                                                <span>{domNode.children[0].data}</span>
                                                            </div>
                                                        );
                                                    }
                                                    if (domNode.name === "p") {
                                                        return <p className="text-xs text-gray-600">{domNode.children[0]?.data}</p>;
                                                    }
                                                }
                                            })}
                                        </div>




                                    </div>

                                    {/* Learn More */}
                                    <div
                                        className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer mt-4"
                                        onClick={() => handleLearnMore(risk.id)}
                                    >
                                        <span className="text-sm">Learn More</span>
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
