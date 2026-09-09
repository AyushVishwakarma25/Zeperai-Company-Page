"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryTabsProps {
  active: "all" | "b2b" | "d2c"
}

const tabs = [
  { key: "all", label: "All Posts", href: "/blog" },
  { key: "d2c", label: "D2C", href: "/blog/d2c" },
  { key: "b2b", label: "B2B", href: "/blog/b2b" },
] as const

export function CategoryTabs({ active }: CategoryTabsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-16">
      {tabs.map((tab) => {
        const isActive = tab.key === active
        return (
          <Link
            key={tab.key}
            href={tab.href}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border",
              isActive
                ? "bg-[#0A0A0B] text-white border-[#0A0A0B]"
                : "bg-white text-[#0A0A0B]/65 border-black/[0.08] hover:border-[#4452FB]/40 hover:text-[#0A0A0B]"
            )}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
