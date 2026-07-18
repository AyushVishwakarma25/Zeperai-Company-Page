"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "growth@zeperai.com",
      href: "mailto:growth@zeperai.com"
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
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Cal Embed */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Schedule a Call</h2>
              <p className="text-white/60 text-lg">
                Ready to discuss your project? Book a time that works best for you.
              </p>
            </div>
            
            <GlassCard className="p-8 md:p-12 overflow-hidden">
              <div style={{ height: "600px", width: "100%" }}>
                <Cal 
                  namespace="discovery-call"
                  calLink="ayush-vishwakarma-alzvnh/discovery-call"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
                />
              </div>
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
