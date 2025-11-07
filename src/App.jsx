import { useState } from 'react'
import './App.css'

import CardGrid  from './components/CardGrid/CardGrid';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Midsection from './components/MidSection/Midsection';

import Home  from './pages/Home';
import AllMovies from './pages/AllMovies';
import MovieDetail from './pages/MovieDetail';
import UpcomingMovies from './pages/UpcomingMovies';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Movie from './components/Movies/Movie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllMovies' element={<AllMovies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/upcoming-movies' element={<UpcomingMovies />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

// function App() {
//   return (
//     <div style={{padding:20}}>
//       <AllMovies />
//     </div>
//   );
// }

export default App

// movie api key : 5f394899920a1e49322ba143100fd64f
