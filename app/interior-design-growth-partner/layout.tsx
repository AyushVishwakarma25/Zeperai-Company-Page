import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Client Acquisition System | ZeperAI Studio",
  description: "Turn your interior projects into a client acquisition system with content, Meta ads, website conversion, lead capture, and pre-call nurture.",
  keywords: ["interior design marketing", "interior design lead generation", "interior design client acquisition", "interior design Meta ads"],
  openGraph: {
    title: "Turn Interior Projects Into A Client Acquisition System",
    description: "A connected content, ads, website, and lead capture system for interior designers and studios.",
    url: "https://zeperai.com/interior-design-growth-partner",
    type: "website",
  },
}

export default function InteriorDesignGrowthPartnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
