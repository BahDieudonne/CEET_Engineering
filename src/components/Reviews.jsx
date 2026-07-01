import { useEffect, useState } from 'react'
import CurrentDivider from './CurrentDivider'

const initialForm = { name: '', rating: 0, message: '' }

function Stars({ value, onChange, size = 'text-2xl' }) {
  return (
    <div className={`flex gap-1 ${size}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          onClick={() => onChange(n)}
          className={n <= value ? 'text-gold-500' : 'text-indigo-950/15'}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load reviews')
        return r.json()
      })
      .then((data) => setReviews(data.reviews ?? []))
      .catch(() => setLoadError(true))
      .finally(() => setLoading(false))
  }, [])

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.rating) next.rating = 'Choose a star rating.'
    if (!form.message.trim()) next.message = 'Add a short review.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    if (!validate()) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')

      setReviews((prev) => [data.review, ...prev])
      setForm(initialForm)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <CurrentDivider label="Customer reviews" />
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mt-3 max-w-xl">
          What our customers say
        </h2>
        <p className="mt-3 text-ink/60 max-w-xl">
          Real feedback from people we've wired, mounted and powered up for.
        </p>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="space-y-5">
            {loading && <p className="text-ink/50 text-sm">Loading reviews…</p>}
            {loadError && (
              <p className="text-ink/50 text-sm">Couldn't load reviews right now. Please try again shortly.</p>
            )}
            {!loading && !loadError && reviews.length === 0 && (
              <p className="text-ink/50 text-sm">No reviews yet — be the first to leave one.</p>
            )}
            {reviews.map((r) => (
              <div key={r.id} className="rounded-2xl border border-indigo-900/10 bg-white p-6">
                <Stars value={r.rating} onChange={() => {}} size="text-sm" />
                <p className="mt-3 text-indigo-950/80 leading-relaxed">{r.message}</p>
                <p className="mt-3 text-sm font-semibold text-indigo-950">{r.name}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-indigo-900/10 bg-white p-7 md:p-8 space-y-5 h-fit"
          >
            <h3 className="font-display font-semibold text-lg text-indigo-950">Leave a review</h3>

            <div>
              <label htmlFor="review-name" className="block text-sm font-medium text-indigo-950 mb-1.5">
                Name
              </label>
              <input
                id="review-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                aria-invalid={!!errors.name}
                className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <p className="block text-sm font-medium text-indigo-950 mb-1.5">Rating</p>
              <Stars value={form.rating} onChange={(n) => setForm((f) => ({ ...f, rating: n }))} />
              {errors.rating && <p className="text-red-600 text-xs mt-1">{errors.rating}</p>}
            </div>

            <div>
              <label htmlFor="review-message" className="block text-sm font-medium text-indigo-950 mb-1.5">
                Your review
              </label>
              <textarea
                id="review-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                aria-invalid={!!errors.message}
                className="w-full rounded-lg border border-indigo-900/15 px-4 py-2.5 focus:border-gold-500"
              />
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-indigo-950 hover:bg-gold-500 hover:text-ink text-white font-semibold px-7 py-3.5 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Posting…' : 'Post review'}
            </button>
            {submitError && <p className="text-red-600 text-sm text-center">{submitError}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
