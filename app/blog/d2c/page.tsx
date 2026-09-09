import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { CategoryTabs } from "@/components/blog/category-tabs"
import { PostGrid } from "@/components/blog/post-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { BreadcrumbSchema, BlogItemListSchema } from "@/components/blog/blog-schema"
import { getPostsByCategory } from "@/lib/blog"

export const metadata: Metadata = {
  title: "D2C Growth & Creative Playbooks — ZeperAI Blog",
  description:
    "Ad creative, Shopify conversion, and brand-building breakdowns for D2C and e-commerce brands — what actually moves sales, not just impressions.",
  alternates: {
    canonical: "https://zeperai.com/blog/d2c",
  },
  openGraph: {
    type: "website",
    url: "https://zeperai.com/blog/d2c",
    title: "D2C Growth & Creative Playbooks — ZeperAI Blog",
    description:
      "Ad creative, Shopify conversion, and brand-building breakdowns for D2C and e-commerce brands.",
    siteName: "ZeperAI",
  },
}

export default function D2CBlogPage() {
  const posts = getPostsByCategory("d2c")

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://zeperai.com/" },
          { name: "Blog", url: "https://zeperai.com/blog" },
          { name: "D2C", url: "https://zeperai.com/blog/d2c" },
        ]}
      />
      {posts.length > 0 && <BlogItemListSchema posts={posts} category="D2C" />}

      <BlogHero
        eyebrow="D2C & E-commerce"
        lines={["Creative and growth", "for brands that sell."]}
        description="Ad creative, Shopify conversion, and brand-building breakdowns built for D2C and e-commerce teams scaling paid and organic sales."
      />

      <section className="px-6 pb-28">
        <div className="container mx-auto max-w-6xl">
          <CategoryTabs active="d2c" />
          <PostGrid posts={posts} />
        </div>
      </section>

      <BlogCta />
      <Footer />
    </main>
  )
}
