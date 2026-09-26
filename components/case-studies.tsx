"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface CaseStudy {
  index: string
  name: string
  headline: string
  body: string
  tags: string[]
  image: string
  href?: string
}

const caseStudies: CaseStudy[] = [
  {
    index: "01 / 04",
    name: "Prustlr — Protein Oats",
    headline: "Building the brand, creatives, and digital experience behind Prustlr.",
    body: "Brand identity, packaging, a rebuilt Shopify store, product content, and ad creatives — designed end to end so every touchpoint sold the same story.",
    tags: ["Product Photography", "Amazon A+", "Ad Creatives", "200+ assets"],
    image: "/case-studies/prustlr.jpg",
    href: "/case-studies/prustlr",
  },
  {
    index: "02 / 04",
    name: "Varan Jewellers — Gold & Silver",
    headline: "Bringing a jewellery brand's craft online.",
    body: "A Shopify store built to carry the weight of a premium product, paired with campaign creative and performance-driven content.",
    tags: ["Shopify", "Campaign Creative", "Product Content"],
    image: "/case-studies/varan.jpg",
  },
  {
    index: "03 / 04",
    name: "More work in progress",
    headline: "Websites, brands, and campaigns built to move.",
    body: "A growing library of work for brands that need sharper positioning and creative that earns attention.",
    tags: ["Website", "Brand", "Performance Creative"],
    image: "/case-studies/prustlr.jpg",
  },
]

function WorkCard({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [-32, 32])

  return (
    <article ref={ref} className="group border-b border-black/10 pb-12 pt-2 first:pt-0">
      <Link href={study.href ?? "#"} className="block" aria-label={`View case study: ${study.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eaeaee]">
          <motion.img src={study.image} alt={study.name} style={{ y }} className="absolute -top-[8%] h-[116%] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-20 text-white">
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-white/70">{study.index}</span>
            <h3 className="mt-2 font-poppins text-xl font-semibold">{study.name}</h3>
          </div>
        </div>
      </Link>
      <div className="pt-5">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/65">{tag}</span>)}
        </div>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6B6B72]">{study.body}</p>
        {study.href && <Link href={study.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0B] hover:text-[#4452FB]">View Case Study <span aria-hidden="true">→</span></Link>}
      </div>
    </article>
  )
}

export function CaseStudies() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-[minmax(260px,.78fr)_minmax(0,1.22fr)] lg:gap-20">
      <aside className="lg:sticky lg:top-28">
        <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#4452FB]">Selected Work</span>
        <h2 className="mt-5 max-w-sm font-poppins text-4xl font-bold leading-[1.05] md:text-5xl">Work that had a job to do.</h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-[#6B6B72]">We don't create pretty visuals just to fill a portfolio. We build websites, campaigns, product content, and creative systems around what the brand actually needs.</p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-[#6B6B72]">01 / 04 — Selected Projects</p>
        <Link href="/case-studies/prustlr" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4452FB]">View Case Study <span aria-hidden="true">→</span></Link>
      </aside>
      <div className="space-y-12">{caseStudies.map((study) => <WorkCard key={study.index} study={study} />)}<Link href="/case-studies/prustlr" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0B] hover:text-[#4452FB]">See what went into the work <span aria-hidden="true">→</span></Link></div>
    </div>
  )
}

export { caseStudies }
