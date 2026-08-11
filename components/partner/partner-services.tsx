import { motion } from 'framer-motion'
import { Store, Smartphone, Video, Image, MessageCircle, Palette } from 'lucide-react'

const services = [
  {
    title: 'Shopify Store Design',
    description: 'High-converting store with mobile-first design, optimized checkout, and product pages that sell.',
    icon: <Store className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Ad Creatives',
    description: '10 high-performing Meta ads, 5 UGC videos, hooks that stop the scroll.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'Video Production',
    description: '2 animated product videos, 2 motion graphics, professional production quality.',
    icon: <Video className="w-8 h-8 text-pink-400" />,
  },
  {
    title: 'AI Product Photography',
    description: '30 AI-generated product images in different settings, with unlimited backgrounds.',
    icon: <Image className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'Social Media Content',
    description: '15 social posts per month with captions, hashtags, and a content calendar.',
    icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: 'Brand Identity',
    description: 'Logo, color palette, typography system, and all design assets for consistency.',
    icon: <Palette className="w-8 h-8 text-yellow-400" />,
  },
]

export function PartnerServices() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            What You Get
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Complete creative system built for D2C brands. Everything designed to convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
