import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Week 1: Discovery & Setup',
    description: 'We dive deep into your brand, competitors, and goals. You get a custom strategy roadmap.',
    points: [
      'Brand audit & strategy session',
      'Competitor analysis',
      'Content calendar framework',
      'Store optimization plan',
    ],
  },
  {
    title: 'Week 2-4: Execution & Launch',
    description: 'We design your Shopify store, create 20+ ad creatives, produce videos, and set everything up.',
    points: [
      'Shopify store design/redesign',
      '10 high-performing Meta ad creatives',
      '5 AI UGC video ads',
      '2 product videos + motion graphics',
      '30 AI product images',
      '15 social media posts',
    ],
  },
  {
    title: 'Week 5+: Optimization & Scale',
    description: 'Everything goes live. We monitor performance, optimize for ROAS, and iterate for growth.',
    points: [
      'Live campaign monitoring',
      'Weekly performance analysis',
      'Monthly optimization reports',
      'Continuous creative refresh',
      'Dedicated Notion workspace',
    ],
  },
]

export function PartnerHowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven system that gets your brand live and scaling in just 4 weeks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 h-full">
                <div className="text-sm font-semibold text-emerald-400 mb-3">Step {i + 1}</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-300 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {i < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="text-3xl text-gray-700">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
