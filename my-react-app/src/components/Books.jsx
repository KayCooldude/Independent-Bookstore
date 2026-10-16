import { useState } from 'react'
import { books, categories } from '../data/books'
import BookCard from './BookCard'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Books({ quantities, onQuantityChange }) {
  const [category, setCategory] = useState('All')

  const visibleBooks =
    category === 'All' ? books : books.filter((book) => book.category === category)

  return (
    <section id="books" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 text-center sm:px-8 sm:py-20">
      <SectionTitle>Featured Books</SectionTitle>

      <Reveal>
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter books by category"
        >
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              aria-pressed={category === name}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark ${
                category === name
                  ? 'border-primary bg-primary text-ink shadow'
                  : 'border-ink/20 hover:border-primary'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </Reveal>

      <p className="sr-only" aria-live="polite">
        Showing {visibleBooks.length} {visibleBooks.length === 1 ? 'book' : 'books'}
      </p>

      {/* key={category} remounts the grid so the cards animate in again after each filter change */}
      <div key={category} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBooks.map((book, index) => (
          <Reveal key={book.id} delay={(index % 3) * 120}>
            <BookCard
              book={book}
              quantity={quantities[book.id] ?? 0}
              onQuantityChange={(next) => onQuantityChange(book.id, next)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
