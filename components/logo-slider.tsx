"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { id: 1, src: "/logo-1.png", alt: "Client Logo 1", isImage: true },
  { id: 2, src: "/logo-2.png", alt: "UTPERL", isImage: true },
  { id: 3, src: "/logo-3.svg", alt: "Prustlr", isImage: true },
]

export function LogoSlider() {
  const duplicatedLogos = [...logos, ...logos, ...logos]

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
            animate={{ x: ["0%", "-33.333%"] }}
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
                className="min-w-max flex items-center justify-center px-8 py-4 rounded-2xl glass bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-24 flex items-center justify-center relative">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter brightness-95 group-hover:brightness-110 transition-all"
                    style={{ height: "60px" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
