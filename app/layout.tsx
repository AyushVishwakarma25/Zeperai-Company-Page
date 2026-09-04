import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import Script from "next/script"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SchemaMarkup } from "@/components/schema-markup"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-sofia" })
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "ZeperAI Media — Creative & Growth Studio for D2C and B2B Brands",
  description: "ZeperAI Media builds websites, ad creatives, and content that turn visitors into buyers and leads. Meta ads, Shopify & web development, AI ad creatives, video and brand design — for D2C and B2B brands and firms in India and abroad.",
  keywords: ["Shopify website design", "Meta ads management", "AI ad creatives", "video editing agency", "brand design agency", "D2C creative studio", "e-commerce creative agency", "conversion focused website design", "B2B creative agency", "website design for service businesses", "marketing agency for interior designers", "brand design for firms", "AI creative platform"],
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
    title: "ZeperAI — AI-Powered Creative Agency for D2C & B2B Brands",
    description: "Ad creatives, Reels editing, websites, and motion graphics that make people stop, watch, and act. AI-powered. Human-guided. Built for growth, whether you sell products or pitch clients.",
    siteName: "ZeperAI",
    images: [
      {
        url: "https://zeperai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeperAI — AI Creative Agency for D2C and B2B Brands",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeperAI — AI-Powered Creative Agency for D2C & B2B Brands",
    description: "Ad creatives, Reels, website design, and motion graphics that convert. AI-powered. Human-guided.",
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
    <html lang="en">
      <head>
        <SchemaMarkup />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MY0962XWG5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MY0962XWG5');
          `}
        </Script>
      </head>
      <body className={cn("min-h-screen bg-[#F5F5F7] font-sans antialiased", inter.variable, playfair.variable, poppins.variable)}>
        {children}
      </body>
    </html>
  )
}
