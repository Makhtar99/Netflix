import './firstrow.css'
import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    } else {
      window.location.reload();
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div>
      <span class='form' >
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </span>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={IMG_PATH + movie.poster_path}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={getClassByRate(movie.vote_average)}>
                  {movie.vote_average}
                </span>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                {movie.overview}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


export default MovieList;

