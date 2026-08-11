import { motion } from "framer-motion"
import Link from "next/link"

export function FunnelFooter() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div>
            <h3 className="font-poppins font-bold text-white mb-4">ZeperAI</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              An AI-native creative agency helping brands tell better stories, build stronger presence, and create content that actually gets noticed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>AI Ad Creatives</li>
              <li>Reels Editing</li>
              <li>Shopify Design</li>
              <li>Brand Strategy</li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 ZeperAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
