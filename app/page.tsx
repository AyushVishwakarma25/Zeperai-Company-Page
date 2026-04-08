"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { LogoSlider } from "@/components/logo-slider"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "Auditing your current brand and ROI goals"
    },
    {
      number: "02",
      title: "AI-Powered Ideation",
      description: "Rapid prototyping of concepts and ad copy"
    },
    {
      number: "03",
      title: "Precision Execution",
      description: "Finalizing high-end web, video, and design assets"
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "Deploying and using data to refine results"
    }
  ]

  const faqs = [
    {
      question: "How fast is the turnaround?",
      answer: "Our AI-integrated workflow allows us to deliver high-quality assets up to 2x faster than traditional agencies."
    },
    {
      question: "How do you use AI to get more leads?",
      answer: "We use AI agents to find and engage high-intent customers before your competitors do. On average, this strategy increases lead conversion by 25% compared to traditional methods."
    },
    {
      question: "Is your marketing fully automated?",
      answer: "We automate the data and repetitive tasks, but humans handle the strategy and final creative. This 'AI-human' hybrid typically improves CTR (Click-Through Rate) by 40% because it combines speed with real emotion."
    },
    {
      question: "Do I have to buy a full package?",
      answer: "No. We will analyze your needs and based on requirements we prepare customized packages tailored to your budget and goals."
    },
    {
      question: "How fast will I see results?",
      answer: "We usually launch your first AI-driven campaign within 14 days. Most brands see a measurable lift in engagement and traffic within the first 30 to 45 days."
    },
    {
      question: "Do you work with clients outside of India?",
      answer: "Yes. We use AI to localize your content for any global market. Whether you're targeting the US, UK, or UAE, we ensure your brand speaks the local language and fits the culture."
    },
    {
      question: "Who owns the final work?",
      answer: "You do. Once the project is complete and paid for, you own 100% of the files, code, and creative assets. We provide everything in high-resolution formats for your permanent use."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <LogoSlider />
      
      {/* Process Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Demystify AI</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Clients are often intimidated by "AI." Our transparent 4-step process makes it feel safe, professional, and results-driven.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass p-8 rounded-2xl h-full hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="text-6xl font-bold text-blue-400/30 mb-4 group-hover:text-blue-400/60 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-white/60">
              Everything you need to know about working with our AI-powered agency
            </p>
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
                  className="w-full glass p-6 rounded-xl hover:bg-white/10 transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-blue-300 transition-colors">
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
                  <div className="p-6 bg-white/5 text-white/70 border-t border-white/10">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to
            <br />
            <span className="text-gradient">Turn Heads?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let&apos;s create something that makes your audience actually care. No boring strategies. Just pure creativity and results.
          </p>
          <Link href="/booking" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            Schedule a Call
          </Link>
        </div>
        
        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>
      
      <Footer />
    </main>
  )
}
