import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        showGptResults: []
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        showGptResults: (state, action) => {
            state.showGptResults = action.payload;
        } 
    },
});
    

export const { toggleGptSearchView, showGptResults } = gptSlice.actions;
export default gptSlice.reducer;