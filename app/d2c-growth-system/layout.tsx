import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "D2C Growth System - Scale Your Brand With Strategic Creative | ZeperAI",
  description: "Get a free brand audit and discover the 3-step D2C growth system we use to help e-commerce brands scale 3-5x. Ad creatives, Reels editing, Shopify strategy—all aligned for maximum ROAS.",
  keywords: [
    "D2C growth system",
    "e-commerce creative agency",
    "brand audit D2C",
    "ad creative strategy",
    "ROAS optimization",
    "Shopify conversion",
    "Reels editing service",
    "creative strategy for e-commerce",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "D2C Growth System - Scale Your Brand 3-5x Faster",
    description: "Free audit + proven 3-step growth system for D2C brands. Ad creatives, Reels editing, brand strategy—all aligned.",
    url: "https://zeperai.com/d2c-growth-system",
    siteName: "ZeperAI",
    images: [
      {
        url: "https://zeperai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeperAI D2C Growth System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2C Growth System - Scale Your Brand 3-5x Faster",
    description: "Free audit + proven growth system for D2C brands.",
    images: ["https://zeperai.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zeperai.com/d2c-growth-system",
  },
}

export default function D2CGrowthSystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
