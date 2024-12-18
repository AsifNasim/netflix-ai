import React from 'react'
const VideoTitle = ({ original_title, overview, backdrop_path }) => {

   

  return (
    <div className='pt-36 px-12 bg-gradient-to-br from-black to-transparent h-[94vh]'>
            <h1 className='font-extrabold text-6xl text-white '>{original_title}</h1>
            <h3 className='py-6 text-xl w-1/3 text-white'>{overview}</h3>
            
            <div>
                <button className='bg-white mx-1 px-8 py-2 text-lg rounded-sm text-black hover:opacity-80'> ▶️ Play</button>
                <button className='bg-gray-700 mx-1 px-8 py-2 text-lg rounded-sm text-white hover:opacity-70'>ℹ info</button>
            </div>
            
      
    </div>
  )
}

export default VideoTitle
