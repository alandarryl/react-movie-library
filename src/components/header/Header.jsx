import './header.css';

import { useEffect, useState } from 'react';

function Header() {

    const [movie, setMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const getMovie = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f394899920a1e49322ba143100fd64f", {
            Headers: {
                accept: "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) =>{
            console.log("movie fetched:", json);
            setMovie(json.results);
            const yourNameMovie = json.results.find((m) => m.title.toLowerCase() === "your name.");
            setSelectedMovie(yourNameMovie || json.results[18]);
            console.log(json.results.length);
        })
        .catch((err) => console.error("error fetching movie:", err));
    };

    useEffect(()=>{
        getMovie();
    }, []);

    movie.forEach((m) => console.log(m.title));

    console.log(movie.length);

    // const yourNameMovie = movie.find((m) => m.title.toLowerCase() === "your name.") || {};

    let shortOverview = selectedMovie?.overview ? selectedMovie.overview.slice(0, 150) + '...' : '';

    
    return(
        <header  className="header" 
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path})`,
        }}
        >
            <div className='content'>
                <h2>{selectedMovie?.title} </h2>
                <p>{shortOverview}</p>
                <button className="btn" >See More</button>
            </div>
        </header>
    )
}


export default Header;
