"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "reahtoayush25@gmail.com",
      href: "mailto:reahtoayush25@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Ayush Vishwakarma",
      href: "https://www.linkedin.com/in/vishwakarma-ayush/"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Contact Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Let&apos;s discuss your project and explore how ZeperAi can elevate your brand. 
              Reach out through any of the channels below or schedule a call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <GlassCard className="p-6 hover:bg-white/10 transition-all cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors text-blue-400">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.label}</h3>
                            <p className="text-white/70 group-hover:text-white transition-colors">{info.value}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendly CTA */}
              <GlassCard className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-white/70 mb-6">
                  Prefer to discuss your project directly? Schedule a call with Ayush to explore 
                  how ZeperAi can help elevate your brand.
                </p>
                <a
                  href="https://calendly.com/reahtoayush25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-6 py-3 bg-white text-black rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                >
                  Open Calendly
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded Calendly */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Let&apos;s Talk</h2>
            
            {/* Calendly Embed */}
            <GlassCard className="p-8 md:p-12 overflow-hidden">
              <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/reahtoayush25?hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "630px" }}
              />
              <script 
                type="text/javascript" 
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Questions?</h2>
            <p className="text-xl text-white/60 mb-12">
              Check out our services or learn more about how we work. We&apos;re excited to help 
              you elevate your brand.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
