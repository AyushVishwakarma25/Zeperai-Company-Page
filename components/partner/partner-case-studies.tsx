import { motion } from 'framer-motion'

const caseStudies = [
  {
    brand: 'Brand A',
    result: '3x Revenue Growth',
    metric: '$100k → $300k/month',
    description: 'D2C fashion brand that needed a complete rebrand and new store launch.',
  },
  {
    brand: 'Brand B',
    result: '5x ROAS Improvement',
    metric: '$1.2 → $6 ROAS',
    description: 'E-commerce store scaling Facebook ads with better creative strategies.',
  },
  {
    brand: 'Brand C',
    result: '2x Ad Performance',
    metric: '1.8% → 4.2% CTR',
    description: 'Shopify store that needed stronger ad hooks and creative testing.',
  },
]

export function PartnerCaseStudies() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-emerald-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            Real Results
          </h2>
          <p className="text-lg text-gray-400">From brands we\'ve worked with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-700/30 rounded-2xl p-6"
            >
              <p className="text-xs text-emerald-400 font-semibold mb-2">{study.brand}</p>
              <h3 className="text-2xl font-bold text-white mb-1">{study.result}</h3>
              <p className="text-sm text-emerald-300 mb-4">{study.metric}</p>
              <p className="text-sm text-gray-300">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
