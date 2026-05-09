import { motion } from 'framer-motion'

export function PartnerComparison() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            How We Compare
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                <th className="text-center py-4 px-4 text-emerald-400 font-bold">ZeperAI</th>
                <th className="text-center py-4 px-4 text-gray-400">Agency</th>
                <th className="text-center py-4 px-4 text-gray-400">Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Strategic Guidance', zeperai: true, agency: true, freelance: false },
                { feature: 'Store Design', zeperai: true, agency: true, freelance: false },
                { feature: 'Ad Creatives', zeperai: true, agency: true, freelance: true },
                { feature: 'Video Production', zeperai: true, agency: true, freelance: true },
                { feature: 'Social Content', zeperai: true, agency: true, freelance: true },
                { feature: 'All-In-One System', zeperai: true, agency: false, freelance: false },
                { feature: 'Dedicated Team', zeperai: true, agency: false, freelance: false },
                { feature: 'No vendor juggling', zeperai: true, agency: false, freelance: false },
                { feature: 'Fixed Price', zeperai: true, agency: false, freelance: false },
                { feature: 'Scalable', zeperai: true, agency: false, freelance: false },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                  <td className="text-center py-4 px-4">
                    {row.zeperai ? <span className="text-emerald-400 text-lg">✓</span> : <span className="text-gray-600">✕</span>}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.agency ? <span className="text-emerald-400 text-lg">✓</span> : <span className="text-gray-600">✕</span>}
                  </td>
                  <td className="text-center py-4 px-4">
                    {row.freelance ? <span className="text-emerald-400 text-lg">✓</span> : <span className="text-gray-600">✕</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
