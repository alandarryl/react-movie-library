import './footer.css'



function Footer(){

    return (
        <footer className="page-footer">
            <div className='footer-link' >
                <ul className="movie-genre" >
                    <li>Action</li>
                    <li>Comedy</li>
                    <li>Horror</li>
                    <li>Animation</li>
                    <li>Fantasy</li>
                </ul>

                <ul className="my-info" >
                    <li>jonathan.okana.dev@gmail.com</li>
                    <li>Tel: +33 59 21 46 66</li>
                </ul>
            </div>

            <p className='owner' >All right are own by <a>Jonathan OKANA</a></p>
        </footer>
    )
};


export default Footer;


