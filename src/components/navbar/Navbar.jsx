
import './Navbar.css' ;

import { useState } from 'react';
import Overlay from "../../components/overlay/Overlay";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar(){

    const[isSearchOpen, setIsSearchOpen] = useState(false);

    const[isMenuOpen, setIsMenuOpen] = useState(false);

            // alert("clicked");

    const toggleMenu = () =>{
        setIsMenuOpen(prev => !prev);
    }



    return (
        <nav className="navbar" >
            <h1 className="logo" > <Link to="/" >MovieLib</Link> </h1>
            <form className="search-form" >
                <button onFocus={()=> setIsSearchOpen(true)} > <FontAwesomeIcon icon={faSearch} /> </button>
            </form>
            <Overlay
            isOpen={isSearchOpen}
            onClose={()=>setIsSearchOpen(false)}
            />
            <ul className={`nav-link ${isMenuOpen ? "active" : "" } ` } >
                <li><Link to="/AllMovies" >All movie</Link></li>
                <li><Link>About</Link></li>
                <li><Link>contact</Link></li>
            </ul>
            <a className="menu-switch" onClick={ toggleMenu} ><FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} /></a>
        </nav>
    )
};


export default Navbar;

