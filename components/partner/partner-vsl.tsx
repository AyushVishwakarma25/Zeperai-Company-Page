'use client'

import { motion } from 'framer-motion'

export function PartnerVsl() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">
            See How We Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch our Video Sales Letter to understand exactly how we help D2C brands scale
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden aspect-video"
        >
          <iframe
            src="https://www.loom.com/embed/YOUR_LOOM_VIDEO_ID"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
            title="ZeperAI VSL - Video Sales Letter"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Replace <code className="bg-white/10 px-2 py-1 rounded text-emerald-400">YOUR_LOOM_VIDEO_ID</code> with your actual Loom video ID
          </p>
        </motion.div>
      </div>
    </section>
  )
}
