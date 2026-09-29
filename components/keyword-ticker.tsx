"use client"

import { motion, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const keywords = [
  "Shopify Development",
  "Meta Ads Management",
  "AI Ad Creatives",
  "Content & Video Production",
  "Brand Design",
  "For Brands in India & Abroad",
]

function useElementWidth(ref: React.RefObject<HTMLSpanElement | null>) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => setWidth(ref.current?.offsetWidth ?? 0)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [ref])

  return width
}

function VelocityLine({ text, reverse = false }: { text: string; reverse?: boolean }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityBoost = useTransform(smoothVelocity, [-1000, 0, 1000], [-3, 0, 3])
  const copyRef = useRef<HTMLSpanElement>(null)
  const copyWidth = useElementWidth(copyRef)
  const direction = reverse ? -1 : 1

  useEffect(() => {
    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const delta = Math.min(now - last, 50) / 1000
      last = now
      baseX.set(baseX.get() + direction * (38 + velocityBoost.get() * direction) * delta)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [baseX, direction, velocityBoost])

  const x = useTransform(baseX, (value) => {
    if (!copyWidth) return "0px"
    const wrapped = ((value % copyWidth) + copyWidth) % copyWidth
    return `${-wrapped}px`
  })

  const copies = Array.from({ length: 5 })

  return (
    <div className="overflow-hidden py-1.5 md:py-2">
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {copies.map((_, index) => (
          <span
            key={index}
            ref={index === 0 ? copyRef : undefined}
            className="flex shrink-0 items-center gap-4 px-4 text-[clamp(1.45rem,3vw,2.65rem)] font-extrabold leading-none tracking-[-0.045em] text-[#0A0A0B] md:gap-6 md:px-7"
          >
            {text}
            <span className="inline-block h-9 w-9 rounded-full bg-[#0A0A0B] text-center text-lg leading-9 text-white md:h-10 md:w-10 md:text-xl md:leading-10">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function KeywordTicker() {
  return (
    <section className="overflow-hidden bg-[#E8E8E3] py-1 text-[#0A0A0B]" aria-label="Our capabilities">
      <VelocityLine text={keywords.slice(0, 3).join("   ·   ")} />
      <VelocityLine text={keywords.slice(3).concat(keywords.slice(0, 2)).join("   ·   ")} reverse />
    </section>
  )
}
