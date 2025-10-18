import { useState } from 'react'
import './App.css'

import CardGrid  from './components/CardGrid/CardGrid';
import Card from './components/card/Card';

import Navbar from './components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <CardGrid/>
    </>
  )
}

export default App
