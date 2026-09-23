"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const serviceCategories = [
  { index: "01", id: "meta-ads", categoryTitle: "Meta Ads Management", description: "Campaigns built around what converts, not what looks nice in a deck.", services: ["Campaign Strategy & Setup", "Creative Testing & Iteration", "Audience Targeting", "Retargeting Funnels", "Performance Reporting", "Budget & Scaling Strategy"] },
  { index: "02", id: "shopify", categoryTitle: "Shopify Development", description: "Stores designed to hold attention and close the sale.", services: ["Full Store Build & Theme Design", "Conversion-Focused UX", "Landing Page Design", "Speed & CRO Optimization", "Product Page Design", "Store Migration"] },
  { index: "03", id: "ai-creatives", categoryTitle: "AI Ad Creatives", description: "Scroll-stopping creative, produced fast, without a production crew.", services: ["AI-Generated Product Shots", "Static Ad Creatives", "Motion Graphic Ads", "UGC-Style Ads", "Listing & Marketplace Creative", "Creative Strategy & Scripting"] },
  { index: "04", id: "video-content", categoryTitle: "Video & Content Production", description: "Reels and content built for retention, not just views.", services: ["Reels & Short-Form Editing", "Product Motion Videos", "Talking Head & UGC Videos", "Brand Promo Videos", "Podcast & Long-Form Editing", "Social Content Calendars"] },
  { index: "05", id: "brand-design", categoryTitle: "Brand Design", description: "Identity and visuals that make a brand look like it belongs at a higher price point.", services: ["Brand Identity & Logo Design", "Packaging Design", "Visual Guidelines", "Social Media Templates", "Print & Marketing Collateral", "Brand Strategy"] },
]

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]"><Navbar /><section className="px-6 pb-32 pt-36 md:pt-44"><div className="mx-auto max-w-6xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">Services</p><h1 className="max-w-3xl font-poppins text-5xl font-bold leading-[1.02] tracking-[-0.05em] md:text-8xl">Five disciplines. One growth system.</h1><div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">{serviceCategories.map((category) => <article id={category.id} key={category.id} className="mb-6 break-inside-avoid rounded-[2rem] border border-black/[0.08] bg-white p-7 shadow-[0_12px_40px_rgba(10,10,11,0.04)] md:p-9"><div className="flex items-start justify-between gap-4"><span className="font-poppins text-6xl font-bold leading-none text-[#0A0A0B]/[0.08]">{category.index}</span><span className="rounded-full bg-[#E9EBFF] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#4452FB]">ZeperAI Media</span></div><h2 className="mt-12 font-poppins text-2xl font-bold leading-tight md:text-3xl">{category.categoryTitle}</h2><p className="mt-4 leading-relaxed text-[#6B6B72]">{category.description}</p><ul className="mt-8 space-y-3 border-t border-black/[0.08] pt-6">{category.services.map((service) => <li key={service} className="flex items-start gap-3 text-sm font-medium"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4452FB]" />{service}</li>)}</ul></article>)}</div></div></section><Footer /></main>
}
