import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieCard = () => {
    const movie = useSelector( store =>  store.movies);

    console.log("Movie Card -->", movie?.nowPlayingMovies)

  return (
    <div>
        <MovieList title={"Now Playing"} movieData={movie?.nowPlayingMovies} />
        <MovieList title={"Popular"} movieData={movie?.popularMovies} />
        <MovieList title={"Top Rated"} movieData={movie?.topRatedMovies} />
        <MovieList title={"Upcoming"} movieData={movie?.upcomingMovies} />
    </div>
  )
}

export default MovieCard