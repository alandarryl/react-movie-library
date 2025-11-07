


import "./filtersetting.css";
import { useState } from "react";

function FilterSetting({setGenre, setRating, setYear}){


    // const [genre, setGenre] = useState("All");
    // const [rating, setRating] = useState("All");
    // const [year, setYear] = useState("All");

    return(
        <div className="filter-setting" >
            <h2>Filter Setting</h2>
            <div className="filter-selector" >
                <div className="genre" >
                    <label>Filter by Genre:</label>
                    <select  onChange={(e)=>setGenre(e.target.value)} >
                        <option>All</option>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                    </select>
                </div>
                <div className="rating" >
                    <label>Filter by Rating:</label>
                    <select  onChange={(e)=>setRating(e.target.value)} >
                        <option>All</option>
                        <option>G</option>
                        <option>PG</option>
                        <option>PG-13</option>
                        <option>R</option>
                    </select>
                </div>
                <div className="year" >
                    <label>Filter by Year:</label>
                    <select  onChange={(e)=>setYear(e.target.value)} >
                        <option>All</option>
                        <option>2025s</option>
                        <option>2020s</option>
                        <option>2010s</option>
                        <option>2000s</option>
                    </select>
                </div>
                <div className="apply-button" >
                    <button >Apply Filters</button>
                </div>
            </div>

        </div>
    )
}

export default FilterSetting;

