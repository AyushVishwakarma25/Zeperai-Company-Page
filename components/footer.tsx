"use client"

import Link from "next/link"
import { Linkedin, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0B] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <span className="font-poppins font-semibold text-xl tracking-tight">
              ZeperAI <span className="text-[#6C78FF]">Studio</span>
            </span>
            <p className="text-white/50 text-sm leading-relaxed mt-5 max-w-xs">
              A design and growth studio building Shopify stores, ad creatives, and content for brands in India and abroad.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/vishwakarma-ayush/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#6C78FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/zeperai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#6C78FF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:growth@zeperai.com" className="text-white/50 hover:text-[#6C78FF] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Studio</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/#work" className="hover:text-[#6C78FF] transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-[#6C78FF] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#6C78FF] transition-colors">About</Link></li>
              <li><Link href="/booking" className="hover:text-[#6C78FF] transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Get in Touch</h3>
            <a href="mailto:growth@zeperai.com" className="block text-white hover:text-[#6C78FF] transition-colors text-sm mb-2">
              growth@zeperai.com
            </a>
            <a href="tel:+917307990640" className="block text-white/70 hover:text-[#6C78FF] transition-colors text-sm">
              +91 7307 990640
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>© 2026 ZeperAI Studio — a Falcon Canvas AI venture</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
