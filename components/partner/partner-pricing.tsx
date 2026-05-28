import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PartnerPricingProps {
  onCtaClick: () => void
}

const valueStack = [
  { item: 'Shopify store design', price: '$1,200' },
  { item: '10 Meta ad creatives', price: '$800' },
  { item: '5 AI UGC video ads', price: '$1,500' },
  { item: '2 animated product videos', price: '$600' },
  { item: '2 motion graphic videos', price: '$500' },
  { item: '30 AI product shoot images', price: '$900' },
  { item: '15 social posts + copy', price: '$600' },
  { item: 'Brand identity + graphics', price: '$700' },
]

const totalValue = 7300

export function PartnerPricing({ onCtaClick }: PartnerPricingProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container mx-auto max-w-5xl">
        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 mb-12"
        >
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              Your Investment
            </h2>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-3">
              Claim Your Package
            </h3>
            <p className="text-base text-gray-300">
              Everything you need to scale your D2C brand. Store, content, ads, video, everything done for you.
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-10 pb-10 border-b border-white/10">
            <div className="flex items-end gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Starting at</p>
                <p className="text-5xl font-poppins font-bold text-white">
                  $1,997
                  <span className="text-xl text-gray-400">/mo</span>
                </p>
              </div>
              <p className="text-sm text-emerald-400 font-semibold">No setup fee · Cancel anytime</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-2xl font-bold text-emerald-400">74</p>
              <p className="text-xs text-gray-400 mt-1">Deliverables/mo</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400">7</p>
              <p className="text-xs text-gray-400 mt-1">Days to launch</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400">6x</p>
              <p className="text-xs text-gray-400 mt-1">Better than agencies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400">0</p>
              <p className="text-xs text-gray-400 mt-1">Lock-in contracts</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-10">
            <h4 className="text-sm font-semibold text-white mb-4">What's Included Each Month:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Shopify store updates & optimization',
                '10 high-performing ad creatives',
                '5 UGC video ads',
                '2 product animated videos',
                '2 motion graphic videos',
                '30 AI product images',
                '15 social media posts + copy',
                'Weekly performance review',
              ].map((feature, i) => (
                <p key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {feature}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={onCtaClick}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg text-base"
          >
            Get Started Today
          </Button>
        </motion.div>

        {/* Value Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-poppins font-bold text-white mb-8 text-center">
            Value Breakdown
          </h3>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="space-y-3 mb-6">
              {valueStack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0"
                >
                  <span className="text-sm text-gray-300">{item.item}</span>
                  <span className="text-sm font-semibold text-emerald-400">{item.price}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex justify-between items-center text-base font-bold py-4 pt-6 border-t-2 border-emerald-400/30"
            >
              <span className="text-white">You can get all deliverables at just</span>
              <div className="relative">
                <span className="line-through text-gray-600" style={{ opacity: 0.2 }}>$900</span>
                <span className="text-emerald-400 text-lg ml-2">$1,997/mo</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/50 rounded-lg text-center"
            >
              <p className="text-sm text-yellow-300 font-semibold">✨ Surprise Element Unlocked</p>
              <p className="text-xs text-yellow-200/80 mt-1">Complete your profile to see exclusive bonuses worth $2,000+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
