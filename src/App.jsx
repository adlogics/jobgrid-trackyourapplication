import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  const[activeCard, setActiveCard] = useState(null)

  
  return (
    <>
    <Navbar />
    <div className="container mx-auto pt-8 px-4">
    <HeroSection setActiveCard = {setActiveCard}/>
    </div>



    </>
  )
}

export default App