import { company, footerLinks } from '../data/siteData'
import stamp from '../assets/stamp.jpg'

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white/70 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1.2fr_1fr_1fr_auto] gap-10">
        <div>
          <p className="font-display font-semibold text-white text-lg">{company.name}</p>
          <p className="mt-3 text-sm max-w-xs">
            All electrical and solar deals — installations, audits, maintenance and consultation
            across Bamenda and the North West Region.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Quick links</p>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold-400">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href={company.phoneHref} className="hover:text-gold-400">{company.phone}</a></li>
            {company.additionalPhones.map((p) => (
              <li key={p.href}><a href={p.href} className="hover:text-gold-400">{p.number}</a></li>
            ))}
            <li><a href={company.emailHref} className="hover:text-gold-400">{company.email}</a></li>
            <li>{company.location}</li>
            <li>
              <a
                href={company.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                </svg>
                Follow us on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="flex md:justify-end items-start">
          <img
            src={stamp}
            alt="CEET official seal, 2026"
            className="h-20 w-20 object-contain opacity-90"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-white/10 text-xs flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} {company.shortName} — Competence Electrical Engineering Tech. All rights reserved.</p>
        <p>Built for reliable power, every day.</p>
      </div>
    </footer>
  )
}
