import { whyChooseUs } from '../data/siteData'

const marks = ['◆', '✿', '⚡']

export default function WhyChooseUs() {
  return (
    <section className="bg-indigo-950 text-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">Why choose CEET</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 max-w-xl">
          Built for the way power actually gets used
        </h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <span className="text-gold-400 text-2xl">{marks[i % marks.length]}</span>
              <h3 className="mt-4 font-display font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-white/65 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
