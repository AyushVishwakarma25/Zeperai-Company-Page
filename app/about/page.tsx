"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, Users } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "AI as Partner, Not Replacement",
      description: "We view AI as an enabler of human creativity. Technology amplifies our capabilities, but humans remain the director of every project."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Data-Driven Solutions",
      description: "Every strategy combines design excellence, creative intelligence, and cutting-edge automation to deliver measurable results."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Creative Automation",
      description: "We specialize in Vibe Coding and creative automation powered by Gen AI—making design scalable without losing its soul."
    }
  ]

  const expertise = [
    "Growth Strategies",
    "ROI-Focused Design",
    "Web Design & Development",
    "Video Editing & Production",
    "AI Ad Creatives",
    "Vibe Coding",
    "Creative Automation",
    "Gen AI Solutions"
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* About Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              About ZeperAi
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Founded on a passion for blending technology, creativity, and strategy, 
              ZeperAi helps brands scale through AI-driven solutions and creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">From the Founder</h2>
            
            <blockquote className="text-2xl md:text-3xl font-semibold italic text-blue-300 mb-12 border-l-4 border-blue-400 pl-6">
              &ldquo;Innovation is not just about the tools we use, but how we use them to solve human problems.&rdquo;
            </blockquote>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                ZeperAi was born out of a half decade-long obsession with the intersection of technology and creativity. As a founder with 5+ years of experience in entrepreneurship, I have spent my career at the front lines of digital growth—building products from scratch, scaling D2C brands, and refining growth strategies that actually move the needle.
              </p>

              <p>
                My journey started with a simple realization: most brands are slowed down by fragmented workflows and outdated creative processes. Having built and scaled multiple ventures, I designed ZeperAi to be the agency I wished I had—one that balances aesthetic excellence with technical automation.
              </p>

              <p>
                Today, we don&apos;t just provide services; we provide a competitive advantage. We leverage the same AI-driven workflows we build in our SaaS products to deliver agency results that are faster, smarter, and strictly ROI-focused.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Core Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {expertise.map((skill, index) => (
              <GlassCard key={index} className="p-6 text-center hover:bg-white/10 transition-all">
                <p className="font-medium">{skill}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-xl text-white/60 mb-12">
              Ready to build something amazing? Let&apos;s schedule a call and chat about your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/vishwakarma-ayush/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Connect on LinkedIn
              </a>
              <Link 
                href="/booking" 
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
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
