import useInView from '../hooks/useInView'

// Fades + slides its children up when they scroll into view.
// Only vertical movement is used so it can never cause horizontal scroll.
export default function Reveal({ delay = 0, className = '', children }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${className}`}
    >
      {children}
    </div>
  )
}
