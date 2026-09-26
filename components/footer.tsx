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
              ZeperAI <span className="text-[#6C78FF]">Media</span>
            </span>
            <p className="text-white/50 text-sm leading-relaxed mt-5 max-w-xs">
              Less boring marketing. More “damn, that&apos;s good.”
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-sm">
              Creative, technology &amp; growth for brands that want to be harder to ignore.
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Explore</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/#work" className="hover:text-[#6C78FF] transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-[#6C78FF] transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#6C78FF] transition-colors">Blog</Link></li>
              <li><Link href="/tools" className="hover:text-[#6C78FF] transition-colors">Tools</Link></li>
              <li><Link href="/about" className="hover:text-[#6C78FF] transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#6C78FF] transition-colors">Case Studies</Link></li>
              <li className="pt-4 text-xs font-semibold uppercase tracking-widest text-white/40">Capabilities</li>
              <li><Link href="/services#shopify" className="hover:text-[#6C78FF] transition-colors">Shopify &amp; Websites</Link></li>
              <li><Link href="/services#ai" className="hover:text-[#6C78FF] transition-colors">AI Creative Production</Link></li>
              <li><Link href="/services#ads" className="hover:text-[#6C78FF] transition-colors">Meta Ads</Link></li>
              <li><Link href="/services#content" className="hover:text-[#6C78FF] transition-colors">Content &amp; Video</Link></li>
              <li><Link href="/services#brand" className="hover:text-[#6C78FF] transition-colors">Brand Design</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Work With Us</h3>
            <h4 className="text-xl font-poppins font-semibold mb-4">Have something worth building?</h4>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Tell us what you&apos;re working on. We&apos;ll figure out where we can make the biggest difference.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0B] hover:bg-[#6C78FF] hover:text-white transition-colors">
              Start a Project <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <div className="mt-7 space-y-2 text-sm">
              <a href="mailto:growth@zeperai.com" className="block text-white hover:text-[#6C78FF] transition-colors">growth@zeperai.com</a>
              <a href="https://wa.me/917307990640" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[#6C78FF] transition-colors">WhatsApp / +91 7307 990640</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white/40 text-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>Built with humans + AI. Based in India. Working globally.</p>
            <div className="flex items-center gap-6">
              <span>© 2026 ZeperAI Media</span>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            </div>
          </div>
          <p className="text-center text-white/70 font-medium">ZeperAI — Creative work, built differently.</p>
        </div>
      </div>
    </footer>
  )
}
