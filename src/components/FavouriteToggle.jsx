// Controlled toggle: parent owns `pressed` and handles `onChange`.
// Same pattern as QuantityStepper (value in, change out), reused once per book.
export default function FavouriteToggle({ pressed, onChange, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!pressed)}
      aria-pressed={pressed}
      aria-label={`${pressed ? 'Remove' : 'Save'} ${label} ${pressed ? 'from' : 'to'} favourites`}
      className={`grid h-10 w-10 place-items-center rounded-full bg-white/80 text-xl shadow backdrop-blur transition duration-300 hover:scale-110 active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark ${className}`}
    >
      {/* key restarts the pop animation each time it is switched on */}
      <i
        key={String(pressed)}
        className={`${pressed ? 'ri-heart-fill animate-pop text-red-600' : 'ri-heart-line'}`}
        aria-hidden="true"
      />
    </button>
  )
}
