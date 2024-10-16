import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, showAddToFavorites, onAddToFavorites, showRemoveFromFavorites, onRemoveFromFavorites }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'default-poster.jpg'} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>

      {showAddToFavorites && (
        <button 
          className="add-favorite-button"
          onClick={() => onAddToFavorites(movie)}
        >
          Add to Favorites
        </button>
      )}

      {showRemoveFromFavorites && (
        <button 
          className="remove-favorite-button"
          onClick={() => onRemoveFromFavorites(movie.imdbID)}
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
}

export default MovieCard;
