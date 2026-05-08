import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface FunnelHeroProps {
  onCtaClick: () => void
  onPackageClick: () => void
}

export function FunnelHero({ onCtaClick, onPackageClick }: FunnelHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 bg-gradient-to-b from-purple-950/20 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-4 py-2 rounded-full">
              Proven D2C Growth System
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold leading-tight mb-6 text-white text-balance">
            D2C Brands That Can&apos;t Seem to Scale Their Revenue...
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get a strategic audit revealing exactly why your campaigns aren't converting, your CTR is dropping, and your brand doesn't feel cohesive. Then discover the 3-step growth system we use to help brands like yours scale 3-5x faster.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all"
            >
              Get Your Free Audit →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPackageClick}
              className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all"
            >
              See What's Included
            </motion.button>
          </div>

          <div className="text-sm text-gray-400 mb-8">
            ✓ No credit card required · ✓ 30 min strategy call · ✓ Actionable recommendations
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">50+</p>
              <p className="text-xs md:text-sm text-gray-400">D2C Brands</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">3-5x</p>
              <p className="text-xs md:text-sm text-gray-400">Revenue Growth</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">$2M+</p>
              <p className="text-xs md:text-sm text-gray-400">In Sales Generated</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </div>
    </section>
  )
}
