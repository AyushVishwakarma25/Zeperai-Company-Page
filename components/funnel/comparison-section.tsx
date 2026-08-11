import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonData = [
  { criteria: "Creative Strategy", zeperai: true, others: false },
  { criteria: "Fast Turnaround (7-14 days)", zeperai: true, others: false },
  { criteria: "Ongoing Optimization", zeperai: true, others: false },
  { criteria: "D2C Specialization", zeperai: true, others: false },
  { criteria: "Dedicated Partner", zeperai: true, others: false },
  { criteria: "Ad Performance Tracking", zeperai: true, others: false },
  { criteria: "Generic Templates", zeperai: false, others: true },
  { criteria: "Unclear Results", zeperai: false, others: true },
  { criteria: "Long Project Timelines", zeperai: false, others: true },
]

export function ComparisonSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            ZeperAI vs. Traditional Agencies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Why D2C brands choose us over freelancers and traditional agencies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-poppins font-bold text-white">What You Need</th>
                  <th className="text-center p-6 font-poppins font-bold text-emerald-400">ZeperAI</th>
                  <th className="text-center p-6 font-poppins font-bold text-gray-400">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                      i % 2 === 0 ? "bg-transparent" : "bg-white/2"
                    }`}
                  >
                    <td className="p-6 text-white text-sm md:text-base">{row.criteria}</td>
                    <td className="p-6 text-center">
                      {row.zeperai ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.others ? (
                        <Check className="w-5 h-5 text-gray-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
