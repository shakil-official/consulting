import { AlertTriangle, TrendingUp, Shield, Users, Zap, Globe } from "lucide-react"

const interconnections = [
  {
    icon: AlertTriangle,
    title: "Cascade Effect",
    description: "A cyberattack can trigger regulatory scrutiny, leading to reputational damage and social unrest",
    color: "from-red-500 to-red-600",
  },
  {
    icon: TrendingUp,
    title: "Rapid Escalation",
    description: "Single incidents can escalate into multi-domain crises within hours across global operations",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Comprehensive Defense",
    description: "Integrated strategies that anticipate, mitigate, and respond before escalation into full crises",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Stakeholder Impact",
    description: "Understanding how risks affect all stakeholder groups and their interconnected relationships",
    color: "from-green-500 to-green-600",
  },
]

const approaches = [
  {
    icon: Globe,
    title: "Proven Global Best Practices",
    description: "Time-tested methodologies refined across 100+ countries and 500+ crisis situations",
  },
  {
    icon: Shield,
    title: "Tailored Resilience Plans",
    description: "Customized playbooks designed for your specific industry, geography, and risk profile",
  },
  {
    icon: Zap,
    title: "Scenario-Based Simulations",
    description: "Leadership training through realistic crisis scenarios and decision-making exercises",
  },
  {
    icon: Users,
    title: "Real-World Coaching",
    description: "Capability assessments and hands-on coaching from experienced crisis management professionals",
  },
]

export function WhySpringeredMatters() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
            Risk Interconnections
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SPRINGERED
            </span>{" "}
            Matters
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            These risks don't operate in isolation. Understanding their interconnections is crucial for developing
            comprehensive strategies that prevent escalation into full-scale crises.
          </p>
        </div>

        {/* Risk Interconnections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {interconnections.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative text-center">
                  <div
                    className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Our Approach */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6">Our Comprehensive Approach</h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                We tackle these interconnected risks through a combination of proven methodologies and real-world
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                      {approach.title}
                    </h4>
                    <p className="text-blue-100 leading-relaxed">{approach.description}</p>
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
