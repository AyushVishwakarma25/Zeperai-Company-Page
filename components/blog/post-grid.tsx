import type { BlogPostMeta } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"

export function PostGrid({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#6B6B72] text-lg">New posts are on the way — check back soon.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
