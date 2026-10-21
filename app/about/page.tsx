"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { ScrollFillText } from "@/components/scroll-fill-text"
import { BrandsSection } from "@/components/brands-section"
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
            About Us
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["Fall seven times,", "stand up eight."]}
          />
          <p className="mb-8 text-sm font-medium text-[#6B6B72]">— Japanese Proverb</p>
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

      {/* Brands We Worked With */}
      <BrandsSection className="bg-white border-y border-black/[0.06]" />

      {/* Founder Story */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] gap-12 lg:gap-16 items-start">
            {/* Founder Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(10,10,11,0.06)] group">
                <img
                  src="/ayush-vishwakarma.png"
                  alt="Ayush Vishwakarma - Founder of ZeperAI"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Floating identity pill at bottom of image */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-md flex items-center justify-between">
                  <div>
                    <p className="font-poppins font-bold text-[#0A0A0B] text-base leading-tight">
                      Ayush Vishwakarma
                    </p>
                    <p className="text-xs font-medium text-[#4452FB] mt-0.5">
                      Founder & Creative Lead, ZeperAI
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/vishwakarma-ayush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0A0A0B] text-white flex items-center justify-center hover:bg-[#4452FB] hover:scale-105 transition-all"
                    aria-label="Ayush Vishwakarma on LinkedIn"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Founder Narrative */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-6"
              >
                From the Founder
              </motion.span>

              <ScrollFillText text="Six years of experimentation taught me that technology only matters if it solves a real problem." />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-8 space-y-6 text-[#6B6B72] text-sm md:text-base leading-relaxed"
              >
                <p>
                  I spent the last six years trying things out—building AI products, running an agency, failing at a few ventures, and learning what actually moves the needle versus what just looks good on paper.
                </p>
                <p>
                  ZeperAI Media is simply the sum of those lessons. My purpose with this isn&apos;t to disrupt an entire industry or sell a magic bullet. It&apos;s to take everything I&apos;ve learned about modern AI and creative workflows, cut out the fluff, and build something genuinely useful for businesses that care about real growth.
                </p>

                {/* Direct principles pills */}
                <div className="pt-6 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                    <p className="font-poppins font-semibold text-sm text-[#0A0A0B] mb-1">
                      Direct Senior Involvement
                    </p>
                    <p className="text-xs text-[#6B6B72] leading-relaxed">
                      No account managers playing telephone. You work directly with the strategists and creators executing the vision.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                    <p className="font-poppins font-semibold text-sm text-[#0A0A0B] mb-1">
                      Velocity with Craft
                    </p>
                    <p className="text-xs text-[#6B6B72] leading-relaxed">
                      We pair human creative instinct with AI production to deliver weeks of campaign output in days.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
                className="rounded-xl border-b border-black/[0.12] px-1 py-5 text-left transition-colors hover:border-[#4452FB]"
              >
                <p className="font-medium text-sm text-[#0A0A0B]">{skill}</p>
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
