/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, getTopRatedMovieURL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        getTopRatedMovies();
    }, [])
  
    const getTopRatedMovies = async () =>{
        const data = await fetch(getTopRatedMovieURL,  API_OPTIONS);
        const result = await data.json();
        console.log("get top rated Movies Reponse -->", result?.results);
        dispatch(addTopRatedMovies(result?.results));
  
  
    }
}

export default useTopRatedMovies;