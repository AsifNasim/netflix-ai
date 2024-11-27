import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

   const { gptMovieNames, gptMovieResults } = useSelector(store => store.gpt);

   if(!gptMovieNames) return null;


  return (
    // <div className='p-4 m-4 bg-black text-white rounded-md'>{gptMovieNames.join(', ')}</div>
    <div className='p-4 m-4 bg-black text-white rounded-md bg-opacity-80'>
      <div>
        {gptMovieNames.map( (movie, index) =>  <MovieList key={movie} title={movie} movieData={gptMovieResults[index]} />)}
        
      </div>
    </div>

  )
}

export default GptMovieSuggestion