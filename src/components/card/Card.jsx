import poster from '../../assets/images/suzume.jpg';
import './Card.css';

function Card({movie, title, link}){

    return (
        <div className="card" >
            <a href={link} >
                <img src={movie} alt='movie poster' className="card-image" />
                <h2 className='title'>{title} </h2>
            </a>
        </div>
    )
};


export default Card;





