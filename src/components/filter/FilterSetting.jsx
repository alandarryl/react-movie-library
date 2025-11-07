


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
                        <option value={"all"} >All</option>
                        {/* Exemples d'IDs TMDB (Action = 28, Comedy = 35, Drama = 18) */}
                        <option value={28} >Action</option>
                        <option value={35} >Comedy</option>
                        <option value={18} >Drama</option>
                        <option value={27} >Horror</option>
                        <option value={10749} >Romance</option>
                        <option value={878} >Science Fiction</option>
                        <option value={14} >Fantasy</option>
                        <option value={16} >Animation</option>
                    </select>
                </div>
                <div className="rating" >
                    <label>Filter by Rating:</label>
                    <select  onChange={(e)=>setRating(e.target.value)} >
                        <option>All</option>
                        <option value={2} >2</option>
                        <option value={4} >4</option>
                        <option value={6} >6</option>
                        <option value={8} >8</option>
                        <option value={10} >10</option>
                    </select>
                </div>
                <div className="year" >
                    <label>Filter by Year:</label>
                    <select  onChange={(e)=>setYear(e.target.value)} >
                        <option>All</option>
                        <option>2025s</option>
                        <option>2020s</option>
                        <option>2015s</option>
                        <option>2010s</option>
                        <option>2005s</option>
                        <option>2000s</option>
                        <option>1990s</option>
                    </select>
                </div>
                {/* <div className="apply-button" >
                    <button >Apply Filters</button>
                </div> */}
            </div>

        </div>
    )
}

export default FilterSetting;

