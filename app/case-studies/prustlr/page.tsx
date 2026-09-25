"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play, Sparkles } from "lucide-react"

const pdpTiles = [
  { label: "PDP / Hero frame", title: "Protein that looks as good as it fuels.", className: "bg-[#dce8d8]" },
  { label: "PDP / Benefit card", title: "20g protein. Zero compromise.", className: "bg-[#f2c64b]" },
  { label: "PDP / Texture story", title: "The morning ritual, redesigned.", className: "bg-[#e9d8c4]" },
  { label: "Banner / Offer", title: "Upgrade your everyday oats.", className: "bg-[#c8d6ed]" },
]

const aPlusTiles = [
  ["A+ / Brand story", "Built for the days that need more from breakfast.", "bg-[#183b2d] text-white"],
  ["A+ / Ingredient proof", "Clean inputs. Serious output.", "bg-[#f0eee5] text-[#19352a]"],
  ["A+ / Comparison", "More than oats. A better baseline.", "bg-[#d7e5d2] text-[#19352a]"],
]

const videoTiles = [
  ["01", "The 10-second breakfast reset", "bg-[#f1c64b]"],
  ["02", "What 20g protein looks like", "bg-[#d5e3d0]"],
  ["03", "From pouch to bowl", "bg-[#e6d4bf]"],
]

const blinkitTiles = [
  ["01", "Front-of-pack clarity", "bg-[#f6c844]"],
  ["02", "The two-second shelf test", "bg-[#d8e6d3]"],
  ["03", "Protein, made scannable", "bg-[#f0e5d6]"],
  ["04", "A tile that earns the tap", "bg-[#c5d5ee]"],
]

function SectionLabel({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy: string }) {
  return <div className="mb-10 grid gap-5 md:grid-cols-[120px_1fr_1fr] md:items-end"><p className="font-mono text-xs text-[#4452FB]">{number}</p><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#6B6B72]">{eyebrow}</p><h2 className="max-w-2xl font-poppins text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{title}</h2></div><p className="max-w-md text-sm leading-relaxed text-[#6B6B72]">{copy}</p></div>
}

export default function PrustlrCaseStudy() {
  return <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#0A0A0B]">
    <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-10"><div className="mx-auto max-w-7xl">
      <div className="mb-20 flex items-center justify-between"><Link href="/" className="font-poppins text-sm font-bold tracking-tight">ZeperAI<span className="text-[#4452FB]">.</span></Link><Link href="/booking" className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-5 py-3 text-xs font-semibold text-white">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Case study / Prustlr</p><h1 className="max-w-4xl font-poppins text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.07em]">Making protein oats feel <span className="text-[#4452FB]">unmissable.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B6B72]">A full-funnel visual system for a modern protein oats brand — from product detail pages to quick-commerce shelves.</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dbe7d6] shadow-[0_24px_80px_rgba(10,10,11,.12)]"><Image src="/case-studies/prustlr.jpg" alt="Prustlr protein oats case study" fill className="object-cover" priority /><div className="absolute bottom-5 left-5 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur">Moodboard / 01</div></div></div>
    </div></section>

    <section className="border-t border-black/[.08] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="01" eyebrow="Website PDP + banners" title="A product page that makes the morning ritual tangible." copy="We translated product benefits into a visual rhythm people can scan, feel, and remember — then extended it into the campaign banner system."/><div className="grid gap-4 md:grid-cols-12">{pdpTiles.map((tile, i) => <div key={tile.label} className={`${tile.className} relative min-h-64 overflow-hidden rounded-[1.5rem] p-6 ${i === 0 ? "md:col-span-7 md:min-h-[440px]" : i === 1 ? "md:col-span-5 md:min-h-[440px]" : "md:col-span-6"}`}><p className="text-xs font-semibold uppercase tracking-[.18em] opacity-60">{tile.label}</p><h3 className="absolute bottom-6 max-w-xs font-poppins text-2xl font-semibold leading-tight">{tile.title}</h3><div className="absolute right-8 top-16 h-32 w-20 rotate-12 rounded-[1.2rem] bg-white/60 shadow-xl backdrop-blur-sm" /></div>)}</div></div></section>

    <section className="bg-[#e9e9ec] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="02" eyebrow="Amazon A+ Content" title="A+ content that answers before the scroll does." copy="The marketplace story became modular: brand belief, ingredient proof, product comparison, and the small details that turn browsing into confidence."/><div className="grid gap-4 md:grid-cols-3">{aPlusTiles.map(([label, title, cls]) => <div key={label} className={`${cls} flex min-h-80 flex-col justify-between rounded-[1.5rem] p-7`}><p className="text-xs font-semibold uppercase tracking-[.18em] opacity-60">{label}</p><div><div className="mb-5 h-1 w-12 bg-[#4452FB]" /><h3 className="max-w-xs font-poppins text-2xl font-semibold leading-tight">{title}</h3></div></div>)}</div></div></section>

    <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="03" eyebrow="Video system" title="Short-form stories built to stop the thumb." copy="One visual language, multiple cuts: product texture, prep ritual, proof points, and a clear reason to try it today."/><div className="grid gap-4 md:grid-cols-3">{videoTiles.map(([number, title, cls]) => <div key={number} className={`${cls} group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] p-6`}><span className="font-mono text-xs">{number}</span><div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0A0A0B] text-white transition-transform group-hover:scale-110"><Play className="ml-1 h-5 w-5 fill-current" /></div><h3 className="absolute bottom-6 max-w-[12rem] font-poppins text-2xl font-semibold leading-tight">{title}</h3></div>)}</div></div></section>

    <section className="bg-[#19352a] px-6 py-24 text-white md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="04" eyebrow="Blinkit shelf system" title="Designed for the two-second decision." copy="Four thumb-stopping image tiles and one video tile give quick-commerce shoppers enough signal to tap, add, and move on."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{blinkitTiles.map(([number, title, cls]) => <div key={number} className={`${cls} flex min-h-72 flex-col justify-between rounded-[1.5rem] p-6 text-[#0A0A0B]`}><span className="font-mono text-xs">{number}</span><h3 className="max-w-[12rem] font-poppins text-2xl font-semibold leading-tight">{title}</h3></div>)}</div><div className="mt-4 flex min-h-72 items-end justify-between rounded-[1.5rem] bg-[#4452FB] p-7"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-white/70">05 / Video tile</p><h3 className="max-w-md font-poppins text-3xl font-semibold leading-tight">One tap. One pour. One better breakfast.</h3></div><Sparkles className="h-10 w-10 text-white/70" /></div></div></section>

    <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#4452FB] px-7 py-14 text-center text-white md:px-16 md:py-20"><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-white/70">The takeaway</p><h2 className="mx-auto max-w-3xl font-poppins text-4xl font-semibold leading-tight md:text-6xl">Every surface should make the next decision easier.</h2><Link href="/booking" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-6 py-4 text-sm font-semibold text-white">Build your system <ArrowUpRight className="h-4 w-4" /></Link></div></section>
  </main>
}
