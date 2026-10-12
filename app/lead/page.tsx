'use client'

import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Clapperboard,
  Compass,
  Gauge,
  LayoutTemplate,
  MessageSquareText,
  Palette,
  Rocket,
  Sparkles,
  Store,
  Wand2,
} from 'lucide-react'

const proofStats = [
  { value: '50+', label: 'brands worked with' },
  { value: '100s', label: 'creatives produced' },
  { value: 'D2C + B2B', label: 'growth projects' },
]

const serviceOutcomes = [
  {
    title: 'Brand & Creative',
    items: ['Brand creatives', 'Campaign concepts', 'Social media creatives', 'Ad creatives', 'Graphic design'],
    icon: Palette,
  },
  {
    title: 'Product Visuals',
    items: ['AI product photography', 'Product display images', 'Lifestyle visuals', 'Marketplace creatives', 'Ad-ready product compositions'],
    icon: CameraIcon,
  },
  {
    title: 'Website & CRO',
    items: ['Shopify stores', 'Landing pages', 'Website design', 'CRO', 'Product page optimization'],
    icon: LayoutTemplate,
  },
  {
    title: 'Content & Ads',
    items: ['UGC-style content', 'AI UGC', 'Video creatives', 'Meta ad creatives', 'Social content'],
    icon: Clapperboard,
  },
  {
    title: 'Growth Systems',
    items: ['WhatsApp automation', 'Lead funnels', 'Marketing automation', 'Campaign strategy'],
    icon: Gauge,
  },
]

const caseStudies = [
  {
    name: 'Prustlr',
    label: 'From product pack → campaign-ready visual system',
    description:
      'Prustlr needed a consistent visual system across product imagery, promotional creatives and campaign assets that felt premium and conversion-ready.',
    chips: ['Product photography', 'Campaign creative', 'Brand system'],
  },
  {
    name: 'Varan Jewellers',
    label: 'Website → banners → product visuals → UGC',
    description:
      'The brand needed its craft to feel premium online while still producing fast, scalable visual assets for digital campaigns and product pages.',
    chips: ['Ecommerce website', 'Product visuals', 'Social content'],
  },
  {
    name: 'Scale projects',
    label: 'Website → ads → social → product imagery',
    description:
      'For growing brands, we connect the creative system so ad images, sales pages and brand assets all work as one conversion engine.',
    chips: ['Creative system', 'Offer design', 'Ad creative'],
  },
]

const whyChoose = [
  'One team instead of five freelancers',
  'Built around your brand, not generic AI visuals',
  'AI where it actually helps, human direction where it matters',
  'Fast iteration for more concepts and better testing',
  'Built for modern D2C marketing, not just portfolios',
]

const workflow = [
  'Tell us what you are trying to achieve',
  'We understand the brand + goal',
  'We build the creative direction',
  'Production',
  'Review & refine',
  'Launch',
]

const audience = [
  'You are a D2C brand launching or scaling products.',
  'You are spending on Meta or Google but your creatives are not keeping up.',
  'Your Shopify store needs better conversion-focused design.',
  'You are launching a new product and need the visual assets to support it.',
  'You are an agency or in-house team needing additional execution capacity.',
]

const audienceNot = [
  'You only want the cheapest possible designer.',
  'You want 20 creatives with no strategy or direction.',
  'You want us to copy another brand exactly.',
  'You expect overnight results without product or brand context.',
]

const testimonials = [
  {
    quote:
      'The difference was immediate. The product visuals felt clearer and the brand finally looked premium in every touchpoint.',
    author: 'Founder, D2C brand',
  },
  {
    quote:
      'We had creative requests everywhere, but no one was connecting the dots. ZeperAI gave us a single partner for brand, product and campaign assets.',
    author: 'Marketing lead, growing brand',
  },
]

const offers = [
  {
    title: 'Creative Sprint',
    text: 'For brands needing a specific campaign or project to move quickly.',
    accent: 'Campaign-ready creative direction',
  },
  {
    title: 'Growth Creative Partner',
    text: 'Ongoing monthly support for brands that need creative continuity and speed.',
    accent: 'Monthly creative execution',
  },
  {
    title: 'Full Brand Launch',
    text: 'Website, product visuals, creative system and launch assets in one tracked process.',
    accent: 'Brand + website + campaign assets',
  },
]

