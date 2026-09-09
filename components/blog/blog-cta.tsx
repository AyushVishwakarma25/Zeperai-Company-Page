import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function BlogCta() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
          Let&apos;s build something that sells
        </h2>
        <p className="text-lg md:text-xl text-[#6B6B72] mb-10">
          Schedule a discovery call and let&apos;s talk about which of these your brand needs first.
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 px-9 py-4 bg-[#0A0A0B] text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform"
        >
          Schedule a Call <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
