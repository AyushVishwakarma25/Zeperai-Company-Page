'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check } from 'lucide-react'

const schema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  brandName: z.string().min(2, 'Brand name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  website: z.string().optional(),
  productType: z.string().min(1, 'Please select'),
  brandStage: z.string().min(1, 'Please select'),
  branding: z.array(z.string()).optional(),
  helpWith: z.array(z.string()).optional(),
  timeline: z.string().min(1, 'Please select'),
  budget: z.string().min(1, 'Please select'),
  challenge: z.string().min(10, 'Please describe your challenge'),
})

type FormData = z.infer<typeof schema>

export function PartnerForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<Partial<FormData>>({
    branding: [],
    helpWith: [],
  })

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, trigger, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: formData as FormData,
  })

  const handleNextStep = async () => {
    const stepFields = {
      1: ['fullName', 'brandName', 'email', 'phone'],
      2: ['productType'],
      3: ['brandStage'],
      4: ['branding'],
      5: ['helpWith'],
      6: ['timeline'],
      7: ['budget', 'challenge'],
    } as any

    const isValid = await trigger(stepFields[step] as any)
    if (isValid) {
      const values = watch()
      setFormData(values)
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    setStep(step - 1)
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
        setSubmittedEmail(data.email)
        setSubmittedName(data.name)
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-purple-950/10 to-transparent">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-emerald-400/20 border border-emerald-400 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-950/10 to-transparent">
      <div className="container mx-auto max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((s) => (
              <div key={s} className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-emerald-400' : 'bg-white/10'}`} />
            ))}
          </div>
          <p className="text-xs text-gray-400">Step {step} of 7</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8"
        >
          {submitted ? (
            <div className="text-center space-y-6 py-8">
              <div className="text-6xl">✨</div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
                Profile Completed!
              </h2>
              <p className="text-gray-300 mb-3">
                Thank you for sharing your brand details. We&apos;re excited to help you scale.
              </p>
              <div className="bg-emerald-950/30 border border-emerald-400/50 rounded-lg p-4 text-emerald-200 text-sm mb-6">
                A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Next step: Choose your preferred time for a 30-minute discovery call where we&apos;ll discuss your growth strategy.
              </p>
              <Button
                onClick={() => {
                  window.location.href = `https://cal.com/zeperai?email=${encodeURIComponent(formData.email || '')}&name=${encodeURIComponent(formData.fullName || '')}`
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-base"
              >
                Book Your Slot
              </Button>
            </div>
          ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">Basic Information</h3>
                <div>
                  <label className="block text-xs text-gray-300 mb-2">Full Name *</label>
                  <input
                    {...register('fullName')}
                    placeholder="Your full name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-2">Brand Name *</label>
                  <input
                    {...register('brandName')}
                    placeholder="Your brand name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                  {errors.brandName && <p className="text-red-400 text-xs mt-1">{errors.brandName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-2">Email Address *</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-2">Phone Number *</label>
                  <input
                    {...register('phone')}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-2">Website / Instagram (Optional)</label>
                  <input
                    {...register('website')}
                    placeholder="https://yoursite.com or @handle"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Product Type */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">What are you planning to sell?</h3>
                <div className="space-y-2">
                  {['Fashion', 'Skincare', 'Supplements', 'Food & Beverage', 'Jewelry', 'Electronics', 'Home Decor', 'Other'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="radio"
                        value={option}
                        {...register('productType')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.productType && <p className="text-red-400 text-xs">{errors.productType.message}</p>}
              </motion.div>
            )}

            {/* Step 3: Brand Stage */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">What stage is your brand currently in?</h3>
                <div className="space-y-2">
                  {['Just an idea', 'Product sourcing phase', 'Ready to launch', 'Already selling offline', 'Already selling online'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="radio"
                        value={option}
                        {...register('brandStage')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.brandStage && <p className="text-red-400 text-xs">{errors.brandStage.message}</p>}
              </motion.div>
            )}

            {/* Step 4: Do you have branding? */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">Do you already have branding?</h3>
                <p className="text-xs text-gray-400">Select all that apply</p>
                <div className="space-y-2">
                  {['Logo', 'Packaging Design', 'Product Images', 'Brand Guidelines', 'None Yet'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        value={option}
                        {...register('branding')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: What do you need help with? */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">What do you need help with?</h3>
                <p className="text-xs text-gray-400">Select all that apply</p>
                <div className="space-y-2">
                  {['Shopify Store', 'Branding', 'Product Page Design', 'Product Creatives', 'Ad Creatives', 'Integrations & Automation', 'CRO Optimization', 'Full Launch System'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        value={option}
                        {...register('helpWith')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 6: Expected Launch Timeline */}
            {step === 6 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">Expected launch timeline?</h3>
                <div className="space-y-2">
                  {['Within 7 Days', 'Within 30 Days', '1–3 Months', 'Just Exploring'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="radio"
                        value={option}
                        {...register('timeline')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && <p className="text-red-400 text-xs">{errors.timeline.message}</p>}
              </motion.div>
            )}

            {/* Step 7: Budget & Challenge */}
            {step === 7 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-poppins font-bold text-white">Monthly marketing budget?</h3>
                <div className="space-y-2 mb-6">
                  {['$500', '$800', '$1,200', '$2,000+'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                      <input
                        type="radio"
                        value={option}
                        {...register('budget')}
                        className="w-4 h-4"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.budget && <p className="text-red-400 text-xs mb-4">{errors.budget.message}</p>}

                <div>
                  <h3 className="text-lg font-poppins font-bold text-white mb-4">What's your biggest challenge right now?</h3>
                  <textarea
                    {...register('challenge')}
                    placeholder="What's stopping your brand from launching or scaling right now?"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400"
                  />
                  {errors.challenge && <p className="text-red-400 text-xs mt-1">{errors.challenge.message}</p>}
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={handlePrevStep}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              {step < 7 && (
                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
                >
                  Continue →
                </Button>
              )}
              {step === 7 && (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Profile'}
                </Button>
              )}
            </div>

            <p className="text-xs text-gray-400 text-center">
              We respect your privacy. No spam, just growth strategies.
            </p>
          </form>
          )}
        </motion.div>
        </div>
      </section>
    )
  }
