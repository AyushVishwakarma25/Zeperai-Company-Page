"use client"

import { motion } from "framer-motion"
import { MaskReveal } from "@/components/mask-reveal"

interface BlogHeroProps {
  eyebrow: string
  lines: string[]
  description: string
}

export function BlogHero({ eyebrow, lines, description }: BlogHeroProps) {
  return (
    <section className="pt-40 pb-16 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-5"
        >
          {eyebrow}
        </motion.span>
        <MaskReveal
          delayStart={0.1}
          className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
          lines={lines}
        />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
