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
  title: "B2B Website & Brand Playbooks — ZeperAI Blog",
  description:
    "Website, content, and positioning playbooks for B2B firms and service businesses — built to win higher-value clients, not just traffic.",
  alternates: {
    canonical: "https://zeperai.com/blog/b2b",
  },
  openGraph: {
    type: "website",
    url: "https://zeperai.com/blog/b2b",
    title: "B2B Website & Brand Playbooks — ZeperAI Blog",
    description:
      "Website, content, and positioning playbooks for B2B firms and service businesses.",
    siteName: "ZeperAI",
  },
}

export default function B2BBlogPage() {
  const posts = getPostsByCategory("b2b")

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://zeperai.com/" },
          { name: "Blog", url: "https://zeperai.com/blog" },
          { name: "B2B", url: "https://zeperai.com/blog/b2b" },
        ]}
      />
      {posts.length > 0 && <BlogItemListSchema posts={posts} category="B2B" />}

      <BlogHero
        eyebrow="B2B & Service Firms"
        lines={["Brand and content", "that wins clients."]}
        description="Website, content, and positioning playbooks for B2B firms and service businesses building a stronger case for higher-value clients."
      />

      <section className="px-6 pb-28">
        <div className="container mx-auto max-w-6xl">
          <CategoryTabs active="b2b" />
          <PostGrid posts={posts} />
        </div>
      </section>

      <BlogCta />
      <Footer />
    </main>
  )
}
