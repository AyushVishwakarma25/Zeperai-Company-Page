"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function ServicesMenu({ items, compact = false }: { items: { title: string; description: string }[]; compact?: boolean }) {
  return (
    <nav className={cn(
      "relative z-20 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-black/[0.08] bg-white/80 p-1.5 shadow-sm backdrop-blur-md",
      compact ? "mx-0 border-transparent bg-transparent p-0 shadow-none" : "mx-auto",
    )}>
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
        className="rounded-full px-3 py-2 text-[13px] font-medium text-[#0A0A0B]/65 transition-colors hover:bg-[#0A0A0B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4452FB]"
      >
        {item}
      </button>
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-[calc(100%+0.75rem)] -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100",
        )}
      >
        <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-xl">{children}</div>
      </div>
    </div>
  )
}