const faqs = [
  {
    question: 'How much does a project cost?',
    answer: 'Pricing depends on scope, timeline and deliverables. We usually tailor the engagement around the exact creative and execution needs for each brand.',
  },
  {
    question: 'Do you work with international brands?',
    answer: 'Yes. We work with brands in India and abroad, adapting creative, visual language and conversion strategy to the audience and market.',
  },
  {
    question: 'Do you work with existing brands?',
    answer: 'Absolutely. We can work with existing brand systems and refine them for better product storytelling, campaign consistency and conversion performance.',
  },
  {
    question: 'Can you work with our existing marketing team?',
    answer: 'Yes. We can act as an extension of your team, supporting creative production, design direction, landing pages and visual execution.',
  },
  {
    question: 'Do you provide monthly retainers?',
    answer: 'Yes. For ongoing brands, we offer retainers for consistent creative production, campaign support and growth-focused design work.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'The timing depends on scope, but most focused creative and landing-page projects start within a few days and move quickly once the brief is approved.',
  },
  {
    question: 'Do you use AI in the creative process?',
    answer: 'Yes, but strategically. We use AI to speed up production and variation testing while keeping human direction, brand logic and quality control intact.',
  },
  {
    question: 'Can you work with Shopify?',
    answer: 'Yes. We design and build or improve Shopify stores, product pages and landing pages with a conversion-first structure in mind.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes. Review rounds are built into the process so you can refine creative direction, messaging and final execution before launch.',
  },
  {
    question: 'What happens after I submit the enquiry?',
    answer: 'We review your brief, assess the fit, and reach out with the next step, usually a quick discovery call or a tailored project plan.',
  },
]

function CameraIcon({ className }: { className?: string }) {
  return <Sparkles className={className} />
}

