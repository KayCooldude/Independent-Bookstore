import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  // State lives here so the header cart badge and the book cards stay in sync
  const [quantities, setQuantities] = useState({})
  const [favourites, setFavourites] = useState({})

  const handleQuantityChange = (id, next) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, next) }))

  const handleFavouriteChange = (id, next) =>
    setFavourites((prev) => ({ ...prev, [id]: next }))

  const cartCount = Object.values(quantities).reduce((sum, n) => sum + n, 0)

  return (
    <>
      <Header cartCount={cartCount} />
      <MainContent
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
        favourites={favourites}
        onFavouriteChange={handleFavouriteChange}
      />
      <Footer />
    </>
  )
}

export default App
