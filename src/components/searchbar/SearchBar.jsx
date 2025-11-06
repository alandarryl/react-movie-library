
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchbar.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faSearchDollar, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SearchBar(){

    const [query, setQuery] = useState("");

    return(

        <div className="search-bar" >
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search movie ..." />
            <button> <FontAwesomeIcon icon={faSearchPlus} /> </button>
        </div>

    )


}


export default SearchBar;
