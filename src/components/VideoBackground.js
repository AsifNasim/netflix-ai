import React from 'react'
import { getMovieImageHostURL } from '../utils/constants';

const VideoBackground = () => {
    // console.log(movieData?.movieData)

    // if(!original_title) return;

    // console.log("Original Title -->", original_title?.original_title);
    // console.log("Original Overview -->", overview)

    // const { backdrop_path } = movieData?.movieData;
    // console.log("backdrop path", backdrop_path)
    
  return (
    <div>
        <img src= {getMovieImageHostURL  } alt='movie'  />
    </div>
  )
}

export default VideoBackground