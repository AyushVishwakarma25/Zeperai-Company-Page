"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40)
  })

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
    >
      <div
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between transition-all duration-300",
          isScrolled
            ? "mt-3 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-[0_2px_20px_rgba(10,10,11,0.06)] px-5 py-3"
            : "mt-6 rounded-full bg-transparent border border-transparent px-5 py-4"
        )}
      >
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <span className="font-poppins font-bold text-[15px] tracking-tight text-[#0A0A0B]">
            ZeperAI <span className="text-[#4452FB]">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-[#0A0A0B]/65 hover:text-[#0A0A0B] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="group relative inline-flex items-center gap-2 bg-[#0A0A0B] text-white pl-4 pr-3.5 py-2 rounded-full text-[13px] font-semibold overflow-hidden transition-transform hover:scale-[1.03]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-[#0A0A0B]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#F5F5F7] z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-2 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-poppins font-semibold text-[#0A0A0B] hover:text-[#4452FB] transition-colors w-full text-center py-4 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 inline-block bg-[#4452FB] text-white px-8 py-3.5 rounded-full text-base font-semibold"
                >
                  Book a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
