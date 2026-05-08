import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-sofia" })
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "ZeperAI — AI-Powered Creative Agency | Ad Creatives, Video Editing & Shopify Design",
  description: "ZeperAI is an AI-powered creative agency helping D2C and e-commerce brands sell more. We build high-converting ad creatives, Reels editing, Shopify websites, motion graphics, and brand strategy — for USA and Indian brands.",
  keywords: ["AI ad creatives", "creative agency D2C", "Shopify website design", "video editing agency", "Reels editing", "motion graphics ads", "e-commerce creative agency", "UGC ads", "ROAS-focused creative", "brand design agency India"],
  robots: "index, follow",
  authors: [{ name: "ZeperAI" }],
  creator: "ZeperAI",
  publisher: "ZeperAI",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://zeperai.com"),
  alternates: {
    canonical: "https://zeperai.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeperai.com/",
    title: "ZeperAI — AI-Powered Creative Agency for D2C Brands",
    description: "Ad creatives, Reels editing, Shopify websites, and motion graphics that make people stop, watch, and buy. AI-powered. Human-guided. Built for growth.",
    siteName: "ZeperAI",
    images: [
      {
        url: "https://zeperai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeperAI — AI Creative Agency for D2C Brands",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeperAI — AI-Powered Creative Agency for D2C Brands",
    description: "Ad creatives, Reels, Shopify design, and motion graphics that convert. AI-powered. Human-guided.",
    images: ["https://zeperai.com/og-image.jpg"],
    creator: "@zeperai",
    site: "@zeperai",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", inter.variable, playfair.variable, poppins.variable)}>
        {children}
      </body>
    </html>
  )
}
