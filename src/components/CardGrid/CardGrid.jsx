import Card from '../card/Card';

import './cardgrid.css';

// import poster1 from '../../assets/images/suzume.jpg';
// import poster2 from '../../assets/images/friren.jpg';
// import poster3 from '../../assets/images/weathering.jpg';
// import poster4 from '../../assets/images/your_name.jpg';

import { movies } from '../../assets/assets';


function CardGrid(){

    return (
        <div className='card-grid'>
        {movies.map((movie, index) =>(
            <Card key={index} title={movie.title} movie={movie.Image} />
        ) )}
        {/* <Card movie={poster1} title={'suzume'} />
        <Card movie={poster2} title={'friren'}/>
        <Card movie={poster3} title={'weathering with you'}/>
        <Card movie={poster4} title={'your name'} /> */}
        </div>
    )
};

export default CardGrid;


