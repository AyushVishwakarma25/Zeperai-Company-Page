"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"

const pdpImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matcha%20-byfF2fsZjc8TApozUcKQizNcMLL0JV.webp", alt: "Prustlr Matcha Hazelnut protein oats pack with matcha and hazelnuts", label: "PDP / Matcha Hazelnut", title: "A calm, green start to the day.", span: "md:col-span-7 md:row-span-2" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample%202-rZRR0HXkwFVdtSVI3GZzRSVXGWELis.webp", alt: "Prustlr ChocoRush Brownie protein oats pack with brownies", label: "PDP / ChocoRush Brownie", title: "Protein with a little more pleasure.", span: "md:col-span-5" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiramisu%20call-lUuDsqJtnJnmxBxxzCexOPwJx39kUR.webp", alt: "Prustlr Tiramisu Espresso protein oats range", label: "PDP / Tiramisu Espresso", title: "The ritual, made craveable.", span: "md:col-span-5" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Z2FTWjzUn71bldNHsKDaXaJF4GhOiu.webp", alt: "Prustlr ChocoRush Brownie product story", label: "PDP / Product story", title: "Benefits that scan in a second.", span: "md:col-span-6" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-4Mhdsk3jqNfSbIvOGGpXCLQo1t0PG0.webp", alt: "Prustlr clean sweet monkfruit product", label: "PDP / Clean sweet", title: "A better baseline for every bowl.", span: "md:col-span-6" },
]

const aPlusImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monkfruite%20A%2B-i87IlqYJoZb8KZYASwVScPZoYMkVFG.webp", alt: "Prustlr Monkfruit A+ banner", label: "A+ / Brand story" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chocorush%20Brownie%20A%2B%204-iltD1HNdylJATbUp2uYVf78Wg9hv15.webp", alt: "Prustlr ChocoRush Brownie A+ banner", label: "A+ / Ingredient proof" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monkfruit%20A%2B2-i4m9t0nIaxog2K1JqYwigDaWymuh23.webp", alt: "Prustlr Monkfruit A+ benefits layout", label: "A+ / Benefit system" },
]

const reels = [
  ["01", "The 10-second breakfast reset"],
  ["02", "What 27g protein looks like"],
  ["03", "From pouch to bowl"],
]

function SectionLabel({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy: string }) {
  return <div className="mb-10 grid gap-5 md:grid-cols-[120px_1fr_1fr] md:items-end"><p className="font-mono text-xs text-[#4452FB]">{number}</p><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#6B6B72]">{eyebrow}</p><h2 className="max-w-2xl font-poppins text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{title}</h2></div><p className="max-w-md text-sm leading-relaxed text-[#6B6B72]">{copy}</p></div>
}

export default function PrustlrCaseStudy() {
  return <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#0A0A0B]">
    <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-10"><div className="mx-auto max-w-7xl">
      <div className="mb-20 flex items-center justify-between"><Link href="/" className="font-poppins text-sm font-bold tracking-tight">ZeperAI<span className="text-[#4452FB]">.</span></Link><Link href="/booking" className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-5 py-3 text-xs font-semibold text-white">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Case study / Prustlr</p><h1 className="max-w-4xl font-poppins text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.07em]">Making protein oats feel <span className="text-[#4452FB]">unmissable.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B6B72]">A full-funnel visual system for a modern protein oats brand — from product detail pages to short-form video.</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dbe7d6] shadow-[0_24px_80px_rgba(10,10,11,.12)]"><Image src={pdpImages[0].src} alt={pdpImages[0].alt} fill className="object-cover" priority /><div className="absolute bottom-5 left-5 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur">Moodboard / 01</div></div></div>
    </div></section>

    <section className="border-t border-black/[.08] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="01" eyebrow="Website PDP" title="A product page that makes the morning ritual tangible." copy="A flexible product-image system gives every flavour its own world while keeping the pack, protein promise, and benefits easy to scan."/><div className="grid auto-rows-[240px] gap-4 md:auto-rows-[280px] md:grid-cols-12">{pdpImages.map((tile) => <article key={tile.label} className={`${tile.span} group relative overflow-hidden rounded-[1.5rem] bg-[#dce8d8]`}><Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14 text-white"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70">{tile.label}</p><h3 className="font-poppins text-xl font-semibold leading-tight">{tile.title}</h3></div></article>)}</div></div></section>

    <section className="bg-[#e9e9ec] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="02" eyebrow="Amazon A+ Content" title="A+ content that answers before the scroll does." copy="Marketplace modules turn flavour, ingredients, and benefits into a complete story — designed to build confidence without overloading the shopper."/><div className="grid gap-4">{aPlusImages.map((tile) => <article key={tile.label} className="group relative aspect-[2.5/1] overflow-hidden rounded-[1.5rem] bg-white"><Image src={tile.src} alt={tile.alt} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" /><p className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur">{tile.label}</p></article>)}</div></div></section>

    <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="03" eyebrow="Reel system" title="Short-form stories built to stop the thumb." copy="The video system is ready for embedded reel links. Replace each placeholder with the final hosted video URL when the cuts are ready."/><div className="grid gap-4 md:grid-cols-3">{reels.map(([number, title]) => <article key={number} className="overflow-hidden rounded-[1.5rem] bg-[#101113] text-white"><div className="relative aspect-[9/16]"><iframe title={title} src="https://www.youtube.com/embed/REPLACE_WITH_REEL_ID" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" /><div className="pointer-events-none absolute inset-0 flex items-center justify-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0A0A0B]"><Play className="ml-1 h-5 w-5 fill-current" /></div></div></div><div className="p-5"><p className="mb-2 font-mono text-xs text-[#a8b0ff]">{number}</p><h3 className="font-poppins text-xl font-semibold leading-tight">{title}</h3></div></article>)}</div></div></section>

    <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#4452FB] px-7 py-14 text-center text-white md:px-16 md:py-20"><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-white/70">The takeaway</p><h2 className="mx-auto max-w-3xl font-poppins text-4xl font-semibold leading-tight md:text-6xl">Every surface should make the next decision easier.</h2><Link href="/booking" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-6 py-4 text-sm font-semibold text-white">Build your system <ArrowUpRight className="h-4 w-4" /></Link></div></section>
  </main>
}
