'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  monthlyRevenue: z.string().min(1, 'Please select'),
})

type FormData = z.infer<typeof schema>

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [stepData, setStepData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    monthlyRevenue: '',
  })
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: stepData,
  })

  const handleNextStep = async () => {
    let fieldsToValidate = step === 1 ? ['name', 'company'] : ['email', 'phone', 'monthlyRevenue']
    const isValid = await trigger(fieldsToValidate as any)
    
    if (isValid) {
      const values = watch()
      setStepData(values)
      setStep(2)
    }
  }

  const handlePrevStep = () => {
    setStep(1)
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'd2c-growth-partner',
          referralSource: 'd2c-growth-partner',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Redirect to Cal booking after 1 second
        setTimeout(() => {
          window.location.href = `https://cal.com/zeperai?email=${encodeURIComponent(data.email)}&name=${encodeURIComponent(data.name)}`
        }, 1000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-4xl mb-4">🎉</p>
            <h2 className="text-3xl font-bold text-white mb-2">We Got Your Info!</h2>
            <p className="text-gray-300">Redirecting you to book your strategy call...</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Claim Your Package
            </h2>
            <p className="text-gray-300 mb-8">
              Fill out this quick qualification form and book your free strategy call. We analyze your brand and show you exactly where the growth opportunities are.
            </p>
            <ul className="space-y-3">
              {[
                'No credit card needed',
                '30-minute strategy call',
                'Custom growth recommendations',
                'Competitive analysis included',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-emerald-400">
                  <span>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 order-1 md:order-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Step 1: Name and Company */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Step 1 of 2: Tell us about yourself</label>
                  </div>
                  <div>
                    <input
                      {...register('name')}
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('company')}
                      placeholder="Brand / Company name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>

                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2.5 rounded-lg"
                  >
                    Continue →
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Contact and Revenue */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Step 2 of 2: Contact information</label>
                  </div>
                  <div>
                    <input
                      {...register('email')}
                      placeholder="Your email"
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('phone')}
                      placeholder="WhatsApp or phone number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <select
                      {...register('monthlyRevenue')}
                      defaultValue={stepData.monthlyRevenue}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="" disabled>Monthly revenue</option>
                      <option value="0-25k">$0 - $25k</option>
                      <option value="25k-100k">$25k - $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k+">$500k+</option>
                    </select>
                    {errors.monthlyRevenue && <p className="text-red-400 text-xs mt-1">{errors.monthlyRevenue.message}</p>}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={handlePrevStep}
                      variant="outline"
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Claim Your Package'}
                    </Button>
                  </div>
                </motion.div>
              )}

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, just growth strategies.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
