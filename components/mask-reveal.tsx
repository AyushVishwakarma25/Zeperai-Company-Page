"use client"

import { motion } from "framer-motion"

export function MaskReveal({
  lines,
  className,
  delayStart = 0,
}: {
  lines: string[]
  className?: string
  delayStart?: number
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              delay: delayStart + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
