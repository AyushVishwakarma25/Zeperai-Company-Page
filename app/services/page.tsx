"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { ProcessSteps } from "@/components/process-steps"
import { ServicesMenu } from "@/components/ui/navbar-menu"
import { motion } from "framer-motion"
import { Check, ArrowUpRight } from 'lucide-react'
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      index: "01",
      categoryTitle: "Meta Ads Management",
      description: "Campaigns built around what converts, not what looks nice in a deck.",
      services: [
        "Campaign Strategy & Setup",
        "Creative Testing & Iteration",
        "Audience Targeting",
        "Retargeting Funnels",
        "Performance Reporting",
        "Budget & Scaling Strategy",
      ],
    },
    {
      index: "02",
      categoryTitle: "Shopify Development",
      description: "Stores designed to hold attention and close the sale.",
      services: [
        "Full Store Build & Theme Design",
        "Conversion-Focused UX",
        "Landing Page Design",
        "Speed & CRO Optimization",
        "Product Page Design",
        "Store Migration",
      ],
    },
    {
      index: "03",
      categoryTitle: "AI Ad Creatives",
      description: "Scroll-stopping creative, produced fast, without a production crew.",
      services: [
        "AI-Generated Product Shots",
        "Static Ad Creatives",
        "Motion Graphic Ads",
        "UGC-Style Ads",
        "Listing & Marketplace Creative",
        "Creative Strategy & Scripting",
      ],
    },
    {
      index: "04",
      categoryTitle: "Video & Content Production",
      description: "Reels and content built for retention, not just views.",
      services: [
        "Reels & Short-Form Editing",
        "Product Motion Videos",
        "Talking Head & UGC Videos",
        "Brand Promo Videos",
        "Podcast & Long-Form Editing",
        "Social Content Calendars",
      ],
    },
    {
      index: "05",
      categoryTitle: "Brand Design",
      description: "Identity and visuals that make a brand look like it belongs at a higher price point.",
      services: [
        "Brand Identity & Logo Design",
        "Packaging Design",
        "Visual Guidelines",
        "Social Media Templates",
        "Print & Marketing Collateral",
        "Brand Strategy",
      ],
    },
  ]

  const process = [
    { step: "Discovery & Strategy", description: "We dive into your brand, audience, and goals to create a strategic foundation." },
    { step: "Creative Development", description: "Our team designs and produces solutions that balance aesthetics with performance." },
    { step: "Optimization & Testing", description: "Data-driven refinements ensure maximum performance and ROI." },
    { step: "Launch & Support", description: "We don't just deliver — we support and optimize continuously." },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-5"
          >
            Services
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["Everything your brand", "needs to sell online."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
          >
            One studio, five disciplines — ads, stores, creative, content, and brand — working from the same playbook.
          </motion.p>
        </div>
      </section>

      {/* Interactive service navigation */}
      <section className="px-6 pb-16" aria-label="Explore services">
        <div className="container mx-auto max-w-5xl">
          <ServicesMenu items={serviceCategories.map((category) => ({ title: category.categoryTitle, description: category.description }))} />
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6">
        <div className="container mx-auto max-w-5xl divide-y divide-black/[0.08] border-t border-black/[0.08]">
          {serviceCategories.map((category) => (
            <div key={category.index} className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-8 md:gap-16 py-14 md:py-20">
              <div className="md:sticky md:top-32 self-start h-fit">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-poppins text-6xl md:text-7xl font-bold text-[#0A0A0B]/[0.08] block leading-none mb-4"
                >
                  {category.index}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-poppins text-2xl md:text-3xl font-bold leading-tight mb-3"
                >
                  {category.categoryTitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="text-sm text-[#6B6B72] leading-relaxed max-w-[220px]"
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: serviceIndex * 0.04, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/[0.06] hover:border-[#4452FB]/40 transition-colors"
                  >
                    <Check className="w-4 h-4 text-[#4452FB] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#0A0A0B]">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-36 px-6 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold">A process built to move fast without breaking the brand</h2>
          </motion.div>

          <ProcessSteps steps={process} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
              Let&apos;s build something that sells
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B72] mb-10">
              Schedule a discovery call and let&apos;s talk about which of these your brand needs first.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#0A0A0B] text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform"
            >
              Schedule a Call <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
