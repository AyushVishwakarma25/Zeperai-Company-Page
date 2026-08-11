'use client'

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const packageFeatures = {
  "STORE + CRO": [
    "Full custom Shopify build or redesign",
    "Mobile-first CRO structure",
    "High-converting product pages",
    "Landing page builds",
    "Speed + checkout optimization",
    "Basic SEO structure"
  ],
  "AD CREATIVES": [
    "10 high-performing Meta ad creatives",
    "5 AI UGC video ads",
    "2 product animated videos",
    "2 stop-scroll motion graphic videos",
    "Ad hooks + copy for every creative",
    "Google + Meta ready formats"
  ],
  "VISUAL CONTENT": [
    "30 AI product shoot images",
    "Website banners + hero images",
    "Logo design + brand identity kit",
    "Brand color + typography system",
    "All store graphic assets",
    "Unlimited background removal"
  ],
  "ORGANIC CONTENT": [
    "15 organic social posts / month",
    "Caption + hashtag copy included",
    "Weekly content calendar",
    "Brand-consistent visual templates",
    "IG + FB + Pinterest formats",
    "Monthly performance review call"
  ]
}

const valueStack = [
  { item: "Shopify store design (freelancer)", price: "$1,200" },
  { item: "10 Meta ad creatives (agency)", price: "$800" },
  { item: "5 AI UGC video ads", price: "$1,500" },
  { item: "2 animated product videos", price: "$600" },
  { item: "2 motion graphic videos", price: "$500" },
  { item: "30 AI product shoot images", price: "$900" },
  { item: "15 social posts + copy", price: "$600" },
  { item: "Brand identity + all web graphics", price: "$700" },
]

export function PackageSection() {
  const totalValue = 7800

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-purple-950/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Main Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 mb-12 md:mb-16"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              The Complete System
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
              The Complete Brand System
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              One system. Store, content, ads, and video — all done for you. Built for D2C brands doing $0 → $100k+/month who want a complete execution partner — not another vendor to manage.
            </p>
          </div>

          {/* Pricing */}
          <div className="mb-10 pb-10 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-end md:gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Worth</p>
                <p className="text-lg md:text-xl text-gray-500 line-through">${totalValue.toLocaleString()}/mo</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-poppins font-bold text-emerald-400 mb-1">
                  $1,299<span className="text-lg md:text-2xl text-gray-400">/month</span>
                </p>
                <p className="text-xs text-gray-400">No setup fee · Cancel anytime</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">74</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Deliverables / month</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">7</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Days to first delivery</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">6x</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Value vs agency cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">0</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Contracts or lock-in</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {Object.entries(packageFeatures).map(([ category, features ], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4 pb-2 border-b border-white/10">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="mb-10 pb-10 border-t border-white/10 pt-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-4">
              Bonuses Included — Worth $1,800
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                "30-day D2C launch SOP",
                "Winning creative templates (Meta-ready)",
                "Viral ad hook swipe file (50+ hooks)",
                "Dedicated Slack / WhatsApp channel",
                "Product page CRO checklist",
                "Competitor creative audit (onboarding)"
              ].map((bonus, i) => (
                <p key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                  <span className="text-yellow-600 font-bold mt-0.5">★</span>
                  {bonus}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-sm md:text-base">
              Get Started Today
            </Button>
            <p className="text-xs text-gray-400 mt-3">Book a free 30-min strategy call with our team</p>
          </motion.div>
        </motion.div>

        {/* Value Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-lg md:text-2xl font-poppins font-bold text-white mb-6 md:mb-8 text-center">
            Value Stack — What You'd Pay Elsewhere
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {valueStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex justify-between items-center text-sm md:text-base py-2 border-b border-white/5 last:border-b-0"
              >
                <span className="text-gray-300">{item.item}</span>
                <span className="text-emerald-400 font-semibold">{item.price}</span>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-1 md:col-span-2 flex justify-between items-center text-base md:text-lg font-poppins font-bold py-4 pt-6 border-t-2 border-emerald-400/30"
            >
              <span className="text-white">Total Value</span>
              <span className="text-emerald-400">${totalValue.toLocaleString()}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
