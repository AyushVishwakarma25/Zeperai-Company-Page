"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KeywordTicker } from "@/components/keyword-ticker"
import { ProofStrip } from "@/components/proof-strip"
import { CaseStudies } from "@/components/case-studies"
import { ScrollFillText } from "@/components/scroll-fill-text"
import { MaskReveal } from "@/components/mask-reveal"
import { ProcessSteps } from "@/components/process-steps"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, ArrowUpRight, Megaphone, ShoppingBag, Sparkles, Clapperboard, PenTool } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const services = [
    { title: "Meta Ads Management", description: "Campaigns built around what converts, not what looks nice in a deck.", Icon: Megaphone },
    { title: "Shopify Development", description: "Stores designed to hold attention and close the sale.", Icon: ShoppingBag },
    { title: "AI Ad Creatives", description: "Scroll-stopping creative, produced fast, without a production crew.", Icon: Sparkles },
    { title: "Video & Content Production", description: "Reels and content built for retention, not just views.", Icon: Clapperboard },
    { title: "Brand Design", description: "Identity and visuals that make a brand look like it belongs at a higher price point.", Icon: PenTool },
  ]

  const problems = [
    { title: "Ads that don't convert", description: "Your ads get impressions, not sales. The creative isn't built around what actually makes people buy." },
    { title: "A store that looks amateur", description: "Traffic lands, then leaves. A Shopify store built on templates can't hold trust the way a designed one can." },
    { title: "Content that blends in", description: "Reels and posts that look fine, but say nothing different from every other brand in your category." },
    { title: "No one owning the whole picture", description: "A freelancer for ads, another for design, another for the store — and nobody making sure it all sells together." },
  ]

  const faqs = [
    { question: "Do you work with brands outside India?", answer: "Yes. We work with brands in India and abroad, tailoring the creative to the platform, market, and audience." },
    { question: "Do you only run ads, or do you build the store too?", answer: "Both. We handle Shopify development, ad creatives, and campaign management — either as a full package or standalone." },
    { question: "How fast can you turn around creative?", answer: "Most ad creative sets are delivered within days, not weeks — we use AI-assisted production to move faster without cutting quality." },
    { question: "What if I already have a Shopify store?", answer: "We can redesign specific sections, audit conversion issues, or take over the full build — whatever the store needs." },
    { question: "How do we start?", answer: "Book a call. We'll look at your brand and tell you honestly where the biggest opportunity is." },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <MaskReveal
            delayStart={0.15}
            className="font-poppins text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.04] tracking-tight text-[#0A0A0B] mb-8"
            lines={["Brands that look good.", "Ads that sell better."]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#6B6B72] max-w-xl mx-auto mb-11 leading-relaxed text-pretty"
          >
            We build Shopify stores, ad creatives, and content that turn browsers into buyers — wherever your brand sells.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            <Link
              href="/booking"
              className="group inline-flex items-center gap-3 pl-8 pr-3 py-3 bg-[#0A0A0B] text-white rounded-full font-semibold text-base hover:scale-[1.03] transition-transform"
            >
              Start Your Project
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#4452FB] text-white group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ProofStrip />

      <div className="mt-16">
        <KeywordTicker />
      </div>

      {/* ── Problem Section ── */}
      <section className="py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight max-w-2xl">
              Most brands don&apos;t have a marketing problem.
              <br />They have a creative problem.
            </h2>
          </motion.div>

          <div>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr] gap-5 md:gap-8 py-7 border-t border-black/10 last:border-b"
              >
                <span className="font-poppins text-sm font-semibold text-[#0A0A0B]/30 pt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-[#0A0A0B] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[#6B6B72] text-base leading-relaxed max-w-lg">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-28 md:py-36 px-6 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 md:mb-20 max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight">
              One studio. Every piece your brand needs to sell.
            </h2>
          </motion.div>

          <div>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex items-center justify-between gap-6 py-6 md:py-7 px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl border-t border-black/10 last:border-b hover:bg-[#4452FB] transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <service.Icon className="w-5 h-5 md:w-6 md:h-6 text-[#4452FB] group-hover:text-white transition-colors flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-poppins font-semibold text-[#0A0A0B] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B6B72] group-hover:text-white/80 transition-colors mt-1 max-w-md hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0A0A0B]/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="work" className="py-28 md:py-36 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-4">Selected Work</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight max-w-2xl">
              Two brands. Full-stack execution.
            </h2>
          </motion.div>

          <CaseStudies />
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-28 md:py-36 px-6 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-5">
              A process built to move fast without breaking the brand
            </h2>
          </motion.div>

          <ProcessSteps />
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollFillText text="We don't believe in content that just looks nice. Every ad, every page, every frame is built to move someone from scrolling to buying. If it doesn't sell, it doesn't ship." />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full bg-white border border-black/[0.08] hover:border-[#4452FB]/40 p-5 md:p-6 rounded-xl text-left group transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base md:text-lg font-semibold text-[#0A0A0B]">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-[#4452FB]" />
                    </motion.div>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={openFAQ === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 md:p-6 text-[#6B6B72] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative container mx-auto max-w-5xl bg-[#4452FB] rounded-3xl overflow-hidden text-center px-6 py-20 md:py-28"
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <h2 className="relative font-poppins text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Ready to build a brand
            <br />that actually sells?
          </h2>
          <p className="relative text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Let&apos;s talk about what&apos;s holding your creative back.
          </p>
          <Link
            href="/booking"
            className="relative inline-flex items-center gap-2 px-9 py-4 bg-white text-[#0A0A0B] rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
