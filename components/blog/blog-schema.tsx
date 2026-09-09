import type { BlogPostMeta } from "@/lib/blog"

const SITE_URL = "https://zeperai.com"

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BlogPostingSchema({ post }: { post: BlogPostMeta }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ZeperAI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-zeperai.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BlogItemListSchema({ posts, category }: { posts: BlogPostMeta[]; category: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `ZeperAI Blog — ${category}`,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
