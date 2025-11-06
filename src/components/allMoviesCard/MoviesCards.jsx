// import React, { useEffect, useState } from 'react'

// import Card from '../card/Card';

// import './moviesCards.css';

// import { movies } from '../../assets/assets';


// function MoviesCards({startList, endList}){

//     const [movieList, setMovieList] = useState([])
    
//     const getMovie = () => {
//         fetch( `https://api.themoviedb.org/3/movie/changes?page=1` , {
//         headers: {
//         accept: "application/json",
//         },
//         })
//         .then((res) => {
//             if (!res.ok) throw new Error("Network response was not ok");
//             return res.json();
//         })
//         .then((json) => {
//             console.log("Fetched movies:", json);
//             setMovieList(json.results);
//         })
//         .catch((err) => console.error("Fetch error:", err));
//     };
    
    
//         useEffect(()=>{
//             getMovie();
//         },[])
//         console.log(movieList);
//         let tenMovie = movieList.slice(startList, endList);


//     return (
//         <div className='card-grid'>
//         {tenMovie.map((movie, index) =>(
//             <Card key={index} id={movie.id} title={movie.title} movie={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//         ) )}
//         </div>
//     )
// };

// export default MoviesCards;


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



