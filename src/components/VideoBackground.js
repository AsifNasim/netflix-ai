/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import useNowPlayingTrailer from "../hooks/useNowPlayingTrailer";

const VideoBackground = ({ id, original_title }) => {
    const videoKey = useNowPlayingTrailer(id);
    console.log("Video Key-->", videoKey);
        

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
