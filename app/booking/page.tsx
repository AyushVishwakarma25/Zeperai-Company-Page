"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MaskReveal } from "@/components/mask-reveal"
import { motion } from "framer-motion"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const expectations = [
    { value: "30 mins", label: "We'll discuss your project, goals, and timeline" },
    { value: "No Pressure", label: "This is a conversation, not a sales pitch" },
    { value: "Free", label: "Completely complimentary consultation" },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-14 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <MaskReveal
            delayStart={0.1}
            className="font-poppins text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            lines={["Let's talk."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#6B6B72] leading-relaxed max-w-xl mx-auto mb-8"
          >
            Schedule a call to discuss your project, goals, and how ZeperAI Studio can help your brand sell more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.08]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4452FB] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4452FB]" />
            </span>
            <span className="text-xs font-medium text-[#6B6B72]">We typically respond within 24 hours</span>
          </motion.div>
        </div>
      </section>

      {/* Cal Embed */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-black/[0.06] p-4 md:p-6"
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

      {/* What to Expect */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-poppins font-bold mb-14"
          >
            What to Expect
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="text-3xl font-poppins font-bold text-[#4452FB]">{item.value}</div>
                <p className="text-[#6B6B72] text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
