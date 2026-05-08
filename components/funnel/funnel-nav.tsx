import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface FunnelNavProps {
  onCtaClick: () => void
}

export function FunnelNav({ onCtaClick }: FunnelNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-14 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 md:px-0">
        <div className="text-lg font-poppins font-bold text-white">Brand System</div>
        <button
          onClick={onCtaClick}
          className="flex items-center gap-1.5 px-4 md:px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium text-sm transition-all"
        >
          Book Call <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.nav>
  )
}
