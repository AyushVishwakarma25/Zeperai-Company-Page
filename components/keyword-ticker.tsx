"use client"

import { motion } from "framer-motion"

const keywords = [
  "AI Ads",
  "Brand Design",
  "Conversion Magic",
  "Shopify Websites",
  "Product Motion",
  "UGC Stories",
  "Reels Editing",
  "Marketplace Creative",
  "ROAS Focused",
  "High CTR",
  "Platform Native",
  "Revenue Driven"
]

export function KeywordTicker() {
  const duplicatedKeywords = [...keywords, ...keywords]

  return (
    <section className="py-12 px-6 relative overflow-hidden bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedKeywords.map((keyword, index) => (
          <motion.div
            key={index}
            className="min-w-max text-white/70 font-medium text-sm md:text-base whitespace-nowrap hover:text-white transition-colors flex items-center gap-3"
          >
            <span>{keyword}</span>
            <span className="text-blue-400">•</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
