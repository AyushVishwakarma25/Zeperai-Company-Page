import Link from "next/link"
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tighter mb-6">
              <img src="/logo-zeperai.png" alt="ZeperAi" className="h-6 w-auto" />
            </Link>
            <p className="text-white/50 leading-relaxed">
              AI-powered design, video editing, and creative strategy that makes brands stand out.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Pages</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Serving Brands</h4>
            <p className="text-white/60 text-sm mb-4 font-medium">Internationally</p>
            <ul className="space-y-2 text-white/60 text-sm mb-6">
              <li>India</li>
              <li>US</li>
              <li>UK</li>
              <li>UAE</li>
              <li>and more</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>&copy; 2025 ZeperAi. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
