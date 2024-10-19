import React from 'react'
const VideoTitle = ({ original_title, overview, backdrop_path }) => {

    console.log("original title, overview -->", original_title, overview);

  return (
    <div className='pt-36 px-12'>
            <h1 className='font-extrabold text-6xl text-white'>{original_title}</h1>
            <h3 className='py-6 text-xl w-1/3 text-white'>{overview}</h3>
            
            <div>
                <button className='bg-gray-400 mx-1 px-8 py-2 text-lg rounded-sm text-white'> ▶️ Play</button>
                <button className='bg-gray-300 mx-1 px-8 py-2 text-lg rounded-sm text-white'>ℹ info</button>
            </div>
            
      
    </div>
  )
}

export default VideoTitle
