"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react"

export interface BrandItem {
  id: string
  name: string
  category: string
  deliverables: string[]
  description: string
  logo: string
  fallbackUrl: string
  aspectRatio: string
  href?: string
  highlights?: string
}

export const brandsList: BrandItem[] = [
  {
    id: "prustlr",
    name: "Prustlr",
    category: "D2C Nutrition & Protein Oats",
    deliverables: ["Brand Identity", "Packaging Design", "Shopify Rebuild", "200+ Ad Creatives"],
    description:
      "End-to-end creative ecosystem — brand identity, retail packaging, high-converting Shopify store, and high-retention performance ad creatives.",
    logo: "/brands/prustlr.png",
    fallbackUrl:
      "https://yabssxvevkezrhkmnuce.supabase.co/storage/v1/object/public/Assets/Brands%20Logo/Zeperai%20Media%20X%20Prustlr%20Protein%20Oats.png",
    aspectRatio: "max-h-12 max-w-[200px]",
    href: "/case-studies/prustlr",
    highlights: "Featured Case Study",
  },
  {
    id: "fast-diagnostics",
    name: "Fast Diagnostics",
    category: "Healthcare & Clinical Diagnostics",
    deliverables: ["Performance Creatives", "Lead Acquisition", "Brand Communication"],
    description:
      "Visual communication architecture and performance creative campaigns crafted to instill clinical trust and accelerate patient appointments.",
    logo: "/brands/fast-diagnostics.png",
    fallbackUrl:
      "https://yabssxvevkezrhkmnuce.supabase.co/storage/v1/object/public/Assets/Brands%20Logo/ZeperAI%20Media%20X%20Fast%20Diagnostics.png",
    aspectRatio: "max-h-14 max-w-[180px]",
    highlights: "Diagnostic Healthcare",
  },
  {
    id: "varan-jewellers",
    name: "Varan Jewellers",
    category: "Fine Gold & Silver Jewellery",
    deliverables: ["Shopify Development", "Campaign Creatives", "High-Ticket Content"],
    description:
      "Translating traditional jewelry craftsmanship into an immersive, premium online shopping experience paired with high-ticket acquisition ads.",
    logo: "/brands/varan-jewellers.png",
    fallbackUrl:
      "https://yabssxvevkezrhkmnuce.supabase.co/storage/v1/object/public/Assets/Brands%20Logo/ZeperAI%20Media%20X%20Varan%20Jewellers.jpeg",
    aspectRatio: "max-h-12 max-w-[170px]",
    highlights: "Luxury E-Commerce",
  },
]

export function BrandsSection({
  className = "",
  showDetails = true,
}: {
  className?: string
  showDetails?: boolean
}) {
  return (
    <section className={`py-24 md:py-32 px-6 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 max-w-2xl"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Brands We Worked With
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold leading-[1.1] text-[#0A0A0B] mb-5">
            Trusted by founders who refuse to blend in.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B72] leading-relaxed">
            From high-growth D2C challenger brands to luxury jewelers and diagnostics providers —
            we build the assets, websites, and campaigns that drive measurable growth.
          </p>
        </motion.div>

        {/* Detailed Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {brandsList.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-3xl border border-black/[0.07] p-7 lg:p-8 hover:border-[#4452FB]/35 hover:shadow-[0_16px_40px_rgba(68,82,251,0.08)] transition-all duration-300"
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5F5F7] text-[#0A0A0B]/70 border border-black/[0.05]">
                  {brand.highlights}
                </span>
                {brand.href && (
                  <span className="text-xs font-medium text-[#4452FB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-0.5">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              {/* Logo Presentation Showcase */}
              <div className="h-32 rounded-2xl bg-[#F8F8FA] border border-black/[0.04] flex items-center justify-center p-6 mb-7 group-hover:bg-white group-hover:border-black/[0.08] transition-colors">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className={`${brand.aspectRatio} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                  loading="lazy"
                />
              </div>

              {/* Brand Meta & Info */}
              <div className="flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="font-poppins text-xl font-bold text-[#0A0A0B] mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-medium text-[#4452FB]">{brand.category}</p>
                </div>

                <p className="text-[#6B6B72] text-sm leading-relaxed mb-6 flex-1">
                  {brand.description}
                </p>

                {/* Deliverables Tags */}
                <div className="pt-4 border-t border-black/[0.06] space-y-2">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#0A0A0B]/40">
                    Scope of Work
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F5F5F7] text-[#0A0A0B]/80"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#4452FB]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Action Link */}
                {brand.href && (
                  <div className="mt-6 pt-2">
                    <Link
                      href={brand.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A0A0B] group-hover:text-[#4452FB] transition-colors"
                    >
                      View Full Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
