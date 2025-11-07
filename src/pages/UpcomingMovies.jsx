import React, { useState, useEffect } from "react";
import MovieCards from "../components/allMoviesCard/MoviesCards";
import Pagination from "../components/pagination/pagination";

function UpcomingMovies() {

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const api_key = "5f394899920a1e49322ba143100fd64f";

    useEffect(() => {
        async function fetchUpcoming() {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`
        );
        const data = await res.json();
        setMovies(data.results);
        }

        fetchUpcoming();
    }, [currentPage]);

    return (
        <>
        <h1 className="page-title">Upcoming Movies</h1>
        <MovieCards movieList={movies} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
    }

export default UpcomingMovies;
