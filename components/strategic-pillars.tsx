import { Compass, Handshake, Star, Award, Target, Heart } from "lucide-react"

const pillars = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from initial assessment to final implementation. Our commitment to excellence ensures that every solution we deliver meets and exceeds expectations.",
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    features: ["Quality Assurance", "Best Practices", "Continuous Improvement", "Industry Standards"],
  },
  {
    icon: Compass,
    title: "Innovation",
    description:
      "We continuously evolve our methodologies and embrace new technologies to provide cutting-edge solutions. Innovation drives our ability to solve complex challenges in creative ways.",
    color: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    features: ["Creative Solutions", "Technology Integration", "Future-Ready Approaches", "Adaptive Strategies"],
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We believe in building long-term relationships based on trust, transparency, and mutual success. Our collaborative approach ensures that we work as an extension of your team.",
    color: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    features: ["Trust Building", "Transparent Communication", "Collaborative Approach", "Long-term Relationships"],
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "Every engagement is designed to deliver measurable, sustainable impact. We focus on outcomes that drive real business value and create lasting organizational resilience.",
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-100",
    features: ["Measurable Results", "Sustainable Solutions", "Business Value", "Lasting Change"],
  },
]

export function StrategicPillars() {
  return (
    <section
      id="pillars"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFFFFF' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
            Our Foundation
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Strategic{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pillars</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Four fundamental principles that guide our approach and define our commitment to delivering exceptional
            value to every client we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative text-center">
                    <div
                      className={`bg-gradient-to-br ${pillar.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">{pillar.description}</p>

                    <div className="space-y-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm text-blue-200">
                          <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Foundation Statement */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Built on Strong Foundations</h3>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
              These pillars aren't just values—they're the foundation of every decision we make, every solution we
              design, and every relationship we build. They ensure that our clients receive not just consulting
              services, but transformational partnerships that drive lasting success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
