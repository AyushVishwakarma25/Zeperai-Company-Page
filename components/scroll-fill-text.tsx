"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: any
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="relative mr-[0.28em] inline-block">
      {children}
    </motion.span>
  )
}

export function ScrollFillText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  })

  const words = text.split(" ")

  return (
    <p
      ref={containerRef}
      className="font-poppins text-2xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.35] text-[#0A0A0B] flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
