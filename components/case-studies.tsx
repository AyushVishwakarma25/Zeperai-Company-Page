"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface CaseStudy {
  index: string
  name: string
  headline: string
  body: string
  tags: string[]
  image: string
  imagePosition: "left" | "right"
}

const caseStudies: CaseStudy[] = [
  {
    index: "01",
    name: "Prustlr — Protein Oats",
    headline: "Turning a protein oats brand into a full D2C system",
    body: "Brand identity, packaging design, a rebuilt Shopify store, and ad creatives — designed and executed end to end so every touchpoint sold the same story.",
    tags: ["Brand Identity", "Packaging Design", "Shopify Development", "Ad Creatives"],
    image: "/case-studies/prustlr.jpg",
    imagePosition: "right",
  },
  {
    index: "02",
    name: "Varan Jewellers — Gold & Silver",
    headline: "Bringing a jewellery brand's craft online",
    body: "A Shopify store built to carry the weight of a premium product, paired with AI-generated and performance-driven ad creatives to drive qualified traffic.",
    tags: ["Shopify Website", "Ad Creatives", "AI Ads"],
    image: "/case-studies/varan.jpg",
    imagePosition: "left",
  },
]

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  const imageBlock = (
    <motion.div
      className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-[#EAEAEE] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      <motion.img
        src={study.image}
        alt={study.name}
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="hidden md:flex absolute w-28 h-28 rounded-full bg-white/95 items-center justify-center text-[13px] font-semibold text-[#0A0A0B] pointer-events-none"
          style={{ left: cursor.x - 56, top: cursor.y - 56 }}
        >
          View Case Study
        </motion.div>
      )}
    </motion.div>
  )

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="text-xs font-semibold tracking-widest text-[#4452FB] uppercase mb-4">
        Selected Work / {study.index}
      </span>
      <h3 className="font-poppins text-3xl md:text-[2.5rem] font-bold leading-[1.1] text-[#0A0A0B] mb-5 text-balance">
        {study.headline}
      </h3>
      <p className="text-[#6B6B72] text-base md:text-lg leading-relaxed mb-6 max-w-md">
        {study.body}
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        {study.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1.5 bg-white border border-black/[0.08] rounded-full text-[#0A0A0B]/70"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold text-[#0A0A0B]">{study.name}</p>
    </div>
  )

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-10 md:py-16">
      {study.imagePosition === "left" ? (
        <>
          <div className="order-2 md:order-1">{imageBlock}</div>
          <div className="order-1 md:order-2">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-1">{textBlock}</div>
          <div className="order-2">{imageBlock}</div>
        </>
      )}
    </div>
  )
}

export function CaseStudies() {
  return (
    <>
      {caseStudies.map((study) => (
        <motion.div
          key={study.index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CaseStudyBlock study={study} />
        </motion.div>
      ))}
    </>
  )
}
