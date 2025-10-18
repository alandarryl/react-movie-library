import { useState } from 'react'
import './App.css'

import CardGrid  from './components/CardGrid/CardGrid';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

import Movie from './components/Movies/Movie';

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

// movie api key : 5f394899920a1e49322ba143100fd64f
