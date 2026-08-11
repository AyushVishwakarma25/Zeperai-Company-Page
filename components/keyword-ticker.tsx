"use client"

const keywords = [
  "Shopify Development",
  "Meta Ads Management",
  "AI Ad Creatives",
  "Content & Video Production",
  "Brand Design",
  "For Brands in India & Abroad",
]

export function KeywordTicker() {
  const track = [...keywords, ...keywords]

  return (
    <section className="relative overflow-hidden border-y border-black/[0.08] bg-[#F5F5F7] py-5">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent z-20 pointer-events-none" />

      <div className="flex w-max marquee-track">
        {track.map((keyword, index) => (
          <div
            key={index}
            className="min-w-max text-[#0A0A0B]/60 font-medium text-sm md:text-base whitespace-nowrap flex items-center gap-3 px-6"
          >
            <span>{keyword}</span>
            <span className="text-[#4452FB]">●</span>
          </div>
        ))}
      </div>
    </section>
  )
}
