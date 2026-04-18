"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KeywordTicker } from "@/components/keyword-ticker"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, CheckCircle, Sparkles, Film, Edit3, TrendingUp, ShoppingBag, Palette, Image } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const solutions = [
    "AI advertisement creatives that look real and feel story-driven.",
    "Product motion graphic ads built for attention and retention.",
    "Reels editing that keeps people watching.",
    "Proven scripting and creative strategy designed to improve CTR and ROAS.",
    "Shopify website design and development built for D2C brands.",
    "Branding and graphic design from logo to typography.",
    "Product images and marketplace listing creatives for Amazon, Blinkit, Instacart, and DoorDash."
  ]

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
    {
      title: "Shopify Websites",
      description: "Shopify website design and development built for D2C brands.",
      color: "#8B5CF6",
      Icon: ShoppingBag,
    },
    {
      title: "Brand & Design",
      description: "Branding and graphic design from logo to full typography systems.",
      color: "#0EA5E9",
      Icon: Palette,
    },
    {
      title: "Marketplace Creatives",
      description: "Product images and listing creatives for Amazon, Blinkit, Instacart, and DoorDash.",
      color: "#F97316",
      Icon: Image,
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
      description: "Maybe your product images are fine, but not strong enough to stand out on Amazon, Blinkit, Instacart, or DoorDash."
    }
  ]

  const offerings = [
    "AI ad creatives",
    "Story-style UGC ads",
    "Product motion graphic ads",
    "Reels editing",
    "Ad scripting and creative strategy",
    "Shopify website design and development",
    "Branding and identity design",
    "Product images",
    "Amazon listing images",
    "Blinkit listing images",
    "Instacart and DoorDash creatives"
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
      answer: "Yes. We create product images and listing creatives for Amazon, Blinkit, Instacart, and DoorDash."
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-sofia font-bold mb-6 leading-tight">
              Creative That<br />
              <span className="text-gradient">Actually Sells</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              We help brands turn attention into action with video editing, ad creatives, Shopify websites, and design that makes people stop, watch, and buy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-transform w-full sm:w-auto text-center">
                Let's Build Creative That Converts
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>

      {/* Keyword Ticker */}
      <KeywordTicker />

      {/* Problem Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Top two cards side by side */}
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
                <h3 className="text-2xl md:text-3xl font-sofia font-bold text-white mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Remaining cards revealed on scroll */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.slice(2).map((problem, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#4452FB" }}
              >
                <h3 className="text-2xl md:text-3xl font-sofia font-bold text-white mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">{problem.description}</p>
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

      {/* Solution Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">The Solution</span>
              <h2 className="text-4xl md:text-5xl font-sofia font-bold leading-tight">
                Performance-driven<br />creative that sells.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-base leading-relaxed md:text-right">
              We don&apos;t just make content look nice. We make it work harder.
            </p>
          </div>

          {/* Horizontal scrolling colorful cards */}
          <div className="overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex gap-5 w-max">
              {solutionCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="relative flex flex-col justify-between w-64 md:w-72 h-80 rounded-3xl p-7 flex-shrink-0 overflow-hidden cursor-default select-none"
                  style={{ backgroundColor: card.color }}
                >
                  {/* Title + description */}
                  <div>
                    <h3 className="text-white font-bold text-xl leading-snug mb-3 font-sofia">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative shape at bottom */}
                  <div className="flex justify-center mt-4">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center rotate-12"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <card.Icon className="w-9 h-9 text-white/90 -rotate-12" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Fit Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-sofia font-bold mb-6">Who This Is Built For</h2>
            <p className="text-xl text-white/60">
              This is built for brands that want more than random design work.
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12">
            <div className="space-y-4 text-white/80 text-lg">
              <p className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">→</span>
                D2C brands that want better-performing creative
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">→</span>
                Founders who need a Shopify store that actually converts
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">→</span>
                E-commerce brands that want stronger ads and product visuals
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">→</span>
                Startups launching new products and need content fast
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">→</span>
                USA and Indian brands that want clean execution and sharper storytelling
              </p>
            </div>

            <p className="mt-8 text-xl font-semibold text-white border-t border-white/10 pt-8">
              If your business depends on attention, trust, and conversions, this is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-sofia font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-white/60">
              Good creative is not about trends. It's about understanding what makes people stop, trust, and take action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Storytelling",
                description: "We craft narratives that feel natural and believable, making your brand relatable and human."
              },
              {
                title: "Strategy",
                description: "We align every asset with your offer and audience, ensuring maximum relevance and impact."
              },
              {
                title: "Design",
                description: "We create visuals that support sales, not just aesthetics—every pixel serves your conversion goal."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 h-full hover:bg-purple-500/15 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-sofia font-bold mb-6">Working Together Is Simple</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              No confusion. No bloated process. Just clear work that helps your brand grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 hover:border-green-400/60 transition-all">
                  <div className="text-5xl font-bold text-green-400/40 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-sofia font-bold mb-6">What You Get From Us</h2>
            <p className="text-xl text-white/60">
              If you need content, design, and web assets that feel premium and perform well, we can help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-500/15 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-white/80">{offering}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-sofia font-bold mb-6">Frequently Asked Questions</h2>
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

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-sofia font-bold mb-8"
          >
            Ready to Make Your Brand
            <br />
            <span className="text-gradient">Sell Smarter?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Let's discuss how we can build creative that converts, not just impresses.
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
