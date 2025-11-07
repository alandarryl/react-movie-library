import React, { useState, useEffect } from 'react';
import MovieCards from '../components/allMoviesCard/MoviesCards';
import SearchBar from '../components/searchbar/SearchBar';
import FilterSetting from '../components/filter/FilterSetting';
import Pagination from '../components/pagination/pagination';

function AllMovies() {
    const api_key = "5f394899920a1e49322ba143100fd64f";

    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

  // Search & Filter states
    const [query, setQuery] = useState(""); 
    const [genre, setGenre] = useState("all");
    const [year, setYear] = useState("all");
    const [rating, setRating] = useState("all");

    async function fetchMovies() {
    let url = "";

    // If searching
    if (query.trim() !== "") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${currentPage}`;
    }
    // Else if filtering
    else if (genre !== "all" || year !== "all" || rating !== "all") {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${currentPage}`;

    if (genre !== "all") url += `&with_genres=${genre}`;
    if (year !== "all") url += `&primary_release_year=${year}`;
    if (rating !== "all") url += `&vote_average.gte=${rating}`;
    } 
    else {
      // Default popular list
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${currentPage}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setMovieList(data.results || []);
    }

    useEffect(() => {
        fetchMovies();
    }, [currentPage, query, genre, year, rating]);

    return (
    <>
        <SearchBar query={query} setQuery={setQuery} />
        <FilterSetting setGenre={setGenre} setYear={setYear} setRating={setRating} />
        <MovieCards movieList={movieList} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
    );
}

export default AllMovies;
