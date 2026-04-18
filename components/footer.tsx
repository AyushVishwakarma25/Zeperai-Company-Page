import Link from "next/link"
import { Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Top accent circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              About Us
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mt-6 mb-6">
              AI-powered design, video editing, and creative strategy that makes brands stand out. Delivering exceptional results for companies worldwide.
            </p>
            <p className="text-white/50 text-sm mb-6">© 2025 ZeperAi. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/vishwakarma-ayush/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6 text-white/70">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-blue-500 transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
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
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-blue-500 inline-block">
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

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <img src="/logo-zeperai.png" alt="ZeperAi" className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-8 text-white/60 text-sm">
            <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
