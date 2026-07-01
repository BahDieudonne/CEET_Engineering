import { company, hero, projectVideo } from '../data/siteData'
import projectImg from '../assets/gallery/work1.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-circuit-fade text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={projectVideo.poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={projectVideo.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-circuit-fade opacity-85" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="eyebrow mb-4">{hero.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            {hero.headline.split(' and ')[0]}
            <span className="block text-gold-400">and Solar Deals</span>
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-xl leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gold-500 hover:bg-gold-400 text-ink font-semibold px-7 py-3.5 transition-colors"
            >
              {hero.primaryCta}
            </a>
            <a
              href={company.phoneHref}
              className="rounded-full border border-white/30 hover:border-gold-400 hover:text-gold-400 text-white font-semibold px-7 py-3.5 transition-colors"
            >
              {hero.secondaryCta} — {company.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-white/50 text-sm font-mono">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            System status: taking new consultations in {company.location.split(',')[1].trim()}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={projectImg}
              alt="CEET technician in full safety harness inspecting a rooftop solar installation"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-indigo-900/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-4">
            <span className="h-10 w-10 rounded-full bg-gold-500/20 grid place-items-center text-gold-400 font-display font-bold">
              ☀
            </span>
            <div>
              <p className="text-sm font-semibold text-white">No blackout</p>
              <p className="text-xs text-white/60">Reliable solar, day and night</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
