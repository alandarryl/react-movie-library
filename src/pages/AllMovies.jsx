import React, { useState, useEffect } from 'react';

import MovieCards from '../components/allMoviesCard/MoviesCards';
import SearchBar from '../components/searchbar/SearchBar';
import FilterSetting from '../components/filter/FilterSetting';
import Pagination from '../components/pagination/pagination';


function AllMovies(){

    // movie state Manipulation
    const [movieList, setMovieList] = useState([]);


    // pagination state manipulation
    const [currentPage, setCurrentPage] = useState(1);

    // search state manipulation
    const [query, setQuery] = useState('');
    const [searchMovie, setSearchMovie] = useState('');

    // filter state manipulation
    const [genre, setGenre] = useState(null);
    const [year, setYear] = useState(null);
    const [rating, setRating] = useState(null);

    function handleSearch(){
        // Implement search functionality here
        console.log("Searching for:", query);
        setSearchMovie(query);

    }


        const api_key = "5f394899920a1e49322ba143100fd64f";
    
        useEffect(() => {
            async function fetchMovies() {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`
            );
            const data = await res.json();
            setMovieList(data.results);
            }
    
            fetchMovies();
        }, [currentPage]);

        const filteredMovies = movieList
            // .filter(movie => { return movie.title.toLowerCase().includes(searchMovie.toLowerCase()) })
            // .filter(movie =>
            //     genre ? movie.genre_ids.includes(Number(genre)) : true
            // )
            // .filter(movie =>
            //     year ? movie.release_date?.startsWith(year) : true
            // )
            // .filter(movie =>
            //     rating ? movie.vote_average >= rating : true
            // );

    return(
        <>
            {/* <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
            <FilterSetting setGenre={setGenre} setYear={setYear} setRating={setRating} /> */}
            <MovieCards movieList={filteredMovies} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default AllMovies;
