import type { BlogPostMeta } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"

export function RelatedPosts({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null

  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-black/[0.06]">
      <div className="container mx-auto max-w-5xl">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#4452FB] mb-3">
          Keep Reading
        </span>
        <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-10">Related posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
