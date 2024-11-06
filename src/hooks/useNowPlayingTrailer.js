/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { API_OPTIONS, getMovieVideosTrailer } from '../utils/constants';

const useNowPlayingTrailer = (id) => {
    
    const [videoKey, setVideoKey] = useState(0);

    const getVideoTrailer = async () => {
        try {
            const data = await fetch(
                getMovieVideosTrailer + id + "/videos?language=en-US",
                API_OPTIONS
            );
            const result = await data.json();
            const videoData = result?.results;
            const filterData = videoData.filter((video) => video.type === "Trailer");
            const trailerData = filterData.length ? filterData[0] : videoData[0];
            
            if (trailerData) {
                const { key } = trailerData;
               
                setVideoKey(key)
            }
            
        } catch (error) {
            console.error("Error fetching trailer data:", error);
        }
    };

    useEffect(() => {
        getVideoTrailer();
    }, [id]);
    return videoKey;
}

export default useNowPlayingTrailer
