import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CardSpace } from './components/CardSpace'
import { Hero } from './components/Hero'
import { Navbar, selectedFilter } from './components/Navbar'
import './styles/global.css'
import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfYq4T-9H65QPFCpPE4k-edR8C7oqu3hE",
  authDomain: "weddingdb-4a324.firebaseapp.com",
  projectId: "weddingdb-4a324",
  storageBucket: "weddingdb-4a324.appspot.com",
  messagingSenderId: "605112971285",
  appId: "1:605112971285:web:bd6ab1dc268b3fffbb1e1c"
});

function App() {
  return (
    <div className="App">
      <div className='w-full h-full bg-zinc-900 flex flex-col'>
        {/* Hero */}
        <Hero />
        {/* Navbar  */}
        {/* <Navbar /> */}
        {/* Card Space  */}
        <CardSpace filtertype={selectedFilter}/>
        </div>
    </div>
  )
}

export default App
