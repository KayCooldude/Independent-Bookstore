// Controlled component: the parent owns `value` and decides what happens in
// `onChange`. Reused once per book card.
export default function QuantityStepper({ value, onChange, min = 0, max = 10, label }) {
  const btn =
    'grid h-9 w-9 place-items-center rounded-full border border-ink/20 text-lg leading-none transition hover:bg-primary hover:border-primary active:scale-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-ink/20 disabled:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark'

  return (
    <div className="inline-flex items-center gap-3" role="group" aria-label={`Quantity for ${label}`}>
      <button
        type="button"
        className={btn}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Remove one ${label}`}
      >
        &minus;
      </button>
      <span className="w-6 text-center font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={btn}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Add one ${label}`}
      >
        +
      </button>
    </div>
  )
}
