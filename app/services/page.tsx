"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Palette, Smartphone, Code2, Rocket, Check } from 'lucide-react'
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-blue-400" />,
      title: "Digital Architecture",
      shortDescription: "Strategic website design and development",
      fullDescription: "We create user-centric websites optimized for conversions. From WordPress design to custom development, we build digital experiences that elevate your brand globally.",
      features: [
        "Responsive web design",
        "WordPress & CMS customization",
        "Landing page optimization",
        "E-commerce solutions",
        "SEO optimization",
        "Performance enhancement"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: "High-Impact Video Editing",
      shortDescription: "Cinematic content for social campaigns",
      fullDescription: "From short-form social content to long-form brand narratives, we craft videos that captivate and convert. Our video editing combines storytelling with strategic marketing.",
      features: [
        "Social media video content",
        "Ad video production",
        "Brand story videos",
        "Product demos",
        "Motion graphics",
        "Color grading & effects"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Code2 className="w-12 h-12 text-indigo-400" />,
      title: "AI-Generated Ad Creatives",
      shortDescription: "Data-driven creative automation",
      fullDescription: "Leverage AI to generate high-converting ad creative at scale. We combine intelligent design algorithms with strategic copywriting for maximum ROI.",
      features: [
        "AI ad design generation",
        "Copy optimization",
        "Multi-variant testing",
        "A/B testing frameworks",
        "Performance analytics",
        "Automated scaling"
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: <Rocket className="w-12 h-12 text-pink-400" />,
      title: "Strategic Graphic Design",
      shortDescription: "Custom visual identities & brand systems",
      fullDescription: "We build cohesive visual identities that resonate internationally. From logos to complete design systems, every element is crafted for impact.",
      features: [
        "Logo & brand identity",
        "Design systems",
        "Marketing collateral",
        "Social media templates",
        "Presentation design",
        "Print & digital assets"
      ],
      color: "from-pink-500/20 to-red-500/20"
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

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-6 md:p-12 group hover:bg-white/5 transition-all">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <div className="mb-6 p-5 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                        {service.fullDescription}
                      </p>
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`h-60 md:h-80 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-6xl font-bold text-white/10 mb-4">
                          {service.icon}
                        </div>
                        <p className="text-white/40 font-medium">{service.shortDescription}</p>
                      </div>
                    </div>
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
