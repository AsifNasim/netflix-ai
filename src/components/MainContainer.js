/* eslint-disable no-unused-vars */
import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies)

    if(!movies || movies.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * Math.min(movies.length, 20));

    const movieData = movies[randomIndex];
    const { original_title, overview, backdrop_path } = movieData;
    console.log("Movie Data ->>", movieData);



  return (
    <div>
        <VideoBackground />
        <VideoTitle original_title = {original_title} overview={overview} backdrop_path={backdrop_path}/>
    </div>
  )
}

export default MainContainer