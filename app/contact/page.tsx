"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { motion } from "framer-motion"
import { Mail, Linkedin } from 'lucide-react'
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
    { Icon: Mail, label: "Email", value: "growth@zeperai.com", href: "mailto:growth@zeperai.com" },
    { Icon: Linkedin, label: "LinkedIn", value: "Ayush Vishwakarma", href: "https://www.linkedin.com/in/vishwakarma-ayush/" },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-5"
          >
            Contact
          </motion.span>
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["Get in touch."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto"
          >
            Tell us about your brand and let&apos;s explore how ZeperAI Studio can help you sell more.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="block bg-white rounded-2xl border border-black/[0.06] p-6 hover:border-[#4452FB]/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F5F5F7] text-[#4452FB] group-hover:bg-[#4452FB] group-hover:text-white transition-colors">
                    <info.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm text-[#6B6B72]">{info.label}</h3>
                    <p className="text-[#0A0A0B] font-medium">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Cal Embed */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-3">Schedule a Call</h2>
            <p className="text-[#6B6B72]">Book a time that works best for you.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-black/[0.06] p-4 md:p-6 overflow-hidden"
          >
            <div style={{ height: "600px", width: "100%" }}>
              <Cal
                namespace="discovery-call"
                calLink="ayush-vishwakarma-alzvnh/discovery-call"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
