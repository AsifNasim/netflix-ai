/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, getUpcomingMovieURL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        getUpcomingMovies();
    }, [])
  
    const getUpcomingMovies = async () =>{
        const data = await fetch(getUpcomingMovieURL,  API_OPTIONS);
        const result = await data.json();
        
        dispatch(addUpcomingMovies(result?.results));
  
  
    }
}

export default useUpcomingMovies;