import { motion } from "framer-motion"
import { CountUp } from "react-countup"
import { useInView } from "react-intersection-observer"

const results = [
  {
    metric: "289",
    description: "% average ROAS improvement",
    icon: "📈",
  },
  {
    metric: "3.2x",
    description: "average revenue growth",
    icon: "💰",
  },
  {
    metric: "52",
    description: "D2C brands scaled",
    icon: "🎯",
  },
  {
    metric: "$12M",
    description: "in sales generated for clients",
    icon: "✨",
  },
]

export function ResultsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-transparent to-emerald-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            Real Results From Our Clients
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These aren't promises. These are actual results from D2C brands we&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-700/50 rounded-2xl p-8 text-center hover:border-emerald-600/80 transition-all"
            >
              <div className="text-5xl mb-4">{result.icon}</div>
              <div className="mb-3">
                <p className="text-4xl md:text-5xl font-bold text-emerald-400">
                  {inView ? (
                    <CountUp
                      end={parseInt(result.metric)}
                      duration={2.5}
                      suffix={result.metric.includes("x") || result.metric.includes("M") ? (result.metric.includes("x") ? "x" : "M") : "%"}
                    />
                  ) : (
                    "0"
                  )}
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
