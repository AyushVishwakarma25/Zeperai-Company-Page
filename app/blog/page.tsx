import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { CategoryTabs } from "@/components/blog/category-tabs"
import { PostGrid } from "@/components/blog/post-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { BreadcrumbSchema } from "@/components/blog/blog-schema"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — ZeperAI Media",
  description:
    "Ideas on ad creatives, Shopify growth, and brand-building for D2C brands — plus website, content, and positioning playbooks for B2B firms and service businesses.",
  alternates: {
    canonical: "https://zeperai.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://zeperai.com/blog",
    title: "Blog — ZeperAI Media",
    description:
      "Ideas on ad creatives, Shopify growth, and brand-building for D2C brands — plus website, content, and positioning playbooks for B2B firms and service businesses.",
    siteName: "ZeperAI",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://zeperai.com/" },
          { name: "Blog", url: "https://zeperai.com/blog" },
        ]}
      />

      <BlogHero
        eyebrow="Blog"
        lines={["Ideas for brands", "that want to sell."]}
        description="Playbooks and breakdowns for D2C brands scaling ad creative and Shopify growth, and for B2B firms building a website and content engine that wins higher-value clients."
      />

      <section className="px-6 pb-28">
        <div className="container mx-auto max-w-6xl">
          <CategoryTabs active="all" />
          <PostGrid posts={posts} />
        </div>
      </section>

      <BlogCta />
      <Footer />
    </main>
  )
}
