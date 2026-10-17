import About from './About'
import Books from './Books'
import Contact from './Contact'
import Hero from './Hero'

// Everything between the header and footer.
export default function MainContent(props) {
  return (
    <main>
      <Hero />
      <Books {...props} />
      <About />
      <Contact />
    </main>
  )
}
