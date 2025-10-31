import './overlay.css';
import { useState } from 'react';

import React from 'react'
import { Link } from 'react-router-dom';

function Overlay({isOpen, onClose}) {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    if(!isOpen)return null;

    const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
        setResults([]);
        return;
    }

    try {
        const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5f394899920a1e49322ba143100fd64f&query=${encodeURIComponent(value)}`,
        {
            headers: {
            accept: "application/json",
            },
        }
        );

        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        console.log("Search results:", data); 
        setResults(data.results?.slice(0, 10) || []);
    } catch (error) {
        console.error("Error searching movie:", error);
    }
    };

    return (
        <div className='overlay' >
            <div className='overlay-content' >
                <button className='close-btn' onClick={onClose} >X</button>
                <input 
                    type='text'
                    placeholder='Search for a movie'
                    value={query}
                    onChange={handleSearch}
                    autoFocus
                />
                <div className='results' >
                    {results.length > 0 ? (
                        results.map((movie) => (
                            <Link to={`/movie/${movie.id}`} onClick={onClose} >
                                <div key={results.id} className='result-card' >
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <p>{movie.title}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        query && <p>No results found</p>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Overlay








