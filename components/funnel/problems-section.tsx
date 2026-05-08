import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

const problems = [
  {
    title: "Your Ads Aren't Converting",
    description: "Your CTR is dropping, ROAS is inconsistent, and campaigns are hard to scale because your creative doesn't have strong enough hooks.",
    icon: "📉",
  },
  {
    title: "Your Brand Feels Scattered",
    description: "Your listings, ads, website, and social media don't feel aligned. Customers don't know what you stand for, so they scroll past.",
    icon: "🔀",
  },
  {
    title: "You're Wasting Ad Budget",
    description: "Every month you're throwing money at ads that don't pull their weight. You need creative strategy, not just more creative.",
    icon: "💸",
  },
  {
    title: "Your Product Visuals Are Generic",
    description: "Product images and Reels don't tell a story that makes people stop and buy. They look like everyone else in your space.",
    icon: "📸",
  },
  {
    title: "You Don't Have a Shopify Strategy",
    description: "Your Shopify store exists, but it doesn't convert. No proper funnel, no brand voice, no strategy beyond 'sell the product.'",
    icon: "🛒",
  },
  {
    title: "You're Managing Everything Alone",
    description: "You're juggling creative briefs, managing designers, editing videos. You need a partner who gets D2C and can execute fast.",
    icon: "😰",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent to-red-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-3 md:mb-4 text-white">
            Here&apos;s The Problem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
            We&apos;ve worked with 50+ D2C brands. These are the patterns we see holding them back from scaling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-red-950/20 to-red-900/10 border-2 border-red-900/50 hover:border-red-700/80 rounded-2xl p-5 md:p-6 transition-all hover:shadow-lg hover:shadow-red-950/50"
            >
              <div className="text-3xl md:text-4xl mb-3">{problem.icon}</div>
              <h3 className="text-base md:text-lg font-poppins font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{problem.description}</p>
              <div className="absolute top-0 right-0 w-1 h-8 bg-gradient-to-b from-red-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
