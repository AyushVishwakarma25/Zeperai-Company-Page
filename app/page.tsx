"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KeywordTicker } from "@/components/keyword-ticker"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, ArrowUpRight, Sparkles, Film, Edit3, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const solutionCards = [
    {
      title: "AI Ad Creatives",
      description: "AI advertisement creatives that look real and feel story-driven.",
      color: "#4452FB",
      Icon: Sparkles,
    },
    {
      title: "Motion Graphic Ads",
      description: "Product motion graphic ads built for attention and retention.",
      color: "#E8445A",
      Icon: Film,
    },
    {
      title: "Reels Editing",
      description: "Reels editing that keeps people watching and drives engagement.",
      color: "#F5A623",
      Icon: Edit3,
    },
    {
      title: "Creative Strategy",
      description: "Scripting and creative strategy designed to improve CTR and ROAS.",
      color: "#2ECC71",
      Icon: TrendingUp,
    },
  ]

  const problems = [
    {
      title: "Ads Don't Feel Native",
      description: "Maybe your ads look polished, but they don't feel native."
    },
    {
      title: "Views Without Sales",
      description: "Maybe your Reels get views, but not sales."
    },
    {
      title: "High Traffic, Low Conversions",
      description: "Maybe your Shopify store looks good, but visitors still leave without buying."
    },
    {
      title: "Weak Marketplace Presence",
      description: "Maybe your product images are fine, but not strong enough to stand out on Amazon or Blinkit."
    }
  ]

  const faqs = [
    {
      question: "Do you work with both USA and Indian brands?",
      answer: "Yes. We work with both and tailor the creative to the market, platform, and audience."
    },
    {
      question: "Can you make ads that look like real stories?",
      answer: "Yes. We create story-based ad creatives that feel natural, human, and platform-friendly."
    },
    {
      question: "Do you only do video editing?",
      answer: "No. We also handle motion graphics, Reels editing, scripting, Shopify design, branding, and listing creatives."
    },
    {
      question: "Can you help improve CTR and ROAS?",
      answer: "Yes. Our creative approach is built around better hooks, stronger storytelling, and sharper execution."
    },
    {
      question: "Do you design for marketplaces too?",
      answer: "Yes. We create product images and listing creatives for Amazon and Blinkit."
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Share Your Brand",
      description: "You share your brand, product, and goal."
    },
    {
      number: "02",
      title: "Strategic Review",
      description: "We review what's working, what's missing, and what needs to change."
    },
    {
      number: "03",
      title: "Build Solutions",
      description: "We build the right creative, design, or website solution for your brand."
    },
    {
      number: "04",
      title: "Ready to Scale",
      description: "You get assets that are ready to launch, test, and scale."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
              AI Powered Creative Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-poppins text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight mb-8 text-balance"
          >
            We Build Brands
            <br />
            <span className="text-white/90">That&nbsp;</span>
            <span className="relative inline-block px-4" style={{ color: "#ba44fb" }}>
              Actually Sell
              <span className="absolute inset-0 rounded-xl -z-10 opacity-15" style={{ background: "#ba44fb" }} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty"
          >
            Video editing, ad creatives, Shopify websites, and design that makes people stop, watch, and buy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/booking"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform"
            >
              Let&apos;s Build Creative That Converts
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>


      </section>

      {/* ── Keyword Ticker ── */}
      <KeywordTicker />

      {/* ── Problem Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">
              We Know the Problem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {problems.slice(0, 2).map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#4452FB" }}
              >
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.slice(2).map((problem, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: index === 0 ? "#148f7f" : "#8006cd" }}
              >
                <h3
                  className="text-2xl md:text-3xl font-poppins font-bold mb-4 leading-tight"
                  style={{ color: "white" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-lg text-white/50">
              That&apos;s where most brands get stuck: good-looking content that doesn&apos;t move revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Solution Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">
                We Know the Fix Too.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-base leading-relaxed md:text-right">
              We don&apos;t just make content look nice. We make it work harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {solutionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative flex flex-col justify-between h-80 rounded-3xl p-8 overflow-hidden cursor-default select-none hover:scale-105 transition-transform"
                style={{ backgroundColor: card.color }}
              >
                <div>
                  <h3 className="text-white font-bold text-xl leading-snug mb-3 font-poppins">
                    {card.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                  >
                    <card.Icon className="w-12 h-12 text-white/90" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Philosophy Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 text-white">Our Philosophy</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              We believe the strongest brands are built through clarity, intention, and meaningful storytelling. Every decision—from typography and color to packaging structure and material choices—should serve a purpose and strengthen the connection between a brand and its audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Approach Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-white/60">
              Good creative is not about trends. It&apos;s about understanding what makes people stop, trust, and take action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Storytelling",
                description: "We craft narratives that feel natural and believable, making your brand relatable and human.",
                color: "#4452FB"
              },
              {
                title: "Strategy",
                description: "We align every asset with your offer and audience, ensuring maximum relevance and impact.",
                color: "#E8445A"
              },
              {
                title: "Design",
                description: "We create visuals that support sales, not just aesthetics — every pixel serves your conversion goal.",
                color: "#F5A623"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 h-full hover:scale-105 transition-transform"
                style={{ backgroundColor: item.color }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white font-poppins">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─��� Discovery & Strategy Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

        </div>
      </section>

      {/* ── Detailed Process Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">A Thoughtful Process Behind Every Brand</h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Every successful identity and packaging project begins with understanding the brand at its core. Our process balances strategic thinking, creative exploration, and meticulous refinement to create solutions that are both meaningful and commercially effective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden h-96 md:h-full"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QyRizeDsc0pbDLJbo95FLw8Kfg9KAn.png" 
                alt="Brand Process" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  step: "1.Discovery",
                  description: "We begin by learning about your business, audience, goals, and market landscape to establish a clear strategic foundation."
                },
                {
                  step: "2.Strategy",
                  description: "We develop a comprehensive creative strategy aligned with your vision, positioning, and market opportunities."
                },
                {
                  step: "3.Concept Development",
                  description: "Our team creates multiple conceptual directions, exploring different visual approaches and messaging strategies."
                },
                {
                  step: "4.Design Refinement",
                  description: "We refine the selected concept, perfecting every detail from typography to color to ensure maximum impact and clarity."
                },
                {
                  step: "5.Final Delivery",
                  description: "You receive comprehensive brand guidelines and all deliverables ready for production and implementation."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.step}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-3xl p-12 text-center"
          >
            <p className="text-lg text-white/70 mb-6">
              Our goal is not simply to create attractive visuals, but to build brand systems that perform effectively, scale confidently, and leave a lasting impression.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all"
            >
              Start A Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">Selected Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Designing Brands That Leave A Lasting Impression</h2>
            <p className="text-lg text-white/60">
              Explore a curated selection of identity and packaging projects crafted to help brands stand out, connect with their audience, and create memorable experiences across every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Aurelia Skincare",
                tags: ["Brand Identity", "Packaging Design"],
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9DCcpVrTXPyP5GqqlVNiV1trmOdTEJ.png",
                position: "left"
              },
              {
                name: "North Roast",
                tags: ["Packaging Design"],
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9DCcpVrTXPyP5GqqlVNiV1trmOdTEJ.png",
                position: "right"
              },
              {
                name: "Verdant Organics",
                tags: ["Brand Identity", "Packaging Design"],
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9DCcpVrTXPyP5GqqlVNiV1trmOdTEJ.png",
                position: "left"
              },
              {
                name: "Lumière Candle Co.",
                tags: ["Brand Identity", "Art Direction"],
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9DCcpVrTXPyP5GqqlVNiV1trmOdTEJ.png",
                position: "right"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-white/5 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full bg-white/5 border border-white/10 hover:border-blue-400/50 p-6 rounded-xl text-left group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={openFAQ === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-blue-500/5 border-t border-blue-400/20 text-white/70">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-poppins font-bold mb-8"
          >
            Ready to Make Your Brand
            <br />
            <span style={{ color: "#4452FB" }}>Sell Smarter?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how we can build creative that converts, not just impresses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/booking" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Schedule a Call <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}
