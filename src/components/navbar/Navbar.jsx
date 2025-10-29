
import './Navbar.css' ;

import { useState } from 'react';
import Overlay from "../../components/overlay/Overlay";



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
            <h1 className="logo" >Movie Library</h1>
            <form className="search-form" >
                <button onFocus={()=> setIsSearchOpen(true)} >search</button>
                {/* <input onClick={()=> setIsSearchOpen(true)} placeholder="Search movie ..." /> */}
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
            <a className="menu-switch" onClick={openMenu} >Menu</a>
        </nav>
    )
};


export default Navbar;

