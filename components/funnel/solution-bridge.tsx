import { motion } from "framer-motion"

export function SolutionBridge() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-black/60 border border-white/10 rounded-2xl p-12 max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-poppins font-bold text-white leading-relaxed">
                What if you had a complete creative system that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  aligned your brand, improved CTR, and increased ROAS
                </span>
                —all without hiring an in-house team?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
