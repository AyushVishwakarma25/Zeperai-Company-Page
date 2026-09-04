import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Creative Tools — ZeperAI Studio Platform | ZeperAI Media",
  description: "ZeperAI Media's in-house AI creative platform, ZeperAI Studio, generates on-brand product shots, ad creatives, and marketing visuals in minutes. See what powers our agency work.",
  keywords: ["AI creative platform", "AI ad creative generator", "AI product photography", "ZeperAI Studio", "AI marketing tools"],
  alternates: {
    canonical: "https://zeperai.com/tools",
  },
  openGraph: {
    type: "website",
    url: "https://zeperai.com/tools",
    title: "AI Creative Tools — ZeperAI Studio Platform",
    description: "The AI creative platform behind ZeperAI Media's agency work — generate on-brand product shots and ad creatives in minutes.",
    siteName: "ZeperAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creative Tools — ZeperAI Studio Platform",
    description: "The AI creative platform behind ZeperAI Media's agency work.",
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
