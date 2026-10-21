"use client"

import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pulin Goyal",
    role: "Founder",
    company: "Prustlr",
    content: "It's hard to find someone that adapts at the speed an early-stage brand needs to grow. From our earliest ad tests to managing our ongoing social and visual assets today, they've been an integral part of our journey.",
  },
  {
    id: 2,
    name: "Vansh Rastoge",
    role: "Founder",
    company: "Varan Jewellers",
    content: "We started with a full website build and ended up keeping them on for over a year to handle all our advertising and graphics. Ayush understands how to present a luxury brand online, and having that level of consistency month after month is why we're still working together.",
  },
  {
    id: 3,
    name: "Aman Kumar",
    role: "Operations Lead",
    company: "Fast Diagnostics",
    content: "The creatives were clean, informative, and easy for patients to understand, which directly translated into better inquiry rates and higher local awareness for our center.",
  },
]

export function AnimatedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="overflow-hidden border-y border-black/[0.06] bg-white px-6 py-24 md:py-32">
      <div className="container mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#4452FB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4452FB]">
            <Star aria-hidden="true" className="size-3 fill-current" /> Client perspective
          </span>
          <h2 className="font-poppins text-3xl font-bold tracking-[-0.04em] text-[#0A0A0B] sm:text-4xl md:text-5xl">What it&apos;s like to work together.</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0A0A0B]/55 md:text-lg">Don&apos;t just take our word for it. Hear from the people building and growing their businesses with us.</p>
          <div className="mt-8 flex items-center gap-3" role="tablist" aria-label="Testimonials">
            {testimonials.map((testimonial, index) => (
              <button key={testimonial.id} type="button" onClick={() => setActiveIndex(index)} role="tab" aria-selected={activeIndex === index} aria-label={`View testimonial ${index + 1}`} className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-10 bg-[#4452FB]" : "w-2.5 bg-[#0A0A0B]/15"}`} />
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[360px] md:min-h-[430px]">
          {testimonials.map((testimonial, index) => (
            <motion.article key={testimonial.id} initial={false} animate={{ opacity: activeIndex === index ? 1 : 0, x: activeIndex === index ? 0 : 32, scale: activeIndex === index ? 1 : 0.96 }} transition={{ duration: 0.45 }} aria-hidden={activeIndex !== index} className="absolute inset-0 rounded-2xl border border-black/[0.08] bg-[#F5F5F7] p-7 shadow-sm md:p-9">
              <Quote aria-hidden="true" className="mb-8 size-8 text-[#4452FB]/50" />
              <p className="text-lg font-medium leading-relaxed text-[#0A0A0B] md:text-xl">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="absolute inset-x-7 bottom-7 border-t border-black/[0.08] pt-5 md:inset-x-9 md:bottom-9">
                <p className="font-semibold text-[#0A0A0B]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#0A0A0B]/50">{testimonial.role} <span aria-hidden="true">|</span> {testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
