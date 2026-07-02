import { useState } from 'react'
import { galleryItems, projectVideo } from '../data/siteData'
import CurrentDivider from './CurrentDivider'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const showRelative = (delta) =>
    setActiveIndex((i) => (i === null ? null : (i + delta + galleryItems.length) % galleryItems.length))

  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <CurrentDivider label="Our work" />
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mt-3 max-w-xl">
          Recent installations, up on the roof
        </h2>
        <p className="mt-3 text-ink/60 max-w-xl">
          A look at completed jobs: rooftop arrays, inverter and battery installs, from
          first roof assessment to system activation.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(i)}
              className="group relative rounded-xl overflow-hidden border border-indigo-900/10 aspect-[4/3] text-left"
            >
              {item.placeholder ? (
                <div className="h-full w-full grid place-items-center bg-indigo-950/5 text-ink/30">
                  <span className="font-mono text-xs px-4 text-center">{item.caption}</span>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              )}
              <span className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* Project video */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-indigo-900/10 bg-indigo-950/5">
          <video
            controls
            poster={projectVideo.poster}
            className="w-full max-h-[520px] bg-black"
          >
            <source src={projectVideo.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <p className="px-5 py-4 text-sm text-ink/60">{projectVideo.caption}</p>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-ink/90 flex items-center justify-center px-4"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-gold-400 text-3xl leading-none"
            onClick={close}
          >
            ×
          </button>
          <button
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-white/70 hover:text-gold-400 text-4xl"
            onClick={(e) => {
              e.stopPropagation()
              showRelative(-1)
            }}
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-white/70 hover:text-gold-400 text-4xl"
            onClick={(e) => {
              e.stopPropagation()
              showRelative(1)
            }}
          >
            ›
          </button>

          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {galleryItems[activeIndex].placeholder ? (
              <div className="aspect-[4/3] grid place-items-center bg-white/5 rounded-xl text-white/40 font-mono text-sm">
                {galleryItems[activeIndex].caption}
              </div>
            ) : (
              <img
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].caption}
                className="w-full rounded-xl"
              />
            )}
            <p className="mt-4 text-center text-white/70 text-sm">{galleryItems[activeIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
