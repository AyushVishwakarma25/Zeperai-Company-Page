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
      title: "AI isn't the creative director.",
      description: "We use AI for speed. Humans still decide what deserves to ship.",
    },
    {
      Icon: Target,
      title: "Pretty isn't enough.",
      description: "If it looks good but doesn&apos;t help the brand, what&apos;s the point?",
    },
    {
      Icon: Layers,
      title: "No freelancer relay race.",
      description: "Strategy, design, website, content and ads stay connected under one roof.",
    },
  ]

  const expertise = [
    "Meta Ads",
    "Shopify",
    "AI Ad Creatives",
    "Reels",
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
            About the Agency
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["We got tired of how agencies work.", "So we built our own."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
          >
            One team for strategy, design, content, websites and the AI-powered production in between.
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

          <ScrollFillText text="Hey, I&apos;m Ayush. I started ZeperAI because I didn&apos;t want to build another agency. I wanted to build the kind of team I&apos;d want to hire." />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 space-y-5 text-[#6B6B72] text-base md:text-lg leading-relaxed"
          >
            <p>
              Small, fast, design-obsessed and comfortable using AI without letting AI do the thinking. We work with brands that need more than random creatives every week. We help turn products, ideas and campaigns into things people actually notice.
            </p>
            <p>
              I&apos;m still figuring things out. We&apos;re building in public, learning fast and shipping a lot. That&apos;s kind of the point.
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
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">Our rules. Pretty simple.</span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight">
              The stuff we don&apos;t compromise on.
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

      {/* Agency Philosophy */}
      <section className="py-28 md:py-36 px-6 bg-[#0A0A0B] text-white">
        <div className="container mx-auto max-w-5xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#8B96FF] mb-5">The ZeperAI way</span>
          <div className="grid md:grid-cols-[1.1fr_.9fr] gap-10 md:gap-20 items-start">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold leading-[1.05]">We&apos;re not trying to look like a big agency.</h2>
            <div className="space-y-5 text-white/65 text-base md:text-lg leading-relaxed">
              <p>We don&apos;t have 47 people on a Zoom call to change a headline.</p>
              <p>We keep the team lean, use technology where it actually helps, and spend more time making the work better.</p>
              <p className="text-white font-semibold">Less process theatre. More actual work.</p>
            </div>
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
              What we get our hands dirty with
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Got a brand? Let&apos;s make it harder to ignore.</h2>
            <p className="text-lg md:text-xl text-[#6B6B72] mb-10">
              Tell us what you&apos;re building, what isn&apos;t working, and where you want to go.
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
                Let&apos;s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
