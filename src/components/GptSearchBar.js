import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/anthropicAi";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { showGptResults } from "../utils/gptSlice";
import { API_OPTIONS, getMovieByName } from "../utils/constants";
// import useGptSearchedMovie from '../hooks/useGptSearchedMovie';

const GptSearchBar = () => {
  let movieData;
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(getMovieByName + movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

  

    return json.results;

  }

  const extractArray = (text) => {
    const match = text.match(/\[.*?\]/);
    if (match) {
      return JSON.parse(match[0].replace(/'/g, '"'));
    }
    return null; // No array found
  };

  const handleGptSearch = async () => {
    console.log("Input search value -->", searchText.current.value);
    const gptQuery =
      "I want you to act as Movie Recommendation system and provide the list of only 10 Movie based on the query ahead" +
      searchText.current.value +
      "in this format. for example[ don, main hoon na, koi mil gya, maharaja, kantara] and give me outputs of only names and nothing else in array";
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the query :" +
    //   searchText.current.value +
    //   "only give me names of 5 movies, comma separated like example result given ahead. Example Result: Sholay, Don, Golmaal, Aankhey, Main Hoon Naa";
    const message = await client.messages.create({
      max_tokens: 1024,
      messages: [{ role: "user", content: gptQuery }],
      model: "claude-2.0",
    });

    movieData = message.content[0].text;

    if (movieData.length > 0) {
      const moviesArray = extractArray(movieData);

      const tmdbResultsPromise = moviesArray.map( movie => searchMovieTMDB(movie));



      const tmdbResults = await Promise.all(tmdbResultsPromise);
      dispatch(showGptResults({movieNames: moviesArray, movieResults: tmdbResults}));
    }


  };

  const langkey = useSelector((store) => store?.config?.lang);
  const placeholder =
    lang[langkey]?.gptSearchBarPlaceholder ||
    lang?.english?.gptSearchBarPlaceholder;
  const buttonText = lang[langkey]?.search || lang?.english?.search;

  // const movieDataFromReduxStore = useSelector( store => store.gpt.showGptResults);
  // useGptSearchedMovie(movieDataFromReduxStore[0]);
  return (
    <div>
      <form
        className="flex pt-10 justify-center items-center shadow-lg z-50 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-16 w-1/3 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          type="text"
          placeholder={placeholder}
        />
        <button
          className="py-4 px-8 border-4 border-black bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
          onClick={handleGptSearch}
        >
          {buttonText}
        </button>
      </form>

      <div>
        <GptMovieSuggestion movieData={movieData} />
      </div>
    </div>
  );
};

export default GptSearchBar;
