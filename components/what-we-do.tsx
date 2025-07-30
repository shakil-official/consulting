import { Briefcase, Shield, TrendingUp, Users, Settings, BookOpen, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Shield,
    title: "Risk Assessment & Management",
    description:
      "Comprehensive risk identification, assessment, and mitigation strategies tailored to your organization's unique profile and objectives.",
    features: ["Risk Identification", "Impact Analysis", "Mitigation Strategies", "Continuous Monitoring"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    description:
      "Executive advisory services to align risk management with business strategy and drive sustainable competitive advantage.",
    features: ["Strategic Planning", "Executive Advisory", "Business Alignment", "Competitive Analysis"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Business Continuity Planning",
    description:
      "Develop robust continuity plans that ensure operational resilience and rapid recovery from disruptions.",
    features: ["Continuity Planning", "Disaster Recovery", "Crisis Management", "Resilience Building"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Organizational Transformation",
    description:
      "Guide cultural and structural changes to embed risk awareness and resilience throughout your organization.",
    features: ["Change Management", "Culture Transformation", "Leadership Development", "Team Building"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description:
      "Streamline operations and implement best practices to reduce risk exposure while improving efficiency.",
    features: ["Process Analysis", "Workflow Optimization", "Best Practices", "Efficiency Improvement"],
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    description: "Comprehensive training programs to build internal risk management capabilities and expertise.",
    features: ["Skills Development", "Knowledge Transfer", "Certification Programs", "Ongoing Support"],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

export function WhatWeDo() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive consulting services that help organizations build resilience, manage risks
            effectively, and achieve sustainable growth in an uncertain world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`${service.bgColor} border-2 border-transparent hover:border-blue-200 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Risk Management?</h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Let's discuss how our expertise can help your organization navigate challenges and seize opportunities
              with confidence. Our team is ready to partner with you on your journey to resilience.
            </p>
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"*/}
            {/*  >*/}
            {/*    Schedule a Consultation*/}
            {/*    <ArrowRight className="ml-2 h-5 w-5" />*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    variant="outline"*/}
            {/*    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl bg-transparent transition-all duration-300 hover:scale-105"*/}
            {/*  >*/}
            {/*    Download Brochure*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
