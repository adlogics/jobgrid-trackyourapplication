import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto pt-8 px-4">
      <HeroSection/>
    </div>



    </>
  )
}

export default App