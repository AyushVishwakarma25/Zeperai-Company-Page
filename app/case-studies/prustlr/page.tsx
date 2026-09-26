"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const pdpImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiramisu%20call-lUuDsqJtnJnmxBxxzCexOPwJx39kUR.webp", alt: "Prustlr Tiramisu Espresso protein oats range", label: "PDP / Tiramisu Espresso", title: "The ritual, made craveable.", span: "md:col-span-7 md:row-span-2" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample%202-rZRR0HXkwFVdtSVI3GZzRSVXGWELis.webp", alt: "Prustlr ChocoRush Brownie protein oats pack with brownies", label: "PDP / ChocoRush Brownie", title: "Protein with a little more pleasure.", span: "md:col-span-5" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matcha%20-byfF2fsZjc8TApozUcKQizNcMLL0JV.webp", alt: "Prustlr Matcha Hazelnut protein oats pack with matcha and hazelnuts", label: "PDP / Matcha Hazelnut", title: "A calm, green start to the day.", span: "md:col-span-5" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Z2FTWjzUn71bldNHsKDaXaJF4GhOiu.webp", alt: "Prustlr Discovery Pack product story", label: "PDP - Discovery Pack", title: "Benefits that scan in a second.", span: "md:col-span-12 aspect-square" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-4Mhdsk3jqNfSbIvOGGpXCLQo1t0PG0.webp", alt: "Prustlr clean sweet monkfruit product", label: "PDP / Clean sweet", title: "A better baseline for every bowl.", span: "md:col-span-6" },
]

const aPlusImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monkfruite%20A%2B-i87IlqYJoZb8KZYASwVScPZoYMkVFG.webp", alt: "Prustlr Monkfruit A+ banner", label: "A+ / Brand story" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chocorush%20Brownie%20A%2B%203-6bjGsanpRxiW98GAyxrejry6ji5kgv.webp", alt: "Prustlr ingredients lineup showing oats, whey protein, monkfruit, milk powder, cocoa, chia, and chocolate chips", label: "A+ / Ingredient proof" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monkfruit%20A%2B2-i4m9t0nIaxog2K1JqYwigDaWymuh23.webp", alt: "Prustlr Monkfruit A+ benefits layout", label: "A+ / Benefit system" },
]

const reelSources = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Discovery%20Motion%20ad-qLV8UA6m0LLt6iGwRwiISUJC0R0Ryr.mp4", label: "Discovery motion ad" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Discovery%20Pack%20ft%20hawa%20hawa%20buy%2020-BC3Y1Vr5V2J3FYL2fuKVinYj52GAKw.mp4", label: "Discovery Pack Hawa Hawa ad" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/igexport-DcijvHWuVkG-P3tNzdsroSAf7ctCiQnMUayg5f76PH.mp4", label: "Instagram export reel" },
]

const adCreatives = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monkfruite%20ad.png-loeEcqWYpoxopPeJrQemb45FG4R1YH.jpeg", label: "Ad creative / Buy 1 Get 1" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chocorush%20Brownie%20Fav%2019201080-hWyl26kL8UwtFjwqFVlmq3jOH6ugG1.webp", label: "Ad creative / Favourite flavour" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birthday%20sale%20ad%202-jUpR2Zc76D5RAaBit8izJDe6ghdowm.webp", label: "Ad creative / Birthday sale" },
]

function SectionLabel({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy: string }) {
  return <div className="mb-10 grid gap-5 md:grid-cols-[120px_1fr_1fr] md:items-end"><p className="font-mono text-xs text-[#4452FB]">{number}</p><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#6B6B72]">{eyebrow}</p><h2 className="max-w-2xl font-poppins text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{title}</h2></div><p className="max-w-md text-sm leading-relaxed text-[#6B6B72]">{copy}</p></div>
}

export default function PrustlrCaseStudy() {
  return <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#0A0A0B]">
    <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-10"><div className="mx-auto max-w-7xl">
      <div className="mb-20"><Navbar /></div>
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Zeperai Media × Prustlr Protein Oats</p><h1 className="max-w-4xl font-poppins text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.07em]">Making protein oats feel <span className="text-[#4452FB]">unmissable.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B6B72]">A full-funnel visual system for a modern protein oats brand — from product detail pages to short-form video.</p></div><div className="relative aspect-square w-full max-w-[min(100%,560px)] justify-self-end overflow-hidden rounded-[2rem] bg-[#dbe7d6] shadow-[0_24px_80px_rgba(10,10,11,.12)]"><Image src={pdpImages[0].src} alt={pdpImages[0].alt} fill className="object-cover" priority /></div></div>
    </div></section>

    <section className="border-t border-black/[.08] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="01" eyebrow="Website PDP" title="A product page that makes the morning ritual tangible." copy="A flexible product-image system gives every flavour its own world while keeping the pack, protein promise, and benefits easy to scan."/><div className="grid auto-rows-[240px] gap-4 md:auto-rows-[280px] md:grid-cols-12">{pdpImages.map((tile) => <article key={tile.label} className={`${tile.span} group relative overflow-hidden rounded-[1.5rem] bg-[#dce8d8]`}><Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14 text-white"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/70">{tile.label}</p><h3 className="font-poppins text-xl font-semibold leading-tight">{tile.title}</h3></div></article>)}</div></div></section>

    <section className="bg-[#e9e9ec] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="02" eyebrow="Amazon A+ Content" title="A+ content that answers before the scroll does." copy="Marketplace modules turn flavour, ingredients, and benefits into a complete story — designed to build confidence without overloading the shopper."/><div className="grid gap-4">{aPlusImages.map((tile) => <article key={tile.label} className="group relative aspect-[2.5/1] overflow-hidden rounded-[1.5rem] bg-white"><Image src={tile.src} alt={tile.alt} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" /><p className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur">{tile.label}</p></article>)}</div></div></section>

    <section className="bg-[#151518] px-6 py-24 text-white md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="03" eyebrow="Ad creatives" title="Thumb-stopping creative for the feed." copy="Three 9:16 concepts built to make flavour, format, and product value land in the first frame."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{adCreatives.map((tile) => <article key={tile.label} className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-[#2b2b30]"><img src={tile.src} alt={tile.label} className="h-full w-full object-cover" /><p className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur">{tile.label}</p></article>)}</div></div></section>

    <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="04" eyebrow="Reel system" title="Ready to turn attention into action?" copy="The video system is ready for embedded reel links. Replace each placeholder with the final hosted video URL when the cuts are ready."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reelSources.map((reel) => <article key={reel.label} className="overflow-hidden rounded-[1.5rem] bg-[#101113] text-white"><div className="relative aspect-[9/16]"><video src={reel.src} controls muted playsInline className="h-full w-full object-cover" /></div></article>)}</div></div></section>

    <section className="px-6 py-20 md:px-10 md:py-24"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#4452FB] px-7 py-10 text-center text-white md:px-16 md:py-14"><p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-white/70">Want work that looks good and sells more?</p><p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/80">We created and generated over 400 pieces of content for this brand, establishing its visual foundations across product pages, marketplace content, paid ads, and social video.</p><h2 className="mx-auto max-w-3xl font-poppins text-4xl font-semibold leading-tight md:text-6xl">Hire us to make your brand impossible to ignore.</h2><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-6 py-4 text-sm font-semibold text-white">Hire us to grow your brand <ArrowUpRight className="h-4 w-4" /></Link></div></section>
    <Footer />
  </main>
}
