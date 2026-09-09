import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const SITE_URL = "https://zeperai.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${SITE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/tools`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/booking`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/blog`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/blog/b2b`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/blog/d2c`, priority: 0.8, changeFrequency: "weekly" as const },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
  }))

  const posts = getAllPosts()
  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
