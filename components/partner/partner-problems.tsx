import { motion } from 'framer-motion'

const problems = [
  {
    icon: '📉',
    title: 'Your CTR is Dropping',
    description: 'Ad hooks aren\'t strong enough. Your creatives blend in instead of standing out.',
  },
  {
    icon: '🔄',
    title: 'ROAS is Inconsistent',
    description: 'You\'re scaling slowly. Can\'t find the pattern that works. Campaigns are hard to scale.',
  },
  {
    icon: '🎨',
    title: 'Your Brand Feels Scattered',
    description: 'Listings, ads, website, content — nothing feels aligned. The brand experience is inconsistent.',
  },
  {
    icon: '⏰',
    title: 'You\'re Exhausted',
    description: 'Managing Shopify, hiring freelancers, editing videos, writing copy. Too many vendors.',
  },
  {
    icon: '💰',
    title: 'Burning Cash on Freelancers',
    description: 'Paying $50-100/hour for below-average work. No cohesion. No brand strategy.',
  },
  {
    icon: '🚀',
    title: 'Growth Has Plateaued',
    description: 'You\'ve maxed out what you can do alone. Ready to scale but don\'t know how.',
  },
]

export function PartnerProblems() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            We Know Your Biggest Problems
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            You\'re not alone. We\'ve worked with 50+ D2C brands. Here\'s what we see holding them back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-900/30 rounded-2xl p-6 hover:border-red-700/60 transition-all"
            >
              <div className="text-3xl mb-3">{problem.icon}</div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-300">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
