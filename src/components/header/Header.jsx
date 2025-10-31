import './header.css';

import { useEffect, useState } from 'react';

function Header() {

    const [movie, setMovie] = useState([]);

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
        })
        .catch((err) => console.error("error fetching movie:", err));
    };

    useEffect(()=>{
        getMovie();
    }, []);

    let firstMovie = movie[0] || {};
    let shortOverview = firstMovie.overview ? firstMovie.overview.slice(0, 100) + '...' : '';

    
    return(
        <header  className="header">
            <div className='content' >
                <h2>{firstMovie.title} </h2>
                <p>{shortOverview}</p>
                <button className="btn" >See More</button>
            </div>
        </header>
    )
}


export default Header;
