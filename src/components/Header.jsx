import { useEffect, useState } from 'react'
import { navLinks } from '../data/navLinks'

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'relative text-[0.95rem] transition-colors hover:text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100'

  return (
    <header
      className={`sticky top-0 z-50 border-b border-muted/40 bg-bg/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#home" className="animate-fade-in text-lg font-bold sm:text-xl">
          Independent <span className="text-primary-dark">Bookstore</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#books"
            className="relative flex items-center gap-1 text-xl"
            aria-label={`Cart: ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            <i className="ri-shopping-bag-3-line" aria-hidden="true" />
            {cartCount > 0 && (
              // key restarts the pop animation each time the count changes
              <span
                key={cartCount}
                className="absolute -right-3 -top-2 grid h-5 min-w-5 animate-pop place-items-center rounded-full bg-primary px-1 text-xs font-bold"
              >
                {cartCount}
              </span>
            )}
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-2xl transition hover:bg-primary/30 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu: slides open by animating grid row height */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="overflow-hidden px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="block border-t border-muted/20 py-3 transition-colors hover:text-primary-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
