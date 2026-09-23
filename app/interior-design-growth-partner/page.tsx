"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StrategySections, PartnerFit } from "@/components/interior-acquisition/strategy-sections"
import { QualificationForm, TrustAndFaq } from "@/components/interior-acquisition/qualification-form"

export default function InteriorDesignGrowthPartnerPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  return <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]"><Navbar /><StrategySections onCta={scrollToForm} /><PartnerFit onCta={scrollToForm} /><TrustAndFaq onCta={scrollToForm} /><section ref={formRef} className="px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><QualificationForm /></div></section><Footer /></main>
}
