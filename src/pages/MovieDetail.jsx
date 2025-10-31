
import React from 'react';
import { useParams } from 'react-router-dom';

import "./detail.css";

function MovieDetail(){

    const {id} = useParams();

    return(
        <>
            <h2>Tu a recuperer l'id : {id}</h2>
        </>
    )

}


export default MovieDetail;


