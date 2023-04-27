import './movie.css';
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  
  const API_KEY = '1a2efd512f17a07d970dd0a6d958f376';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  const BASE_URL = 'https://api.themoviedb.org/3';
  
  useEffect(() => {
    const fetchMovie = async () => {
      const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    };
    const fetchCast = async () => {
      const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setCast(data.cast);
    };
    const fetchSimilarMovies = async () => {
      const url = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setSimilarMovies(data.results);
    };
    fetchMovie();
    fetchCast();
    fetchSimilarMovies();
  }, [id]);

  return (
    <div className='movie-detail'>
      <Link to='/' > 
      <button> <span> Return </span> </button>   
      </Link>
      <div className='movie-poster'>
        <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <ul className='movie-rating'>
        <li className='title' >{movie.title}</li>
          <li className='votes'>{movie.vote_count} votes</li>
        <li className='resume'>{movie.overview}</li>
        </ul>
      </div>
      <div className='movie-info'>
      <h2 className='act'>Actors</h2>
        <div className='actors'>
          {cast.slice(0, 5).map((actor) => (
            <div className='movie-cast__actor' key={actor.id}>
              <img src={IMG_PATH + actor.profile_path} alt={actor.name} />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          ))}
          </div>
          <h3 className='similar'>Similar Movies</h3>
          <div className='similar-movies'>
          {similarMovies.slice(0, 5).map((movie) => (
            <div className='similar-movies__movie' key={movie.id}>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
              <h4>{movie.title}</h4>
              </Link>
              </div>
          ))}
          </div>
        </div>
    </div>
  );
};

export default MovieDetails;







