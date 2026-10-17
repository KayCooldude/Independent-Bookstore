import { useState } from 'react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const field =
  'w-full rounded-lg border border-ink/20 bg-white/70 px-4 py-3 text-base outline-none transition duration-300 placeholder:text-muted/70 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/30'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // No backend yet – this just shows the confirmation.
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl scroll-mt-16 px-4 py-16 text-center sm:px-8 sm:py-20">
      <SectionTitle>Contact Us</SectionTitle>

      <Reveal>
        <p className="mb-8 text-muted">Have questions or need recommendations? Reach out to us!</p>
      </Reveal>

      <Reveal delay={150}>
        {sent && (
          <p
            role="status"
            className="mb-6 animate-fade-up rounded-lg bg-primary/40 px-4 py-3 font-semibold"
          >
            Thanks for getting in touch! We&apos;ll reply soon.
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            className={field}
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your name"
            required
          />
          <input
            className={field}
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your email"
            required
          />
          <textarea
            className={`${field} min-h-36 resize-y`}
            name="message"
            placeholder="Your Message"
            aria-label="Your message"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-5 py-3.5 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:w-48"
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  )
}
