import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isTweetOpen: false,
    isSignupOpen: false,
    isSigninOpen: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        openTweet: (state) => {
            state.isTweetOpen = true
        },
        closeTweet: (state) => {
            state.isTweetOpen = false
        },
        openSignup: (state) => {
            state.isSignupOpen = true
        },
        closeSignup: (state) => {
            state.isSignupOpen = false
        },
        openSignin: (state) => {
            state.isSigninOpen = true
        },
        closeSignin: (state) => {
            state.isSigninOpen = false
        }
    }
});

export const { openModal, closeModal, closeTweet, openTweet, openSignup, closeSignup, openSignin, closeSignin } = modalSlice.actions;

export default modalSlice.reducer;