import { Shield, AlertTriangle, TrendingUp, Users, Globe, Zap, Lock, BarChart, ArrowRight } from "lucide-react"

const risks = [
  {
    icon: Shield,
    title: "Strategic Risks",
    description: "Market volatility, competitive threats, and strategic misalignment challenges",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Users,
    title: "People Risks",
    description: "Talent retention, skills gaps, and organizational culture challenges",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Globe,
    title: "Regulatory Risks",
    description: "Compliance failures, regulatory changes, and governance issues",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Lock,
    title: "Information Risks",
    description: "Data breaches, information security, and privacy violations",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: TrendingUp,
    title: "Financial Risks",
    description: "Credit risks, liquidity challenges, and financial market exposures",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    icon: Zap,
    title: "Technology Risks",
    description: "Cyber threats, system failures, and digital transformation challenges",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    icon: BarChart,
    title: "Reputational Risks",
    description: "Brand damage, stakeholder trust, and public perception issues",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    icon: AlertTriangle,
    title: "Operational Risks",
    description: "Process failures, supply chain disruptions, and operational inefficiencies",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
  },
]

export function SpringerdRisks() {
  return (
    <section id="risks" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Risk Management Framework
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              SPRINGERD
            </span>{" "}
            Risks
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive SPRINGERD framework identifies and addresses eight critical risk categories that can
            impact your organization's success and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {risks.map((risk, index) => {
            const IconComponent = risk.icon
            return (
              <div
                key={index}
                className={`${risk.bgColor} ${risk.borderColor} border-2 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${risk.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${risk.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{risk.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{risk.description}</p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* SPRINGERD Framework Explanation */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative text-center">
            <h3 className="text-4xl font-bold mb-6">The SPRINGERD Framework</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { letter: "S", word: "Strategic", color: "bg-blue-500" },
                { letter: "P", word: "People", color: "bg-green-500" },
                { letter: "R", word: "Regulatory", color: "bg-purple-500" },
                { letter: "I", word: "Information", color: "bg-red-500" },
                { letter: "N", word: "Network", color: "bg-yellow-500" },
                { letter: "G", word: "Governance", color: "bg-indigo-500" },
                { letter: "E", word: "Environmental", color: "bg-pink-500" },
                { letter: "R", word: "Reputational", color: "bg-teal-500" },
                { letter: "D", word: "Digital", color: "bg-orange-500" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div
                    className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">{item.letter}</span>
                  </div>
                  <span className="text-blue-100 font-medium">{item.word}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-100 mt-8 text-lg max-w-3xl mx-auto">
              A comprehensive approach to identifying, assessing, and managing risks across all critical business
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
