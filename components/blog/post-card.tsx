import Link from "next/link"
import Image from "next/image"
import type { BlogPostMeta } from "@/lib/blog"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl bg-white border border-black/[0.06] overflow-hidden hover:border-[#4452FB]/40 transition-colors"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F7]">
        <Image
          src={post.featuredImage || "/placeholder.svg"}
          alt={post.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#4452FB] mb-3">
          {post.category === "b2b" ? "B2B" : "D2C"}
        </span>
        <h3 className="font-poppins text-xl font-bold leading-snug mb-2 text-[#0A0A0B] group-hover:text-[#4452FB] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-[#6B6B72] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-[#6B6B72]/80 mt-auto">
          <span>{formatDate(post.publishedDate)}</span>
          <span className="w-1 h-1 rounded-full bg-[#6B6B72]/40" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
