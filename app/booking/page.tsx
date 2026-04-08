"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Ready to transform your vision into reality? Schedule a call with our team to discuss 
              your project, goals, and how we can help elevate your brand through creative excellence and AI-driven solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-white/80">We typically respond within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div style={{ height: "600px", width: "100%" }}>
              <Cal 
                namespace="discovery-call"
                calLink="ayush-vishwakarma-alzvnh/discovery-call"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-blue-400">30 mins</div>
                <p className="text-white/60">We&apos;ll discuss your project, goals, and timeline</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-blue-400">No Pressure</div>
                <p className="text-white/60">This is a conversation, not a sales pitch</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-blue-400">Free</div>
                <p className="text-white/60">Completely complimentary consultation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
