import { internship } from '../data/siteData'

export default function Internship() {
  return (
    <section id="internship" className="bg-indigo-900 text-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_1fr] gap-12">
        <div>
          <p className="eyebrow">{internship.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">{internship.heading}</h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-md">{internship.body}</p>

          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="text-gold-400 font-semibold">Location: </span>
              <span className="text-white/80">{internship.location}</span>
            </p>
            <p>
              <span className="text-gold-400 font-semibold">Who can apply: </span>
              <span className="text-white/80">{internship.whoCanApply}</span>
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block mt-8 rounded-full bg-gold-500 hover:bg-gold-400 text-ink font-semibold px-7 py-3.5 transition-colors"
          >
            {internship.cta}
          </a>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h3 className="font-display font-semibold text-lg text-white mb-5">What you'll gain</h3>
          <ul className="space-y-4">
            {internship.gains.map((g) => (
              <li key={g} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-400 shrink-0" />
                <span className="text-white/80 text-sm">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
