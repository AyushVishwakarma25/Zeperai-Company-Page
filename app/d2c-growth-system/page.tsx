"use client"

import { useState, useRef } from "react"
import { AnnouncementBar } from "@/components/funnel/announcement-bar"
import { FunnelNav } from "@/components/funnel/funnel-nav"
import { FunnelHero } from "@/components/funnel/funnel-hero"
import { ProblemsSection } from "@/components/funnel/problems-section"
import { SolutionBridge } from "@/components/funnel/solution-bridge"
import { PackageSection } from "@/components/funnel/package-section"
import { HowItWorks } from "@/components/funnel/how-it-works"
import { ResultsSection } from "@/components/funnel/results-section"
import { ComparisonSection } from "@/components/funnel/comparison-section"
import { FaqSection } from "@/components/funnel/faq-section"
import { FormSection } from "@/components/funnel/form-section"
import { FunnelFooter } from "@/components/funnel/funnel-footer"

export default function D2CGrowthSystemPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const packageRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPackage = () => {
    packageRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleFormSubmit = (email: string, name: string) => {
    // Redirect to Cal booking with pre-filled data
    const calUrl = new URL("https://cal.com/zeperai/consultation")
    calUrl.searchParams.set("name", name)
    calUrl.searchParams.set("email", email)
    window.location.href = calUrl.toString()
  }

  return (
    <main className="min-h-screen bg-black">
      <AnnouncementBar />
      <FunnelNav onCtaClick={scrollToForm} />
      <FunnelHero onCtaClick={scrollToForm} onPackageClick={scrollToPackage} />
      <ProblemsSection />
      <SolutionBridge />
      <div ref={packageRef}>
        <PackageSection />
      </div>
      <HowItWorks />
      <ResultsSection />
      <ComparisonSection />
      <FaqSection />
      <div ref={formRef}>
        <FormSection onSubmitSuccess={handleFormSubmit} />
      </div>
      <FunnelFooter />
    </main>
  )
}
