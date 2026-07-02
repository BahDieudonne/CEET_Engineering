import { useState } from 'react'
import { company } from '../data/siteData'
import CurrentDivider from './CurrentDivider'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Add a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // Replace this with a real form backend (e.g. Formspree, EmailJS);
    // for now it falls back to opening a pre-filled email.
    const subject = encodeURIComponent(`Consultation request from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <CurrentDivider label="Get in touch" />
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mt-3 max-w-xl">
          Tell us what needs power
        </h2>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-2">Call or write</p>
              <a href={company.phoneHref} className="block text-xl font-display font-semibold text-indigo-950">
                {company.phone}
              </a>
              {company.additionalPhones.map((p) => (
                <a key={p.href} href={p.href} className="block text-indigo-950/80">
                  {p.number}
                </a>
              ))}
              <a href={company.emailHref} className="block text-indigo-950/70 mt-1">
                {company.email}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-2">Location</p>
              <p className="text-indigo-950/80">{company.location}</p>
            </div>

            <div className="rounded-xl overflow-hidden border border-indigo-900/10 h-64">
              <iframe
                title="CEET location map"
                src={company.mapEmbedSrc}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-indigo-900/10 p-7 md:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-950 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
              />
              {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-indigo-950 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
                />
                {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-indigo-950 mb-1.5">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-950 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
              />
              {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-indigo-950 hover:bg-gold-500 hover:text-ink text-white font-semibold px-7 py-3.5 transition-colors"
            >
              Send message
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-700 text-center">
                Opening your email client to send this. Thank you.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
