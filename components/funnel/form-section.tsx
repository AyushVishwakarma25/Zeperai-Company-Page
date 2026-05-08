"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(1, "Company name is required"),
  websiteUrl: z.string().url("Invalid website URL").optional().or(z.literal("")),
  country: z.enum(["India", "UAE", "Australia", "Singapore", "Other"]),
  monthlyRevenue: z.string().min(1, "Monthly revenue is required"),
  monthlyAdSpend: z.string().min(1, "Monthly ad spend is required"),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
})

type FormValues = z.infer<typeof formSchema>

interface FormSectionProps {
  onSubmitSuccess?: (email: string, name: string) => void
}

export function FormSection({ onSubmitSuccess }: FormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      websiteUrl: "",
      country: "India",
      monthlyRevenue: "",
      monthlyAdSpend: "",
      biggestChallenge: "",
      phone: "",
      email: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Form submission failed")
      }

      // Track GA4 conversion
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "d2c_growth_funnel",
          value: values.monthlyRevenue,
        })
      }

      // Call callback with email and name for Cal booking redirect
      if (onSubmitSuccess) {
        onSubmitSuccess(values.email, values.fullName)
      }

      // Reset form
      form.reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
      console.error("[v0] Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
              Ready to Scale Your D2C Brand?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Fill out this quick form and book your free brand audit. We&apos;ll analyze your current strategy and show you exactly where the opportunities are.
            </p>
            <div className="space-y-4">
              {[
                "✓ No credit card needed",
                "✓ 30-minute strategy call",
                "✓ Custom growth recommendation",
                "✓ Competitive analysis included",
              ].map((item, i) => (
                <p key={i} className="text-emerald-400 flex items-center gap-2">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Brand/Company Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your brand name"
                          {...field}
                          className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Website */}
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Website URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://yourwebsite.com"
                          {...field}
                          className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Country */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Country *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="UAE">UAE</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Singapore">Singapore</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Monthly Revenue */}
                <FormField
                  control={form.control}
                  name="monthlyRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Monthly Revenue *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="under-10k">Under $10K</SelectItem>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-plus">$500K+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Monthly Ad Spend */}
                <FormField
                  control={form.control}
                  name="monthlyAdSpend"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Monthly Ad Spend *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-2k">$500 - $2K</SelectItem>
                          <SelectItem value="2k-5k">$2K - $5K</SelectItem>
                          <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                          <SelectItem value="10k-plus">$10K+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Biggest Challenge */}
                <FormField
                  control={form.control}
                  name="biggestChallenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Biggest Challenge Right Now *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/20">
                          <SelectItem value="low-ctr">Low CTR on ads</SelectItem>
                          <SelectItem value="inconsistent-roas">Inconsistent ROAS</SelectItem>
                          <SelectItem value="brand-consistency">Brand not consistent</SelectItem>
                          <SelectItem value="creative-quality">Low creative quality</SelectItem>
                          <SelectItem value="scaling">Scaling challenges</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">WhatsApp/Phone *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1 (555) 000-0000"
                          {...field}
                          className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="bg-black/50 border-white/20 text-white placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Error message */}
                {submitError && (
                  <div className="bg-red-900/50 border border-red-700/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Book Your Free Audit →"}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. We&apos;ll only use your info to schedule your call.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
