import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import { marked } from "marked"

export type BlogCategory = "b2b" | "d2c"

export interface BlogPostMeta {
  title: string
  slug: string
  category: BlogCategory
  metaTitle?: string
  metaDescription: string
  keywords: string[]
  excerpt: string
  featuredImage: string
  featuredImageAlt: string
  author: string
  publishedDate: string
  updatedDate?: string
  readTime: string
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function readAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

function readPostFile(slug: string): { data: Record<string, any>; content: string } | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  return { data, content }
}

function toMeta(slug: string, data: Record<string, any>, content: string): BlogPostMeta {
  const stats = readingTime(content)
  return {
    title: data.title,
    slug: data.slug || slug,
    category: data.category,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords || [],
    excerpt: data.excerpt,
    featuredImage: data.featuredImage,
    featuredImageAlt: data.featuredImageAlt || data.title,
    author: data.author || "ZeperAI",
    publishedDate: data.publishedDate,
    updatedDate: data.updatedDate,
    readTime: data.readTime ? `${data.readTime} min read` : Math.ceil(stats.minutes) <= 1 ? "1 min read" : `${Math.ceil(stats.minutes)} min read`,
  }
}

/** All posts, newest first. */
export function getAllPosts(): BlogPostMeta[] {
  const slugs = readAllSlugs()
  const posts = slugs
    .map((slug) => {
      const file = readPostFile(slug)
      if (!file) return null
      return toMeta(slug, file.data, file.content)
    })
    .filter((p): p is BlogPostMeta => Boolean(p))

  return posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
}

/** Posts filtered by category, newest first. */
export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

/** Full post with rendered HTML content, or null if not found. */
export function getPostBySlug(slug: string): BlogPost | null {
  const file = readPostFile(slug)
  if (!file) return null
  const meta = toMeta(slug, file.data, file.content)
  const contentHtml = marked.parse(file.content, { async: false }) as string
  return { ...meta, contentHtml }
}

/**
 * Related posts: same category, ranked by keyword overlap with the current post,
 * excluding the current post itself. Falls back to most recent same-category posts
 * if there isn't enough keyword overlap to fill the count.
 */
export function getRelatedPosts(current: BlogPostMeta, count = 3): BlogPostMeta[] {
  const candidates = getPostsByCategory(current.category).filter((p) => p.slug !== current.slug)

  const scored = candidates.map((p) => {
    const overlap = p.keywords.filter((k) => current.keywords.includes(k)).length
    return { post: p, overlap }
  })

  scored.sort((a, b) => {
    if (b.overlap !== a.overlap) return b.overlap - a.overlap
    return new Date(b.post.publishedDate).getTime() - new Date(a.post.publishedDate).getTime()
  })

  return scored.slice(0, count).map((s) => s.post)
}

export function getAllSlugs(): string[] {
  return readAllSlugs()
}
