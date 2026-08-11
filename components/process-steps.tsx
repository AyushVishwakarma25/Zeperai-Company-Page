"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const defaultSteps = [
  {
    step: "Share Your Brand",
    description: "You tell us the product, the goal, and what's not working right now.",
  },
  {
    step: "Audit & Strategy",
    description: "We look at what's underperforming — creative, store, or offer — and map what needs to change.",
  },
  {
    step: "Build",
    description: "We design and produce the creative, store, or campaign assets your brand needs.",
  },
  {
    step: "Launch & Iterate",
    description: "Assets go live. We track what's working and refine from there.",
  },
]

interface ProcessStepsProps {
  steps?: { step: string; description: string }[]
}

export function ProcessSteps({ steps = defaultSteps }: ProcessStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-black/[0.08]" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[15px] top-2 w-px bg-[#4452FB]"
      />

      <div className="flex flex-col gap-10 md:gap-14">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-0.5 w-[31px] h-[31px] rounded-full bg-[#F5F5F7] border border-black/[0.1] flex items-center justify-center text-[11px] font-bold text-[#0A0A0B]">
              {index + 1}
            </div>
            <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#0A0A0B] mb-1.5">
              {item.step}
            </h3>
            <p className="text-[#6B6B72] text-sm md:text-base leading-relaxed max-w-md">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
