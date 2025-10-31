import React from 'react';
import {  useEffect,useState } from 'react';
import './midsection.css';

function Midsection() {

    const [movies, setMovies] = useState({});

    const fetchMovies = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f394899920a1e49322ba143100fd64f", {
            headers: {
                accept: "application/json",
            },
        })
        .then((res)=> res.json())
        .then((json) =>{
            console.log("Movies fetched for Midsection:", json);
            const chooseMovie = json.results.find((m) => m.title.toLowerCase() === "chainsaw man");
            setMovies(chooseMovie || json.results[12]);
        })
    }

    useEffect(()=>{
        fetchMovies();
    });


    let shortOverview = movies?.overview ? movies.overview.slice(0, 150) + '...' : '';



    return (
    <section className="midsection"
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path})`,
        }}
    >
    <div className='content' >
        <h3 className="section-title">{movies.title}</h3>
        <p>{shortOverview}</p>
    </div>
    </section>
    );
}


export default Midsection;