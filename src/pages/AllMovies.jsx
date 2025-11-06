
// import React from 'react';

// import MovieCards from '../components/allMoviesCard/MoviesCards';
// import SearchBar from '../components/searchbar/SearchBar';
// import FilterSetting from '../components/filter/FilterSetting';
// import Pagination from '../components/pagination/pagination';

// import { useState } from 'react';

// function AllMovies(){

//     const [currentPage, setCurrentPage] = useState(1);

//     return(
//         <>
//             <SearchBar/>
//             <FilterSetting/>
//             <MovieCards startList={0} endList={19}/>
//             <Pagination currentPage={currentPage} />
//         </>
//     )

// }



// export default AllMovies;





import React, { useState } from 'react';

import MovieCards from '../components/allMoviesCard/MoviesCards';
import SearchBar from '../components/searchbar/SearchBar';
import FilterSetting from '../components/filter/FilterSetting';
import Pagination from '../components/pagination/pagination';

function AllMovies(){

    const [currentPage, setCurrentPage] = useState(1);

    return(
        <>
            <SearchBar />
            <FilterSetting />
            <MovieCards page={currentPage} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default AllMovies;






