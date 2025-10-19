
import './Navbar.css' ;

import { useState } from 'react';
import Overlay from "../../components/overlay/Overlay";



function Navbar(){

    const[isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="navbar" >
            <h1 className="logo" >Movie Library</h1>
            <form className="search-form" >
                <input onClick={()=> setIsSearchOpen(true)} placeholder="Search movie ..." />
            </form>
            <Overlay
            isOpen={isSearchOpen}
            onClose={()=>setIsSearchOpen(false)}
            />
            <ul className="nav-link" >
                <li><a>All movie</a></li>
                <li><a>About</a></li>
                <li><a>contact</a></li>
            </ul>
            <a className="menu-switch" >open</a>
        </nav>
    )
};


export default Navbar;

