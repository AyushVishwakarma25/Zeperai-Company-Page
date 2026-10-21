"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"

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
    content:
      "It's hard to find someone that adapts at the speed an early-stage brand needs to grow. From our earliest ad tests to managing our ongoing social and visual assets today, they've been an integral part of our journey.",
  },
  {
    id: 2,
    name: "Vansh Rastoge",
    role: "Founder",
    company: "Varan Jewellers",
    content:
      "We started with a full website build and ended up keeping them on for over a year to handle all our advertising and graphics. Ayush understands how to present a luxury brand online, and having that level of consistency month after month is why we're still working together.",
  },
  {
    id: 3,
    name: "Aman Kumar",
    role: "Operations Lead",
    company: "Fast Diagnostics",
    content:
      "The creatives were clean, informative, and easy for patients to understand, which directly translated into better inquiry rates and higher local awareness for our center.",
  },
]

export function AnimatedTestimonials() {
  return (
    <section id="testimonials" className="overflow-hidden border-y border-black/[0.06] bg-white px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#4452FB]">Client perspective</span>
          <h2 className="font-poppins text-3xl font-bold tracking-[-0.04em] text-[#0A0A0B] md:text-5xl">What it&apos;s like to work together.</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-black/[0.08] bg-[#F5F5F7] p-7 md:p-8"
            >
              <Quote aria-hidden="true" className="mb-8 size-7 text-[#4452FB]/60" />
              <blockquote className="flex-1 text-base leading-relaxed text-[#0A0A0B]/70">&ldquo;{testimonial.content}&rdquo;</blockquote>
              <figcaption className="mt-8 border-t border-black/[0.08] pt-5">
                <p className="font-semibold text-[#0A0A0B]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#0A0A0B]/50">{testimonial.role} <span aria-hidden="true">|</span> {testimonial.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
