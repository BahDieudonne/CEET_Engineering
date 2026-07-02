import { useState } from 'react'
import { company, nav } from '../data/siteData'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-indigo-950/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="CEET logo" className="h-10 w-10 md:h-11 md:w-11 object-contain" />
          <span className="font-display font-semibold text-white leading-tight text-sm md:text-base">
            Competence Electrical<br className="hidden sm:block" /> Engineering Tech
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={company.phoneHref} className="text-sm font-mono text-white/80 hover:text-gold-400">
            {company.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold-500 hover:bg-gold-400 text-ink font-semibold text-sm px-5 py-2.5 transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l14 14M20 6L6 20" strokeLinecap="round" />
            ) : (
              <path d="M3 7h20M3 13h20M3 19h20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-indigo-950 px-5 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/90 font-medium text-base"
            >
              {item.label}
            </a>
          ))}
          <a href={company.phoneHref} className="text-white/70 font-mono text-sm">
            {company.phone}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold-500 text-ink font-semibold text-sm px-5 py-3 text-center"
          >
            Get a Free Consultation
          </a>
        </div>
      )}
    </header>
  )
}
