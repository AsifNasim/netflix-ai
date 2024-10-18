/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, getMoviePlayNowURL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
      getMoviePlayNowList();
    }, [])
  
    const getMoviePlayNowList = async () =>{
        const data = await fetch(getMoviePlayNowURL,  API_OPTIONS);
        const result = await data.json();
        console.log("Now Movie response -->", result?.results);
        dispatch(addNowPlayingMovies(result?.results));
  
  
    }
}

export default useNowPlayingMovies;