import { Building2, TrendingUp, Globe } from 'lucide-react'

const services = [
  {
    title: 'Corporate Rebranding',
    desc: 'Modernize your logo and LinkedIn presence.',
    icon: Building2
  },
  {
    title: 'Performance Marketing',
    desc: 'Ads that generate B2B leads, not just likes.',
    icon: TrendingUp
  },
  {
    title: 'Export-Ready Kits',
    desc: 'Websites & Videos for Auto-Component exporters.',
    icon: Globe
  }
]

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="p-8 rounded-xl transition transform hover:scale-105 border border-slate-800"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <Icon size={40} className="mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
