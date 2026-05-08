import { motion } from "framer-motion"

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border-b border-emerald-700/50 backdrop-blur-sm py-3 px-4"
    >
      <div className="container mx-auto max-w-4xl flex items-center justify-center gap-2 text-sm md:text-base text-emerald-50">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg"
        >
          🎯
        </motion.span>
        <p>
          <span className="font-semibold">Limited Spots Available:</span> Only 5 D2C brands per month get accepted into our growth system.{" "}
          <span className="text-emerald-200">Book your free audit call today.</span>
        </p>
      </div>
    </motion.div>
  )
}
