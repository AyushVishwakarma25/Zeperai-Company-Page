"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Circle } from "lucide-react"

const painPoints = [
  ["01", "Too much dependence on referrals", "Referrals are valuable, but you do not control when they happen. We put your studio in front of homeowners in the locations you actually serve."],
  ["02", "Your website looks good. But does it generate enquiries?", "Your portfolio should move a potential client from your work to your process, expertise, trust, and a clear consultation."],
  ["03", "Your projects get likes. But where are the enquiries?", "We turn finished spaces into transformation stories that show what was not working, how you thought, and what changed."],
  ["04", "The discovery call starts from zero", "A pre-call journey answers the questions that matter before you speak, so trust starts building before the consultation."],
  ["05", "Five freelancers. One disconnected system", "Content, paid ads, website, lead capture, and nurture work better when one partner owns the direction."],
]

const systemSteps = [
  ["A homeowner sees your ad", "Your project appears in front of someone within your target market."],
  ["They discover your work", "They enter a journey built around your expertise, not a random social profile."],
  ["They understand your process", "Your content shows more than beautiful interiors. It shows how you think."],
  ["They visit your website", "Positioning, process, and proof answer the questions that matter."],
  ["They enquire or book", "The next step is clear and the form helps qualify fit."],
  ["They arrive warmer", "Pre-call information starts the conversation before the consultation."],
]

export function StrategySections({ onCta }: { onCta: () => void }) {
  return (
    <>
      <section className="border-b border-black/[0.08] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">For interior designers & studios</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-4xl font-poppins text-5xl font-bold leading-[.98] tracking-[-0.06em] sm:text-6xl md:text-8xl">Turn your interior projects into a <span className="text-[#4452FB]">client acquisition system.</span></motion.h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="mb-8 overflow-hidden rounded-3xl border border-black/[0.08] bg-black shadow-[0_24px_80px_rgba(10,10,11,0.14)]">
              <div className="aspect-video">
                <iframe src="https://www.loom.com/embed/REPLACE_WITH_LOOM_VIDEO_ID" title="Interior design client acquisition system overview" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" />
              </div>
            </div>
            <p className="text-lg leading-relaxed text-[#6B6B72]">ZeperAI Studio helps interior designers turn portfolio, content, website, and advertising into one system built to generate and convert qualified enquiries.</p>
            <button onClick={onCta} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0A0A0B] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">Build my client acquisition system <ArrowUpRight className="h-4 w-4" /></button>
            <p className="mt-4 text-xs text-[#6B6B72]">Tell us about your studio. We will show you where the biggest opportunities are.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">The shift</p><h2 className="font-poppins text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">Your work is beautiful. Your client acquisition should be too.</h2><p className="mt-6 text-lg leading-relaxed text-[#6B6B72]">The problem is not necessarily the quality of your work. It is the system around it. Your projects should do more than sit in a portfolio. They should help bring in your next enquiry.</p></div><div className="mt-16 grid gap-4 md:grid-cols-5">{["Referrals", "Followers", "Website", "Finished photos", "Freelancers"].map((item) => <div key={item} className="rounded-2xl border border-black/[0.08] bg-[#F5F5F7] p-5 text-sm font-semibold">Depending on<br /><span className="text-[#6B6B72]">{item}</span></div>)}</div></div></section>

      <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">What we fix</p><h2 className="max-w-3xl font-poppins text-4xl font-bold tracking-[-0.04em] md:text-6xl">The system behind the enquiry.</h2></div><p className="max-w-sm text-[#6B6B72]">Content + Ads + Website + Lead Capture + Booking + Nurture, connected around one goal.</p></div><div className="mt-16 divide-y divide-black/[0.1] border-y border-black/[0.1]">{painPoints.map(([number, title, copy]) => <article key={number} className="grid gap-6 py-10 md:grid-cols-[100px_1fr_1fr] md:items-start"><span className="font-poppins text-5xl font-bold text-[#4452FB]/30">{number}</span><h3 className="max-w-md font-poppins text-2xl font-bold leading-tight">{title}</h3><p className="max-w-md text-base leading-relaxed text-[#6B6B72]">{copy}</p></article>)}</div></div></section>

      <section className="bg-[#0A0A0B] px-6 py-24 text-white md:py-32"><div className="mx-auto max-w-6xl"><div className="grid gap-16 md:grid-cols-[.85fr_1.15fr]"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8E98FF]">One project, multiple assets</p><h2 className="font-poppins text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">Your projects already contain the marketing material.</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">You do not necessarily need to create more from scratch. You need to extract more value from the work you are already doing.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Project story", "Instagram content", "Reel", "Ad creative", "Landing page proof", "Case study", "Lead nurture", "Sales conversation"].map((item, i) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-4 text-sm"><span className="text-[#8E98FF]">0{i + 1}</span>{item}</div>)}</div></div></div></section>

      <section className="bg-white px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">How it works</p><h2 className="font-poppins text-4xl font-bold tracking-[-0.04em] md:text-6xl">A better path from attention to consultation.</h2></div><div className="mt-16 grid gap-0 md:grid-cols-3">{systemSteps.map(([title, copy], index) => <div key={title} className="border-l border-t border-black/[0.1] p-6 md:min-h-48"><div className="mb-10 flex items-center justify-between"><span className="font-poppins text-3xl font-bold text-[#4452FB]">0{index + 1}</span><Circle className="h-3 w-3 fill-[#4452FB] text-[#4452FB]" /></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#6B6B72]">{copy}</p></div>)}</div></div></section>
    </>
  )
}

export function PartnerFit({ onCta }: { onCta: () => void }) {
  return <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl rounded-3xl bg-[#E9EBFF] p-8 md:p-16"><div className="grid gap-12 md:grid-cols-[1fr_.8fr] md:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">Built for interior designers</p><h2 className="font-poppins text-4xl font-bold tracking-[-0.04em] md:text-6xl">More relevant attention. More qualified enquiries.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B72]">One partner for creative strategy, AI-assisted production, performance marketing, websites, conversion systems, and nurture.</p></div><button onClick={onCta} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#0A0A0B] px-5 py-3 text-sm font-semibold text-white">Talk to ZeperAI <ArrowUpRight className="h-4 w-4" /></button></div></div></section>
}
