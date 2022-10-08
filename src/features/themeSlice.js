import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers : {
        light: (state) => {
            state.darkMode = false
        },
        dark: (state) => {
            state.darkMode = true
        },
    }
});

export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;