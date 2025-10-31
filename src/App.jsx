import { useState } from 'react'
import './App.css'

import CardGrid  from './components/CardGrid/CardGrid';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Midsection from './components/MidSection/Midsection';


import Movie from './components/Movies/Movie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <CardGrid startList={0} endList={10} />
    <Midsection/>
    <CardGrid startList={11} endList={19} />
    <Footer/>
    </>
  )
}

export default App

// movie api key : 5f394899920a1e49322ba143100fd64f
