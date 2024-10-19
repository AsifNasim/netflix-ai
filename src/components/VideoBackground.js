/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { API_OPTIONS, getMovieVideosTrailer } from "../utils/constants";

const VideoBackground = ({ id, original_title }) => {
    console.log("Movie Id -->", id)
    const [videoKey, setVideoKey] = useState(0);

    const getVideoTrailer = async () => {
        const data = await fetch(
        getMovieVideosTrailer + id + "/videos?language=en-US",
        API_OPTIONS
    );
    const result = await data.json();
    const videoData = result?.results;
    const filterData = videoData.filter((video) => video.type === "Trailer");
    const trailerData = filterData.length ? filterData[0] : videoData[0];
    console.log("Trailer Data -->", trailerData)
    if(trailerData){
        const { key } = trailerData;
        console.log("video key -->", key)
        console.log("original Title", original_title)
        setVideoKey(key)
    }
    console.log("Trailer Data --> ", trailerData);
    
    
  };

  useEffect(() => {
    getVideoTrailer();
  }, [id]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -999 }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
