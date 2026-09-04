"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { ScrollFillText } from "@/components/scroll-fill-text"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Target, Layers } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      Icon: Sparkles,
      title: "AI as a Tool, Not a Shortcut",
      description: "We use AI to move faster, not to cut corners. Every output is directed, reviewed, and refined by a human before it reaches your brand.",
    },
    {
      Icon: Target,
      title: "Built to Convert, Not Just Impress",
      description: "Every asset we ship is judged on one thing: does it move someone closer to buying. Aesthetics matter, but only in service of that.",
    },
    {
      Icon: Layers,
      title: "One Studio, Full Stack",
      description: "Ads, store, content, brand — handled by one team that keeps every piece consistent, instead of five freelancers pulling in different directions.",
    },
  ]

  const expertise = [
    "Meta Ads Management",
    "Shopify Development",
    "AI Ad Creatives",
    "Video & Reels Editing",
    "Brand Identity Design",
    "Packaging Design",
    "Content Strategy",
    "Conversion-Focused Design",
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
            About the Studio
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["We build the studio", "we wished existed."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
          >
            ZeperAI Media blends design, strategy, and AI-assisted production to help brands sell — without the fragmented freelancer chaos most agencies leave behind.
          </motion.p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-28 px-6 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-8"
          >
            From the Founder
          </motion.span>

          <ScrollFillText text="Most brands are slowed down by fragmented workflows and outdated creative processes. I built ZeperAI Media to be the agency I wished I had — one team that balances design excellence with the speed AI-assisted production makes possible." />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 space-y-5 text-[#6B6B72] text-base md:text-lg leading-relaxed"
          >
            <p>
              I&apos;ve spent my career at the front lines of digital growth — building products from scratch, scaling D2C and B2B brands alike, and refining creative that actually moves the needle, not just what looks good in a deck.
            </p>
            <p>
              Today, ZeperAI Media doesn&apos;t just deliver assets — we deliver a full-stack advantage. The same AI-assisted workflows we build for our own SaaS products, we bring into agency work: faster turnarounds, without cutting the strategy or craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight">
              Three things that don&apos;t change per project
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-black/[0.06] p-7 md:p-8 h-full hover:border-[#4452FB]/30 transition-colors"
              >
                <value.Icon className="w-7 h-7 text-[#4452FB] mb-6" />
                <h3 className="text-xl font-poppins font-semibold mb-3">{value.title}</h3>
                <p className="text-[#6B6B72] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-28 md:py-36 px-6 bg-white border-y border-black/[0.06]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">Core Expertise</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight">
              What we actually do, day to day
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
                className="rounded-xl bg-[#F5F5F7] border border-black/[0.06] px-5 py-6 text-center hover:bg-[#4452FB] hover:border-[#4452FB] group transition-colors"
              >
                <p className="font-medium text-sm text-[#0A0A0B] group-hover:text-white transition-colors">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-lg md:text-xl text-[#6B6B72] mb-10">
              Ready to build something that sells? Let&apos;s schedule a call and talk about your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/vishwakarma-ayush/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white border border-black/[0.1] rounded-full font-semibold hover:border-black/30 transition-colors"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/booking"
                className="px-8 py-3.5 bg-[#0A0A0B] text-white rounded-full font-semibold hover:scale-[1.03] transition-transform flex items-center gap-2"
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
