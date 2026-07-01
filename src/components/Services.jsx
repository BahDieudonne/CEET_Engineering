import { services } from '../data/siteData'
import CurrentDivider from './CurrentDivider'

// Simple inline icon set keyed by service id — kept intentionally minimal
// (single stroke, gold) rather than reaching for a generic icon library look.
const icons = {
  'electrical-installations': 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  'power-audit': 'M4 19h16M7 19V9M12 19V5M17 19v-7',
  'solar-analysis': 'M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  'pv-installations': 'M3 8l4-4h10l4 4M3 8v10l4 4M3 8h18M21 8v10l-4 4M7 4v18M17 4v18',
  maintenance: 'M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3-2 2Z',
  'system-activation': 'M12 2v6M12 22a10 10 0 1 0-7-2.9',
  'roof-assessment': 'M3 12 12 4l9 8M6 11v9h12v-9',
  'load-assessment': 'M4 20h16M6 20V10M12 20V4M18 20v-7',
  'panel-mounting': 'M4 4h16v10H4zM4 20h16M8 14v6M16 14v6',
  'solar-streetlights': 'M12 2v4M8 6h8l2 6H6l2-6ZM12 12v10',
  consultation: 'M4 4h16v12H8l-4 4Z',
}

function Icon({ id }) {
  const d = icons[id] || icons.consultation
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <CurrentDivider label="What we do" />
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mt-3">
            Every electrical and solar service, under one roof
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-indigo-900/10 bg-white p-6 hover:border-gold-500/60 hover:shadow-lg transition-all"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-gold-400 group-hover:bg-gold-500 group-hover:text-indigo-950 transition-colors">
                <Icon id={service.id} />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-indigo-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
