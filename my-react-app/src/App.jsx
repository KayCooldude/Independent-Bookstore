import { useState } from 'react'
import About from './components/About'
import Books from './components/Books'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  // Quantities live here so the header cart badge and the book cards stay in sync
  const [quantities, setQuantities] = useState({})

  const handleQuantityChange = (id, next) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, next) }))

  const cartCount = Object.values(quantities).reduce((sum, n) => sum + n, 0)

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Books quantities={quantities} onQuantityChange={handleQuantityChange} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
