import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prustlr Protein Oats Case Study | ZeperAI Studio",
  description: "A full-funnel visual system for Prustlr protein oats across PDP, Amazon A+ content, video, and Blinkit.",
  alternates: { canonical: "https://zeperai.com/case-studies/prustlr" },
  openGraph: {
    title: "Prustlr Protein Oats Case Study | ZeperAI Studio",
    description: "How ZeperAI built a visual system for Prustlr across every buying surface.",
    url: "https://zeperai.com/case-studies/prustlr",
    type: "article",
  },
}

export default function PrustlrLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
