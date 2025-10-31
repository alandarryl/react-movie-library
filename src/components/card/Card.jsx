import { Link } from 'react-router-dom';
import poster from '../../assets/images/suzume.jpg';
import './Card.css';

function Card({id,movie, title, link}){

    return (
        <div className="card" >
            <Link to={`/movie/${id}`} >
                <img src={movie} alt='movie poster' className="card-image" />
                <h2 className='title'>{title} </h2>
            </Link>
        </div>
    )
};


export default Card;





