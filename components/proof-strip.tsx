"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, animate } from "framer-motion"

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Pieces of content shipped and live" },
  { value: 6, suffix: " mo", label: "Average client retainer length" },
  { value: 100, suffix: "%", label: "Of clients still with us since day one" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function ProofStrip() {
  return (
    <section className="px-4 sm:px-6 -mt-6 sm:-mt-10 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_30px_rgba(10,10,11,0.05)]"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-7 sm:py-8">
              <div className="font-poppins text-3xl sm:text-4xl font-bold text-[#0A0A0B] tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs sm:text-[13px] text-[#6B6B72] max-w-[180px] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
