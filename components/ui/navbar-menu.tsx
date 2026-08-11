"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export function ServicesMenu({ items }: { items: { title: string; description: string }[] }) {
  return (
    <nav className="relative z-20 mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-black/[0.08] bg-white/80 p-2 shadow-sm backdrop-blur-md">
      {items.map((item) => (
        <MenuItem key={item.title} item={item.title}>
          <div className="w-64 p-1">
            <h3 className="font-poppins text-base font-bold text-[#0A0A0B]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B6B72]">{item.description}</p>
          </div>
        </MenuItem>
      ))}
    </nav>
  )
}

function MenuItem({ item, children }: { item: string; children: ReactNode }) {
  return (
    <div className="group relative" tabIndex={0}>
      <button
        type="button"
        className="rounded-full px-4 py-2 text-sm font-medium text-[#0A0A0B] transition-colors hover:bg-[#0A0A0B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4452FB]"
      >
        {item}
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition}
        className={cn(
          "pointer-events-none absolute left-1/2 top-[calc(100%+0.75rem)] -translate-x-1/2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100",
        )}
      >
        <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-xl">{children}</div>
      </motion.div>
    </div>
  )
}
