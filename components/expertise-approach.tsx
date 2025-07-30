import { CheckCircle, Target, Lightbulb, Users, Award, Clock, Shield } from "lucide-react"
import Image from "next/image"

const approaches = [
  {
    icon: Target,
    title: "Strategic Assessment",
    description: "Comprehensive risk identification and impact analysis tailored to your industry and business model",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Creative problem-solving approaches that turn challenges into competitive advantages",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "Working closely with your teams to ensure knowledge transfer and sustainable implementation",
    color: "from-green-500 to-green-600",
  },
  {
    icon: CheckCircle,
    title: "Proven Methodologies",
    description: "Time-tested frameworks and best practices refined through years of successful engagements",
    color: "from-orange-500 to-red-500",
  },
]

const stats = [
  { icon: Award, number: "500+", label: "Projects Completed", color: "text-blue-600" },
  { icon: Users, number: "98%", label: "Client Satisfaction", color: "text-green-600" },
  { icon: Shield, number: "25+", label: "Industry Sectors", color: "text-purple-600" },
  { icon: Clock, number: "15+", label: "Years Experience", color: "text-orange-600" },
]

export function ExpertiseApproach() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Our Methodology
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expertise &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our unique blend of deep industry knowledge, innovative thinking, and collaborative approach ensures that
            every engagement delivers measurable value and lasting impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Our Methodology</h3>
            <div className="space-y-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div
                      className={`bg-gradient-to-br ${approach.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {approach.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{approach.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl opacity-10 rotate-12"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
              <Image
                src="/expert.png?height=600&width=700"
                alt="Our Approach"
                width={700}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600 text-lg">Numbers that speak to our commitment and expertise</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`${stat.color} bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
