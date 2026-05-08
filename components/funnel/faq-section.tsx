import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is this different from hiring a freelance designer?",
    answer:
      "Freelancers create assets. We build a complete system. You get strategy, consistency, ongoing optimization, and a partner who understands your D2C business model. Freelancers usually don't track performance or optimize for ROAS.",
  },
  {
    question: "What's included in the free audit?",
    answer:
      "A 30-minute strategy call where we analyze your current ads, website, product visuals, and market. You get a written report with 5-7 actionable recommendations, competitive benchmarking, and a proposal tailored to your goals.",
  },
  {
    question: "How fast can you start creating?",
    answer:
      "Creative Sprint: 2 weeks. Growth System: we start immediately and deliver your first round of assets within 7 days. We work with urgency because you need results, not delays.",
  },
  {
    question: "Do you work with brands outside India/USA?",
    answer:
      "Yes, we work globally. Our clients are in Australia, Singapore, UAE, and beyond. The strategy adapts to your market, but the results are the same: better creative, higher ROAS.",
  },
  {
    question: "What if I'm not happy with the creative?",
    answer:
      "Unlimited revisions in Growth System and above. If direction is off, we pivot. We're not done until you're happy. Our goal is your success, not just completing projects.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track metrics that matter: CTR, ROAS, conversion rate, cost per acquisition, and revenue impact. Monthly reports show exactly what's working and where we need to optimize.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            Common Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about working with ZeperAI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-white/10 rounded-xl px-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <AccordionTrigger className="text-left font-poppins font-bold text-white hover:text-emerald-400 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
