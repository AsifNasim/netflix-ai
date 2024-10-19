import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies =  action.payload;
        }
        // ,
        // addVideoTrailer : (state, action ) => {
        //     state.trailerVideo = action.payload;
        // }
    }
})


export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;