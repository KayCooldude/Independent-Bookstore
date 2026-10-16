import FavouriteToggle from './FavouriteToggle'
import QuantityStepper from './QuantityStepper'

const formatPrice = (amount) => `R${amount.toLocaleString('en-ZA')}`

export default function BookCard({ book, quantity, onQuantityChange, favourite, onFavouriteChange }) {
  return (
    <article className="group flex h-full flex-col rounded-xl bg-card p-4 text-center shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={book.image}
          alt={book.alt}
          loading="lazy"
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
        />
        <FavouriteToggle
          pressed={favourite}
          onChange={onFavouriteChange}
          label={book.title}
          className="absolute right-3 top-3"
        />
      </div>

      <span className="mx-auto mb-2 rounded-full bg-primary/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide">
        {book.category}
      </span>
      <h3 className="font-serif text-xl font-bold">{book.title}</h3>
      <p className="mt-1 text-sm text-muted">By {book.author}</p>
      <p className="mt-2 text-lg font-semibold">{formatPrice(book.price)}</p>

      <div className="mt-auto flex flex-col items-center gap-2 pt-4">
        <QuantityStepper
          value={quantity}
          onChange={onQuantityChange}
          label={book.title}
        />
        <p
          className={`text-sm text-muted transition-opacity duration-300 ${
            quantity > 0 ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={quantity === 0}
        >
          Subtotal: {formatPrice(book.price * quantity)}
        </p>
      </div>
    </article>
  )
}
