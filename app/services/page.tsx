"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Palette, Smartphone, Code2, Rocket, Check, Video, Layout } from 'lucide-react'
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      categoryTitle: "Video Editing",
      icon: <Video className="w-12 h-12 text-purple-400" />,
      description: "Professional video content creation and editing for all formats",
      color: "from-purple-500/20 to-pink-500/20",
      services: [
        "Talking Head Videos",
        "SaaS Product Intro Videos",
        "D2C Product Animations",
        "Short Form Reels",
        "Motion Graphics",
        "UGC Style Ads",
        "YouTube & Podcast Editing",
        "Social Media Content Editing",
        "Brand Promo Videos"
      ]
    },
    {
      categoryTitle: "Website Development",
      icon: <Layout className="w-12 h-12 text-blue-400" />,
      description: "Custom web development and design solutions for modern brands",
      color: "from-blue-500/20 to-cyan-500/20",
      services: [
        "Shopify Development",
        "MVP Building",
        "UX/UI Design",
        "Landing Pages",
        "CRO Focused Design"
      ]
    },
    {
      categoryTitle: "Design & Branding",
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      description: "Complete visual identity and design system creation",
      color: "from-pink-500/20 to-red-500/20",
      services: [
        "Graphic Designing",
        "Brand Identity Design",
        "Logo Design",
        "Food Packaging Design",
        "Static Ad Creatives",
        "Product Listing Designs",
        "Social Media Creatives",
        "Banner & Marketing Designs"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your brand, audience, and goals to create a strategic foundation."
    },
    {
      step: "02",
      title: "Creative Development",
      description: "Our team designs and develops solutions that balance aesthetics with functionality."
    },
    {
      step: "03",
      title: "Optimization & Testing",
      description: "Data-driven refinements ensure maximum performance and ROI."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We don't just deliver—we support and optimize your solution continuously."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Services Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              Our Services
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Comprehensive solutions to elevate your brand through creative intelligence, 
              strategic design, and AI-driven innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{category.categoryTitle}</h2>
                      <p className="text-white/60 text-sm md:text-base mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>

                <GlassCard className={`p-8 md:p-10 bg-gradient-to-br ${category.color} hover:bg-white/10 transition-all`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: serviceIndex * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                      >
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-white/80 group-hover:text-white transition-colors font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            How We Work Our Magic
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <GlassCard className="h-full hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-6xl font-bold text-blue-400/30 mb-4 group-hover:text-blue-400/60 transition-colors"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">{item.description}</p>
                    
                    {/* Connection arrow indicator */}
                    {index < process.length - 1 && (
                      <motion.div 
                        className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-blue-400/40 group-hover:text-blue-400 transition-colors"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Ready to level up your brand? Schedule a discovery call and let&apos;s talk about your vision.
            </p>
            <Link 
              href="/booking"
              className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
