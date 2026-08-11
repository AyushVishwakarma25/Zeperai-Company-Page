"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-[#6B6B72]">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-12 text-[#0A0A0B]/80 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">Introduction</h2>
            <p>
              ZeperAi (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the www.zeperai.com website (hereinafter referred to as the &quot;Service&quot;).
            </p>
            <p className="mt-4">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy is designed to help you understand what information we collect, why we collect it, and what we do with it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">1. Information We Collect</h2>
            <p>We collect various types of information to provide and improve our services:</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-[#0A0A0B]">Personal Data</h3>
            <p>Name, email address, and contact details provided when you inquire about our services.</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-[#0A0A0B]">Business Data</h3>
            <p>Information about your brand, assets, and marketing goals shared during project onboarding.</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-[#0A0A0B]">Usage Data</h3>
            <p>IP addresses, browser types, and cookies collected via Google Analytics to improve our site performance and understand how you interact with our platform.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">2. How We Use Your Information</h2>
            <p>We use the collected data to:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-[#0A0A0B]/70">
              <li>Provide and manage our design, video editing, and marketing services</li>
              <li>Communicate project updates and respond to inquiries</li>
              <li>Analyze website traffic to optimize user experience</li>
              <li>Comply with legal obligations under the Information Technology Act, 2000 (India)</li>
              <li>Develop and improve our AI-driven workflows and creative solutions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">3. AI Processing &amp; Data Security</h2>
            <p>As an AI-native agency, we may use third-party AI tools (such as ChatGPT, Midjourney, and other AI platforms) to process creative briefs and enhance our design and content creation workflows. We ensure that no sensitive or proprietary client data is used in a way that compromises your intellectual property rights.</p>
            <p className="mt-4">The security of your data is important to us. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">4. Third-Party Sharing</h2>
            <p>We do not sell your data. We only share information with trusted third-party services necessary to operate our business and deliver your projects. This may include:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-[#0A0A0B]/70">
              <li>Hosting providers for website and portfolio management</li>
              <li>Analytics tools for understanding website performance</li>
              <li>AI platforms for creative and content development</li>
              <li>Payment processors for handling transactions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0A0A0B]">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. Depending on your location, you may also have additional rights including:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-[#0A0A0B]/70">
              <li>The right to rectification of inaccurate data</li>
              <li>The right to object to processing of your data</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:growth@zeperai.com" className="text-[#4452FB] hover:text-[#3A46D6]">growth@zeperai.com</a>.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
