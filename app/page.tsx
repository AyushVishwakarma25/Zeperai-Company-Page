"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KeywordTicker } from "@/components/keyword-ticker"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, CheckCircle } from "lucide-react"
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
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-sofia mb-6 leading-tight">
              We make{" "}
              <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg">
                creative
              </span>
              {" "}things
              <br />
              everyday
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              AI-powered designs, real stories, and proven results for brands that want to scale.
            </p>
            <Link
              href="/booking"
              className="inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Let's Start Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Section - Dark Background */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-sofia mb-4">
              Shaping the perfect<br />
              <span className="block text-blue-400">Solution for your</span>
              Businesses!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-sofia mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600">Everything you need to scale your brand.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold">{solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark Background */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-sofia mb-4">
              How we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors"
              >
                <div className="text-5xl font-bold text-blue-500 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Grid Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-sofia mb-4">
              What we{" "}
              <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded">offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-lg font-semibold">{offering}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Background */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-sofia mb-4">
              Frequently Asked
              <br />
              <span className="text-blue-400">Questions</span>
            </h2>
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
                  className="w-full bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all text-left group border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-blue-400 transition-colors">
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
                  <div className="p-6 bg-gray-800 text-gray-200 border-t border-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-sofia mb-6 leading-tight"
          >
            Let's start working
            <br />
            <span className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg mt-4">
              together
            </span>
            <br />
            <span className="text-blue-400">get in touch with us!</span>
          </motion.h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to elevate your brand with creative solutions that actually convert?
          </p>
          <Link
            href="/booking"
            className="inline-block px-10 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
