import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Header from './components/Header.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-[#e1dfdc] flex flex-col">
  {/*<Header />*/}
      <div className="lg:max-w-[100%] flex flex-col self-center shadow-lg">
        <Landing />
        <FeaturedProducts />

      </div>

    </div>
  )
}

export default App
