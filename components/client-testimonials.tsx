"use client"

import { useState, useEffect } from "react"
import { Star, Quote, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Chief Risk Officer",
    company: "Global Manufacturing Corp",
    content:
      "SpringerD Consultancy transformed our approach to risk management. Their SPRINGERD framework helped us identify vulnerabilities we never knew existed and implement solutions that have significantly improved our operational resilience. The ROI has been exceptional.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    industry: "Manufacturing",
    companySize: "Fortune 500",
    results: "40% reduction in operational risks",
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "TechInnovate Solutions",
    content:
      "The strategic insights and practical solutions provided by SpringerD have been invaluable. They didn't just identify our risks—they helped us turn them into competitive advantages. Their team's expertise and collaborative approach made all the difference.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    industry: "Technology",
    companySize: "Mid-Market",
    results: "25% improvement in business continuity",
  },
  {
    name: "Emma Rodriguez",
    title: "Head of Compliance",
    company: "Financial Services Group",
    content:
      "Working with SpringerD was a game-changer for our organization. Their expertise in regulatory risk management and their collaborative approach made the entire process smooth and highly effective. We now have a robust framework that scales with our growth.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    industry: "Financial Services",
    companySize: "Enterprise",
    results: "100% regulatory compliance achieved",
  },
  {
    name: "David Thompson",
    title: "Operations Director",
    company: "Healthcare Systems Inc",
    content:
      "The maturity assessment and subsequent recommendations from SpringerD have elevated our risk management capabilities to a new level. Their team's professionalism, expertise, and attention to detail are unmatched in the industry.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    industry: "Healthcare",
    companySize: "Large Enterprise",
    results: "60% faster incident response",
  },
]

export function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentClient = testimonials[currentTestimonial]

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Client Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their transformational experience
            working with SpringerD Consultancy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-12 lg:p-16 relative">
                <div className="mb-8">
                  <Quote className="h-16 w-16 text-blue-600 mb-6" />
                  <div className="flex items-center mb-6">
                    {[...Array(currentClient.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{currentClient.content}"
                </blockquote>

                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Image
                      src={currentClient.image || "/placeholder.svg"}
                      alt={currentClient.name}
                      width={80}
                      height={80}
                      className="rounded-2xl border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-gray-900 text-xl">{currentClient.name}</h4>
                    <p className="text-gray-600 font-medium">{currentClient.title}</p>
                    <p className="text-blue-600 font-semibold">{currentClient.company}</p>
                  </div>
                </div>

                {/* Client Details */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="font-semibold text-gray-900">{currentClient.industry}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Company Size</div>
                    <div className="font-semibold text-gray-900">{currentClient.companySize}</div>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

                <div className="relative">
                  <h3 className="text-3xl font-bold mb-8">Key Results</h3>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                    <div className="text-4xl font-bold mb-2">{currentClient.results}</div>
                    <div className="text-blue-100">Primary Achievement</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-blue-100">Comprehensive risk assessment completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-blue-100">Custom framework implementation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-blue-100">Ongoing support and monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-blue-100">Team training and development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentTestimonial
                    ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-indigo-700"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
