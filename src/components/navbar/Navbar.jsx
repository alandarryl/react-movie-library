




function Navbar(){

    return (
        <div className="navbar" >
            <h1 className="logo" >Movie Library</h1>
            <form className="search-form" >
                <input placeholder="Search movie ..." />
                <button>Search</button>
            </form>
            <ul className="nav-link" >
                <li><a>All movie</a></li>
                <li><a>About</a></li>
                <li><a>contact</a></li>
            </ul>
            <a className="menu-switch" >open</a>
        </div>
    )
};


export default Navbar;

