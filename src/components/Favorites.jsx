import React from 'react';
import MovieCard from './MovieCard';

function Favorites({ favoriteMovies, onRemoveFromFavorites }) {
  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No favorites added yet.</p>;
  }

  return (
    <div className="favorite-movies">
      <h2>Your Favorites</h2>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie} 
            showRemoveFromFavorites={true} 
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
