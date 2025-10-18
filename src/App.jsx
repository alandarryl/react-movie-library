import { useState } from 'react'
import './App.css'

import CardGrid  from './components/CardGrid/CardGrid';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <CardGrid/>
    <Footer/>
    </>
  )
}

export default App
