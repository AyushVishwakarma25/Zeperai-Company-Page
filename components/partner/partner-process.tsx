import { motion } from 'framer-motion'

const timeline = [
  {
    day: 'Day 1',
    title: 'Kickoff Call',
    description: 'We get to know your brand, goals, and audience. Strategy framework starts.',
  },
  {
    day: 'Day 3-5',
    title: 'Design Phase',
    description: 'Shopify design concepts, ad creative briefs, and content calendar delivered.',
  },
  {
    day: 'Day 7',
    title: 'First Deliverables',
    description: '10 ad creatives, 30 product images, and initial content goes live.',
  },
  {
    day: 'Week 2-3',
    title: 'Video Production',
    description: '5 UGC videos, 2 product videos, and motion graphics delivered.',
  },
  {
    day: 'Week 4',
    title: 'Store Launch',
    description: 'Shopify store fully built and optimized. All assets integrated.',
  },
  {
    day: 'Week 5+',
    title: 'Ongoing Growth',
    description: 'Continuous optimization, monthly deliverables, performance tracking.',
  },
]

export function PartnerProcess() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white">
            Timeline to Launch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From kickoff to live in 4 weeks. Proven process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-2xl p-6"
            >
              <div className="text-sm font-semibold text-blue-400 mb-2">{item.day}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
