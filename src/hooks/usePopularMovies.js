/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, getPopularMovieURL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        getPopularMovieList();
    }, [])
  
    const getPopularMovieList = async () =>{
        const data = await fetch(getPopularMovieURL,  API_OPTIONS);
        const result = await data.json();
        
        dispatch(addPopularMovies(result?.results));
  
  
    }
}

export default usePopularMovies;