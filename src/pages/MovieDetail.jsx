import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./detail.css";

function MovieDetails() {
  const { id } = useParams(); // ID récupéré depuis l'URL
  const [movie, setMovie] = useState(null); // état pour stocker les données
  const [loading, setLoading] = useState(true); // état pour afficher un loader

  useEffect(() => {
    async function fetchMovie() {
      try {
        const apiKey = "5f394899920a1e49322ba143100fd64f"; // <--- MET TON API KEY
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setMovie(data); // sauvegarde des données
      } catch (error) {
        console.log("Erreur API:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]); // relance fetch si l'id change

  if (loading) {
    return <h2 style={{textAlign:"center"}}>Chargement...</h2>;
  }

  if (!movie) {
    return <h2 style={{textAlign:"center"}}>Film introuvable 😢</h2>;
  }

  return (
    <div className="detail-container" style={{padding:"20px"}}>
      <img 
        // src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie.title} 
      />
      <div className="info" >
        <h2>{movie.title}</h2>
        <h3>Original name : {movie.original_title} </h3>
        <p>{movie.overview}</p>
        <p><strong>Date de sortie :</strong> {movie.release_date}</p>
        <p><strong>Note :</strong> ⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
