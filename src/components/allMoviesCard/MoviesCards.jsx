import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './moviesCards.css';

function MoviesCards({ movieList}) {
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



