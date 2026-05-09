import { motion } from 'framer-motion'

export function PartnerWho() {
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
            This Is For You If...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-emerald-400 mb-6">You're a Good Fit</h3>
            {[
              'D2C brand doing $0-100k+/month',
              'Want complete creative execution',
              'Need Shopify design + content + ads',
              'Ready to invest $2k+/month',
              'Want consistency and brand alignment',
              'Tired of managing multiple freelancers',
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-emerald-400">✓</span> {item}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-red-400 mb-6">Not the Right Fit</h3>
            {[
              'Need someone for one-off projects',
              'Want cheap, low-quality designs',
              'Not committed to scaling',
              'Need a 9-to-5 employee',
              'Want production without strategy',
              'Can\'t commit to minimum contract',
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-red-400">✕</span> {item}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
