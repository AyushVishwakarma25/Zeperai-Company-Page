import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ZeperAI Media | Creative & Marketing Agency",
  description: "Meet ZeperAI Media, a creative and marketing agency combining strategy, design, content, and AI-assisted production to help brands grow.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ZeperAI Media | Creative & Marketing Agency",
    description: "The creative and marketing agency built to help brands grow with better strategy and faster production.",
    url: "/about",
    type: "website",
  },
}

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
