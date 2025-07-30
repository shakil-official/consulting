import { Building, Truck, Shield, Landmark, Factory, Globe } from "lucide-react"

const sectors = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description: "Risk management for financial institutions, regulatory compliance, and crisis response",
    stats: "50+ Financial Institutions",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Factory,
    title: "Heavy Industry & Manufacturing",
    description: "Operational resilience, supply chain security, and environmental risk management",
    stats: "200+ Manufacturing Sites",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Supply chain continuity, geopolitical risk, and operational disruption management",
    stats: "Global Supply Networks",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Building,
    title: "Public Institutions & Government",
    description: "Crisis management, stakeholder relations, and policy implementation support",
    stats: "30+ Government Agencies",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Defense & Security",
    description: "Strategic risk assessment, operational security, and crisis response planning",
    stats: "Critical Infrastructure",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Globe,
    title: "Multinational Corporations",
    description: "Cross-border risk management, cultural adaptation, and global crisis coordination",
    stats: "Fortune 100 & FTSE 100",
    color: "from-indigo-500 to-indigo-600",
  },
]

const globalReach = [
  { region: "North America", countries: "15+", operations: "Major Operations" },
  { region: "Europe", countries: "25+", operations: "Regional Hub" },
  { region: "Asia Pacific", countries: "20+", operations: "Growing Presence" },
  { region: "Latin America", countries: "18+", operations: "Established Network" },
  { region: "Middle East & Africa", countries: "22+", operations: "Strategic Partnerships" },
]

export function ReachAndSectors() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Global Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reach &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Sectors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our real-world expertise spans from boardrooms to remote industrial sites, serving diverse sectors with
            tailored solutions that speak the language of both C-suite leaders and frontline teams.
          </p>
        </div>

        {/* Sectors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-transparent hover:border-blue-200 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${sector.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{sector.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{sector.description}</p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-blue-600">{sector.stats}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global Reach */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Global Presence</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Operating across 100+ countries with deep local knowledge and global coordination capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {globalReach.map((region, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{region.region}</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{region.countries}</div>
                  <div className="text-sm text-gray-600">{region.operations}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl inline-block">
                <div className="text-3xl font-bold mb-2">100+ Countries</div>
                <div className="text-blue-200">Operational Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
