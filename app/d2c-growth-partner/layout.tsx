import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D2C Growth Partner — $1,997/mo AI Creative Agency | ZeperAI',
  description: 'Get a complete Shopify store, ad creatives, video production, and content creation. All done for you. Launch in 7 days. Built for D2C brands scaling from $0 to $100k+/month.',
  keywords: ['D2C agency', 'Shopify design', 'AI ad creatives', 'video production', 'creative agency'],
  openGraph: {
    title: 'D2C Growth Partner — Complete Brand System | ZeperAI',
    description: 'Shopify store + ad creatives + video + content. One system. $1,997/mo. Launch in 7 days.',
    url: 'https://zeperai.com/d2c-growth-partner',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D2C Growth Partner — $1,997/mo',
    description: 'Complete Shopify, creatives, video, and content system for D2C brands.',
  },
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
