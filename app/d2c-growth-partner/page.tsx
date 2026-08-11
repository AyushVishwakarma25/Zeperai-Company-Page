'use client'

import { useRef } from 'react'
import { PartnerHero } from '@/components/partner/partner-hero'
import { PartnerProblems } from '@/components/partner/partner-problems'
import { PartnerHowItWorks } from '@/components/partner/partner-how-it-works'
import { PartnerServices } from '@/components/partner/partner-services'
import { PartnerWho } from '@/components/partner/partner-who'
import { PartnerProcess } from '@/components/partner/partner-process'
import { PartnerVsl } from '@/components/partner/partner-vsl'
import { PartnerPricing } from '@/components/partner/partner-pricing'
import { PartnerComparison } from '@/components/partner/partner-comparison'
import { PartnerFaq } from '@/components/partner/partner-faq'
import { PartnerForm } from '@/components/partner/partner-form'
import { PartnerFooter } from '@/components/partner/partner-footer'

export default function D2CGrowthPartner() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-black">
      <PartnerHero onCtaClick={scrollToForm} />
      <PartnerVsl />
      <PartnerProblems />
      <PartnerHowItWorks />
      <PartnerServices />
      <PartnerWho />
      <PartnerProcess />
      <PartnerPricing onCtaClick={scrollToForm} />
      <PartnerComparison />
      <PartnerFaq />
      <div ref={formRef}>
        <PartnerForm />
      </div>
      <PartnerFooter />
    </main>
  )
}
