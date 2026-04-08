"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Airbnb", color: "bg-red-500/10" },
  { name: "Figma", color: "bg-purple-500/10" },
  { name: "Stripe", color: "bg-blue-500/10" },
  { name: "Notion", color: "bg-gray-500/10" },
  { name: "Slack", color: "bg-green-500/10" },
  { name: "GitHub", color: "bg-orange-500/10" },
  { name: "Linear", color: "bg-cyan-500/10" },
  { name: "Vercel", color: "bg-black" },
]

export function LogoSlider() {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Trusted by Leading Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            We&apos;ve partnered with innovative companies to elevate their digital presence
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            onHoverStart={() => {
              // Pause animation on hover (handled by parent)
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className={`min-w-max flex items-center justify-center px-8 py-4 rounded-2xl glass ${logo.color} hover:bg-white/10 transition-all group cursor-pointer`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
