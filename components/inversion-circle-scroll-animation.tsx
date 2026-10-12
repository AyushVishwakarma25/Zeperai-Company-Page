"use client"

import { useEffect, useRef, useState } from "react"

const BALL_SIZE = 380

type WorkAnimationProps = {
  title?: string
  description?: string
  ctaHref?: string
}

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export default function InversionCircleScrollAnimation({
  title = "Build with intention. Ship with confidence.",
  description = "Every great product starts with a clear vision and a simple idea. From a blank canvas to something remarkable, the only thing between you and it is the work.",
  ctaHref = "/booking",
}: WorkAnimationProps) {
  const rootRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState({ phaseOne: 0, phaseTwo: 0, viewH: 800, viewW: 1200 })
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const update = () => {
      const rect = root.getBoundingClientRect()
      const viewH = window.innerHeight
      const viewW = window.innerWidth
      const distance = Math.max(1, root.offsetHeight - viewH)
      const scrollProgress = clamp(-rect.top / distance)
      setProgress({
        phaseOne: clamp(scrollProgress * 2),
        phaseTwo: clamp((scrollProgress - 0.5) * 2),
        viewH,
        viewW,
      })
    }

    const observer = new IntersectionObserver(([entry]) => setContentVisible(entry.isIntersecting), { threshold: 0.35 })
    const content = root.querySelector("[data-work-content]")
    if (content) observer.observe(content)
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const p1e = progress.phaseOne < 0.5 ? 8 * progress.phaseOne ** 4 : 1 - (-2 * progress.phaseOne + 2) ** 4 / 2
  const p2e = progress.phaseTwo ** 2
  const yOffset = (1 - p1e) * (progress.viewH / 2 + BALL_SIZE / 2)
  const coverSize = Math.max(progress.viewW, progress.viewH) * 2.8
  const ballSize = BALL_SIZE + p2e * (coverSize - BALL_SIZE)
  const clipY = progress.viewH / 2 + yOffset

  return (
    <section ref={rootRef} className="relative h-[260vh] overflow-clip bg-[#0A0A0B] text-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 rounded-full bg-[#0A0A0B] will-change-transform"
          style={{ width: ballSize, height: ballSize, transform: `translate(-50%, calc(-50% + ${yOffset}px))` }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-[#0A0A0B]">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#4452FB]">How we work</span>
          <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-7xl">We make the work move.</h2>
          <p className="mt-5 max-w-xl text-base text-black/60 md:text-lg">Strategy first. Craft always. Momentum by design.</p>
        </div>
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white"
          style={{ clipPath: `circle(${ballSize / 2}px at ${progress.viewW / 2}px ${clipY}px)` }}
        >
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#AAB1FF]">How we work</span>
          <h2 className="max-w-4xl font-poppins text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-7xl">We make the work move.</h2>
          <p className="mt-5 max-w-xl text-base text-white/60 md:text-lg">Strategy first. Craft always. Momentum by design.</p>
        </div>
      </div>
      <div
        data-work-content
        className={`relative z-30 flex min-h-screen items-center justify-center bg-white px-6 py-24 text-[#0A0A0B] transition-colors duration-1000 ${contentVisible ? "" : "bg-[#0A0A0B] text-white"}`}
      >
        <div className={`mx-auto flex max-w-3xl flex-col items-center gap-7 text-center transition-all duration-700 ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">The process</span>
          <h3 className="font-poppins text-4xl font-bold leading-[1.08] tracking-[-0.04em] md:text-6xl">{title}</h3>
          <p className="max-w-xl text-base leading-relaxed opacity-60 md:text-lg">{description}</p>
          <a href={ctaHref} className="rounded-full bg-[#4452FB] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">Start a conversation</a>
        </div>
      </div>
    </section>
  )
}
