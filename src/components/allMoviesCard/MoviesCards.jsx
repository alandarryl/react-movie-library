import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './moviesCards.css';

function MoviesCards({ page }) {

    const [movieList, setMovieList] = useState([]);

    const api_key = "5f394899920a1e49322ba143100fd64f";

    useEffect(() => {
        async function fetchMovies() {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
        );
        const data = await res.json();
        setMovieList(data.results);
        }

        fetchMovies();
    }, [page]);

    return (
        <div className="card-grid">
        {movieList.map((movie) => (
            <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            movie={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
        ))}
        </div>
    );
    }

export default MoviesCards;



