"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Logo = {
  src: string
  alt: string
  heightClass: string
  href?: string
}

const logos: Logo[] = [
  {
    src: "/brands/fast-diagnostics.png",
    alt: "Fast Diagnostics",
    heightClass: "h-5 sm:h-6 md:h-7",
  },
  {
    src: "/brands/prustlr.png",
    alt: "Prustlr",
    heightClass: "h-4 sm:h-5 md:h-5",
    href: "/case-studies/prustlr",
  },
  {
    src: "/brands/varan-jewellers.png",
    alt: "Varan Jewellers",
    heightClass: "h-4.5 sm:h-5.5 md:h-6",
  },
]

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo
  children?: React.ReactNode
}

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  const innerContent = (
    <div
      className={cn(
        "group relative flex items-center justify-center p-6 sm:p-7 md:p-8 min-h-[96px] md:min-h-[110px] transition-all duration-300",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        src={logo.src}
        className={cn(
          "w-auto max-w-[75%] sm:max-w-[80%] select-none object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105",
          logo.heightClass
        )}
        loading="lazy"
      />
      {children}
    </div>
  )

  if (logo.href) {
    return (
      <Link href={logo.href} className="block w-full h-full" aria-label={`View ${logo.alt}`}>
        {innerContent}
      </Link>
    )
  }

  return innerContent
}

export function LogoCloud2({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 md:py-28 px-6", className)}>
      <div className="container mx-auto max-w-5xl">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold tracking-tight text-[#0A0A0B]">
            Brands we have worked with
          </h2>
        </motion.div>

        {/* Efferd Logo Cloud 2 Grid with Dynamic Borders & Plus Intersection Accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-black/[0.1] rounded-3xl bg-white shadow-[0_4px_30px_rgba(10,10,11,0.03)] overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Logo 1: Fast Diagnostics */}
            <LogoCard
              logo={logos[0]}
              className="relative border-b sm:border-b-0 sm:border-r border-black/[0.1] bg-[#F8F8FA]/70 hover:bg-white"
            >
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] sm:-bottom-[12.5px] absolute z-10 size-6 text-[#0A0A0B]/25 pointer-events-none"
                strokeWidth={1}
              />
              <PlusIcon
                className="-right-[12.5px] -top-[12.5px] absolute z-10 hidden sm:block size-6 text-[#0A0A0B]/25 pointer-events-none"
                strokeWidth={1}
              />
            </LogoCard>

            {/* Logo 2: Prustlr */}
            <LogoCard
              logo={logos[1]}
              className="relative border-b sm:border-b-0 sm:border-r border-black/[0.1] bg-white hover:bg-[#F8F8FA]/70"
            >
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#0A0A0B]/25 pointer-events-none"
                strokeWidth={1}
              />
              <PlusIcon
                className="-right-[12.5px] -top-[12.5px] absolute z-10 hidden sm:block size-6 text-[#0A0A0B]/25 pointer-events-none"
                strokeWidth={1}
              />
            </LogoCard>

            {/* Logo 3: Varan Jewellers */}
            <LogoCard
              logo={logos[2]}
              className="bg-[#F8F8FA]/70 hover:bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
