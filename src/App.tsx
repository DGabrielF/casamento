import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CardSpace } from './components/CardSpace'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div className='w-full h-full bg-zinc-900 flex flex-col'>
        {/* Hero */}
        <Hero />
        {/* Navbar  */}
        <Navbar />
        {/* Card Space  */}
        <CardSpace />
        </div>
    </div>
  )
}

export default App
