"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              About
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mt-6 mb-6">
              We are an AI-native creative agency helping brands tell better stories, build stronger presence, and create content that actually gets noticed.
            </p>
            <p className="text-white/50 text-sm mb-4">© 2025 ZeperAi. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/vishwakarma-ayush/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6 text-white/70">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-blue-500 transition-colors">Book a Call</Link></li>
              <li><Link href="/d2c-growth-system" className="hover:text-blue-500 transition-colors">D2C Growth System</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              Services
            </h3>
            <ul className="space-y-3 mt-6 text-white/70">
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Web Design</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Video Editing</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">AI Ad Creatives</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Graphic Design</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Brand Strategy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              Get in Touch
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <a href="tel:+917307990640" className="text-white hover:text-blue-500 transition-colors">
                    +91 7307 990640
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:reahtoayush25@gmail.com" className="text-white hover:text-blue-500 transition-colors">
                    reahtoayush25@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-10 pb-10 border-b border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Accepted Payment Methods</p>
          <div className="flex flex-wrap items-center gap-3">
            {/* Visa */}
            <div className="flex items-center justify-center bg-white rounded-lg px-3 py-2 h-9">
              <svg viewBox="0 0 48 16" className="h-4 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="13" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#1A1F71">VISA</text>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="flex items-center justify-center bg-white rounded-lg px-3 py-2 h-9 gap-1">
              <div className="w-5 h-5 rounded-full bg-red-500 opacity-90" />
              <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-90 -ml-2.5" />
            </div>
            {/* UPI */}
            <div className="flex items-center justify-center bg-white rounded-lg px-3 py-2 h-9">
              <span className="text-xs font-extrabold tracking-tight" style={{ color: "#097939" }}>UPI</span>
            </div>
            {/* Google Pay */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 h-9 gap-1">
              <span className="text-xs font-bold" style={{ color: "#4285F4" }}>G</span>
              <span className="text-xs font-semibold text-gray-700">Pay</span>
            </div>
            {/* PayPal */}
            <div className="flex items-center justify-center bg-white rounded-lg px-3 py-2 h-9">
              <span className="text-xs font-extrabold" style={{ color: "#003087" }}>Pay</span>
              <span className="text-xs font-extrabold" style={{ color: "#009cde" }}>Pal</span>
            </div>
            {/* Skydo */}
            <div className="flex items-center justify-center bg-white rounded-lg px-3 py-2 h-9">
              <span className="text-xs font-bold text-gray-800">Skydo</span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-zeperai.png" alt="ZeperAi" className="h-9 w-auto" />
          </Link>
          <div className="flex items-center gap-6 text-white/50 text-sm">
            <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
