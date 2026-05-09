import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface PartnerHeroProps {
  onCtaClick: () => void
}

export function PartnerHero({ onCtaClick }: PartnerHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-10 bg-gradient-to-b from-purple-950/20 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-4 py-2 rounded-full">
              D2C Growth Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6 text-white text-balance">
            Your AI-Powered Creative Partner for D2C Growth
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            One system. Store. Content. Ads. Video. Everything you need to scale from $0 to $100k+/month — all done for you by our AI-native team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              onClick={onCtaClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 justify-center"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg"
            >
              See Our Work
            </Button>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            ✓ Start at $1,997/mo · ✓ Launch in 7 days · ✓ No lock-in
          </p>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">50+</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">D2C Brands Scaled</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">3-5x</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Revenue Growth</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">$50M+</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Generated in Sales</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
