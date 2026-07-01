import { about, stats } from '../data/siteData'
import teamImg from '../assets/gallery/solar1.jpg'
import CurrentDivider from './CurrentDivider'

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <CurrentDivider label={about.eyebrow} />
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mt-3">{about.heading}</h2>
          <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-gold-500 pl-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display font-bold text-2xl text-indigo-950">{s.value}</dd>
                <dd className="text-xs text-ink/50 mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-indigo-900/10 shadow-xl">
          <img
            src={teamImg}
            alt="CEET crew member securing solar panel wiring on a rooftop"
            className="w-full h-[460px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
