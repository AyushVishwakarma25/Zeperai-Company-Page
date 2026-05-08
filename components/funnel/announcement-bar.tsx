import { motion } from "framer-motion"
import Image from "next/image"

export function AnnouncementBar() {
  const spots = ["5 D2C brands", "Limited spots", "Book now", "5 D2C brands", "Limited spots", "Book now"]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border-b border-emerald-700/50 backdrop-blur-sm py-2 px-4 md:py-3"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo-zeperai.png"
            alt="ZeperAI"
            width={32}
            height={32}
            className="h-6 w-auto md:h-7"
          />
        </div>

        {/* Ticker - only show on md+ */}
        <div className="hidden md:flex items-center justify-center flex-1 overflow-hidden">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap text-sm text-emerald-100"
          >
            {spots.map((spot, i) => (
              <span key={i} className="font-semibold">
                {spot === "5 D2C brands" ? "🎯 " : "⚡ "}
                {spot}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Mobile text - show on mobile */}
        <p className="md:hidden text-xs text-emerald-100 font-semibold flex-1">
          <span>🎯 Limited spots available</span>
        </p>
      </div>
    </motion.div>
  )
}
