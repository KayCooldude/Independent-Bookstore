export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[85vh] scroll-mt-16 items-center overflow-hidden text-white">
      {/* Slow Ken Burns zoom on the background photo */}
      <img
        src="/images/hero.webp"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full animate-ken-burns object-cover object-[75%_25%] motion-reduce:animate-none"
      />
      {/* Dark gradient so the text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-20">
        <h1
          className="animate-fade-up font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '100ms' }}
        >
          Books worth <span className="text-primary">exploring</span>
        </h1>

        <p
          className="mt-5 max-w-xl animate-fade-up text-base font-semibold text-white/90 sm:text-lg"
          style={{ animationDelay: '300ms' }}
        >
          Discover a world of stories and knowledge at our independent bookstore. From timeless
          classics to contemporary gems, we have something for every reader.
        </p>

        <a
          href="#books"
          className="mt-8 inline-block animate-fade-up rounded-md bg-primary px-7 py-3 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
          style={{ animationDelay: '500ms' }}
        >
          Browse Books
        </a>
      </div>

      <a
        href="#books"
        aria-label="Scroll to books"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float text-3xl text-white/80 motion-reduce:animate-none sm:block"
      >
        <i className="ri-arrow-down-s-line" aria-hidden="true" />
      </a>
    </section>
  )
}
