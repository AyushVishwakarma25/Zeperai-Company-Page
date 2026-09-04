"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { motion } from "framer-motion"
import { ArrowUpRight, Wand2, ImageIcon, ShoppingBag, Palette } from "lucide-react"

export default function ToolsPage() {
  const capabilities = [
    { title: "Product & Fashion Shots", description: "Studio-quality product and model photography generated from a single reference image.", Icon: ImageIcon },
    { title: "Ad & Marketing Creative", description: "On-brand static and motion ad creatives, built from ready-to-use templates.", Icon: Wand2 },
    { title: "E-commerce Catalog Tools", description: "Batch generation for product catalogs, marketplace listings, and Shopify stores.", Icon: ShoppingBag },
    { title: "Brand-Consistent Output", description: "Every generation stays on-brand — same identity, same quality, every time.", Icon: Palette },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-5"
          >
            Tools
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["The platform behind", "the studio."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
          >
            ZeperAI Studio is our own AI creative platform — a credit-based tool that generates on-brand product shots, ad creatives, and marketing visuals in minutes. It's the same engine we use to move fast on client work.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-black/[0.06] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F5F5F7] text-[#4452FB] flex-shrink-0">
                    <cap.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[#0A0A0B]">{cap.title}</h3>
                    <p className="text-sm text-[#6B6B72] leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-24 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative container mx-auto max-w-4xl bg-[#0A0A0B] rounded-3xl overflow-hidden text-center px-6 py-16 md:py-20"
        >
          <p className="relative text-white/60 text-sm sm:text-base mb-4">Try it yourself</p>
          <h2 className="relative font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.15] text-balance">
            Explore ZeperAI Studio, live at zeperai.in
          </h2>
          <a
            href="https://zeperai.in"
            target="_blank"
            rel="noopener"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0A0B] rounded-full font-bold text-base hover:scale-105 transition-transform"
          >
            Visit ZeperAI Studio <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
