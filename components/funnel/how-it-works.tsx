import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We analyze your current brand, ads, website, and market position. You get a strategic roadmap.",
    details: ["Competitive analysis", "Creative audit", "Opportunity mapping"],
  },
  {
    number: "02",
    title: "Creative System Build",
    description: "We create your complete creative system: brand guidelines, ad templates, content calendar.",
    details: ["Brand voice", "Asset templates", "Performance KPIs"],
  },
  {
    number: "03",
    title: "Scale & Optimize",
    description: "We continuously create, test, and optimize. You see results month over month.",
    details: ["Ongoing creation", "A/B testing", "ROAS improvement"],
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            How Our System Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three simple phases to go from scattered to scalable.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                {/* Step number and content */}
                <div className="flex-1">
                  <div className="text-6xl md:text-7xl font-poppins font-bold text-emerald-400/20 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-poppins font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, di) => (
                      <div key={di} className="flex items-center gap-2 text-emerald-400">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="flex-1">
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">{["🔍", "🎨", "📈"][i]}</div>
                      <p className="text-gray-400 text-sm">Step {i + 1}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex justify-center my-8">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="h-8 border-l-2 border-dashed border-emerald-400/50"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
