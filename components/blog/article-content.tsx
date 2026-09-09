export function ArticleContent({ html }: { html: string }) {
  return (
    <div
      className="
        prose-zc max-w-none
        text-[17px] leading-[1.8] text-[#0A0A0B]/90
        [&_h2]:font-poppins [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold
        [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:leading-snug [&_h2]:text-[#0A0A0B]
        [&_h3]:font-poppins [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-[#0A0A0B]
        [&_p]:mb-6
        [&_a]:text-[#4452FB] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#4452FB]/40 hover:[&_a]:decoration-[#4452FB]
        [&_ul]:mb-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2
        [&_ol]:mb-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2
        [&_li]:leading-[1.7]
        [&_blockquote]:border-l-2 [&_blockquote]:border-[#4452FB] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-[#6B6B72] [&_blockquote]:my-8
        [&_code]:bg-[#0A0A0B]/[0.06] [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[15px]
        [&_img]:rounded-2xl [&_img]:my-8
        [&_strong]:font-semibold [&_strong]:text-[#0A0A0B]
        [&_hr]:border-black/[0.08] [&_hr]:my-12
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
