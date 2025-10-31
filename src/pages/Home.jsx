

// ligne de commande our ajouter une dépendance react-router-dom
// npm install react-router-dom


import React from 'react';
import Midsection from '../components/MidSection/Midsection';
import Header from '../components/header/Header';
import CardGrid from '../components/CardGrid/CardGrid';
import AllMovies from './AllMovies';


function Home() {
    return (
        <>
        <Header />
        <CardGrid startList={1} endList={10} />
        <Midsection />
        <CardGrid startList={11} endList={19} />
        </>
    )
}

export default Home;




