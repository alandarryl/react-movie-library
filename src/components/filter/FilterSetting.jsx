


import "./filtersetting.css";

function FilterSetting(){


    return(
        <div className="filter-setting" >
            <h2>Filter Setting</h2>
            <div className="filter-selector" >
                <div className="genre" >
                    <label>Filter by Genre:</label>
                    <select>
                        <option>All</option>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                    </select>
                </div>
                <div className="rating" >
                    <label>Filter by Rating:</label>
                    <select>
                        <option>All</option>
                        <option>G</option>
                        <option>PG</option>
                        <option>PG-13</option>
                        <option>R</option>
                    </select>
                </div>
                <div className="year" >
                    <label>Filter by Year:</label>
                    <select>
                        <option>All</option>
                        <option>2020s</option>
                        <option>2010s</option>
                        <option>2000s</option>
                        <option>1990s</option>
                    </select>
                </div>
                <div className="apply-button" >
                    <button>Apply Filters</button>
                </div>
            </div>

        </div>
    )
}

export default FilterSetting;

