"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
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
            <p className="text-white/60">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-12 text-white/80 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Introduction</h2>
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">1. Information Collection and Use</h2>
            <p>We may collect different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-white/90">Types of Data Collected:</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Personal Data</h4>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). This may include, but is not limited to:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-white/70">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Usage Data</h4>
                <p>We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This may include information such as your computer&apos;s Internet Protocol address (e.g., IP address), browser type, browser version, the pages you visit, the time and date of your visit, and the time spent on those pages.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Tracking &amp; Cookies Data</h4>
                <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">2. Use of Data</h2>
            <p>ZeperAi uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-white/70">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To send you marketing and promotional communications (with your consent)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">3. Security of Data</h2>
            <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">4. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your Personal Data:</p>
            <ul className="list-disc list-inside mt-4 space-y-3 text-white/70">
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to object to processing of your data</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 space-y-2">
              <p><span className="text-white">Email:</span> reahtoayush25@gmail.com</p>
              <p><span className="text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/vishwakarma-ayush/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Ayush Vishwakarma</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
