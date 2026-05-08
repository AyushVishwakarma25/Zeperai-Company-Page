import { motion } from "framer-motion"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Brand Audit",
    price: "Free",
    description: "Your first step",
    features: [
      "30-min strategy call",
      "Competitive analysis",
      "Creative recommendations",
      "ROAS improvement plan",
      "No credit card needed",
    ],
    cta: "Book Your Audit",
    highlighted: false,
  },
  {
    name: "Creative Sprint",
    price: "$2,999",
    description: "Quick wins in 2 weeks",
    features: [
      "4 high-performing ad creatives",
      "2 Reels scripts + editing",
      "Shopify homepage redesign",
      "Ad copy optimization",
      "Performance tracking setup",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Growth System",
    price: "$8,999/mo",
    description: "Scale predictably",
    features: [
      "Everything in Creative Sprint",
      "20+ monthly deliverables",
      "Dedicated creative partner",
      "Weekly strategy calls",
      "Performance optimization",
      "Unlimited revisions",
    ],
    cta: "Schedule Call",
    highlighted: false,
  },
  {
    name: "Full-Stack System",
    price: "$15,999/mo",
    description: "Complete takeover",
    features: [
      "Everything in Growth System",
      "Full Shopify overhaul",
      "Content calendar planning",
      "Email & SMS creative",
      "24/7 support channel",
      "Quarterly audit reviews",
    ],
    cta: "Schedule Call",
    highlighted: false,
  },
]

export function PackageSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-purple-950/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-3 md:mb-4 text-white">
            Our Growth Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
            Start with a free audit. Then choose the package that matches your growth stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 transition-all hover:scale-105 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-purple-600 to-blue-600 border-2 border-purple-400 shadow-2xl shadow-purple-500/50"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl md:text-2xl font-poppins font-bold mb-1 ${
                  pkg.highlighted ? "text-white" : "text-white"
                }`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.highlighted ? "text-purple-100" : "text-gray-400"}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-6">
                <p className={`text-4xl font-bold ${
                  pkg.highlighted ? "text-white" : "text-emerald-400"
                }`}>
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className={`flex items-start gap-3 text-sm ${
                    pkg.highlighted ? "text-purple-50" : "text-gray-300"
                  }`}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.highlighted
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
