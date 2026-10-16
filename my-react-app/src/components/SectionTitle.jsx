import useInView from '../hooks/useInView'

// Section heading whose gold underline draws itself in on scroll.
export default function SectionTitle({ children }) {
  const [ref, inView] = useInView()

  return (
    <h2
      ref={ref}
      className={`mb-10 font-serif text-3xl font-bold transition-all duration-700 motion-reduce:transition-none sm:text-4xl ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {children}
      <span
        className={`mx-auto mt-3 block h-[3px] w-16 origin-center rounded bg-primary transition-transform delay-300 duration-700 motion-reduce:transition-none ${
          inView ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </h2>
  )
}