export default function LeadCapturePage() {
  const formRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    country: 'India',
    monthlyRevenue: '',
    monthlyAdSpend: '',
    biggestChallenge: '',
  })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery-call' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const totalValue = useMemo(() => '$4,800+', [])

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          biggestChallenge: form.biggestChallenge || 'Not specified',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.')
      }

      setSubmitMessage('Thanks — your enquiry has been received. We will be in touch soon.')
      setForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        websiteUrl: '',
        country: 'India',
        monthlyRevenue: '',
        monthlyAdSpend: '',
        biggestChallenge: '',
      })
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Unable to submit right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <section className="relative overflow-hidden bg-[#F5F5F7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(68,82,251,0.10),transparent_32%),radial-gradient(circle_at_right,_rgba(34,197,94,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full border border-[#0A0A0B]/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0A0A0B]"
              >
                FOR D2C & B2B BRANDS THAT WANT TO LOOK BETTER AND SELL BETTER
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-6 max-w-2xl text-4xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-5xl md:text-6xl"
              >
                Your Brand Doesn&apos;t Need More Content.
                <span className="block text-[#4452FB]">It Needs Creative That Actually Moves People To Buy.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-6 max-w-xl text-base leading-7 text-[#6B6B72] sm:text-lg"
              >
                We help D2C and B2B brands build better websites, ad creatives, product visuals and content designed to turn attention into enquiries and sales.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0B] px-7 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                >
                  LET&apos;S BUILD YOUR NEXT CAMPAIGN
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-sm text-[#6B6B72]"
              >
                No long-term contracts. No unnecessary retainers. Just focused creative + marketing execution.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[28px] border border-black/10 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.07)]"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Prustlr', tone: 'bg-[#F7F1FF]' },
                  { title: 'Shopify work', tone: 'bg-[#EAF5FF]' },
                  { title: 'Product visuals', tone: 'bg-[#E8F9F0]' },
                  { title: 'Ad creatives', tone: 'bg-[#FFF3E8]' },
                  { title: 'Websites', tone: 'bg-[#F5F5F7]' },
                  { title: 'UGC & video', tone: 'bg-[#F3F4F6]' },
                ].map((item) => (
                  <div key={item.title} className={`rounded-2xl ${item.tone} min-h-[130px] border border-black/5 p-4`}>
                    <div className="flex h-full items-end">
                      <div className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0B]">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6B6B72]">
            Brands we&apos;ve worked with
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-black/10 bg-[#F7F7F8] px-4 py-5 text-center">
                <div className="text-3xl font-black tracking-[-0.06em] text-[#0A0A0B]">{stat.value}</div>
                <div className="mt-2 text-sm text-[#6B6B72]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">The problem</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl md:text-5xl">
            Your marketing probably doesn&apos;t have a <span className="text-[#4452FB]">content</span> problem.
            <span className="mt-2 block">It has an execution problem.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {[
            'Your product is good, but the creatives do not communicate it clearly.',
            'Your website gets traffic but does not convert enough.',
            'Your product photos look disconnected from your brand.',
            'You are constantly asking different freelancers for different pieces.',
            'Your ads need 10 new creatives, but getting them made takes weeks.',
            'Your brand looks different across website, ads and social.',
            'You know you need better marketing, but do not have an in-house creative team.',
          ].map((point, index) => (
            <div key={point} className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-black/10 bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4452FB] text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="flex items-center text-base leading-7 text-[#2C2C30]">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-black/10 bg-[#0A0A0B] p-8 text-white">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9AA4FF]">The bridge</div>
          <h3 className="mt-4 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
            You do not need another person who only does one thing.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200">
            You need a creative partner who understands the brand, the offer and the full funnel so every asset works together.
          </p>
        </div>
      </section>

      <section className="bg-[#111315] py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9AA4FF]">The ZeperAI solution</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-5xl">
              One Creative Partner. Multiple Pieces Of Your Marketing.
            </h2>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="max-w-3xl text-lg leading-8 text-zinc-200">
              We combine human creative direction, strategy and design with AI-powered production workflows to help brands create, test and launch marketing assets faster.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                'Human strategy',
                'AI-assisted production',
                'Brand-level execution',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-base font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Your service ecosystem</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl md:text-5xl">
            A creative partner for the whole conversion system.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceOutcomes.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-[24px] border border-black/10 bg-white p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4452FB]/10 text-[#4452FB]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0B]">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5F5F67]">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-[#4452FB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F0F2F6] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Case studies</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl md:text-5xl">
              Creative proof that actually shows the work.
            </h2>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="rounded-[28px] border border-black/10 bg-white p-5 md:p-8">
                <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4452FB]">
                  <span>{study.name}</span>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0A0A0B]">{study.label}</h3>
                    <p className="text-base leading-7 text-[#5F5F67]">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-black/10 bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#0A0A0B]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="min-h-[180px] rounded-[20px] border border-black/10 bg-[linear-gradient(135deg,#F4F4F5,#E8ECFF)] p-4">
                        <div className="flex h-full items-end justify-start">
                          <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0B]">
                            Visual {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Why ZeperAI?</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
            Why brands work with us
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyChoose.map((item) => (
            <div key={item} className="rounded-[24px] border border-black/10 bg-white p-5 text-base font-medium leading-7 text-[#2D2D31]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A0A0B] py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9AA4FF]">How it works</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-5xl">
              From brief to campaign-ready.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9AA4FF]">0{index + 1}</div>
                <p className="text-base font-medium leading-7 text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Who is this for?</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
              This is probably a good fit if...
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-3 text-left">
              {audience.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-base leading-7 text-[#2D2D31]">
                  <BadgeCheck className="mt-1 h-5 w-5 text-[#4452FB]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Probably not for you if...</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
              The wrong fit is a waste for everyone.
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-3 text-left">
              {audienceNot.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#F4F4F7] p-4 text-base leading-7 text-[#2D2D31]">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#0A0A0B] text-center text-[10px] font-bold leading-5 text-white">✕</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F6] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Testimonials</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">What clients say</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-[28px] border border-black/10 bg-white p-6">
                <div className="text-lg leading-8 text-[#2D2D31]">“{item.quote}”</div>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#4452FB]">{item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">The offer</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
            Let&apos;s build the creative system your brand actually needs.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-[28px] border border-black/10 bg-white p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4452FB]">Service</div>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.05em] text-[#0A0A0B]">{offer.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#5F5F67]">{offer.text}</p>
              <div className="mt-6 rounded-2xl bg-[#F5F5F7] p-3 text-sm font-medium text-[#0A0A0B]">{offer.accent}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111315] py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9AA4FF]">Founder</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-5xl">
                Built by someone who actually does the work.
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <p className="text-base leading-8 text-zinc-200">
                I&apos;m Ayush, founder of ZeperAI. I started freelancing after graduation and spent the last few years working across design, websites, marketing and AI-powered creative production. Instead of building ZeperAI around one service, I wanted to build the kind of creative partner brands can hire: one team that understands the brand, the technology and the marketing behind the creative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">FAQ</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openFaq === index
            return (
              <div key={faq.question} className="rounded-[22px] border border-black/10 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-[#0A0A0B]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#0A0A0B] transition ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && <div className="border-t border-black/10 px-5 py-4 text-base leading-7 text-[#5F5F67]">{faq.answer}</div>}
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#0A0A0B] py-24 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9AA4FF]">Final CTA</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-6xl">
            Your next campaign could look very different.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300">
            Tell us what you are building, what is not working and what you need help with.
          </p>

          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#4452FB] px-8 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
          >
            LET&apos;S TALK ABOUT YOUR PROJECT
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-4 text-sm text-zinc-400">Takes about 2 minutes. We will review your requirements before getting back to you.</div>
        </div>
      </section>

      <section ref={formRef} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Enquiry form</div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
              Tell us where your funnel is leaking.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5F5F67]">
              Fill in the form and we will review your current funnel, offer and messaging direction before suggesting the next best step.
            </p>
            <div className="mx-auto mt-8 max-w-sm space-y-4 text-left">
              {['No generic pitch', 'Clear growth feedback', 'Practical next steps'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#2D2D31]">
                  <BadgeCheck className="h-5 w-5 text-[#4452FB]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-black/10 bg-white p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-6">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Full name*
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Business / brand name*
                <input
                  required
                  value={form.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="Your company"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Email*
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="name@email.com"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Phone*
                <input
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="+91 98xxx"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-2">
                Website URL
                <input
                  value={form.websiteUrl}
                  onChange={(e) => handleChange('websiteUrl', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="https://yourwebsite.com"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Country*
                <select
                  required
                  value={form.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none focus:border-[#4452FB]"
                >
                  <option>India</option>
                  <option>UAE</option>
                  <option>Australia</option>
                  <option>Singapore</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-1">
                Monthly revenue*
                <input
                  required
                  value={form.monthlyRevenue}
                  onChange={(e) => handleChange('monthlyRevenue', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="$10k - $50k"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-2">
                Monthly ad spend*
                <input
                  required
                  value={form.monthlyAdSpend}
                  onChange={(e) => handleChange('monthlyAdSpend', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="$1k - $10k"
                />
              </label>

              <label className="block text-sm text-[#2D2D31] sm:col-span-2">
                Biggest challenge*
                <textarea
                  required
                  rows={4}
                  value={form.biggestChallenge}
                  onChange={(e) => handleChange('biggestChallenge', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F8] px-3 py-3 text-[#0A0A0B] outline-none placeholder:text-[#8A8A92] focus:border-[#4452FB]"
                  placeholder="Tell us what is not converting or scaling right now"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0B] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'LET\'S TALK ABOUT YOUR PROJECT'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {submitMessage && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#F5F5F7] px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4452FB]">Book a call</div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#0A0A0B] sm:text-4xl">
            Ready to talk through your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#5F5F67]">
            Choose a time that works for you and tell us what you are building.
          </p>

          <div className="mx-auto mt-8 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white p-4 text-left shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-6">
            <div style={{ height: '600px', width: '100%' }}>
              <Cal
                namespace="discovery-call"
                calLink="ayush-vishwakarma-alzvnh/discovery-call"
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
