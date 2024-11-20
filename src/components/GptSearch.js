import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div>
         <img className="bg-cover absolute bg-center h-screen w-screen -z-10" src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch