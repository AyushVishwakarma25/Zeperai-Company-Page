"use client"

import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface NavItem {
  name: string
  href: string
}

const navLinks: NavItem[] = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Monitor scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 90) {
      if (!isScrolled) {
        setIsScrolled(true)
        setIsExpanded(false) // Collapse to circle when scrolling down
      }
    } else {
      if (isScrolled) {
        setIsScrolled(false)
        setIsExpanded(false)
      }
    }
  })

  const showFullMenu = !isScrolled || isExpanded

  return (
    <>
      <div className="fixed top-5 inset-x-0 z-50 flex justify-center items-center pointer-events-none px-4">
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
          className={`pointer-events-auto flex items-center border border-black/[0.08] bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(10,10,11,0.08)] ${
            showFullMenu
              ? "rounded-full px-5 py-2.5 gap-4 md:gap-8 max-w-5xl"
              : "rounded-full p-3.5 cursor-pointer hover:scale-105 active:scale-95 hover:border-[#4452FB]/40 shadow-[0_8px_25px_rgba(10,10,11,0.12)] transition-shadow"
          }`}
          onClick={() => {
            if (!showFullMenu) setIsExpanded(true)
          }}
        >
          <AnimatePresence mode="wait">
            {showFullMenu ? (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 md:gap-8 w-full justify-between"
              >
                {/* Logo / Brand */}
                <Link
                  href="/"
                  className="font-poppins font-bold text-[15px] tracking-tight text-[#0A0A0B] flex items-center gap-1.5 flex-shrink-0"
                >
                  ZeperAI <span className="text-[#4452FB]">Media</span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#0A0A0B]/65">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="transition-colors hover:text-[#0A0A0B]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Action Button & Collapse Button */}
                <div className="flex items-center gap-2">
                  <Link
                    href="/booking"
                    className="group rounded-full bg-[#0A0A0B] text-white text-xs sm:text-[13px] font-semibold px-4 py-2 flex items-center gap-1.5 hover:bg-[#4452FB] transition-colors"
                  >
                    Book a Call
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  {/* Collapse button when expanded while scrolled */}
                  {isScrolled && isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsExpanded(false)
                      }}
                      className="p-1.5 rounded-full hover:bg-black/5 text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors"
                      aria-label="Collapse menu"
                      title="Collapse menu"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  {/* Mobile Menu Hamburger button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsMobileMenuOpen(true)
                    }}
                    className="md:hidden p-1.5 text-[#0A0A0B] hover:text-[#4452FB] transition-colors"
                    aria-label="Open mobile navigation"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="compact-circle"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-[#0A0A0B]"
                title="Click to expand menu"
              >
                <Menu className="w-5 h-5 text-[#0A0A0B]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0B]/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F5F5F7] m-4 rounded-3xl p-6 shadow-2xl border border-black/[0.08]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.08]">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-poppins font-bold text-lg text-[#0A0A0B]"
                >
                  ZeperAI <span className="text-[#4452FB]">Media</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 text-[#0A0A0B]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-poppins font-semibold text-xl text-[#0A0A0B] hover:text-[#4452FB] py-2.5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-black/[0.08]">
                <Link
                  href="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#4452FB] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2"
                >
                  Book a Call <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Named alias for convenience if requested as AnimatedNavFramer
export { Navbar as AnimatedNavFramer }
