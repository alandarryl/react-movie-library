
import React from 'react';

import CardGrid from '../components/CardGrid/CardGrid';
import SearchBar from '../components/searchbar/SearchBar';
import FilterSetting from '../components/filter/FilterSetting';

function AllMovies(){


    return(
        <>
            <SearchBar/>
            <FilterSetting/>
            <CardGrid startList={0} endList={19} />
        </>
    )

}


// avant le coller

export default AllMovies;


