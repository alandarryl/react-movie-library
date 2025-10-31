
import './Navbar.css' ;

import { useState } from 'react';
import Overlay from "../../components/overlay/Overlay";

import { Link } from 'react-router-dom';



function Navbar(){

    const[isSearchOpen, setIsSearchOpen] = useState(false);

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () =>{
        // alert("clicked");
        let menuSwitch = document.querySelector('.menu-switch');
        let menu = document.querySelector('.nav-link');
        if(!isMenuOpen){
            menu.classList.add('active');
            menuSwitch.textContent = "close";
            setIsMenuOpen(true);
        } else{
            menu.classList.remove('active');
            menuSwitch.textContent = "open";
            setIsMenuOpen(false);
        }
    }

    return (
        <nav className="navbar" >
            <h1 className="logo" > <Link to="/" >MovieLib</Link> </h1>
            <form className="search-form" >
                <button onFocus={()=> setIsSearchOpen(true)} >search</button>
                {/* <input onClick={()=> setIsSearchOpen(true)} placeholder="Search movie ..." /> */}
            </form>
            <Overlay
            isOpen={isSearchOpen}
            onClose={()=>setIsSearchOpen(false)}
            />
            <ul className="nav-link" >
                <li><Link to="/AllMovies" >All movie</Link></li>
                <li><Link>About</Link></li>
                <li><Link>contact</Link></li>
            </ul>
            <a className="menu-switch" onClick={openMenu} >Menu</a>
        </nav>
    )
};


export default Navbar;

