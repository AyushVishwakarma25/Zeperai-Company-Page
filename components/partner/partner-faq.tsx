import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to get started?',
    a: 'You can kickoff within 1-2 days. Deliverables start arriving in week 1.',
  },
  {
    q: 'What if I don\'t like the creative direction?',
    a: 'We do 2 rounds of revisions included. We collaborate closely to ensure everything aligns with your vision.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Month-to-month contract with no lock-in. Cancel anytime, but most clients stay for 6+ months.',
  },
  {
    q: 'Is this only for Shopify stores?',
    a: 'We specialize in Shopify, but can work with other platforms like WooCommerce or custom solutions.',
  },
  {
    q: 'What if my brand is brand new?',
    a: 'Perfect. We start from scratch with brand strategy, store design, and launch everything together.',
  },
  {
    q: 'How do we communicate?',
    a: 'Dedicated Notion workspace, weekly performance calls, and direct access to your creative lead.',
  },
]

export function PartnerFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/10 transition-colors text-left"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 text-gray-300 border-t border-white/5"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
