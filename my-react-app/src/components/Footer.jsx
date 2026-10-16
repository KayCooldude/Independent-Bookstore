import { navLinks } from '../data/navLinks'
import Reveal from './Reveal'

const socials = [
  { label: 'Facebook', icon: 'ri-facebook-circle-fill' },
  { label: 'Twitter', icon: 'ri-twitter-fill' },
  { label: 'Instagram', icon: 'ri-instagram-fill' },
]

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-muted/40 px-4 pb-6 pt-10 text-center sm:px-10">
      <Reveal>
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] transition-colors hover:text-primary-dark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mb-6 flex justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-muted/60 text-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary"
            >
              <i className={social.icon} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="text-sm">&copy; 2026 Independent Bookstore. All rights reserved.</p>
      </Reveal>
    </footer>
  )
}
