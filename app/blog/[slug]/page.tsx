import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticleContent } from "@/components/blog/article-content"
import { BlogBreadcrumb } from "@/components/blog/blog-breadcrumb"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogCta } from "@/components/blog/blog-cta"
import { BreadcrumbSchema, BlogPostingSchema } from "@/components/blog/blog-schema"
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog"

const SITE_URL = "https://zeperai.com"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.metaTitle || post.title
  const canonical = `${SITE_URL}/blog/${post.slug}`

  return {
    title: `${title} — ZeperAI Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description: post.metaDescription,
      siteName: "ZeperAI",
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
      images: [post.featuredImage],
      site: "@zeperai",
    },
    robots: "index, follow",
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

function slugifyHeading(heading: string) {
  return heading.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function prepareArticle(html: string) {
  const headings: { id: string; label: string; level: 2 | 3 }[] = []
  const usedIds = new Set<string>()
  const preparedHtml = html.replace(/<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag: string, attrs: string, inner: string) => {
    const label = inner.replace(/<[^>]+>/g, "").trim()
    const baseId = slugifyHeading(label) || "section"
    let id = baseId
    let suffix = 2
    while (usedIds.has(id)) id = `${baseId}-${suffix++}`
    usedIds.add(id)
    headings.push({ id, label, level: tag.toLowerCase() as 2 | 3 })
    const withoutId = attrs.replace(/\s+id=(?:"[^"]*"|'[^']*')/i, "")
    return `<${tag}${withoutId} id="${id}">${inner}</${tag}>`
  })
  return { preparedHtml, headings }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post, 3)
  const { preparedHtml, headings } = prepareArticle(post.contentHtml)
  const categoryLabel = post.category === "b2b" ? "B2B" : "D2C"
  const categoryHref = `/blog/${post.category}`

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: categoryLabel, url: `${SITE_URL}${categoryHref}` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]}
      />
      <BlogPostingSchema post={post} />

      <article className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <BlogBreadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: categoryLabel, href: categoryHref },
              { name: post.title },
            ]}
          />

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-4">
            {categoryLabel}
          </span>

          <h1 className="font-poppins text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-[#6B6B72] mb-10">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-[#6B6B72]/40" />
            <span>{formatDate(post.publishedDate)}</span>
            <span className="w-1 h-1 rounded-full bg-[#6B6B72]/40" />
            <span>{post.readTime}</span>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 bg-white">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.featuredImageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {headings.length > 0 && (
            <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4452FB]">In this article</p>
              <ol className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id} className={heading.level === 3 ? "pl-4" : ""}>
                    <a href={`#${heading.id}`} className="text-sm font-medium text-[#0A0A0B]/70 transition-colors hover:text-[#4452FB]">
                      {heading.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <ArticleContent html={preparedHtml} />
        </div>
      </article>

      <RelatedPosts posts={related} />
      <BlogCta />
      <Footer />
    </main>
  )
}
