import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onAddToFavorites }) {
  if (!movies || movies.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          showAddToFavorites={true} 
          showRemoveFromFavorites={false}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  );
}

export default MovieList;
