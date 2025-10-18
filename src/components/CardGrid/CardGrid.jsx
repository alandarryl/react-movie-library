import React, { useEffect, useState } from 'react'

import Card from '../card/Card';

import './cardgrid.css';

import { movies } from '../../assets/assets';


function CardGrid(){

    const [movieList, setMovieList] = useState([])
    
    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f394899920a1e49322ba143100fd64f", {
        headers: {
        accept: "application/json",
        },
        })
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((json) => {
            console.log("Fetched movies:", json);
            setMovieList(json.results);
        })
        .catch((err) => console.error("Fetch error:", err));
    };
    
    
        useEffect(()=>{
            getMovie();
        },[])
        console.log(movieList);
        let tenMovie = movieList.slice(0,50);

    let limitedMovie = movies.slice(0, 10);

    return (
        <div className='card-grid'>
        {tenMovie.map((movie, index) =>(
            <Card key={index} title={movie.title} movie={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        ) )}
        </div>
    )
};

export default CardGrid;


