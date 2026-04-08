"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms &amp; Conditions</h1>
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
            <h2 className="text-3xl font-bold mb-6 text-white">1. Services Provided</h2>
            <p>
              ZeperAi offers professional services in Website Design &amp; Development, Video Editing, AI-Generated Ad Creatives, and Graphic Design. The specific scope of work for any project will be outlined in a separate Statement of Work (SOW) or Invoice provided to the Client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">2. Intellectual Property</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-white/90">Client Content</h3>
            <p>You retain all rights to any materials (logos, text, images, brand assets) you provide to us for project work.</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-white/90">Final Deliverables</h3>
            <p>Upon full payment of the project invoice, the ownership of the final creative deliverables (designs, videos, websites, ad creatives) is transferred to the Client.</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-white/90">Agency Rights</h3>
            <p>We reserve the right to display completed projects in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed before project commencement.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">3. Payment Terms</h2>
            <ul className="list-disc list-inside mt-4 space-y-3 text-white/70">
              <li>Project starts are subject to a 50% upfront deposit to secure your project timeline</li>
              <li>Final files and deliverables are released only after the remaining balance is cleared in full</li>
              <li>All payments are non-refundable once the design process has reached the &quot;First Draft&quot; stage</li>
              <li>Project timelines begin after deposit receipt and approval of project brief</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">4. AI-Generated Content Disclaimer</h2>
            <p>
              Our services utilize AI-driven workflows and tools to enhance creativity and operational efficiency. While we strive for originality and quality in all deliverables, the Client acknowledges that AI-generated or AI-assisted elements are subject to the evolving copyright laws and regulations regarding AI-assisted creative work. ZeperAi ensures that all content generated complies with applicable laws and maintains originality standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">5. Limitation of Liability</h2>
            <p>
              ZeperAi will not be liable for any indirect, incidental, consequential, or special damages resulting from the use of our services or any delays caused by third-party platforms (hosting providers, ad account platforms, payment processors, etc.). Our liability is limited to the total amount paid for the specific project in question.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">6. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of India. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">7. Changes to Terms</h2>
            <p>
              ZeperAi reserves the right to revise these Terms &amp; Conditions at any time without notice. By continuing to use our website and services after changes are made, you agree to be bound by the updated terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">8. Contact Information</h2>
            <p>If you have any questions about these Terms &amp; Conditions, please contact us at:</p>
            <div className="mt-4 space-y-3">
              <p><span className="text-white">Agency:</span> ZeperAi</p>
              <p><span className="text-white">Contact Person:</span> Ayush Vishwakarma</p>
              <p><span className="text-white">Email:</span> <a href="mailto:reahtoayush25@gmail.com" className="text-blue-400 hover:text-blue-300">reahtoayush25@gmail.com</a></p>
              <p><span className="text-white">Location:</span> Lucknow, Uttar Pradesh, India</p>
              <p><span className="text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/vishwakarma-ayush/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Ayush Vishwakarma</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
