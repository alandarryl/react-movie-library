
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchbar.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faSearchDollar, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

function SearchBar(){

    

    return(

        <div className="search-bar" >
            <input placeholder="Search movie ..." />
            <button> <FontAwesomeIcon icon={faSearchPlus} /> </button>
        </div>

    )


}


export default SearchBar;
