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
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.85,
                delay: delayStart + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    </div>
  )
}
