import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import { searchMovies, filterMoviesByType } from './services/api';
import './styles.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = (query, type) => {
    const searchFunction = type ? filterMoviesByType : searchMovies;
    searchFunction(query, type)
      .then((response) => setMovies(response.data.Search))
      .catch((error) => console.log(error));
  };

  const handleAddToFavorites = (movie) => {
    if (!favoriteMovies.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavoriteMovies((prev) => [...prev, movie]);
    }
  };

  const handleRemoveFromFavorites = (id) => {
    setFavoriteMovies(favoriteMovies.filter((movie) => movie.imdbID !== id));
  };

  const handleFilterChange = (type) => {
    setSelectedType(type);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
                <MovieList movies={movies} onAddToFavorites={handleAddToFavorites} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route
            path="/favorites"
            element={
              <Favorites 
                favoriteMovies={favoriteMovies} 
                onRemoveFromFavorites={handleRemoveFromFavorites} 
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
