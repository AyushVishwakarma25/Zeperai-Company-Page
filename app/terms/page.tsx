import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | ZeperAI Media",
  description: "Terms and conditions for using ZeperAI Media services.",
}

const sections = [
  {
    title: "1. Services",
    body: "ZeperAI Media provides creative, design, Shopify development, advertising, content production, and related growth services as agreed in writing with each client.",
  },
  {
    title: "2. Engagements and payment",
    body: "Project scope, timelines, fees, revisions, and payment milestones will be confirmed before work begins. Work may pause when invoices or required client inputs are overdue.",
  },
  {
    title: "3. Client responsibilities",
    body: "Clients are responsible for providing accurate information, brand assets, approvals, access, and feedback needed to complete the work. Delays in these materials may affect delivery timelines.",
  },
  {
    title: "4. Intellectual property",
    body: "After full payment, final approved deliverables created specifically for the client transfer to the client unless otherwise agreed. ZeperAI Media retains ownership of working files, unused concepts, internal methods, and pre-existing materials.",
  },
  {
    title: "5. Third-party platforms",
    body: "Shopify, Meta, Google, hosting providers, and other third-party platforms are governed by their own terms. ZeperAI Media cannot guarantee uninterrupted availability, approval, reach, or performance from those platforms.",
  },
  {
    title: "6. Results and limitations",
    body: "We work toward measurable growth, but marketing outcomes depend on factors outside our control. No specific revenue, traffic, conversion, or advertising result is guaranteed.",
  },
  {
    title: "7. Confidentiality",
    body: "Both parties agree to keep confidential information shared during an engagement private, except where disclosure is required by law or necessary to deliver the agreed services.",
  },
  {
    title: "8. Contact",
    body: "Questions about these terms can be sent to growth@zeperai.com.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A0A0B]">
      <Navbar />
      <section className="px-6 pt-36 pb-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm font-semibold text-[#4452FB] hover:underline">Back to home</Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#4452FB]">Legal</p>
          <h1 className="mt-4 font-poppins text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Terms and Conditions</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6B6B72]">These terms outline how engagements with ZeperAI Media work. By working with us, you agree to the terms below.</p>
          <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
            {sections.map((section) => (
              <section key={section.title} className="py-8">
                <h2 className="font-poppins text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-[#6B6B72]">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
