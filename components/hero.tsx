"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        {/* Label chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
            AI-Powered Creative Agency
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-sofia text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight mb-8 text-balance"
        >
          We Build Brands
          <br />
          <span className="text-white/90">That&nbsp;</span>
          <span
            className="relative inline-block px-4"
            style={{ color: "#4452FB" }}
          >
            Actually Sell
            <span
              className="absolute inset-0 rounded-xl -z-10 opacity-15"
              style={{ background: "#4452FB" }}
            />
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          Video editing, ad creatives, Shopify websites, and design that makes
          people stop, watch, and buy.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/booking"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform"
          >
            Let&apos;s Build Creative That Converts
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
      </motion.div>
    </section>
  )
}
