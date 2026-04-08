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
      title: "Innovation First",
      description: "We blend AI, automation, and creative thinking to solve real problems for brands."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Data-Driven Strategy",
      description: "Every decision backed by analytics, insights, and performance metrics."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Client-Centric",
      description: "Your success is our success. We're invested in elevating your brand globally."
    }
  ]

  const expertise = [
    "AI & Marketing Automation",
    "Web Design & Development",
    "High-Impact Video Editing",
    "Ad Creative Generation",
    "Graphic Design Systems",
    "Content Strategy",
    "Data Analytics",
    "Growth Optimization"
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
              ZeperAi empowers international brands to scale through AI-driven solutions and 
              design excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Meet Ayush Vishwakarma
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Founder & AI Builder at ZeperAi, Ayush is a curious mind passionate about 
                building at the intersection of AI, automation, and marketing. With over 2 years 
                of professional experience and a background in commerce, he&apos;s dedicated to 
                helping brands scale through innovative technology and creative excellence.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                His journey started in digital marketing and data analytics, where he learned 
                to blend creativity with logic—designing campaigns, analyzing performance, and 
                optimizing brand messaging that truly connects. Today, he focuses on AI-driven 
                marketing workflows, helping D2C and B2B brands automate content creation, 
                design, and performance optimization.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                From high-converting AI ads to personalized automation systems, Ayush loves 
                experimenting with how technology can make creativity scalable and measurable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>B.Com from University of Lucknow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>2+ years in digital marketing & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>Specialized in WordPress design & Fiverr</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>AI & automation workflow expert</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-white/70">
                  To help international brands elevate their presence through meaningful, 
                  data-driven solutions that combine design excellence, creative intelligence, 
                  and cutting-edge automation.
                </p>
              </GlassCard>
            </motion.div>
          </div>
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
              Interested in collaborating or learning more about how ZeperAi can elevate your brand?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/vishwakarma-ayush/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Visit LinkedIn Profile
              </a>
              <Link 
                href="/contact" 
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
