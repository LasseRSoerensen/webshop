import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Header from './components/Header.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-[#d4a373] flex flex-col">
      <Header />
      <Landing />
      <FeaturedProducts />

    </div>
  )
}

export default App
