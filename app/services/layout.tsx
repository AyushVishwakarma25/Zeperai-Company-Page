import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | ZeperAI Media",
  description: "Meta ads, Shopify development, AI ad creatives, video production, and brand design built to help your business sell online.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | ZeperAI Media",
    description: "Creative and marketing services for brands that want to sell more online.",
    url: "/services",
    type: "website",
  },
}

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
