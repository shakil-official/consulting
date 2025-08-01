import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, BarChart3 } from "lucide-react"

const benefits = [
  "Comprehensive risk assessment across all SPRINGERD categories",
  "Benchmarking against industry best practices",
  "Personalized recommendations for improvement",
  "Priority roadmap for risk management enhancement",
  "Executive summary with actionable insights",
]

export function MaturityCheck() {
  return (
      <section
          id="contact"
          className="py-20 bg-gradient-to-br from-springer-dark-blue to-springer-dark-blue-accent text-white"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Take a Maturity Check Now</h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover where your organization stands in risk management maturity. Our comprehensive assessment will
              provide you with valuable insights and a clear roadmap for improvement.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-8 text-white/70">
              {/*<p className="text-sm">✓ Free assessment • ✓ No obligation • ✓ Results in 48 hours</p>*/}
            </div>
          </div>
        </div>
      </section>
  )
}
