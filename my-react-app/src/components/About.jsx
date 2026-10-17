import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 text-center sm:px-8 sm:py-20">
      <SectionTitle>About Us</SectionTitle>

      <Reveal>
        <div className="group mx-auto mb-8 max-w-3xl overflow-hidden rounded-xl shadow-lg">
          <img
            src={`${import.meta.env.BASE_URL}images/group-reading.webp`}
            alt="A group of people reading together"
            loading="lazy"
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 lg:h-96"
          />
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
          Our independent bookstore has been serving the community for over 20 years. We pride
          ourselves on our curated selection of books and our knowledgeable staff who are
          passionate about helping you find your next great read.
        </p>
      </Reveal>
    </section>
  )
}
