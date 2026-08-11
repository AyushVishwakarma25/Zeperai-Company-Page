"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

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


  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Service card grid */}
      {/* Service Categories */}
      <section className="px-6 pb-32">
        <div className="container mx-auto max-w-6xl columns-1 md:columns-2 gap-8 [column-fill:balance]">
          {serviceCategories.map((category) => (
            <div key={category.index} className="mb-8 break-inside-avoid rounded-3xl bg-white border border-black/[0.06] p-7 md:p-9 shadow-[0_12px_40px_rgba(10,10,11,0.05)]">
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

      <Footer />
    </main>
  )
}
