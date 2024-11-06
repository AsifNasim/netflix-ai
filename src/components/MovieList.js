import React from 'react'
import { getMovieImageHostURL } from '../utils/constants';

const MovieList = ({title, movieData}) => {

    

    if(!movieData) return;
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold py-3 text-white'>{title}</h1>

            <div className='flex overflow-x-scroll'>
                {movieData.map( movie => <img className='px-2' key={movie?.id} src= {getMovieImageHostURL + movie?.poster_path} alt='movie data'/>)} 
            </div>
        </div>
        {/* <img src= {getMovieImageHostURL + movieData[0]?.poster_path} alt='movie image'/> */}
    </div>
  )
}

export default MovieList